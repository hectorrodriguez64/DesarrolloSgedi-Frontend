'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos-list', {
        url: '/documentos-list',
        template: '<documentos-list></documentos-list>'
      });
  });
