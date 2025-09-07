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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1130.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 14.0], [1.1, 35.0], [1.2, 46.0], [1.3, 47.0], [1.4, 50.0], [1.5, 53.0], [1.6, 62.0], [1.7, 66.0], [1.8, 66.0], [1.9, 67.0], [2.0, 67.0], [2.1, 67.0], [2.2, 67.0], [2.3, 67.0], [2.4, 68.0], [2.5, 68.0], [2.6, 68.0], [2.7, 68.0], [2.8, 68.0], [2.9, 68.0], [3.0, 68.0], [3.1, 69.0], [3.2, 69.0], [3.3, 69.0], [3.4, 69.0], [3.5, 69.0], [3.6, 69.0], [3.7, 69.0], [3.8, 69.0], [3.9, 70.0], [4.0, 70.0], [4.1, 70.0], [4.2, 70.0], [4.3, 70.0], [4.4, 70.0], [4.5, 70.0], [4.6, 71.0], [4.7, 71.0], [4.8, 71.0], [4.9, 71.0], [5.0, 71.0], [5.1, 71.0], [5.2, 71.0], [5.3, 71.0], [5.4, 71.0], [5.5, 72.0], [5.6, 72.0], [5.7, 72.0], [5.8, 72.0], [5.9, 72.0], [6.0, 72.0], [6.1, 72.0], [6.2, 73.0], [6.3, 73.0], [6.4, 73.0], [6.5, 73.0], [6.6, 73.0], [6.7, 73.0], [6.8, 74.0], [6.9, 74.0], [7.0, 74.0], [7.1, 74.0], [7.2, 74.0], [7.3, 75.0], [7.4, 75.0], [7.5, 75.0], [7.6, 75.0], [7.7, 75.0], [7.8, 76.0], [7.9, 76.0], [8.0, 76.0], [8.1, 76.0], [8.2, 76.0], [8.3, 77.0], [8.4, 77.0], [8.5, 77.0], [8.6, 77.0], [8.7, 77.0], [8.8, 77.0], [8.9, 78.0], [9.0, 78.0], [9.1, 78.0], [9.2, 78.0], [9.3, 78.0], [9.4, 79.0], [9.5, 79.0], [9.6, 79.0], [9.7, 79.0], [9.8, 79.0], [9.9, 80.0], [10.0, 80.0], [10.1, 80.0], [10.2, 80.0], [10.3, 81.0], [10.4, 81.0], [10.5, 81.0], [10.6, 82.0], [10.7, 82.0], [10.8, 82.0], [10.9, 83.0], [11.0, 83.0], [11.1, 83.0], [11.2, 84.0], [11.3, 84.0], [11.4, 84.0], [11.5, 84.0], [11.6, 85.0], [11.7, 85.0], [11.8, 85.0], [11.9, 85.0], [12.0, 85.0], [12.1, 86.0], [12.2, 86.0], [12.3, 86.0], [12.4, 86.0], [12.5, 86.0], [12.6, 86.0], [12.7, 87.0], [12.8, 87.0], [12.9, 87.0], [13.0, 87.0], [13.1, 87.0], [13.2, 87.0], [13.3, 87.0], [13.4, 87.0], [13.5, 87.0], [13.6, 88.0], [13.7, 88.0], [13.8, 88.0], [13.9, 88.0], [14.0, 88.0], [14.1, 88.0], [14.2, 88.0], [14.3, 88.0], [14.4, 88.0], [14.5, 88.0], [14.6, 88.0], [14.7, 88.0], [14.8, 89.0], [14.9, 89.0], [15.0, 89.0], [15.1, 89.0], [15.2, 89.0], [15.3, 89.0], [15.4, 89.0], [15.5, 89.0], [15.6, 89.0], [15.7, 89.0], [15.8, 89.0], [15.9, 89.0], [16.0, 89.0], [16.1, 89.0], [16.2, 89.0], [16.3, 90.0], [16.4, 90.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 90.0], [16.9, 90.0], [17.0, 90.0], [17.1, 90.0], [17.2, 90.0], [17.3, 90.0], [17.4, 90.0], [17.5, 90.0], [17.6, 90.0], [17.7, 91.0], [17.8, 91.0], [17.9, 91.0], [18.0, 91.0], [18.1, 91.0], [18.2, 91.0], [18.3, 91.0], [18.4, 91.0], [18.5, 91.0], [18.6, 91.0], [18.7, 91.0], [18.8, 91.0], [18.9, 91.0], [19.0, 91.0], [19.1, 92.0], [19.2, 92.0], [19.3, 92.0], [19.4, 92.0], [19.5, 92.0], [19.6, 92.0], [19.7, 92.0], [19.8, 92.0], [19.9, 92.0], [20.0, 92.0], [20.1, 92.0], [20.2, 92.0], [20.3, 92.0], [20.4, 92.0], [20.5, 93.0], [20.6, 93.0], [20.7, 93.0], [20.8, 93.0], [20.9, 93.0], [21.0, 93.0], [21.1, 93.0], [21.2, 93.0], [21.3, 93.0], [21.4, 93.0], [21.5, 93.0], [21.6, 94.0], [21.7, 94.0], [21.8, 94.0], [21.9, 94.0], [22.0, 94.0], [22.1, 94.0], [22.2, 94.0], [22.3, 94.0], [22.4, 94.0], [22.5, 94.0], [22.6, 94.0], [22.7, 95.0], [22.8, 95.0], [22.9, 95.0], [23.0, 95.0], [23.1, 95.0], [23.2, 95.0], [23.3, 95.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 96.0], [23.9, 96.0], [24.0, 96.0], [24.1, 96.0], [24.2, 96.0], [24.3, 96.0], [24.4, 96.0], [24.5, 96.0], [24.6, 96.0], [24.7, 97.0], [24.8, 97.0], [24.9, 97.0], [25.0, 97.0], [25.1, 97.0], [25.2, 97.0], [25.3, 97.0], [25.4, 97.0], [25.5, 97.0], [25.6, 97.0], [25.7, 98.0], [25.8, 98.0], [25.9, 98.0], [26.0, 98.0], [26.1, 98.0], [26.2, 98.0], [26.3, 98.0], [26.4, 98.0], [26.5, 98.0], [26.6, 98.0], [26.7, 98.0], [26.8, 99.0], [26.9, 99.0], [27.0, 99.0], [27.1, 99.0], [27.2, 99.0], [27.3, 99.0], [27.4, 99.0], [27.5, 99.0], [27.6, 99.0], [27.7, 99.0], [27.8, 99.0], [27.9, 100.0], [28.0, 100.0], [28.1, 100.0], [28.2, 100.0], [28.3, 100.0], [28.4, 100.0], [28.5, 100.0], [28.6, 100.0], [28.7, 100.0], [28.8, 100.0], [28.9, 100.0], [29.0, 100.0], [29.1, 101.0], [29.2, 101.0], [29.3, 101.0], [29.4, 101.0], [29.5, 101.0], [29.6, 101.0], [29.7, 101.0], [29.8, 101.0], [29.9, 101.0], [30.0, 101.0], [30.1, 101.0], [30.2, 101.0], [30.3, 102.0], [30.4, 102.0], [30.5, 102.0], [30.6, 102.0], [30.7, 102.0], [30.8, 102.0], [30.9, 102.0], [31.0, 102.0], [31.1, 102.0], [31.2, 103.0], [31.3, 103.0], [31.4, 103.0], [31.5, 103.0], [31.6, 103.0], [31.7, 103.0], [31.8, 103.0], [31.9, 103.0], [32.0, 103.0], [32.1, 103.0], [32.2, 104.0], [32.3, 104.0], [32.4, 104.0], [32.5, 104.0], [32.6, 104.0], [32.7, 104.0], [32.8, 104.0], [32.9, 104.0], [33.0, 104.0], [33.1, 104.0], [33.2, 104.0], [33.3, 105.0], [33.4, 105.0], [33.5, 105.0], [33.6, 105.0], [33.7, 105.0], [33.8, 105.0], [33.9, 105.0], [34.0, 105.0], [34.1, 105.0], [34.2, 105.0], [34.3, 105.0], [34.4, 106.0], [34.5, 106.0], [34.6, 106.0], [34.7, 106.0], [34.8, 106.0], [34.9, 106.0], [35.0, 106.0], [35.1, 106.0], [35.2, 106.0], [35.3, 106.0], [35.4, 106.0], [35.5, 106.0], [35.6, 107.0], [35.7, 107.0], [35.8, 107.0], [35.9, 107.0], [36.0, 107.0], [36.1, 107.0], [36.2, 107.0], [36.3, 107.0], [36.4, 107.0], [36.5, 107.0], [36.6, 107.0], [36.7, 107.0], [36.8, 108.0], [36.9, 108.0], [37.0, 108.0], [37.1, 108.0], [37.2, 108.0], [37.3, 108.0], [37.4, 108.0], [37.5, 108.0], [37.6, 108.0], [37.7, 108.0], [37.8, 109.0], [37.9, 109.0], [38.0, 109.0], [38.1, 109.0], [38.2, 109.0], [38.3, 109.0], [38.4, 109.0], [38.5, 109.0], [38.6, 109.0], [38.7, 109.0], [38.8, 110.0], [38.9, 110.0], [39.0, 110.0], [39.1, 110.0], [39.2, 110.0], [39.3, 110.0], [39.4, 110.0], [39.5, 110.0], [39.6, 111.0], [39.7, 111.0], [39.8, 111.0], [39.9, 111.0], [40.0, 111.0], [40.1, 111.0], [40.2, 111.0], [40.3, 112.0], [40.4, 112.0], [40.5, 112.0], [40.6, 112.0], [40.7, 112.0], [40.8, 112.0], [40.9, 112.0], [41.0, 112.0], [41.1, 113.0], [41.2, 113.0], [41.3, 113.0], [41.4, 113.0], [41.5, 113.0], [41.6, 113.0], [41.7, 113.0], [41.8, 113.0], [41.9, 114.0], [42.0, 114.0], [42.1, 114.0], [42.2, 114.0], [42.3, 114.0], [42.4, 114.0], [42.5, 114.0], [42.6, 115.0], [42.7, 115.0], [42.8, 115.0], [42.9, 115.0], [43.0, 115.0], [43.1, 115.0], [43.2, 116.0], [43.3, 116.0], [43.4, 116.0], [43.5, 116.0], [43.6, 116.0], [43.7, 116.0], [43.8, 116.0], [43.9, 117.0], [44.0, 117.0], [44.1, 117.0], [44.2, 117.0], [44.3, 117.0], [44.4, 117.0], [44.5, 117.0], [44.6, 117.0], [44.7, 118.0], [44.8, 118.0], [44.9, 118.0], [45.0, 118.0], [45.1, 118.0], [45.2, 118.0], [45.3, 118.0], [45.4, 119.0], [45.5, 119.0], [45.6, 119.0], [45.7, 119.0], [45.8, 119.0], [45.9, 119.0], [46.0, 119.0], [46.1, 119.0], [46.2, 120.0], [46.3, 120.0], [46.4, 120.0], [46.5, 120.0], [46.6, 120.0], [46.7, 120.0], [46.8, 121.0], [46.9, 121.0], [47.0, 121.0], [47.1, 121.0], [47.2, 121.0], [47.3, 121.0], [47.4, 121.0], [47.5, 122.0], [47.6, 122.0], [47.7, 122.0], [47.8, 122.0], [47.9, 122.0], [48.0, 123.0], [48.1, 123.0], [48.2, 123.0], [48.3, 123.0], [48.4, 123.0], [48.5, 123.0], [48.6, 124.0], [48.7, 124.0], [48.8, 124.0], [48.9, 124.0], [49.0, 124.0], [49.1, 125.0], [49.2, 125.0], [49.3, 125.0], [49.4, 125.0], [49.5, 125.0], [49.6, 126.0], [49.7, 126.0], [49.8, 126.0], [49.9, 126.0], [50.0, 127.0], [50.1, 127.0], [50.2, 127.0], [50.3, 127.0], [50.4, 127.0], [50.5, 128.0], [50.6, 128.0], [50.7, 128.0], [50.8, 128.0], [50.9, 129.0], [51.0, 129.0], [51.1, 129.0], [51.2, 129.0], [51.3, 129.0], [51.4, 130.0], [51.5, 130.0], [51.6, 130.0], [51.7, 130.0], [51.8, 130.0], [51.9, 130.0], [52.0, 131.0], [52.1, 131.0], [52.2, 131.0], [52.3, 131.0], [52.4, 131.0], [52.5, 132.0], [52.6, 132.0], [52.7, 132.0], [52.8, 132.0], [52.9, 132.0], [53.0, 132.0], [53.1, 133.0], [53.2, 133.0], [53.3, 133.0], [53.4, 133.0], [53.5, 133.0], [53.6, 134.0], [53.7, 134.0], [53.8, 134.0], [53.9, 134.0], [54.0, 135.0], [54.1, 135.0], [54.2, 135.0], [54.3, 135.0], [54.4, 136.0], [54.5, 136.0], [54.6, 136.0], [54.7, 136.0], [54.8, 137.0], [54.9, 137.0], [55.0, 137.0], [55.1, 137.0], [55.2, 138.0], [55.3, 138.0], [55.4, 138.0], [55.5, 138.0], [55.6, 139.0], [55.7, 139.0], [55.8, 139.0], [55.9, 139.0], [56.0, 140.0], [56.1, 140.0], [56.2, 140.0], [56.3, 140.0], [56.4, 141.0], [56.5, 141.0], [56.6, 141.0], [56.7, 141.0], [56.8, 141.0], [56.9, 142.0], [57.0, 142.0], [57.1, 142.0], [57.2, 142.0], [57.3, 143.0], [57.4, 143.0], [57.5, 143.0], [57.6, 143.0], [57.7, 144.0], [57.8, 144.0], [57.9, 144.0], [58.0, 144.0], [58.1, 144.0], [58.2, 145.0], [58.3, 145.0], [58.4, 145.0], [58.5, 145.0], [58.6, 146.0], [58.7, 146.0], [58.8, 146.0], [58.9, 147.0], [59.0, 147.0], [59.1, 147.0], [59.2, 147.0], [59.3, 147.0], [59.4, 148.0], [59.5, 148.0], [59.6, 148.0], [59.7, 148.0], [59.8, 148.0], [59.9, 149.0], [60.0, 149.0], [60.1, 149.0], [60.2, 149.0], [60.3, 149.0], [60.4, 150.0], [60.5, 150.0], [60.6, 150.0], [60.7, 150.0], [60.8, 150.0], [60.9, 151.0], [61.0, 151.0], [61.1, 151.0], [61.2, 151.0], [61.3, 151.0], [61.4, 151.0], [61.5, 152.0], [61.6, 152.0], [61.7, 152.0], [61.8, 152.0], [61.9, 152.0], [62.0, 152.0], [62.1, 153.0], [62.2, 153.0], [62.3, 153.0], [62.4, 153.0], [62.5, 153.0], [62.6, 154.0], [62.7, 154.0], [62.8, 154.0], [62.9, 154.0], [63.0, 154.0], [63.1, 155.0], [63.2, 155.0], [63.3, 155.0], [63.4, 155.0], [63.5, 156.0], [63.6, 156.0], [63.7, 156.0], [63.8, 157.0], [63.9, 157.0], [64.0, 157.0], [64.1, 158.0], [64.2, 158.0], [64.3, 158.0], [64.4, 158.0], [64.5, 159.0], [64.6, 159.0], [64.7, 159.0], [64.8, 160.0], [64.9, 160.0], [65.0, 160.0], [65.1, 161.0], [65.2, 161.0], [65.3, 161.0], [65.4, 162.0], [65.5, 162.0], [65.6, 162.0], [65.7, 162.0], [65.8, 163.0], [65.9, 163.0], [66.0, 163.0], [66.1, 164.0], [66.2, 164.0], [66.3, 164.0], [66.4, 164.0], [66.5, 165.0], [66.6, 165.0], [66.7, 165.0], [66.8, 165.0], [66.9, 166.0], [67.0, 166.0], [67.1, 166.0], [67.2, 166.0], [67.3, 166.0], [67.4, 167.0], [67.5, 167.0], [67.6, 167.0], [67.7, 167.0], [67.8, 168.0], [67.9, 168.0], [68.0, 168.0], [68.1, 169.0], [68.2, 169.0], [68.3, 169.0], [68.4, 170.0], [68.5, 170.0], [68.6, 170.0], [68.7, 171.0], [68.8, 171.0], [68.9, 172.0], [69.0, 172.0], [69.1, 172.0], [69.2, 172.0], [69.3, 173.0], [69.4, 173.0], [69.5, 173.0], [69.6, 173.0], [69.7, 174.0], [69.8, 174.0], [69.9, 174.0], [70.0, 174.0], [70.1, 174.0], [70.2, 175.0], [70.3, 175.0], [70.4, 175.0], [70.5, 176.0], [70.6, 176.0], [70.7, 177.0], [70.8, 177.0], [70.9, 177.0], [71.0, 177.0], [71.1, 178.0], [71.2, 178.0], [71.3, 178.0], [71.4, 179.0], [71.5, 179.0], [71.6, 179.0], [71.7, 179.0], [71.8, 180.0], [71.9, 180.0], [72.0, 180.0], [72.1, 181.0], [72.2, 181.0], [72.3, 182.0], [72.4, 182.0], [72.5, 183.0], [72.6, 183.0], [72.7, 183.0], [72.8, 184.0], [72.9, 184.0], [73.0, 184.0], [73.1, 185.0], [73.2, 185.0], [73.3, 186.0], [73.4, 186.0], [73.5, 187.0], [73.6, 187.0], [73.7, 188.0], [73.8, 188.0], [73.9, 188.0], [74.0, 189.0], [74.1, 189.0], [74.2, 190.0], [74.3, 190.0], [74.4, 190.0], [74.5, 191.0], [74.6, 191.0], [74.7, 191.0], [74.8, 192.0], [74.9, 192.0], [75.0, 193.0], [75.1, 193.0], [75.2, 194.0], [75.3, 194.0], [75.4, 194.0], [75.5, 195.0], [75.6, 195.0], [75.7, 195.0], [75.8, 196.0], [75.9, 196.0], [76.0, 197.0], [76.1, 197.0], [76.2, 198.0], [76.3, 198.0], [76.4, 198.0], [76.5, 199.0], [76.6, 199.0], [76.7, 199.0], [76.8, 199.0], [76.9, 200.0], [77.0, 200.0], [77.1, 200.0], [77.2, 200.0], [77.3, 201.0], [77.4, 201.0], [77.5, 201.0], [77.6, 201.0], [77.7, 202.0], [77.8, 202.0], [77.9, 202.0], [78.0, 203.0], [78.1, 203.0], [78.2, 203.0], [78.3, 204.0], [78.4, 204.0], [78.5, 204.0], [78.6, 205.0], [78.7, 205.0], [78.8, 206.0], [78.9, 206.0], [79.0, 206.0], [79.1, 207.0], [79.2, 207.0], [79.3, 207.0], [79.4, 208.0], [79.5, 208.0], [79.6, 208.0], [79.7, 208.0], [79.8, 209.0], [79.9, 209.0], [80.0, 210.0], [80.1, 210.0], [80.2, 210.0], [80.3, 211.0], [80.4, 211.0], [80.5, 212.0], [80.6, 212.0], [80.7, 212.0], [80.8, 213.0], [80.9, 213.0], [81.0, 214.0], [81.1, 214.0], [81.2, 215.0], [81.3, 215.0], [81.4, 216.0], [81.5, 216.0], [81.6, 217.0], [81.7, 217.0], [81.8, 217.0], [81.9, 218.0], [82.0, 218.0], [82.1, 218.0], [82.2, 219.0], [82.3, 219.0], [82.4, 220.0], [82.5, 220.0], [82.6, 221.0], [82.7, 221.0], [82.8, 221.0], [82.9, 222.0], [83.0, 223.0], [83.1, 223.0], [83.2, 223.0], [83.3, 224.0], [83.4, 224.0], [83.5, 225.0], [83.6, 225.0], [83.7, 226.0], [83.8, 226.0], [83.9, 227.0], [84.0, 228.0], [84.1, 228.0], [84.2, 229.0], [84.3, 229.0], [84.4, 230.0], [84.5, 230.0], [84.6, 231.0], [84.7, 231.0], [84.8, 232.0], [84.9, 232.0], [85.0, 232.0], [85.1, 233.0], [85.2, 233.0], [85.3, 234.0], [85.4, 234.0], [85.5, 235.0], [85.6, 235.0], [85.7, 236.0], [85.8, 236.0], [85.9, 237.0], [86.0, 237.0], [86.1, 238.0], [86.2, 239.0], [86.3, 239.0], [86.4, 239.0], [86.5, 240.0], [86.6, 241.0], [86.7, 241.0], [86.8, 242.0], [86.9, 243.0], [87.0, 244.0], [87.1, 245.0], [87.2, 246.0], [87.3, 247.0], [87.4, 248.0], [87.5, 249.0], [87.6, 250.0], [87.7, 251.0], [87.8, 251.0], [87.9, 252.0], [88.0, 253.0], [88.1, 253.0], [88.2, 254.0], [88.3, 255.0], [88.4, 256.0], [88.5, 257.0], [88.6, 258.0], [88.7, 259.0], [88.8, 261.0], [88.9, 262.0], [89.0, 263.0], [89.1, 264.0], [89.2, 265.0], [89.3, 266.0], [89.4, 267.0], [89.5, 268.0], [89.6, 269.0], [89.7, 270.0], [89.8, 271.0], [89.9, 273.0], [90.0, 274.0], [90.1, 274.0], [90.2, 275.0], [90.3, 277.0], [90.4, 278.0], [90.5, 279.0], [90.6, 280.0], [90.7, 282.0], [90.8, 284.0], [90.9, 285.0], [91.0, 289.0], [91.1, 293.0], [91.2, 295.0], [91.3, 297.0], [91.4, 300.0], [91.5, 304.0], [91.6, 306.0], [91.7, 308.0], [91.8, 309.0], [91.9, 310.0], [92.0, 312.0], [92.1, 314.0], [92.2, 316.0], [92.3, 317.0], [92.4, 318.0], [92.5, 319.0], [92.6, 321.0], [92.7, 323.0], [92.8, 324.0], [92.9, 327.0], [93.0, 329.0], [93.1, 331.0], [93.2, 332.0], [93.3, 334.0], [93.4, 337.0], [93.5, 339.0], [93.6, 341.0], [93.7, 342.0], [93.8, 344.0], [93.9, 347.0], [94.0, 350.0], [94.1, 354.0], [94.2, 358.0], [94.3, 362.0], [94.4, 364.0], [94.5, 367.0], [94.6, 370.0], [94.7, 373.0], [94.8, 376.0], [94.9, 378.0], [95.0, 380.0], [95.1, 382.0], [95.2, 383.0], [95.3, 384.0], [95.4, 386.0], [95.5, 388.0], [95.6, 391.0], [95.7, 393.0], [95.8, 395.0], [95.9, 399.0], [96.0, 402.0], [96.1, 406.0], [96.2, 409.0], [96.3, 413.0], [96.4, 416.0], [96.5, 419.0], [96.6, 424.0], [96.7, 432.0], [96.8, 435.0], [96.9, 440.0], [97.0, 448.0], [97.1, 456.0], [97.2, 460.0], [97.3, 469.0], [97.4, 474.0], [97.5, 480.0], [97.6, 485.0], [97.7, 490.0], [97.8, 494.0], [97.9, 497.0], [98.0, 500.0], [98.1, 504.0], [98.2, 512.0], [98.3, 520.0], [98.4, 532.0], [98.5, 543.0], [98.6, 550.0], [98.7, 560.0], [98.8, 589.0], [98.9, 602.0], [99.0, 616.0], [99.1, 637.0], [99.2, 671.0], [99.3, 688.0], [99.4, 735.0], [99.5, 757.0], [99.6, 774.0], [99.7, 790.0], [99.8, 803.0], [99.9, 830.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 44087.0, "series": [{"data": [[0.0, 25097.0], [1100.0, 1.0], [300.0, 4098.0], [600.0, 429.0], [700.0, 366.0], [100.0, 44087.0], [200.0, 13041.0], [400.0, 1861.0], [800.0, 203.0], [900.0, 16.0], [500.0, 801.0]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1791.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 88209.0, "series": [{"data": [[0.0, 88209.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1791.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.24656666666675, "minX": 1.75723608E12, "maxY": 298.24656666666675, "series": [{"data": [[1.75723608E12, 298.24656666666675]], "isOverall": false, "label": "ad clciks", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 486.0, "series": [{"data": [[3.0, 1.0], [4.0, 8.5], [5.0, 15.0], [6.0, 17.5], [7.0, 12.75], [9.0, 16.75], [11.0, 17.666666666666668], [12.0, 25.8], [13.0, 26.0], [14.0, 30.666666666666668], [16.0, 69.0], [17.0, 75.33333333333333], [19.0, 80.5], [20.0, 81.0], [21.0, 81.0], [22.0, 78.0], [23.0, 73.0], [25.0, 72.66666666666667], [26.0, 72.0], [27.0, 84.5], [28.0, 88.5], [29.0, 92.0], [30.0, 91.75], [31.0, 84.0], [33.0, 80.0], [32.0, 80.0], [35.0, 64.0], [34.0, 77.0], [37.0, 64.0], [36.0, 64.0], [39.0, 62.4], [41.0, 61.0], [40.0, 61.0], [42.0, 60.5], [45.0, 56.0], [44.0, 59.333333333333336], [47.0, 56.0], [46.0, 54.5], [49.0, 64.0], [48.0, 63.5], [50.0, 64.66666666666667], [53.0, 90.0], [52.0, 76.0], [55.0, 78.0], [54.0, 90.0], [57.0, 71.0], [56.0, 75.0], [58.0, 69.75], [61.0, 69.0], [60.0, 69.0], [63.0, 69.0], [62.0, 69.0], [65.0, 68.5], [64.0, 68.5], [71.0, 76.75], [68.0, 69.75], [74.0, 77.0], [72.0, 78.0], [79.0, 104.5], [78.0, 103.0], [77.0, 100.5], [76.0, 91.25], [82.0, 115.5], [81.0, 114.0], [80.0, 106.0], [87.0, 126.0], [86.0, 121.0], [85.0, 119.0], [84.0, 116.57142857142858], [91.0, 123.0], [90.0, 122.0], [88.0, 125.0], [95.0, 133.0], [94.0, 131.33333333333334], [93.0, 129.5], [92.0, 127.0], [99.0, 118.2], [98.0, 133.0], [97.0, 134.4], [103.0, 122.66666666666667], [102.0, 120.25], [101.0, 119.0], [105.0, 123.2], [104.0, 122.66666666666667], [110.0, 131.875], [109.0, 125.0], [108.0, 124.66666666666667], [115.0, 151.0], [114.0, 143.875], [113.0, 142.66666666666666], [112.0, 140.0], [119.0, 139.25], [118.0, 142.0], [117.0, 142.0], [116.0, 140.8], [123.0, 143.88888888888886], [121.0, 142.5], [120.0, 139.0], [126.0, 147.55555555555557], [125.0, 116.71428571428571], [127.0, 151.55555555555554], [124.0, 139.0], [129.0, 148.42857142857144], [130.0, 162.25], [132.0, 123.0], [133.0, 153.4], [134.0, 183.0], [135.0, 150.0], [131.0, 156.5], [128.0, 143.5], [136.0, 169.5], [138.0, 181.66666666666666], [139.0, 164.6], [140.0, 151.25], [141.0, 166.0], [142.0, 158.75], [137.0, 153.0], [146.0, 190.66666666666666], [151.0, 180.0], [150.0, 174.75], [149.0, 166.875], [147.0, 167.0], [145.0, 164.85714285714283], [144.0, 162.66666666666666], [159.0, 214.5], [158.0, 212.5], [156.0, 213.5], [155.0, 262.0], [154.0, 202.7142857142857], [152.0, 186.25], [162.0, 218.99999999999997], [167.0, 214.0], [166.0, 214.0], [165.0, 215.0], [164.0, 216.0], [163.0, 215.33333333333334], [161.0, 208.5], [160.0, 211.33333333333334], [172.0, 259.5], [174.0, 245.0], [175.0, 214.2857142857143], [173.0, 214.5], [171.0, 216.33333333333334], [170.0, 218.0], [169.0, 215.5], [168.0, 213.0], [177.0, 246.0], [178.0, 317.0], [179.0, 247.42857142857142], [183.0, 229.50000000000003], [182.0, 219.25], [181.0, 219.75], [180.0, 215.0], [176.0, 211.0], [187.0, 227.0], [191.0, 205.0], [190.0, 198.0], [189.0, 199.0], [188.0, 200.0], [186.0, 200.0], [185.0, 202.0], [184.0, 210.29999999999998], [196.0, 235.11111111111114], [198.0, 216.66666666666666], [195.0, 216.7142857142857], [194.0, 221.66666666666666], [193.0, 232.0], [192.0, 225.11111111111111], [206.0, 223.3], [207.0, 191.33333333333334], [205.0, 155.875], [204.0, 224.25000000000003], [203.0, 231.5], [202.0, 221.16666666666669], [201.0, 213.0], [210.0, 219.5], [212.0, 215.42857142857144], [213.0, 243.75], [215.0, 179.0], [211.0, 181.0], [209.0, 180.85714285714286], [208.0, 190.63636363636363], [217.0, 393.0], [222.0, 377.5], [223.0, 195.8181818181818], [221.0, 188.66666666666666], [220.0, 187.2], [219.0, 177.07142857142853], [218.0, 170.4], [216.0, 174.0], [225.0, 190.86666666666667], [226.0, 196.16666666666669], [229.0, 195.42857142857142], [230.0, 202.99999999999997], [231.0, 259.86956521739137], [228.0, 175.25], [227.0, 178.58333333333334], [224.0, 174.5], [232.0, 213.47368421052627], [234.0, 259.6], [235.0, 355.45454545454544], [236.0, 236.46666666666673], [237.0, 486.0], [239.0, 399.24999999999994], [238.0, 171.57142857142856], [233.0, 161.5], [240.0, 242.8], [241.0, 293.8571428571429], [243.0, 444.66666666666663], [244.0, 210.14285714285714], [247.0, 164.5], [246.0, 158.3], [245.0, 158.0], [242.0, 158.5], [249.0, 215.5], [250.0, 191.6153846153846], [255.0, 207.66666666666666], [254.0, 206.4], [253.0, 193.05263157894737], [252.0, 188.79999999999998], [251.0, 189.33333333333334], [248.0, 111.0], [257.0, 226.38888888888889], [258.0, 297.0], [259.0, 202.33333333333334], [268.0, 250.24137931034485], [269.0, 347.0769230769231], [270.0, 341.5], [271.0, 266.235294117647], [260.0, 212.46341463414635], [261.0, 324.8333333333333], [262.0, 249.38095238095235], [263.0, 240.5], [264.0, 230.08196721311475], [265.0, 462.0], [266.0, 335.6], [267.0, 162.75], [285.0, 230.671875], [273.0, 344.8333333333333], [274.0, 256.16666666666674], [277.0, 426.3333333333333], [276.0, 221.82608695652175], [279.0, 224.71428571428575], [272.0, 230.8571428571428], [278.0, 202.66666666666666], [280.0, 269.42857142857144], [281.0, 260.0434782608695], [287.0, 220.64705882352942], [286.0, 221.2727272727273], [284.0, 249.70833333333331], [275.0, 221.33333333333334], [283.0, 261.5], [282.0, 264.3333333333333], [291.0, 228.82142857142858], [294.0, 419.2857142857143], [288.0, 299.7692307692307], [290.0, 213.875], [289.0, 212.6], [292.0, 338.26851851851853], [296.0, 434.7142857142857], [298.0, 226.87091503267968], [299.0, 434.6], [300.0, 159.64366395440507], [297.0, 349.6406249999999], [293.0, 372.11881188118826], [1.0, 1.0]], "isOverall": false, "label": "CLick", "isController": false}, {"data": [[298.24656666666675, 161.69373333333454]], "isOverall": false, "label": "CLick-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 231000.0, "minX": 1.75723608E12, "maxY": 592500.0, "series": [{"data": [[1.75723608E12, 231000.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75723608E12, 592500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 161.69373333333454, "minX": 1.75723608E12, "maxY": 161.69373333333454, "series": [{"data": [[1.75723608E12, 161.69373333333454]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 161.68695555555541, "minX": 1.75723608E12, "maxY": 161.68695555555541, "series": [{"data": [[1.75723608E12, 161.68695555555541]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12353333333333232, "minX": 1.75723608E12, "maxY": 0.12353333333333232, "series": [{"data": [[1.75723608E12, 0.12353333333333232]], "isOverall": false, "label": "CLick", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75723608E12, "maxY": 1130.0, "series": [{"data": [[1.75723608E12, 1130.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75723608E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75723608E12, 273.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75723608E12, 762.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75723608E12, 155.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75723608E12, 388.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 88.0, "minX": 246.0, "maxY": 746.0, "series": [{"data": [[521.0, 746.0], [606.0, 152.0], [728.0, 391.0], [757.0, 423.0], [843.0, 367.0], [858.0, 220.0], [901.0, 328.0], [1068.0, 214.0], [1137.0, 272.0], [1161.0, 179.0], [1180.0, 238.0], [1173.0, 225.0], [1280.0, 152.0], [1315.0, 152.0], [1379.0, 227.0], [1402.0, 208.5], [1393.0, 134.0], [1390.0, 210.0], [1433.0, 99.0], [1533.0, 200.0], [1548.0, 205.0], [1622.0, 178.0], [1667.0, 192.0], [1717.0, 175.0], [1725.0, 122.0], [1763.0, 134.0], [1789.0, 128.0], [1945.0, 151.0], [1933.0, 148.0], [1934.0, 159.0], [1996.0, 147.0], [2023.0, 134.0], [2084.0, 127.0], [2162.0, 141.0], [2284.0, 116.0], [2221.0, 127.0], [2424.0, 113.0], [2445.0, 119.0], [2494.0, 112.0], [2662.0, 107.0], [2602.0, 90.0], [2797.0, 91.0], [2845.0, 108.0], [2976.0, 92.0], [3177.0, 90.0], [3130.0, 99.0], [3190.0, 88.0], [3315.0, 91.0], [3226.0, 89.0], [246.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3315.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 88.0, "minX": 246.0, "maxY": 746.0, "series": [{"data": [[521.0, 746.0], [606.0, 152.0], [728.0, 391.0], [757.0, 423.0], [843.0, 367.0], [858.0, 220.0], [901.0, 328.0], [1068.0, 214.0], [1137.0, 272.0], [1161.0, 179.0], [1180.0, 238.0], [1173.0, 225.0], [1280.0, 152.0], [1315.0, 152.0], [1379.0, 227.0], [1402.0, 208.5], [1393.0, 134.0], [1390.0, 210.0], [1433.0, 99.0], [1533.0, 200.0], [1548.0, 205.0], [1622.0, 178.0], [1667.0, 192.0], [1717.0, 175.0], [1725.0, 122.0], [1763.0, 134.0], [1789.0, 128.0], [1945.0, 151.0], [1933.0, 148.0], [1934.0, 159.0], [1996.0, 147.0], [2023.0, 134.0], [2084.0, 127.0], [2162.0, 141.0], [2284.0, 116.0], [2221.0, 127.0], [2424.0, 113.0], [2445.0, 119.0], [2494.0, 112.0], [2662.0, 107.0], [2602.0, 90.0], [2797.0, 91.0], [2845.0, 108.0], [2976.0, 92.0], [3177.0, 90.0], [3130.0, 99.0], [3190.0, 88.0], [3315.0, 91.0], [3226.0, 89.0], [246.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3315.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1500.0, "minX": 1.75723608E12, "maxY": 1500.0, "series": [{"data": [[1.75723608E12, 1500.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1500.0, "minX": 1.75723608E12, "maxY": 1500.0, "series": [{"data": [[1.75723608E12, 1500.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75723608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1500.0, "minX": 1.75723608E12, "maxY": 1500.0, "series": [{"data": [[1.75723608E12, 1500.0]], "isOverall": false, "label": "CLick-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1500.0, "minX": 1.75723608E12, "maxY": 1500.0, "series": [{"data": [[1.75723608E12, 1500.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75723608E12, "title": "Total Transactions Per Second"}},
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

