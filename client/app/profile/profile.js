'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: '<profile></profile>'
    });
});
