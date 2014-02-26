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

  //removing the word should and adding tests
  it('will have no chores on intitialization', function () {
    expect(scope.chores.length).toBe(0);
  });

  it('adds items to the list', function () {
    scope.chore = 'Test 1';
    scope.addChore('Make the Bed');
    expect(scope.chores.length).toBe(1);
  });

  it('removes items to the list', function () {
    scope.chore = 'Test 1';
    scope.removeChore(0);
    expect(scope.chores.length).toBe(0);
  });
});
