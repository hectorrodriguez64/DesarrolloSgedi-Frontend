'use strict';
  function documentosService($resource,API){
      return $resource(API + '/api/upload_documents',{
        id:'@id'
      },{
        update:{
          method:'PUT'
        }
      });
  }
  documentosService.$inject = ['$resource','API'];
  angular.module('startUpApp')
    .factory('documentosService', documentosService);
