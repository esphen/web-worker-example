/*global onmessage:true */

'use strict';

var getNumbers = function ($scope) {
    var result = [];
    for (var i = 100000000 - 1; i >= 0; i--) {
        result.push(i);
    };

    // Filter
    var filteredResult = [];
    for (var i = result.length - 1; i >= 0; i--) {
    	if(result[i] <= 10) {
			filteredResult.push(result[i]);
    	}
    };
    self.postMessage({result: filteredResult});
};

self.onmessage = function onmessage(oEvent) {
  getNumbers();
};