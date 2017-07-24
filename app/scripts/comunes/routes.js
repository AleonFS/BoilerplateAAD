/**
 * Created by Alejandro Leon on 20/07/2017.
 */
(function(){
    'use strict';

    angular.module('workTrack').config(routes);

    routes.$inject = ['$routeProvider','$locationProvider'];

    function routes ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tmpl/modules/home/view/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            });
//                .when('/Book/:bookId/ch/:chapterId', {
//                    templateUrl: 'chapter.html',
//                    controller: 'ChapterCtrl',
//                    controllerAs: 'chapter'
//                });
        $routeProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    };

})();
