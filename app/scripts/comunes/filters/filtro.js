(function(){
    "Use Strict"
    angular.app.filter('nombreFiltro',nombreFiltro);

    nombreFiltro.$inject = ['dependencia'];

    function nombreFiltro(dependencia){

        return "foo";

    }
})();