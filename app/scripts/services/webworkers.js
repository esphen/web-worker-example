'use strict';

/**
 * @ngdoc service
 * @name webWorkersApp.WebWorkers
 * @description
 * # WebWorkers
 * Factory in the webWorkersApp.
 */
 angular.module('webWorkersApp')
 .factory('WebWorkers', function ($q) {
  'use strict';

  var _getWorker;

  _getWorker = function _getWorker(functionName, functionParams) {

    var deferred;
    var myWorker = new Worker('scripts/worker.js');

    deferred = $q.defer();

    myWorker.onmessage = function onmessage(oEvent) {
      deferred.resolve(oEvent.data);
    };

    try {
        myWorker.postMessage(null);
    } catch (e) {
        myWorker.terminate();
        deferred.reject(e);
    }

    return deferred.promise;

  };

  return {

    f: function f(functionName, functionParams) {

      if (arguments.length < 2) {
        throw new TypeError('Not enough arguments. ' +
        'The first param is a function name as string. ' +
        'The second is an array of data types');
      }

      if (typeof arguments[0] !== 'string') {
        throw new TypeError('First parameter must be a string. ' +
        'This is the name of the function');
      }

      if (!Array.isArray(arguments[1])) {
        throw new TypeError('Second parameter must be an array. ' +
        'This is an array of data to be processed');
      }

      return _getWorker(functionName, functionParams);

    }

  };

});
