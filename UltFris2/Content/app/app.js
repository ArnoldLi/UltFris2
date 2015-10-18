define(['angular',
        'ng-deps',
        'router',
        'controller-broker',
        'service-broker',

        'indexController',
   

], function (ng) {
    var app = ng.module('App', ['ngRoute'
                                   , 'app.controllers'
                                   , 'app.services'
                                   , 'app.providers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'Content/app/views/main.html',
            controller: 'indexController',
            resolve: {
                players: ['$q', '$route', 'playerSvc', function ($q, $route, playerSvc) {
                    var deferred = $q.defer();
                    playerSvc.getPlayers($route.current.params.applicationnum, deferred);
                    return deferred.promise;
                }]
            }
        })
        
        .otherwise({
            redirecTo: '/'
        })

        ;
    }]);

    return app;
});