'use strict';

describe('Component: DocumentosListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DocumentosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DocumentosListComponent = $componentController('DocumentosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
