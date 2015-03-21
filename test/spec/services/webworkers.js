'use strict';

describe('Service: WebWorkers', function () {

  // load the service's module
  beforeEach(module('webWorkersApp'));

  // instantiate service
  var WebWorkers;
  beforeEach(inject(function (_WebWorkers_) {
    WebWorkers = _WebWorkers_;
  }));

  it('should do something', function () {
    expect(!!WebWorkers).toBe(true);
  });

});
