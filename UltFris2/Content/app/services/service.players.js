define(['service-broker'], function (svcModule) {
    svcModule.factory('playerSvc', ['$http', function ($http) {

        var players = [];

        var factory = {
            getPlayers: function (applicationNum, deferred) {
                $http.get('https://ultfris.firebaseio.com/players.json')
                    .success(function (res) {
                        deferred.resolve(res);
                    }).error(deferred.reject);
            }
        };

        Object.defineProperty(factory, 'players', {
            get: function () {
                return players;
            }
        });

        return factory;
    }]);
});
