package worker

import (
	"context"
	"sync"
)

// TaskFunc defines the signature for a task to be processed by a worker.
type TaskFunc func(ctx context.Context, payload interface{})

// Pool manages a pool of workers to process tasks concurrently.
type Pool struct {
	workerCount int
	tasks       chan interface{}
	ctx         context.Context
	cancel      context.CancelFunc
	process     TaskFunc
	wg          sync.WaitGroup
}

// NewPool creates a new worker pool.
func NewPool(ctx context.Context, workerCount int, process TaskFunc) *Pool {
	ctx, cancel := context.WithCancel(ctx)
	p := &Pool{
		workerCount: workerCount,
		tasks:       make(chan interface{}, workerCount*2),
		ctx:         ctx,
		cancel:      cancel,
		process:     process,
	}
	p.start()
	return p
}

// start launches the worker goroutines.
func (p *Pool) start() {
	for i := 0; i < p.workerCount; i++ {
		p.wg.Add(1)
		go func(id int) {
			defer p.wg.Done()
			for {
				select {
				case <-p.ctx.Done():
					return
				case task, ok := <-p.tasks:
					if !ok {
						return
					}
					p.process(p.ctx, task)
				}
			}
		}(i)
	}
}

// Submit adds a task to the pool.
func (p *Pool) Submit(task interface{}) {
	select {
	case <-p.ctx.Done():
		return
	case p.tasks <- task:
	}
}

// Stop gracefully shuts down the pool and waits for workers to finish.
func (p *Pool) Stop() {
	p.cancel()
	close(p.tasks)
	p.wg.Wait()
}
