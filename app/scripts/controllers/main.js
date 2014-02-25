'use strict';

angular.module('forChoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.chores = [
      'clean the bathroom',
      'do the dishes',
      'wash the laundry'
    ];
  });
