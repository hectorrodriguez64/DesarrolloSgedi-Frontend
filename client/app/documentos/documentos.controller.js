'use strict';
(function(){

class DocumentosComponent {
  constructor(documentosService, $state, Upload, API, AuthService) {
    this.documentosService = documentosService;
    this.$state = $state;
    this.Upload = Upload;
    this.API = API;
    this.AuthService = AuthService;
  }

  $onInit(){
    this.documentosService.query().$promise
    .then(response => {
      console.log('Documentos OK',response);
      this.arreglo = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

    this.documents = this.AuthService.getDocuments();
    console.log("Documento ",this.documents);
    this.idDocuments = this.AuthService.idDocuments();
    console.log  ('idDelDocumento', this.idDocuments);
  }
  success(desserts) {
    this.desserts = this.desserts;
  }

  create(from) {
      this.Upload.upload({
          url: this.API + '/api/upload_documents/documents',
          data: {
            file: this.file,
            'idDocuments':1
            /*'idUsuario': this.AuthService.idUsuario();*/
          }
      }).then(function(resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          console.log('OK');
      }, function(resp) {
          console.log('Error status: ' + resp.status);
      }, function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  }


}

angular.module('startUpApp')
  .component('documentos', {
    templateUrl: 'app/documentos/documentos.html',
    controller: DocumentosComponent,
    controllerAs: 'vm'
  });

})();
