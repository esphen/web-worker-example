/*global onmessage:true */
'use strict';

// Holds runnable functions
var functionsObject = {
    getNumbers: function() {
        var result = [];
        for (var i = 100000000 - 1; i >= 0; i--) {
            result.push(i);
        };
        this.functionsObject.filterResults(result);
    },
    filterResults: function (items) {
        // Filter
        var filteredResult = [];
        for (var i = items.length - 1; i >= 0; i--) {
            if(items[i] <= 10) {
                filteredResult.push(items[i]);
            }
        };
        self.postMessage(filteredResult);
    }
};

// Gets run on message recieved
self.onmessage = function onmessage(oEvent) {
    if (oEvent.data instanceof Object &&
        oEvent.data.hasOwnProperty('functionName') &&
        oEvent.data.hasOwnProperty('functionArgs')) {

        functionsObject[oEvent.data.functionName].apply(self, oEvent.data.functionArgs);
    }
};
