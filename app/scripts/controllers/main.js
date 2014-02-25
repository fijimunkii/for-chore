'use strict';

angular.module('forChoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.chores = [
      'clean the bathroom',
      'do the dishes',
      'wash the laundry'
    ];
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
