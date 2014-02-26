'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('forChoreApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no chores to start', function () {
    expect(scope.chores.length).toBe(0);
  });
});
