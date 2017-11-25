'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile-update', {
        url: '/profile-update',
        parent: 'profile',
        template: '<profile-update></profile-update>'
      });
  });
