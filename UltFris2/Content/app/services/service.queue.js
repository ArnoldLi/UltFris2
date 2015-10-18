define(['service-broker'], function (svcModule) {
    svcModule.factory('queueSvc', ['$http', function ($http) {

        var queue = [];

        var factory = {
            getPlayers: function (applicationNum, deferred) {
                $http.get('https://ultfris.firebaseio.com/queue.json')
                    .success(function (res) {
                        deferred.resolve(res);
                    }).error(deferred.reject);
            }
        };

        Object.defineProperty(factory, 'queue', {
            get: function () {
                return queue;
            }
        });

        return factory;
    }]);
});
