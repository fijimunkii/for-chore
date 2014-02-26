'use strict';

angular.module('forChoreApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var choresinStore = localStorageService.get('chores');
    $scope.chores = choresInStore && choresInStore.split('\n') || [];

    $scope.$watch('chores', function() {
      localStorageService.add('chores', $scope.chores.join('\n'));
    }, true);

    $scope.addChore = function() {
      // TODO enhance with error checking
      // particularly, blank chores
      $scope.chores.push($scope.chore);
      $scope.chore = '';
    };
  
    $scope.removeChore = function(index) {
      $scope.chores.splice(index, 1);
    };
  });
