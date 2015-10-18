require.config({
    baseUrl: 'Content/app',
    paths: {
        'jquery': 'lib/jquery-2.1.4.min',
        'toastr': 'lib/toastr.min',

        'angular': 'angular/angular.min',
        'angular-route': 'angular/angular-route.min',
        'angular-resource': 'angular/angular-resource.min',
        'angular-ui': 'ng-bootstrap/ui-bootstrap-tpls-0.14.2.min',

        'angularfire': 'firebase/angularfire.min',
        'firebase': 'firebase/firebase',

        'domReady': 'lib/domReady',
        'router': 'providers/router',
        'controller-broker': 'controllers/controller.broker',
        'service-broker': 'services/service.broker',

        'indexController': 'controllers/indexController',

        'playerSvc': 'services/service.players',
        'queueSvc': 'services/service.queue',
        'firebaseSvc': 'services/service.firebase'


    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-ui': {
            deps: ['angular']
        },
        'angularfire':{
            deps: ['angular',
                   'firebase']
        },
        'jquery': {
            exports: '$'
        },
        'toastr': {
            exports: 'toastr',
            deps: ['jquery']
        },
        //'firebase':
        //{
        //    exports: 'firebase'
        //},
        'ng-deps': ['angular-route', 'angular-resource', 'angular-ui', 'angularfire']
    }
});

define(['require', 'angular', 'app']
      , function (require, ng) {
          require(['domReady!'], function (document) {
              ng.bootstrap(document, ['App']);
          });
      });
