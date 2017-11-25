'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos-create', {
        url: '/documentos-create',
        template: '<documentos-create></documentos-create>'
      });
  });
