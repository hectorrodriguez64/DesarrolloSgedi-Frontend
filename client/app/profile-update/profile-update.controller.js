'use strict';
(function(){

class ProfileUpdateComponent {
  constructor(AuthService, usuariosService, ciudadesService, countriesService, tiposDocumentosService, departamentsService, $stateParams, $state, localStorageService) {
    this.usuariosService = usuariosService;
    this.ciudadesService = ciudadesService;
    this.countriesService = countriesService;
    this.AuthService = AuthService;
    this.tiposDocumentosService = tiposDocumentosService;
    this.departamentsService = departamentsService;
    this.$stateParams =  $stateParams;
    this.$state = $state;
    this.localStorageService = localStorageService;
  }
  getdepartaments() {
    this.departamentsService.getdepartaments({ idCountry: this.idCountry }).$promise
      .then(response => {
        this.departamentos = response;

      })
      .catch(err => console.error(err));
  }

  $onInit(){
    this.tiposDocumentosService.query().$promise
      .then(response => {
        console.log('TYPEDOCUMENT OK', response);
        this.tipoDocumento = response;
      })
      .catch(err => {
        console.log('ERROR', err);
      });
    this.countriesService.query().$promise
      .then(response => {
        this.country = response;
        console.log(this.country);
      })
      .catch(err => console.error(err));

    console.log('IdUserLogin',this.AuthService.idUsuario());
    this.usuariosService.get({id:this.AuthService.idUsuario()}).$promise
      .then(response => {
        this.user = response;
        console.log(this.user);
      })
      .catch(err => console.error(err));
  }
  querySearch(searchText) {
    return this.ciudadesService.getCiudades({ nombre: searchText }).$promise
      .then(response => {
        console.log("REST", response);
        return response;
      })
      .catch(err => console.log(err));
  }
  selectedItemChange(item) {
    console.log("TIEM", item);
    if (item.id != undefined) {
      console.log("Este es:", item);
      this.user.cities.id = item.id;
      console.log('Usuario ', this.user);
    }

  }
  getCiudades() {
    this.ciudadesService.getCiudades({ idDepartament: this.idDepartament }).$promise
      .then(response => {
        this.ciudades = response;
      })
      .catch(err => console.error(err));
  }

  updateUser() {
    this.usuariosService.update({ id: this.user.id }, this.user).$promise
      .then(response => {
        console.log("Usuario actualizado")
        this.$state.go('main');
      })
      .catch(err => console.error(err));
  }

}

angular.module('startUpApp')
  .component('profileUpdate', {
    templateUrl: 'app/profile-update/profile-update.html',
    controller: ProfileUpdateComponent,
    controllerAs: 'vm'
  });
})();
