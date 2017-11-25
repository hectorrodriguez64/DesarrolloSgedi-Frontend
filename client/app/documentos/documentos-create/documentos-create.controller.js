'use strict';
(function(){

class DocumentosCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('documentosCreate', {
    templateUrl: 'app/documentos/documentos-create/documentos-create.html',
    controller: DocumentosCreateComponent
  });

})();
