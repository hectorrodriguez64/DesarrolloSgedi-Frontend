'use strict';

describe('Component: DocumentosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DocumentosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DocumentosCreateComponent = $componentController('DocumentosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
