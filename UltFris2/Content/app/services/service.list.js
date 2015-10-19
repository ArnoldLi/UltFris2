define(['service-broker'], function (svcModule) {
    svcModule.factory('listSvc', ['$http', function ($http) {

        var list = [];

        var factory = {
            getList: function (type, deferred) {
                $http.get('https://ultfris.firebaseio.com/' + type + '.json')
                    .success(function (res) {
                        deferred.resolve(res);
                    }).error(deferred.reject);
            }
        };

        Object.defineProperty(factory, 'list', {
            get: function () {
                return list;
            }
        });

        return factory;
    }]);
});
