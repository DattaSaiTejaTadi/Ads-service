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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 472.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 3.0], [1.0, 15.0], [1.1, 24.0], [1.2, 31.0], [1.3, 31.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 37.0], [4.3, 37.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 44.0], [7.7, 44.0], [7.8, 45.0], [7.9, 45.0], [8.0, 46.0], [8.1, 46.0], [8.2, 46.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 48.0], [8.7, 48.0], [8.8, 48.0], [8.9, 48.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 51.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 52.0], [13.3, 52.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 52.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 52.0], [14.8, 52.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 53.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 53.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 53.0], [16.5, 53.0], [16.6, 53.0], [16.7, 53.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 53.0], [17.3, 53.0], [17.4, 53.0], [17.5, 53.0], [17.6, 53.0], [17.7, 53.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 54.0], [18.5, 54.0], [18.6, 54.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 55.0], [23.1, 55.0], [23.2, 55.0], [23.3, 55.0], [23.4, 55.0], [23.5, 55.0], [23.6, 55.0], [23.7, 55.0], [23.8, 55.0], [23.9, 55.0], [24.0, 55.0], [24.1, 55.0], [24.2, 55.0], [24.3, 55.0], [24.4, 55.0], [24.5, 55.0], [24.6, 55.0], [24.7, 56.0], [24.8, 56.0], [24.9, 56.0], [25.0, 56.0], [25.1, 56.0], [25.2, 56.0], [25.3, 56.0], [25.4, 56.0], [25.5, 56.0], [25.6, 56.0], [25.7, 56.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 56.0], [26.4, 56.0], [26.5, 56.0], [26.6, 56.0], [26.7, 56.0], [26.8, 56.0], [26.9, 56.0], [27.0, 56.0], [27.1, 56.0], [27.2, 56.0], [27.3, 56.0], [27.4, 56.0], [27.5, 56.0], [27.6, 56.0], [27.7, 56.0], [27.8, 56.0], [27.9, 56.0], [28.0, 56.0], [28.1, 56.0], [28.2, 56.0], [28.3, 56.0], [28.4, 56.0], [28.5, 57.0], [28.6, 57.0], [28.7, 57.0], [28.8, 57.0], [28.9, 57.0], [29.0, 57.0], [29.1, 57.0], [29.2, 57.0], [29.3, 57.0], [29.4, 57.0], [29.5, 57.0], [29.6, 57.0], [29.7, 57.0], [29.8, 57.0], [29.9, 57.0], [30.0, 57.0], [30.1, 57.0], [30.2, 57.0], [30.3, 57.0], [30.4, 57.0], [30.5, 57.0], [30.6, 57.0], [30.7, 57.0], [30.8, 57.0], [30.9, 57.0], [31.0, 57.0], [31.1, 57.0], [31.2, 57.0], [31.3, 57.0], [31.4, 57.0], [31.5, 57.0], [31.6, 57.0], [31.7, 58.0], [31.8, 58.0], [31.9, 58.0], [32.0, 58.0], [32.1, 58.0], [32.2, 58.0], [32.3, 58.0], [32.4, 58.0], [32.5, 58.0], [32.6, 58.0], [32.7, 58.0], [32.8, 58.0], [32.9, 58.0], [33.0, 58.0], [33.1, 58.0], [33.2, 58.0], [33.3, 58.0], [33.4, 58.0], [33.5, 58.0], [33.6, 58.0], [33.7, 58.0], [33.8, 58.0], [33.9, 58.0], [34.0, 58.0], [34.1, 58.0], [34.2, 58.0], [34.3, 58.0], [34.4, 58.0], [34.5, 59.0], [34.6, 59.0], [34.7, 59.0], [34.8, 59.0], [34.9, 59.0], [35.0, 59.0], [35.1, 59.0], [35.2, 59.0], [35.3, 59.0], [35.4, 59.0], [35.5, 59.0], [35.6, 59.0], [35.7, 59.0], [35.8, 59.0], [35.9, 59.0], [36.0, 59.0], [36.1, 59.0], [36.2, 59.0], [36.3, 59.0], [36.4, 59.0], [36.5, 59.0], [36.6, 59.0], [36.7, 59.0], [36.8, 60.0], [36.9, 60.0], [37.0, 60.0], [37.1, 60.0], [37.2, 60.0], [37.3, 60.0], [37.4, 60.0], [37.5, 60.0], [37.6, 60.0], [37.7, 60.0], [37.8, 60.0], [37.9, 60.0], [38.0, 60.0], [38.1, 60.0], [38.2, 60.0], [38.3, 60.0], [38.4, 60.0], [38.5, 60.0], [38.6, 60.0], [38.7, 61.0], [38.8, 61.0], [38.9, 61.0], [39.0, 61.0], [39.1, 61.0], [39.2, 61.0], [39.3, 61.0], [39.4, 61.0], [39.5, 61.0], [39.6, 61.0], [39.7, 61.0], [39.8, 61.0], [39.9, 61.0], [40.0, 61.0], [40.1, 61.0], [40.2, 61.0], [40.3, 61.0], [40.4, 61.0], [40.5, 61.0], [40.6, 62.0], [40.7, 62.0], [40.8, 62.0], [40.9, 62.0], [41.0, 62.0], [41.1, 62.0], [41.2, 62.0], [41.3, 62.0], [41.4, 62.0], [41.5, 62.0], [41.6, 62.0], [41.7, 62.0], [41.8, 62.0], [41.9, 62.0], [42.0, 62.0], [42.1, 63.0], [42.2, 63.0], [42.3, 63.0], [42.4, 63.0], [42.5, 63.0], [42.6, 63.0], [42.7, 63.0], [42.8, 63.0], [42.9, 63.0], [43.0, 63.0], [43.1, 63.0], [43.2, 63.0], [43.3, 63.0], [43.4, 63.0], [43.5, 64.0], [43.6, 64.0], [43.7, 64.0], [43.8, 64.0], [43.9, 64.0], [44.0, 64.0], [44.1, 64.0], [44.2, 64.0], [44.3, 64.0], [44.4, 64.0], [44.5, 65.0], [44.6, 65.0], [44.7, 65.0], [44.8, 65.0], [44.9, 65.0], [45.0, 65.0], [45.1, 65.0], [45.2, 65.0], [45.3, 65.0], [45.4, 66.0], [45.5, 66.0], [45.6, 66.0], [45.7, 66.0], [45.8, 66.0], [45.9, 66.0], [46.0, 66.0], [46.1, 66.0], [46.2, 67.0], [46.3, 67.0], [46.4, 67.0], [46.5, 67.0], [46.6, 67.0], [46.7, 67.0], [46.8, 67.0], [46.9, 67.0], [47.0, 68.0], [47.1, 68.0], [47.2, 68.0], [47.3, 68.0], [47.4, 68.0], [47.5, 68.0], [47.6, 68.0], [47.7, 69.0], [47.8, 69.0], [47.9, 69.0], [48.0, 69.0], [48.1, 69.0], [48.2, 69.0], [48.3, 69.0], [48.4, 69.0], [48.5, 70.0], [48.6, 70.0], [48.7, 70.0], [48.8, 70.0], [48.9, 70.0], [49.0, 70.0], [49.1, 70.0], [49.2, 70.0], [49.3, 71.0], [49.4, 71.0], [49.5, 71.0], [49.6, 71.0], [49.7, 71.0], [49.8, 71.0], [49.9, 72.0], [50.0, 72.0], [50.1, 72.0], [50.2, 72.0], [50.3, 72.0], [50.4, 72.0], [50.5, 72.0], [50.6, 72.0], [50.7, 72.0], [50.8, 73.0], [50.9, 73.0], [51.0, 73.0], [51.1, 73.0], [51.2, 73.0], [51.3, 73.0], [51.4, 73.0], [51.5, 73.0], [51.6, 73.0], [51.7, 74.0], [51.8, 74.0], [51.9, 74.0], [52.0, 74.0], [52.1, 74.0], [52.2, 74.0], [52.3, 74.0], [52.4, 74.0], [52.5, 75.0], [52.6, 75.0], [52.7, 75.0], [52.8, 75.0], [52.9, 75.0], [53.0, 75.0], [53.1, 75.0], [53.2, 75.0], [53.3, 76.0], [53.4, 76.0], [53.5, 76.0], [53.6, 76.0], [53.7, 76.0], [53.8, 76.0], [53.9, 76.0], [54.0, 76.0], [54.1, 76.0], [54.2, 77.0], [54.3, 77.0], [54.4, 77.0], [54.5, 77.0], [54.6, 77.0], [54.7, 77.0], [54.8, 77.0], [54.9, 77.0], [55.0, 77.0], [55.1, 78.0], [55.2, 78.0], [55.3, 78.0], [55.4, 78.0], [55.5, 78.0], [55.6, 78.0], [55.7, 78.0], [55.8, 78.0], [55.9, 78.0], [56.0, 78.0], [56.1, 79.0], [56.2, 79.0], [56.3, 79.0], [56.4, 79.0], [56.5, 79.0], [56.6, 79.0], [56.7, 79.0], [56.8, 79.0], [56.9, 80.0], [57.0, 80.0], [57.1, 80.0], [57.2, 80.0], [57.3, 80.0], [57.4, 80.0], [57.5, 80.0], [57.6, 81.0], [57.7, 81.0], [57.8, 81.0], [57.9, 81.0], [58.0, 81.0], [58.1, 81.0], [58.2, 81.0], [58.3, 82.0], [58.4, 82.0], [58.5, 82.0], [58.6, 82.0], [58.7, 82.0], [58.8, 82.0], [58.9, 83.0], [59.0, 83.0], [59.1, 83.0], [59.2, 83.0], [59.3, 83.0], [59.4, 83.0], [59.5, 83.0], [59.6, 84.0], [59.7, 84.0], [59.8, 84.0], [59.9, 84.0], [60.0, 84.0], [60.1, 85.0], [60.2, 85.0], [60.3, 85.0], [60.4, 85.0], [60.5, 86.0], [60.6, 86.0], [60.7, 86.0], [60.8, 86.0], [60.9, 87.0], [61.0, 87.0], [61.1, 87.0], [61.2, 87.0], [61.3, 87.0], [61.4, 87.0], [61.5, 88.0], [61.6, 88.0], [61.7, 88.0], [61.8, 88.0], [61.9, 88.0], [62.0, 88.0], [62.1, 89.0], [62.2, 89.0], [62.3, 89.0], [62.4, 89.0], [62.5, 89.0], [62.6, 90.0], [62.7, 90.0], [62.8, 90.0], [62.9, 90.0], [63.0, 90.0], [63.1, 90.0], [63.2, 91.0], [63.3, 91.0], [63.4, 91.0], [63.5, 91.0], [63.6, 91.0], [63.7, 92.0], [63.8, 92.0], [63.9, 92.0], [64.0, 92.0], [64.1, 92.0], [64.2, 93.0], [64.3, 93.0], [64.4, 93.0], [64.5, 93.0], [64.6, 94.0], [64.7, 94.0], [64.8, 94.0], [64.9, 94.0], [65.0, 95.0], [65.1, 95.0], [65.2, 95.0], [65.3, 95.0], [65.4, 96.0], [65.5, 96.0], [65.6, 96.0], [65.7, 97.0], [65.8, 97.0], [65.9, 97.0], [66.0, 98.0], [66.1, 98.0], [66.2, 98.0], [66.3, 98.0], [66.4, 98.0], [66.5, 99.0], [66.6, 99.0], [66.7, 99.0], [66.8, 99.0], [66.9, 99.0], [67.0, 99.0], [67.1, 100.0], [67.2, 100.0], [67.3, 100.0], [67.4, 100.0], [67.5, 100.0], [67.6, 100.0], [67.7, 100.0], [67.8, 101.0], [67.9, 101.0], [68.0, 101.0], [68.1, 101.0], [68.2, 101.0], [68.3, 102.0], [68.4, 102.0], [68.5, 102.0], [68.6, 102.0], [68.7, 102.0], [68.8, 103.0], [68.9, 103.0], [69.0, 103.0], [69.1, 103.0], [69.2, 104.0], [69.3, 104.0], [69.4, 104.0], [69.5, 104.0], [69.6, 105.0], [69.7, 105.0], [69.8, 105.0], [69.9, 105.0], [70.0, 106.0], [70.1, 106.0], [70.2, 106.0], [70.3, 106.0], [70.4, 107.0], [70.5, 107.0], [70.6, 107.0], [70.7, 107.0], [70.8, 108.0], [70.9, 108.0], [71.0, 108.0], [71.1, 108.0], [71.2, 109.0], [71.3, 109.0], [71.4, 109.0], [71.5, 109.0], [71.6, 110.0], [71.7, 110.0], [71.8, 110.0], [71.9, 110.0], [72.0, 111.0], [72.1, 111.0], [72.2, 111.0], [72.3, 111.0], [72.4, 111.0], [72.5, 112.0], [72.6, 112.0], [72.7, 112.0], [72.8, 112.0], [72.9, 113.0], [73.0, 113.0], [73.1, 113.0], [73.2, 113.0], [73.3, 114.0], [73.4, 114.0], [73.5, 114.0], [73.6, 115.0], [73.7, 115.0], [73.8, 115.0], [73.9, 115.0], [74.0, 116.0], [74.1, 116.0], [74.2, 116.0], [74.3, 116.0], [74.4, 117.0], [74.5, 117.0], [74.6, 117.0], [74.7, 117.0], [74.8, 118.0], [74.9, 118.0], [75.0, 118.0], [75.1, 119.0], [75.2, 119.0], [75.3, 119.0], [75.4, 119.0], [75.5, 120.0], [75.6, 120.0], [75.7, 120.0], [75.8, 121.0], [75.9, 121.0], [76.0, 122.0], [76.1, 122.0], [76.2, 123.0], [76.3, 123.0], [76.4, 123.0], [76.5, 124.0], [76.6, 124.0], [76.7, 124.0], [76.8, 125.0], [76.9, 125.0], [77.0, 125.0], [77.1, 126.0], [77.2, 126.0], [77.3, 127.0], [77.4, 127.0], [77.5, 127.0], [77.6, 128.0], [77.7, 128.0], [77.8, 128.0], [77.9, 129.0], [78.0, 129.0], [78.1, 129.0], [78.2, 130.0], [78.3, 130.0], [78.4, 130.0], [78.5, 130.0], [78.6, 130.0], [78.7, 131.0], [78.8, 131.0], [78.9, 131.0], [79.0, 131.0], [79.1, 131.0], [79.2, 131.0], [79.3, 132.0], [79.4, 132.0], [79.5, 132.0], [79.6, 132.0], [79.7, 132.0], [79.8, 132.0], [79.9, 133.0], [80.0, 133.0], [80.1, 133.0], [80.2, 134.0], [80.3, 134.0], [80.4, 134.0], [80.5, 134.0], [80.6, 135.0], [80.7, 135.0], [80.8, 135.0], [80.9, 135.0], [81.0, 136.0], [81.1, 136.0], [81.2, 136.0], [81.3, 137.0], [81.4, 137.0], [81.5, 137.0], [81.6, 138.0], [81.7, 138.0], [81.8, 139.0], [81.9, 139.0], [82.0, 139.0], [82.1, 140.0], [82.2, 140.0], [82.3, 140.0], [82.4, 141.0], [82.5, 141.0], [82.6, 141.0], [82.7, 142.0], [82.8, 142.0], [82.9, 142.0], [83.0, 143.0], [83.1, 143.0], [83.2, 144.0], [83.3, 144.0], [83.4, 144.0], [83.5, 145.0], [83.6, 145.0], [83.7, 145.0], [83.8, 145.0], [83.9, 146.0], [84.0, 146.0], [84.1, 146.0], [84.2, 147.0], [84.3, 147.0], [84.4, 147.0], [84.5, 148.0], [84.6, 148.0], [84.7, 148.0], [84.8, 149.0], [84.9, 149.0], [85.0, 149.0], [85.1, 149.0], [85.2, 150.0], [85.3, 150.0], [85.4, 150.0], [85.5, 151.0], [85.6, 151.0], [85.7, 151.0], [85.8, 152.0], [85.9, 152.0], [86.0, 152.0], [86.1, 152.0], [86.2, 153.0], [86.3, 153.0], [86.4, 153.0], [86.5, 154.0], [86.6, 154.0], [86.7, 155.0], [86.8, 155.0], [86.9, 156.0], [87.0, 156.0], [87.1, 157.0], [87.2, 157.0], [87.3, 158.0], [87.4, 158.0], [87.5, 159.0], [87.6, 160.0], [87.7, 161.0], [87.8, 161.0], [87.9, 162.0], [88.0, 163.0], [88.1, 164.0], [88.2, 165.0], [88.3, 165.0], [88.4, 166.0], [88.5, 167.0], [88.6, 168.0], [88.7, 168.0], [88.8, 169.0], [88.9, 170.0], [89.0, 170.0], [89.1, 171.0], [89.2, 173.0], [89.3, 173.0], [89.4, 174.0], [89.5, 175.0], [89.6, 175.0], [89.7, 176.0], [89.8, 177.0], [89.9, 177.0], [90.0, 178.0], [90.1, 179.0], [90.2, 180.0], [90.3, 181.0], [90.4, 182.0], [90.5, 183.0], [90.6, 184.0], [90.7, 184.0], [90.8, 185.0], [90.9, 185.0], [91.0, 186.0], [91.1, 186.0], [91.2, 187.0], [91.3, 188.0], [91.4, 188.0], [91.5, 189.0], [91.6, 190.0], [91.7, 190.0], [91.8, 191.0], [91.9, 191.0], [92.0, 192.0], [92.1, 192.0], [92.2, 193.0], [92.3, 193.0], [92.4, 194.0], [92.5, 194.0], [92.6, 195.0], [92.7, 195.0], [92.8, 196.0], [92.9, 196.0], [93.0, 197.0], [93.1, 198.0], [93.2, 198.0], [93.3, 199.0], [93.4, 200.0], [93.5, 202.0], [93.6, 203.0], [93.7, 204.0], [93.8, 206.0], [93.9, 207.0], [94.0, 208.0], [94.1, 210.0], [94.2, 211.0], [94.3, 212.0], [94.4, 213.0], [94.5, 215.0], [94.6, 215.0], [94.7, 216.0], [94.8, 217.0], [94.9, 218.0], [95.0, 218.0], [95.1, 219.0], [95.2, 220.0], [95.3, 220.0], [95.4, 221.0], [95.5, 221.0], [95.6, 222.0], [95.7, 223.0], [95.8, 224.0], [95.9, 225.0], [96.0, 226.0], [96.1, 227.0], [96.2, 228.0], [96.3, 229.0], [96.4, 231.0], [96.5, 232.0], [96.6, 234.0], [96.7, 235.0], [96.8, 236.0], [96.9, 238.0], [97.0, 239.0], [97.1, 239.0], [97.2, 240.0], [97.3, 241.0], [97.4, 243.0], [97.5, 244.0], [97.6, 246.0], [97.7, 248.0], [97.8, 249.0], [97.9, 251.0], [98.0, 252.0], [98.1, 254.0], [98.2, 255.0], [98.3, 256.0], [98.4, 258.0], [98.5, 260.0], [98.6, 262.0], [98.7, 264.0], [98.8, 266.0], [98.9, 268.0], [99.0, 270.0], [99.1, 274.0], [99.2, 277.0], [99.3, 282.0], [99.4, 286.0], [99.5, 296.0], [99.6, 359.0], [99.7, 418.0], [99.8, 449.0], [99.9, 462.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "maxY": 26832.0, "series": [{"data": [[0.0, 26832.0], [300.0, 63.0], [100.0, 10499.0], [200.0, 2476.0], [400.0, 130.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 40000.0, "series": [{"data": [[0.0, 40000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.34742499999967, "minX": 1.7572359E12, "maxY": 197.34742499999967, "series": [{"data": [[1.7572359E12, 197.34742499999967]], "isOverall": false, "label": "ad clciks", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572359E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 224.22222222222223, "series": [{"data": [[3.0, 9.0], [4.0, 8.5], [6.0, 10.0], [7.0, 10.0], [9.0, 9.0], [10.0, 8.0], [11.0, 9.0], [13.0, 9.8], [14.0, 11.0], [16.0, 13.5], [18.0, 14.666666666666666], [19.0, 15.0], [20.0, 16.0], [22.0, 15.0], [23.0, 15.4], [24.0, 13.833333333333332], [25.0, 16.0], [27.0, 17.0], [30.0, 17.0], [31.0, 18.0], [33.0, 18.5], [32.0, 19.0], [35.0, 19.4], [34.0, 19.0], [37.0, 21.5], [36.0, 21.0], [39.0, 23.333333333333332], [38.0, 22.0], [41.0, 29.666666666666668], [40.0, 28.2], [42.0, 28.0], [45.0, 28.0], [44.0, 27.0], [47.0, 30.0], [46.0, 28.333333333333332], [49.0, 33.0], [48.0, 31.28571428571429], [50.0, 32.333333333333336], [53.0, 100.36363636363636], [52.0, 34.8], [54.0, 89.66666666666666], [55.0, 79.22222222222223], [56.0, 41.666666666666664], [57.0, 61.8], [58.0, 87.0], [59.0, 118.83333333333334], [60.0, 73.5], [61.0, 96.71428571428571], [62.0, 75.5], [63.0, 77.33333333333333], [64.0, 105.5], [65.0, 60.874999999999986], [66.0, 56.285714285714285], [67.0, 64.4], [68.0, 55.692307692307686], [69.0, 59.25], [70.0, 53.666666666666664], [71.0, 60.714285714285715], [72.0, 48.0], [73.0, 42.57142857142857], [74.0, 47.25], [75.0, 55.666666666666664], [76.0, 48.0], [77.0, 56.714285714285715], [78.0, 46.25], [79.0, 57.0], [80.0, 71.25], [81.0, 59.6], [82.0, 51.0], [83.0, 64.5], [84.0, 56.888888888888886], [85.0, 66.5], [87.0, 57.69999999999999], [89.0, 69.9], [90.0, 85.25], [91.0, 78.0], [88.0, 44.77777777777778], [92.0, 105.2], [93.0, 76.14285714285715], [94.0, 92.75], [95.0, 93.16666666666666], [96.0, 104.66666666666667], [97.0, 128.85714285714286], [98.0, 93.28571428571428], [99.0, 83.62500000000001], [100.0, 113.66666666666666], [101.0, 122.16666666666667], [102.0, 82.4285714285714], [103.0, 73.44444444444444], [104.0, 99.1], [105.0, 122.33333333333333], [106.0, 86.57142857142857], [107.0, 60.75], [108.0, 71.85714285714286], [109.0, 99.0], [110.0, 109.85714285714288], [111.0, 80.25], [112.0, 67.54545454545453], [114.0, 77.16666666666666], [115.0, 87.75], [113.0, 54.42857142857143], [116.0, 83.5], [119.0, 108.33333333333333], [117.0, 43.0], [121.0, 146.66666666666666], [123.0, 46.0], [122.0, 46.0], [120.0, 45.5], [124.0, 69.6], [125.0, 84.33333333333333], [126.0, 92.8], [127.0, 174.0], [129.0, 132.66666666666666], [131.0, 187.0], [132.0, 89.87499999999999], [133.0, 87.36363636363636], [134.0, 97.44444444444446], [135.0, 92.62068965517244], [130.0, 50.75], [128.0, 44.75], [136.0, 156.0], [137.0, 78.11764705882354], [138.0, 93.8478260869565], [139.0, 160.15384615384616], [140.0, 165.5], [141.0, 152.4], [142.0, 161.45454545454544], [143.0, 191.0], [144.0, 189.75], [145.0, 148.33333333333331], [146.0, 157.69230769230768], [147.0, 173.71428571428572], [148.0, 190.2], [149.0, 180.75], [150.0, 172.79999999999998], [151.0, 191.6], [152.0, 187.38461538461536], [153.0, 195.75], [154.0, 182.5], [155.0, 184.5], [157.0, 195.22222222222223], [158.0, 191.8888888888889], [159.0, 183.05882352941177], [156.0, 196.23809523809524], [162.0, 208.66666666666666], [163.0, 204.85714285714286], [164.0, 209.4], [167.0, 197.0], [166.0, 190.88888888888889], [165.0, 213.75], [161.0, 224.22222222222223], [160.0, 185.0], [168.0, 177.61111111111111], [169.0, 156.1818181818182], [171.0, 194.66666666666666], [172.0, 146.08333333333334], [173.0, 95.33333333333333], [174.0, 119.99999999999999], [175.0, 135.11999999999998], [170.0, 129.72727272727275], [176.0, 141.5], [177.0, 119.57894736842108], [178.0, 88.0625], [179.0, 85.10714285714286], [180.0, 200.0], [181.0, 136.0625], [182.0, 156.23529411764707], [183.0, 106.3111111111111], [184.0, 121.76000000000002], [185.0, 113.52325581395353], [186.0, 110.11111111111111], [187.0, 112.46153846153845], [188.0, 82.37500000000001], [189.0, 149.0], [190.0, 133.38888888888889], [191.0, 198.66666666666669], [192.0, 219.85714285714286], [194.0, 217.9565217391304], [195.0, 215.26666666666665], [196.0, 219.95454545454544], [197.0, 159.57142857142858], [198.0, 63.39285714285714], [199.0, 53.977900552486226], [193.0, 222.63157894736847], [200.0, 93.23537996179226], [1.0, 10.0]], "isOverall": false, "label": "CLick", "isController": false}, {"data": [[197.34739999999965, 93.99194999999943]], "isOverall": false, "label": "CLick-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 102666.66666666667, "minX": 1.7572359E12, "maxY": 263333.3333333333, "series": [{"data": [[1.7572359E12, 102666.66666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7572359E12, 263333.3333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572359E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 93.99194999999943, "minX": 1.7572359E12, "maxY": 93.99194999999943, "series": [{"data": [[1.7572359E12, 93.99194999999943]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572359E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 93.98340000000013, "minX": 1.7572359E12, "maxY": 93.98340000000013, "series": [{"data": [[1.7572359E12, 93.98340000000013]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572359E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08922500000000061, "minX": 1.7572359E12, "maxY": 0.08922500000000061, "series": [{"data": [[1.7572359E12, 0.08922500000000061]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572359E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7572359E12, "maxY": 472.0, "series": [{"data": [[1.7572359E12, 472.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7572359E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7572359E12, 108.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7572359E12, 224.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7572359E12, 58.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7572359E12, 135.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572359E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 52.0, "minX": 624.0, "maxY": 170.0, "series": [{"data": [[2241.0, 57.0], [624.0, 55.0], [2608.0, 68.0], [2764.0, 66.0], [2744.0, 65.0], [2918.0, 60.0], [3061.0, 57.0], [3064.0, 58.0], [2963.0, 59.0], [826.0, 164.5], [3260.0, 52.0], [979.0, 170.0], [1056.0, 161.0], [1287.0, 143.0], [1375.0, 145.0], [1380.0, 149.0], [1531.0, 136.0], [1554.0, 109.0], [1783.0, 112.0], [1982.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3260.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.0, "minX": 624.0, "maxY": 170.0, "series": [{"data": [[2241.0, 57.0], [624.0, 55.0], [2608.0, 68.0], [2764.0, 66.0], [2744.0, 65.0], [2918.0, 60.0], [3061.0, 57.0], [3064.0, 58.0], [2963.0, 59.0], [826.0, 164.5], [3260.0, 52.0], [979.0, 170.0], [1056.0, 161.0], [1287.0, 143.0], [1375.0, 145.0], [1380.0, 149.0], [1531.0, 136.0], [1554.0, 109.0], [1783.0, 112.0], [1982.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3260.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 666.6666666666666, "minX": 1.7572359E12, "maxY": 666.6666666666666, "series": [{"data": [[1.7572359E12, 666.6666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572359E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 666.6666666666666, "minX": 1.7572359E12, "maxY": 666.6666666666666, "series": [{"data": [[1.7572359E12, 666.6666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572359E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 666.6666666666666, "minX": 1.7572359E12, "maxY": 666.6666666666666, "series": [{"data": [[1.7572359E12, 666.6666666666666]], "isOverall": false, "label": "CLick-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572359E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 666.6666666666666, "minX": 1.7572359E12, "maxY": 666.6666666666666, "series": [{"data": [[1.7572359E12, 666.6666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572359E12, "title": "Total Transactions Per Second"}},
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

