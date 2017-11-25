'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos', {
        url: '/documentos',
        parent: 'profile',
        template: '<documentos></documentos>'
      });
  });
