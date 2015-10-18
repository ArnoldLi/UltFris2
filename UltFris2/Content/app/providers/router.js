
define(['angular'], function (angular) {

    angular.module('app.providers', [])
           .constant('path', {
               root: window.location.protocol + '//' + window.location.host + '/',               
               views: window.location.protocol + '//' + window.location.host + '/Content/app/views/'               
           })
           .provider('$appRouter', ['path', function (path) {
               var that = {};
               that.$get = [function () {
                   return that;
               }]
               that.route = function (baseName, resolveFunc) {
                   var routeDef = {};
                   routeDef.templateUrl = path['views'] + baseName + '.html';
                   routeDef.controller = baseName + 'Controller';

                   if (resolveFunc && angular.isObject(resolveFunc))
                       routeDef.resolve = resolveFunc;

                   return routeDef;
               }
               return that;
           }]);
});