'use strict';
angular.module('demo', [
  'demo.services',
  'demo.strlimit',
  'demo.controllers',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/home");
  
  $stateProvider
  .state('home', {
    url: "/home",
    views : {
      "" : {
        templateUrl:"controllers/home/home.html",
        controller:"HomeCtrl",
        controllerAs:"vm"
      },
      "header@home":{
        templateUrl:"shared/header/header.html"
      },
      "footer@home":{
        templateUrl:"shared/footer/footer.html"
      }
    }
  });
}]);