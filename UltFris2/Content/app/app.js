define(['angular',
        'ng-deps',
        'router',
        'controller-broker',
        'service-broker',

        'indexController',
        'queueController'
   

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
                list: ['$q', '$route', 'listSvc', function ($q, $route, listSvc) {
                    var deferred = $q.defer();
                    listSvc.getList('players', deferred);
                    return deferred.promise;
                }],
                authenticate: ['firebaseListSvc', function(firebaseListSvc){
                    return firebaseListSvc.authenticate("queue");
                }]
            }
        })
        .when('/queue', {
            templateUrl: 'Content/app/view/queue.html',
            controller: 'queueController',
            resolve:
            {
                list: ['$q', '$route', 'listSvc', function ($q, $route, listSvc) {
                    var deferred = $q.defer();
                    listSvc.getList('queue', deferred);
                    return deferred.promise;
                }],
                authenticateTeamA: ['firebaseListSvc', function(firebaseListSvc){
                    return firebaseListSvc.authenticate("teamA");
                }],
                authenticateTeamB: ['firebaseListSvc', function(firebaseListSvc){
                    return firebaseListSvc.authenticate("teamB");
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