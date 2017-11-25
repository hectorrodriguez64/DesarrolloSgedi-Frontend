'use strict';
function usuariosService($resource,API){
    return $resource(API + '/api/users/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
      


    });
}
usuariosService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('usuariosService',usuariosService);
