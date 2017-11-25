'use strict';

(function(){

class ProfileComponent {
  constructor($q,$state,Upload,API,AuthService) {
    this.$q = $q;
    this.$state = $state;
    this.Upload = Upload;
    this.API = API;
    this.AuthService = AuthService;
  }

  $onInit(){
    this.imgPerfil = this.AuthService.getImagePerfil();
    console.log("IMG Perfil ",this.imgPerfil);
    this.idUsuario = this.AuthService.idUsuario();
    console.log  ('idDelUsuario', this.idUsuario);
  }
  create(from) {
      this.Upload.upload({
          url: this.API + '/api/upload',
          data: {
            file: this.file,
            'idUser': this.idUsuario
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
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
