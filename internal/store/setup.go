package store

import (
	"database/sql"
	"fmt"
	"strconv"
	"time"

	"log/slog"

	"github.com/golang-migrate/migrate/v4"
	"github.com/syntaxLabz/configManager/pkg/configManager"
	"github.com/syntaxLabz/errors/pkg/codes"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type dbConfig struct {
	host                  string
	password              string
	user                  string
	port                  string
	dialect               string
	dbName                string
	sslMode               string
	maxOpenConns          int
	maxIdleConns          int
	connMaxLifeTime       int
	idleConnectionTimeout int
	monitoringEnable      bool
}

func intializeDBConfigs(c *configManager.Config, prefix string) dbConfig {
	var (
		maxConnections, maxIdleConnections, connectionMaxLifeTime, idleConnectionTimeout int
		monitoring                                                                       bool
		err                                                                              error
	)

	maxIdleConnections, err = strconv.Atoi(c.GetConfig(prefix + "DB_MAX_IDLE_CONNECTIONS"))
	if err != nil {
		maxIdleConnections = 5
	}

	maxConnections, err = strconv.Atoi(c.GetConfig(prefix + "DB_MAX_CONNECTIONS"))
	if err != nil {
		maxConnections = 20
	}

	connectionMaxLifeTime, err = strconv.Atoi(c.GetConfig(prefix + "DB_CONNECTIONS_MAX_LIFETIME"))
	if err != nil {
		connectionMaxLifeTime = 15
	}

	idleConnectionTimeout, err = strconv.Atoi(c.GetConfig(prefix + "DB_IDLE_CONNECTIONS_TIMEOUT"))
	if err != nil {
		idleConnectionTimeout = 10
	}

	monitoring, err = strconv.ParseBool(c.GetConfig(prefix + "DB_MONITORING"))
	if err != nil {
		monitoring = false
	}

	dbConfig := dbConfig{
		host:                  c.GetConfig(prefix + "DB_HOST"),
		password:              c.GetConfig(prefix + "DB_PASSWORD"),
		user:                  c.GetConfig(prefix + "DB_USER"),
		port:                  c.GetConfig(prefix + "DB_PORT"),
		dialect:               c.GetConfig(prefix + "DB_DIALECT"),
		dbName:                c.GetConfig(prefix + "DB_NAME"),
		sslMode:               c.GetConfig(prefix + "DB_SSL"),
		maxOpenConns:          maxConnections,
		maxIdleConns:          maxIdleConnections,
		connMaxLifeTime:       connectionMaxLifeTime,
		idleConnectionTimeout: idleConnectionTimeout,
		monitoringEnable:      monitoring,
	}

	return dbConfig
}

func InitializeDB(c *configManager.Config, prefix string, logger *slog.Logger) *sql.DB {
	dbConfig := intializeDBConfigs(c, prefix)

	if dbConfig.host != "" && dbConfig.port != "" && dbConfig.user != "" && dbConfig.password != "" && dbConfig.dialect != "" {
		if dbConfig.sslMode == "" {
			dbConfig.sslMode = "disable"
		}

		db, err := establishDBConnection(dbConfig, logger)
		if err == nil {
			db.SetMaxOpenConns(dbConfig.maxOpenConns)
			db.SetMaxIdleConns(dbConfig.maxIdleConns)
			db.SetConnMaxLifetime(time.Minute * time.Duration(dbConfig.connMaxLifeTime))
			db.SetConnMaxIdleTime(time.Minute * time.Duration(dbConfig.idleConnectionTimeout))

			return db
		}
	}

	return nil
}

func establishDBConnection(c dbConfig, logger *slog.Logger) (*sql.DB, error) {
	connectionString := generateConnectionString(c)
	if connectionString == "" {
		return nil, httperrors.New(codes.InternalServerError, "Invalid dialect")
	}

	db, err := sql.Open(c.dialect, connectionString)
	if err != nil {
		logger.Error("Error while connecting to database", slog.Any("error", err))
		return db, err
	}

	err = db.Ping()
	if err != nil {
		logger.Error("Error while pinging to database", slog.Any("error", err))
		return db, err
	}

	return db, nil
}

func generateConnectionString(c dbConfig) string {
	switch c.dialect {
	case "mysql":
		return fmt.Sprintf("%s:%s@tcp(%s:%v)/%s", c.user, c.password, c.host, c.port, c.dbName)
	case "postgres":
		return fmt.Sprintf("postgres://%v:%v@%v:%v/%v?sslmode=%v", c.user, c.password, c.host, c.port, c.dbName, c.sslMode)
	}

	return ""
}

func RunMigrations(configs *configManager.Config, logger *slog.Logger) {
	dbConfig := intializeDBConfigs(configs, "")
	connStr := generateConnectionString(dbConfig)

	m, err := migrate.New(
		"file://migrations",
		connStr,
	)

	if err != nil {
		logger.Error("Migration setup failed", slog.Any("error", err))
		return
	}

	// Apply migrations
	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		logger.Error("Migration failed", slog.Any("error", err))
		return
	}

	logger.Info("Migrations applied successfully")
}
