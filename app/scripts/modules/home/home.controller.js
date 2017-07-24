/**
 * Created by Alejandro Leon on 20/07/2017.
 */
(function(){
    'use strict';

    angular.module('workTrack').controller('homeCtrl',homeCtrl);

    homeCtrl.$inject = ['$scope','$q'];

    function homeCtrl($scope,$q){
        var scope = $scope;
        var vm=this;

        vm.hola = "HOLA!!";

        //vm es establecido en controllerAs, y en este caso extendemos el contexto de una manera más encapsulada.
        //El problema de esta aproximación radica en que es más complejo mantener el ambito de las variables.
        //Aproximación de Todd Motto - NOTA: Prefiero la de Jhon Papa
        /*
        angular.extend(this, {
            hola: "JELOUUU WOOORLDD",
            account: {user:"",pass:""},//Esto se debe refactorizar a un servicio
            logIn:login
        });*/

        function login(){

        }
    }
})();