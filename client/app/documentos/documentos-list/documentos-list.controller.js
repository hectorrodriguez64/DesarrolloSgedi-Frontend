'use strict';
(function(){

class DocumentosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('documentosList', {
    templateUrl: 'app/documentos/documentos-list/documentos-list.html',
    controller: DocumentosListComponent
  });

})();
