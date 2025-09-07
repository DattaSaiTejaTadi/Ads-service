/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1671.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 2.0], [0.6, 3.0], [0.7, 8.0], [0.8, 129.0], [0.9, 159.0], [1.0, 167.0], [1.1, 181.0], [1.2, 187.0], [1.3, 189.0], [1.4, 191.0], [1.5, 193.0], [1.6, 195.0], [1.7, 196.0], [1.8, 198.0], [1.9, 200.0], [2.0, 201.0], [2.1, 202.0], [2.2, 203.0], [2.3, 205.0], [2.4, 206.0], [2.5, 208.0], [2.6, 209.0], [2.7, 211.0], [2.8, 214.0], [2.9, 215.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 220.0], [3.4, 221.0], [3.5, 222.0], [3.6, 223.0], [3.7, 224.0], [3.8, 226.0], [3.9, 227.0], [4.0, 228.0], [4.1, 229.0], [4.2, 230.0], [4.3, 231.0], [4.4, 232.0], [4.5, 232.0], [4.6, 233.0], [4.7, 234.0], [4.8, 235.0], [4.9, 236.0], [5.0, 236.0], [5.1, 237.0], [5.2, 238.0], [5.3, 238.0], [5.4, 239.0], [5.5, 240.0], [5.6, 240.0], [5.7, 241.0], [5.8, 241.0], [5.9, 242.0], [6.0, 243.0], [6.1, 243.0], [6.2, 244.0], [6.3, 244.0], [6.4, 245.0], [6.5, 246.0], [6.6, 246.0], [6.7, 247.0], [6.8, 247.0], [6.9, 247.0], [7.0, 248.0], [7.1, 248.0], [7.2, 249.0], [7.3, 249.0], [7.4, 250.0], [7.5, 250.0], [7.6, 250.0], [7.7, 251.0], [7.8, 251.0], [7.9, 251.0], [8.0, 252.0], [8.1, 252.0], [8.2, 253.0], [8.3, 253.0], [8.4, 254.0], [8.5, 254.0], [8.6, 255.0], [8.7, 255.0], [8.8, 256.0], [8.9, 257.0], [9.0, 257.0], [9.1, 258.0], [9.2, 258.0], [9.3, 258.0], [9.4, 259.0], [9.5, 259.0], [9.6, 259.0], [9.7, 260.0], [9.8, 260.0], [9.9, 261.0], [10.0, 261.0], [10.1, 261.0], [10.2, 262.0], [10.3, 262.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 264.0], [10.8, 264.0], [10.9, 264.0], [11.0, 265.0], [11.1, 265.0], [11.2, 266.0], [11.3, 266.0], [11.4, 266.0], [11.5, 267.0], [11.6, 267.0], [11.7, 268.0], [11.8, 268.0], [11.9, 268.0], [12.0, 269.0], [12.1, 269.0], [12.2, 269.0], [12.3, 270.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 271.0], [12.8, 271.0], [12.9, 271.0], [13.0, 272.0], [13.1, 272.0], [13.2, 272.0], [13.3, 273.0], [13.4, 273.0], [13.5, 273.0], [13.6, 274.0], [13.7, 274.0], [13.8, 274.0], [13.9, 274.0], [14.0, 274.0], [14.1, 275.0], [14.2, 275.0], [14.3, 275.0], [14.4, 275.0], [14.5, 276.0], [14.6, 276.0], [14.7, 276.0], [14.8, 277.0], [14.9, 277.0], [15.0, 277.0], [15.1, 278.0], [15.2, 278.0], [15.3, 278.0], [15.4, 278.0], [15.5, 279.0], [15.6, 279.0], [15.7, 279.0], [15.8, 279.0], [15.9, 280.0], [16.0, 280.0], [16.1, 280.0], [16.2, 281.0], [16.3, 281.0], [16.4, 281.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 283.0], [17.0, 283.0], [17.1, 284.0], [17.2, 284.0], [17.3, 284.0], [17.4, 285.0], [17.5, 285.0], [17.6, 285.0], [17.7, 285.0], [17.8, 286.0], [17.9, 286.0], [18.0, 286.0], [18.1, 286.0], [18.2, 287.0], [18.3, 287.0], [18.4, 287.0], [18.5, 288.0], [18.6, 288.0], [18.7, 288.0], [18.8, 289.0], [18.9, 289.0], [19.0, 289.0], [19.1, 290.0], [19.2, 290.0], [19.3, 290.0], [19.4, 290.0], [19.5, 291.0], [19.6, 291.0], [19.7, 291.0], [19.8, 291.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 292.0], [20.3, 292.0], [20.4, 293.0], [20.5, 293.0], [20.6, 293.0], [20.7, 293.0], [20.8, 294.0], [20.9, 294.0], [21.0, 294.0], [21.1, 294.0], [21.2, 294.0], [21.3, 295.0], [21.4, 295.0], [21.5, 295.0], [21.6, 296.0], [21.7, 296.0], [21.8, 296.0], [21.9, 296.0], [22.0, 296.0], [22.1, 297.0], [22.2, 297.0], [22.3, 297.0], [22.4, 298.0], [22.5, 298.0], [22.6, 298.0], [22.7, 298.0], [22.8, 299.0], [22.9, 299.0], [23.0, 299.0], [23.1, 299.0], [23.2, 300.0], [23.3, 300.0], [23.4, 300.0], [23.5, 301.0], [23.6, 301.0], [23.7, 301.0], [23.8, 301.0], [23.9, 302.0], [24.0, 302.0], [24.1, 302.0], [24.2, 302.0], [24.3, 303.0], [24.4, 303.0], [24.5, 303.0], [24.6, 303.0], [24.7, 304.0], [24.8, 304.0], [24.9, 304.0], [25.0, 304.0], [25.1, 305.0], [25.2, 305.0], [25.3, 305.0], [25.4, 306.0], [25.5, 306.0], [25.6, 306.0], [25.7, 306.0], [25.8, 307.0], [25.9, 307.0], [26.0, 307.0], [26.1, 307.0], [26.2, 308.0], [26.3, 308.0], [26.4, 308.0], [26.5, 308.0], [26.6, 309.0], [26.7, 309.0], [26.8, 309.0], [26.9, 309.0], [27.0, 310.0], [27.1, 310.0], [27.2, 311.0], [27.3, 311.0], [27.4, 311.0], [27.5, 312.0], [27.6, 312.0], [27.7, 312.0], [27.8, 312.0], [27.9, 313.0], [28.0, 313.0], [28.1, 313.0], [28.2, 313.0], [28.3, 314.0], [28.4, 314.0], [28.5, 314.0], [28.6, 314.0], [28.7, 315.0], [28.8, 315.0], [28.9, 315.0], [29.0, 316.0], [29.1, 316.0], [29.2, 316.0], [29.3, 316.0], [29.4, 317.0], [29.5, 317.0], [29.6, 317.0], [29.7, 318.0], [29.8, 318.0], [29.9, 318.0], [30.0, 319.0], [30.1, 319.0], [30.2, 319.0], [30.3, 320.0], [30.4, 320.0], [30.5, 320.0], [30.6, 321.0], [30.7, 321.0], [30.8, 321.0], [30.9, 322.0], [31.0, 322.0], [31.1, 322.0], [31.2, 323.0], [31.3, 323.0], [31.4, 323.0], [31.5, 324.0], [31.6, 324.0], [31.7, 324.0], [31.8, 325.0], [31.9, 325.0], [32.0, 325.0], [32.1, 325.0], [32.2, 326.0], [32.3, 326.0], [32.4, 326.0], [32.5, 327.0], [32.6, 327.0], [32.7, 327.0], [32.8, 328.0], [32.9, 328.0], [33.0, 328.0], [33.1, 328.0], [33.2, 329.0], [33.3, 329.0], [33.4, 329.0], [33.5, 329.0], [33.6, 330.0], [33.7, 330.0], [33.8, 330.0], [33.9, 330.0], [34.0, 331.0], [34.1, 331.0], [34.2, 331.0], [34.3, 332.0], [34.4, 332.0], [34.5, 332.0], [34.6, 333.0], [34.7, 333.0], [34.8, 333.0], [34.9, 333.0], [35.0, 334.0], [35.1, 334.0], [35.2, 334.0], [35.3, 335.0], [35.4, 335.0], [35.5, 335.0], [35.6, 336.0], [35.7, 336.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 338.0], [36.2, 338.0], [36.3, 338.0], [36.4, 339.0], [36.5, 339.0], [36.6, 340.0], [36.7, 340.0], [36.8, 340.0], [36.9, 341.0], [37.0, 341.0], [37.1, 341.0], [37.2, 341.0], [37.3, 342.0], [37.4, 342.0], [37.5, 342.0], [37.6, 343.0], [37.7, 343.0], [37.8, 344.0], [37.9, 344.0], [38.0, 344.0], [38.1, 345.0], [38.2, 345.0], [38.3, 345.0], [38.4, 346.0], [38.5, 346.0], [38.6, 346.0], [38.7, 347.0], [38.8, 347.0], [38.9, 347.0], [39.0, 348.0], [39.1, 348.0], [39.2, 348.0], [39.3, 348.0], [39.4, 349.0], [39.5, 349.0], [39.6, 349.0], [39.7, 350.0], [39.8, 350.0], [39.9, 350.0], [40.0, 351.0], [40.1, 351.0], [40.2, 351.0], [40.3, 352.0], [40.4, 352.0], [40.5, 352.0], [40.6, 353.0], [40.7, 353.0], [40.8, 353.0], [40.9, 354.0], [41.0, 354.0], [41.1, 354.0], [41.2, 354.0], [41.3, 355.0], [41.4, 355.0], [41.5, 355.0], [41.6, 355.0], [41.7, 356.0], [41.8, 356.0], [41.9, 356.0], [42.0, 357.0], [42.1, 357.0], [42.2, 357.0], [42.3, 358.0], [42.4, 358.0], [42.5, 358.0], [42.6, 359.0], [42.7, 359.0], [42.8, 359.0], [42.9, 359.0], [43.0, 360.0], [43.1, 360.0], [43.2, 360.0], [43.3, 361.0], [43.4, 361.0], [43.5, 361.0], [43.6, 361.0], [43.7, 362.0], [43.8, 362.0], [43.9, 362.0], [44.0, 362.0], [44.1, 363.0], [44.2, 363.0], [44.3, 363.0], [44.4, 364.0], [44.5, 364.0], [44.6, 364.0], [44.7, 365.0], [44.8, 365.0], [44.9, 365.0], [45.0, 366.0], [45.1, 366.0], [45.2, 366.0], [45.3, 367.0], [45.4, 367.0], [45.5, 367.0], [45.6, 367.0], [45.7, 368.0], [45.8, 368.0], [45.9, 368.0], [46.0, 368.0], [46.1, 369.0], [46.2, 369.0], [46.3, 369.0], [46.4, 370.0], [46.5, 370.0], [46.6, 370.0], [46.7, 371.0], [46.8, 371.0], [46.9, 371.0], [47.0, 371.0], [47.1, 372.0], [47.2, 372.0], [47.3, 372.0], [47.4, 373.0], [47.5, 373.0], [47.6, 373.0], [47.7, 374.0], [47.8, 374.0], [47.9, 374.0], [48.0, 374.0], [48.1, 375.0], [48.2, 375.0], [48.3, 375.0], [48.4, 376.0], [48.5, 376.0], [48.6, 376.0], [48.7, 376.0], [48.8, 377.0], [48.9, 377.0], [49.0, 377.0], [49.1, 378.0], [49.2, 378.0], [49.3, 378.0], [49.4, 379.0], [49.5, 379.0], [49.6, 379.0], [49.7, 380.0], [49.8, 380.0], [49.9, 380.0], [50.0, 381.0], [50.1, 381.0], [50.2, 381.0], [50.3, 382.0], [50.4, 382.0], [50.5, 382.0], [50.6, 383.0], [50.7, 383.0], [50.8, 383.0], [50.9, 384.0], [51.0, 384.0], [51.1, 385.0], [51.2, 385.0], [51.3, 385.0], [51.4, 386.0], [51.5, 386.0], [51.6, 386.0], [51.7, 387.0], [51.8, 387.0], [51.9, 387.0], [52.0, 388.0], [52.1, 388.0], [52.2, 389.0], [52.3, 389.0], [52.4, 390.0], [52.5, 390.0], [52.6, 390.0], [52.7, 391.0], [52.8, 391.0], [52.9, 392.0], [53.0, 392.0], [53.1, 392.0], [53.2, 393.0], [53.3, 393.0], [53.4, 393.0], [53.5, 394.0], [53.6, 394.0], [53.7, 395.0], [53.8, 395.0], [53.9, 395.0], [54.0, 396.0], [54.1, 396.0], [54.2, 397.0], [54.3, 397.0], [54.4, 397.0], [54.5, 398.0], [54.6, 398.0], [54.7, 399.0], [54.8, 399.0], [54.9, 399.0], [55.0, 400.0], [55.1, 400.0], [55.2, 400.0], [55.3, 400.0], [55.4, 401.0], [55.5, 401.0], [55.6, 401.0], [55.7, 402.0], [55.8, 402.0], [55.9, 402.0], [56.0, 403.0], [56.1, 403.0], [56.2, 404.0], [56.3, 404.0], [56.4, 404.0], [56.5, 405.0], [56.6, 405.0], [56.7, 406.0], [56.8, 406.0], [56.9, 406.0], [57.0, 407.0], [57.1, 407.0], [57.2, 407.0], [57.3, 408.0], [57.4, 408.0], [57.5, 409.0], [57.6, 409.0], [57.7, 410.0], [57.8, 410.0], [57.9, 411.0], [58.0, 411.0], [58.1, 412.0], [58.2, 412.0], [58.3, 412.0], [58.4, 413.0], [58.5, 413.0], [58.6, 414.0], [58.7, 414.0], [58.8, 414.0], [58.9, 415.0], [59.0, 415.0], [59.1, 416.0], [59.2, 416.0], [59.3, 416.0], [59.4, 417.0], [59.5, 417.0], [59.6, 418.0], [59.7, 418.0], [59.8, 418.0], [59.9, 419.0], [60.0, 419.0], [60.1, 419.0], [60.2, 420.0], [60.3, 420.0], [60.4, 420.0], [60.5, 421.0], [60.6, 421.0], [60.7, 421.0], [60.8, 421.0], [60.9, 422.0], [61.0, 422.0], [61.1, 422.0], [61.2, 423.0], [61.3, 423.0], [61.4, 423.0], [61.5, 424.0], [61.6, 424.0], [61.7, 425.0], [61.8, 425.0], [61.9, 425.0], [62.0, 426.0], [62.1, 426.0], [62.2, 426.0], [62.3, 427.0], [62.4, 427.0], [62.5, 427.0], [62.6, 428.0], [62.7, 428.0], [62.8, 429.0], [62.9, 429.0], [63.0, 430.0], [63.1, 430.0], [63.2, 430.0], [63.3, 431.0], [63.4, 431.0], [63.5, 432.0], [63.6, 432.0], [63.7, 433.0], [63.8, 433.0], [63.9, 434.0], [64.0, 434.0], [64.1, 434.0], [64.2, 435.0], [64.3, 435.0], [64.4, 436.0], [64.5, 436.0], [64.6, 436.0], [64.7, 437.0], [64.8, 437.0], [64.9, 438.0], [65.0, 438.0], [65.1, 439.0], [65.2, 439.0], [65.3, 440.0], [65.4, 440.0], [65.5, 440.0], [65.6, 441.0], [65.7, 441.0], [65.8, 442.0], [65.9, 442.0], [66.0, 442.0], [66.1, 443.0], [66.2, 443.0], [66.3, 444.0], [66.4, 444.0], [66.5, 445.0], [66.6, 445.0], [66.7, 446.0], [66.8, 446.0], [66.9, 446.0], [67.0, 447.0], [67.1, 447.0], [67.2, 448.0], [67.3, 448.0], [67.4, 449.0], [67.5, 449.0], [67.6, 450.0], [67.7, 450.0], [67.8, 451.0], [67.9, 451.0], [68.0, 452.0], [68.1, 452.0], [68.2, 453.0], [68.3, 453.0], [68.4, 454.0], [68.5, 454.0], [68.6, 455.0], [68.7, 456.0], [68.8, 456.0], [68.9, 457.0], [69.0, 457.0], [69.1, 458.0], [69.2, 458.0], [69.3, 459.0], [69.4, 460.0], [69.5, 461.0], [69.6, 461.0], [69.7, 462.0], [69.8, 462.0], [69.9, 463.0], [70.0, 463.0], [70.1, 464.0], [70.2, 464.0], [70.3, 465.0], [70.4, 465.0], [70.5, 466.0], [70.6, 466.0], [70.7, 467.0], [70.8, 467.0], [70.9, 468.0], [71.0, 468.0], [71.1, 469.0], [71.2, 469.0], [71.3, 470.0], [71.4, 470.0], [71.5, 471.0], [71.6, 471.0], [71.7, 472.0], [71.8, 472.0], [71.9, 472.0], [72.0, 473.0], [72.1, 474.0], [72.2, 474.0], [72.3, 475.0], [72.4, 475.0], [72.5, 475.0], [72.6, 476.0], [72.7, 476.0], [72.8, 477.0], [72.9, 477.0], [73.0, 477.0], [73.1, 478.0], [73.2, 478.0], [73.3, 478.0], [73.4, 479.0], [73.5, 479.0], [73.6, 480.0], [73.7, 480.0], [73.8, 481.0], [73.9, 481.0], [74.0, 482.0], [74.1, 482.0], [74.2, 483.0], [74.3, 483.0], [74.4, 484.0], [74.5, 484.0], [74.6, 485.0], [74.7, 485.0], [74.8, 485.0], [74.9, 486.0], [75.0, 486.0], [75.1, 487.0], [75.2, 487.0], [75.3, 488.0], [75.4, 488.0], [75.5, 489.0], [75.6, 489.0], [75.7, 490.0], [75.8, 490.0], [75.9, 491.0], [76.0, 491.0], [76.1, 492.0], [76.2, 492.0], [76.3, 493.0], [76.4, 493.0], [76.5, 493.0], [76.6, 494.0], [76.7, 494.0], [76.8, 495.0], [76.9, 495.0], [77.0, 496.0], [77.1, 497.0], [77.2, 497.0], [77.3, 498.0], [77.4, 498.0], [77.5, 499.0], [77.6, 499.0], [77.7, 500.0], [77.8, 500.0], [77.9, 501.0], [78.0, 501.0], [78.1, 502.0], [78.2, 503.0], [78.3, 503.0], [78.4, 504.0], [78.5, 504.0], [78.6, 505.0], [78.7, 506.0], [78.8, 506.0], [78.9, 507.0], [79.0, 507.0], [79.1, 508.0], [79.2, 509.0], [79.3, 509.0], [79.4, 510.0], [79.5, 510.0], [79.6, 511.0], [79.7, 511.0], [79.8, 512.0], [79.9, 513.0], [80.0, 514.0], [80.1, 514.0], [80.2, 515.0], [80.3, 515.0], [80.4, 516.0], [80.5, 517.0], [80.6, 518.0], [80.7, 518.0], [80.8, 519.0], [80.9, 519.0], [81.0, 520.0], [81.1, 521.0], [81.2, 521.0], [81.3, 522.0], [81.4, 522.0], [81.5, 523.0], [81.6, 524.0], [81.7, 524.0], [81.8, 525.0], [81.9, 526.0], [82.0, 526.0], [82.1, 527.0], [82.2, 527.0], [82.3, 528.0], [82.4, 529.0], [82.5, 529.0], [82.6, 530.0], [82.7, 530.0], [82.8, 531.0], [82.9, 531.0], [83.0, 532.0], [83.1, 533.0], [83.2, 533.0], [83.3, 534.0], [83.4, 535.0], [83.5, 536.0], [83.6, 537.0], [83.7, 537.0], [83.8, 538.0], [83.9, 539.0], [84.0, 539.0], [84.1, 540.0], [84.2, 541.0], [84.3, 542.0], [84.4, 542.0], [84.5, 543.0], [84.6, 544.0], [84.7, 545.0], [84.8, 545.0], [84.9, 546.0], [85.0, 546.0], [85.1, 547.0], [85.2, 548.0], [85.3, 549.0], [85.4, 550.0], [85.5, 551.0], [85.6, 551.0], [85.7, 552.0], [85.8, 553.0], [85.9, 554.0], [86.0, 554.0], [86.1, 555.0], [86.2, 556.0], [86.3, 556.0], [86.4, 557.0], [86.5, 558.0], [86.6, 559.0], [86.7, 560.0], [86.8, 561.0], [86.9, 562.0], [87.0, 564.0], [87.1, 565.0], [87.2, 566.0], [87.3, 567.0], [87.4, 568.0], [87.5, 569.0], [87.6, 571.0], [87.7, 573.0], [87.8, 574.0], [87.9, 576.0], [88.0, 577.0], [88.1, 579.0], [88.2, 580.0], [88.3, 581.0], [88.4, 582.0], [88.5, 583.0], [88.6, 584.0], [88.7, 585.0], [88.8, 587.0], [88.9, 588.0], [89.0, 589.0], [89.1, 590.0], [89.2, 592.0], [89.3, 595.0], [89.4, 596.0], [89.5, 598.0], [89.6, 599.0], [89.7, 601.0], [89.8, 602.0], [89.9, 603.0], [90.0, 605.0], [90.1, 607.0], [90.2, 608.0], [90.3, 611.0], [90.4, 613.0], [90.5, 614.0], [90.6, 615.0], [90.7, 616.0], [90.8, 617.0], [90.9, 619.0], [91.0, 620.0], [91.1, 621.0], [91.2, 623.0], [91.3, 624.0], [91.4, 625.0], [91.5, 627.0], [91.6, 628.0], [91.7, 630.0], [91.8, 631.0], [91.9, 632.0], [92.0, 633.0], [92.1, 634.0], [92.2, 636.0], [92.3, 637.0], [92.4, 638.0], [92.5, 640.0], [92.6, 642.0], [92.7, 644.0], [92.8, 646.0], [92.9, 648.0], [93.0, 650.0], [93.1, 652.0], [93.2, 654.0], [93.3, 655.0], [93.4, 657.0], [93.5, 659.0], [93.6, 660.0], [93.7, 662.0], [93.8, 664.0], [93.9, 665.0], [94.0, 667.0], [94.1, 668.0], [94.2, 670.0], [94.3, 672.0], [94.4, 674.0], [94.5, 677.0], [94.6, 679.0], [94.7, 681.0], [94.8, 683.0], [94.9, 685.0], [95.0, 687.0], [95.1, 690.0], [95.2, 692.0], [95.3, 694.0], [95.4, 696.0], [95.5, 698.0], [95.6, 701.0], [95.7, 704.0], [95.8, 706.0], [95.9, 710.0], [96.0, 713.0], [96.1, 715.0], [96.2, 718.0], [96.3, 721.0], [96.4, 723.0], [96.5, 726.0], [96.6, 728.0], [96.7, 731.0], [96.8, 734.0], [96.9, 737.0], [97.0, 741.0], [97.1, 745.0], [97.2, 749.0], [97.3, 755.0], [97.4, 759.0], [97.5, 762.0], [97.6, 767.0], [97.7, 773.0], [97.8, 779.0], [97.9, 785.0], [98.0, 790.0], [98.1, 797.0], [98.2, 801.0], [98.3, 808.0], [98.4, 817.0], [98.5, 830.0], [98.6, 838.0], [98.7, 850.0], [98.8, 863.0], [98.9, 872.0], [99.0, 884.0], [99.1, 896.0], [99.2, 915.0], [99.3, 937.0], [99.4, 961.0], [99.5, 1000.0], [99.6, 1042.0], [99.7, 1068.0], [99.8, 1156.0], [99.9, 1370.0], [100.0, 1671.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 28683.0, "series": [{"data": [[0.0, 697.0], [600.0, 5339.0], [700.0, 2358.0], [800.0, 853.0], [200.0, 19098.0], [900.0, 346.0], [1000.0, 219.0], [1100.0, 71.0], [300.0, 28683.0], [1200.0, 36.0], [1300.0, 49.0], [1400.0, 33.0], [1500.0, 28.0], [400.0, 20423.0], [1600.0, 15.0], [100.0, 1004.0], [500.0, 10748.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 70040.0, "series": [{"data": [[0.0, 70040.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19888.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 29.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 279.4779895429251, "minX": 1.75723512E12, "maxY": 300.0, "series": [{"data": [[1.75723518E12, 300.0], [1.75723512E12, 299.9833696593299], [1.75723524E12, 279.4779895429251]], "isOverall": false, "label": "ad clciks", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723524E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 504.99999999999994, "series": [{"data": [[2.0, 1.0], [3.0, 1.5], [4.0, 3.0], [5.0, 4.666666666666667], [6.0, 7.0], [7.0, 8.0], [8.0, 9.0], [10.0, 9.0], [12.0, 9.166666666666666], [13.0, 10.0], [15.0, 15.5], [16.0, 17.0], [18.0, 23.0], [19.0, 31.0], [20.0, 42.25], [22.0, 72.0], [23.0, 115.85714285714286], [25.0, 129.75], [26.0, 136.0], [28.0, 137.0], [29.0, 137.0], [31.0, 137.5], [33.0, 139.0], [32.0, 137.0], [35.0, 139.5], [37.0, 143.0], [39.0, 143.0], [38.0, 143.33333333333334], [41.0, 139.0], [40.0, 140.0], [43.0, 131.0], [42.0, 135.0], [45.0, 129.5], [47.0, 129.5], [46.0, 127.0], [49.0, 129.0], [51.0, 129.0], [50.0, 129.0], [53.0, 128.0], [52.0, 128.5], [55.0, 123.0], [54.0, 126.33333333333333], [57.0, 104.0], [56.0, 121.0], [59.0, 80.66666666666667], [58.0, 98.66666666666667], [61.0, 83.0], [60.0, 83.0], [62.0, 83.5], [67.0, 139.0], [66.0, 115.0], [65.0, 99.0], [64.0, 88.5], [70.0, 145.0], [69.0, 147.5], [68.0, 144.0], [75.0, 167.0], [74.0, 154.0], [73.0, 153.5], [72.0, 151.0], [78.0, 166.66666666666666], [76.0, 168.0], [83.0, 183.5], [82.0, 182.66666666666666], [81.0, 182.0], [80.0, 167.66666666666666], [87.0, 184.66666666666666], [86.0, 185.0], [85.0, 184.25], [84.0, 184.0], [91.0, 184.0], [89.0, 184.0], [88.0, 185.0], [95.0, 184.0], [94.0, 184.66666666666666], [93.0, 183.75], [98.0, 186.0], [96.0, 185.5], [102.0, 235.5], [101.0, 213.0], [100.0, 192.4], [107.0, 367.25], [106.0, 312.25], [105.0, 245.33333333333331], [104.0, 238.0], [110.0, 368.0], [109.0, 368.0], [108.0, 368.0], [114.0, 368.0], [113.0, 367.0], [112.0, 367.6666666666667], [119.0, 365.0], [118.0, 365.3333333333333], [117.0, 365.8], [116.0, 367.0], [123.0, 363.75], [122.0, 365.0], [120.0, 366.0], [127.0, 346.6666666666667], [126.0, 351.5], [124.0, 358.4285714285714], [135.0, 293.0], [134.0, 300.0], [133.0, 304.0], [132.0, 305.0], [131.0, 312.6666666666667], [130.0, 328.0], [129.0, 339.3333333333333], [128.0, 342.0], [143.0, 272.5], [142.0, 273.25], [141.0, 273.6666666666667], [140.0, 275.0], [139.0, 290.8], [138.0, 292.0], [137.0, 293.0], [136.0, 293.0], [151.0, 290.6], [150.0, 267.5], [149.0, 265.0], [148.0, 264.0], [147.0, 264.0], [146.0, 264.0], [145.0, 261.6666666666667], [144.0, 266.2], [159.0, 344.5], [158.0, 344.0], [157.0, 341.3333333333333], [155.0, 336.75], [154.0, 329.0], [153.0, 323.75], [152.0, 319.5714285714286], [167.0, 344.7142857142857], [166.0, 345.0], [165.0, 346.0], [163.0, 346.25], [161.0, 345.75], [160.0, 345.75], [175.0, 296.0], [174.0, 298.0], [173.0, 299.5], [171.0, 300.6], [170.0, 302.0], [169.0, 308.5], [168.0, 328.6666666666667], [183.0, 201.25], [182.0, 197.66666666666666], [181.0, 194.4], [180.0, 190.8], [179.0, 181.0], [178.0, 173.33333333333334], [177.0, 242.5], [190.0, 331.5714285714286], [189.0, 329.49999999999994], [188.0, 325.0], [187.0, 289.3333333333333], [185.0, 206.28571428571428], [184.0, 204.0], [199.0, 364.8421052631579], [198.0, 357.0], [197.0, 355.6], [196.0, 351.5], [195.0, 350.0], [194.0, 347.3333333333333], [193.0, 344.8333333333333], [192.0, 343.0], [207.0, 424.0], [206.0, 424.0], [205.0, 425.2727272727273], [203.0, 425.0], [202.0, 412.75], [201.0, 406.6666666666667], [215.0, 355.3333333333333], [214.0, 364.6666666666667], [212.0, 366.0], [211.0, 369.42857142857144], [210.0, 368.6666666666667], [209.0, 378.6], [208.0, 413.7142857142857], [223.0, 357.0], [222.0, 355.5], [221.0, 354.0], [220.0, 353.2], [219.0, 352.3333333333333], [218.0, 352.5], [217.0, 353.25], [216.0, 352.6666666666667], [231.0, 402.7142857142857], [230.0, 383.4], [229.0, 373.0], [228.0, 367.4666666666666], [227.0, 358.6], [226.0, 357.0], [225.0, 357.0], [224.0, 356.5], [238.0, 475.8888888888889], [237.0, 471.5], [236.0, 469.6], [234.0, 469.0], [233.0, 468.3333333333333], [232.0, 388.7027027027026], [247.0, 447.85714285714283], [246.0, 455.56250000000006], [245.0, 462.5], [244.0, 464.0], [243.0, 469.75], [241.0, 475.0], [255.0, 464.8666666666667], [254.0, 451.6666666666667], [253.0, 425.75], [252.0, 410.1666666666667], [251.0, 402.5], [250.0, 398.15000000000003], [249.0, 409.77777777777777], [248.0, 446.2], [270.0, 302.0681818181818], [271.0, 326.0975609756098], [269.0, 291.3333333333333], [268.0, 293.2], [267.0, 308.8571428571429], [266.0, 458.375], [265.0, 473.81481481481484], [264.0, 475.25], [263.0, 487.0], [256.0, 469.2], [259.0, 499.40350877192975], [257.0, 470.0], [262.0, 493.3333333333333], [261.0, 504.99999999999994], [286.0, 336.47058823529414], [275.0, 325.33333333333337], [274.0, 320.16666666666663], [273.0, 319.05263157894734], [272.0, 339.2857142857143], [277.0, 162.375], [276.0, 162.0], [278.0, 319.2857142857143], [279.0, 83.75], [280.0, 61.05882352941177], [283.0, 298.75000000000006], [282.0, 299.0], [281.0, 311.18518518518516], [287.0, 368.5714285714286], [285.0, 257.0], [284.0, 275.36842105263156], [296.0, 362.2926829268293], [300.0, 410.84479075028173], [299.0, 498.9027397260274], [298.0, 426.58139534883725], [297.0, 398.7500000000001], [295.0, 370.91111111111115], [294.0, 411.45631067961165], [293.0, 404.8], [291.0, 352.3333333333333], [290.0, 329.70000000000005], [289.0, 386.56410256410254], [288.0, 416.26666666666665], [1.0, 1.0]], "isOverall": false, "label": "CLick", "isController": false}, {"data": [[298.6418444444439, 410.15526666666784]], "isOverall": false, "label": "CLick-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 15217.766666666666, "minX": 1.75723512E12, "maxY": 332971.8333333333, "series": [{"data": [[1.75723518E12, 129816.86666666667], [1.75723512E12, 87145.18333333333], [1.75723524E12, 15217.766666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75723518E12, 332971.8333333333], [1.75723512E12, 220304.66666666666], [1.75723524E12, 39032.583333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723524E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 353.96138637352357, "minX": 1.75723512E12, "maxY": 487.68763622249287, "series": [{"data": [[1.75723518E12, 353.96138637352357], [1.75723512E12, 487.68763622249287], [1.75723524E12, 451.54208129532765]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723524E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 353.9567796275059, "minX": 1.75723512E12, "maxY": 487.59116830382374, "series": [{"data": [[1.75723518E12, 353.9567796275059], [1.75723512E12, 487.59116830382374], [1.75723524E12, 451.53752740765816]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723524E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.014037723911582155, "minX": 1.75723512E12, "maxY": 2.8322634580360075, "series": [{"data": [[1.75723518E12, 0.014037723911582155], [1.75723512E12, 2.8322634580360075], [1.75723524E12, 0.1239669421487603]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723524E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.75723512E12, "maxY": 1671.0, "series": [{"data": [[1.75723518E12, 1156.0], [1.75723512E12, 1671.0], [1.75723524E12, 1455.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75723518E12, 0.0], [1.75723512E12, 0.0], [1.75723524E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75723518E12, 513.0], [1.75723512E12, 693.0], [1.75723524E12, 707.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75723518E12, 731.9900000000016], [1.75723512E12, 954.9900000000016], [1.75723524E12, 999.6999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75723518E12, 301.0], [1.75723512E12, 476.0], [1.75723524E12, 431.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75723518E12, 583.0], [1.75723512E12, 756.9500000000007], [1.75723524E12, 830.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 50.0, "maxY": 1134.0, "series": [{"data": [[50.0, 756.0], [254.0, 914.0], [301.0, 1134.0], [362.0, 682.0], [414.0, 764.0], [423.0, 706.0], [427.0, 672.0], [433.0, 517.0], [456.0, 494.0], [461.0, 685.0], [450.0, 475.5], [476.0, 497.0], [495.0, 629.0], [480.0, 521.0], [505.0, 548.0], [504.0, 516.5], [510.0, 673.5], [527.0, 658.0], [516.0, 789.0], [517.0, 494.0], [538.0, 759.5], [562.0, 566.0], [553.0, 596.0], [570.0, 523.0], [572.0, 596.5], [566.0, 504.0], [564.0, 510.0], [607.0, 608.0], [593.0, 368.0], [586.0, 536.0], [600.0, 450.5], [585.0, 481.0], [638.0, 497.0], [619.0, 465.0], [625.0, 489.0], [630.0, 400.5], [609.0, 405.0], [614.0, 532.0], [623.0, 421.0], [613.0, 509.0], [621.0, 475.0], [654.0, 416.5], [644.0, 498.0], [669.0, 539.0], [655.0, 439.0], [667.0, 461.0], [653.0, 479.0], [652.0, 461.0], [668.0, 479.5], [672.0, 442.5], [698.0, 365.0], [701.0, 475.0], [683.0, 417.0], [702.0, 436.0], [692.0, 452.0], [682.0, 447.0], [693.0, 333.0], [725.0, 408.0], [734.0, 393.0], [712.0, 432.0], [706.0, 417.5], [727.0, 512.0], [729.0, 332.0], [732.0, 457.0], [764.0, 422.0], [762.0, 297.5], [738.0, 473.5], [756.0, 395.0], [743.0, 453.0], [747.0, 424.0], [795.0, 368.0], [770.0, 361.0], [793.0, 349.0], [782.0, 348.0], [785.0, 313.0], [819.0, 329.0], [800.0, 502.5], [811.0, 354.0], [812.0, 370.0], [837.0, 385.0], [858.0, 336.5], [856.0, 334.0], [855.0, 383.0], [847.0, 325.0], [853.0, 319.0], [876.0, 358.0], [875.0, 354.0], [888.0, 306.0], [864.0, 345.5], [882.0, 312.0], [926.0, 333.0], [924.0, 341.0], [899.0, 297.0], [920.0, 305.0], [937.0, 312.0], [934.0, 325.5], [935.0, 346.0], [933.0, 317.0], [929.0, 358.0], [972.0, 287.0], [991.0, 290.0], [963.0, 288.0], [988.0, 330.5], [961.0, 303.0], [989.0, 288.0], [993.0, 324.0], [1012.0, 295.0], [1065.0, 252.0], [1029.0, 284.0], [1034.0, 280.0], [1038.0, 281.0], [1123.0, 272.0], [1134.0, 263.0], [1157.0, 269.0], [1208.0, 242.0], [1172.0, 268.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[50.0, 6.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1208.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 50.0, "maxY": 1134.0, "series": [{"data": [[50.0, 756.0], [254.0, 914.0], [301.0, 1134.0], [362.0, 682.0], [414.0, 764.0], [423.0, 706.0], [427.0, 672.0], [433.0, 517.0], [456.0, 494.0], [461.0, 685.0], [450.0, 475.5], [476.0, 497.0], [495.0, 629.0], [480.0, 521.0], [505.0, 548.0], [504.0, 516.5], [510.0, 673.5], [527.0, 658.0], [516.0, 789.0], [517.0, 494.0], [538.0, 759.5], [562.0, 566.0], [553.0, 596.0], [570.0, 523.0], [572.0, 596.5], [566.0, 504.0], [564.0, 510.0], [607.0, 608.0], [593.0, 368.0], [586.0, 536.0], [600.0, 450.5], [585.0, 481.0], [638.0, 497.0], [619.0, 465.0], [625.0, 489.0], [630.0, 400.5], [609.0, 405.0], [614.0, 532.0], [623.0, 421.0], [613.0, 509.0], [621.0, 475.0], [654.0, 416.5], [644.0, 498.0], [669.0, 539.0], [655.0, 439.0], [667.0, 461.0], [653.0, 479.0], [652.0, 461.0], [668.0, 479.5], [672.0, 442.5], [698.0, 365.0], [701.0, 475.0], [683.0, 417.0], [702.0, 436.0], [692.0, 452.0], [682.0, 447.0], [693.0, 333.0], [725.0, 408.0], [734.0, 393.0], [712.0, 432.0], [706.0, 417.5], [727.0, 512.0], [729.0, 332.0], [732.0, 457.0], [764.0, 422.0], [762.0, 297.5], [738.0, 473.5], [756.0, 395.0], [743.0, 453.0], [747.0, 424.0], [795.0, 368.0], [770.0, 361.0], [793.0, 349.0], [782.0, 348.0], [785.0, 313.0], [819.0, 329.0], [800.0, 502.5], [811.0, 354.0], [812.0, 370.0], [837.0, 385.0], [858.0, 336.5], [856.0, 334.0], [855.0, 383.0], [847.0, 325.0], [853.0, 319.0], [876.0, 358.0], [875.0, 354.0], [888.0, 306.0], [864.0, 345.5], [882.0, 312.0], [926.0, 333.0], [924.0, 341.0], [899.0, 297.0], [920.0, 305.0], [937.0, 312.0], [934.0, 325.5], [935.0, 346.0], [933.0, 317.0], [929.0, 358.0], [972.0, 287.0], [991.0, 290.0], [963.0, 288.0], [988.0, 330.5], [961.0, 303.0], [989.0, 288.0], [993.0, 324.0], [1012.0, 295.0], [1065.0, 252.0], [1029.0, 284.0], [1034.0, 280.0], [1038.0, 281.0], [1123.0, 272.0], [1134.0, 263.0], [1157.0, 269.0], [1208.0, 242.0], [1172.0, 268.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[50.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1208.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 93.81666666666666, "minX": 1.75723512E12, "maxY": 842.9666666666667, "series": [{"data": [[1.75723518E12, 842.9666666666667], [1.75723512E12, 563.2166666666667], [1.75723524E12, 93.81666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723524E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.75723512E12, "maxY": 842.9666666666667, "series": [{"data": [[1.75723518E12, 842.9666666666667], [1.75723512E12, 557.7333333333333], [1.75723524E12, 98.81666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75723512E12, 0.48333333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723524E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.75723512E12, "maxY": 842.9666666666667, "series": [{"data": [[1.75723512E12, 0.48333333333333334]], "isOverall": false, "label": "CLick-failure", "isController": false}, {"data": [[1.75723518E12, 842.9666666666667], [1.75723512E12, 557.7333333333333], [1.75723524E12, 98.81666666666666]], "isOverall": false, "label": "CLick-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723524E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.75723512E12, "maxY": 842.9666666666667, "series": [{"data": [[1.75723518E12, 842.9666666666667], [1.75723512E12, 557.7333333333333], [1.75723524E12, 98.81666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75723512E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723524E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

