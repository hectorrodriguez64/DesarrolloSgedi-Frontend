'use strict';

(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }

  /*onInit(){
    $('#pwdModal').modal('hide');
  }*/

  login(){
    console.log('DATOS DE LOGIN ',this.user);
    this.authService.login(this.user);
  }


}

LoginComponent.$inject = ['AuthService'];
angular.module('startUpApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
