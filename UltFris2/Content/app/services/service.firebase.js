define(['service-broker',
        'firebase'
], function (svcModule) {
    svcModule.factory('firebaseQueueAuthSvc', ['fbURL', 'fbAuthToken', function (fbURL, fbAuthToken) {
            var firebase = new Firebase(fbURL + "/queue");        
            firebase.authWithCustomToken(fbAuthToken, function (error, authData) {})
            return firebase;
        }])
        .factory('firebaseQueueSvc', ['$firebaseArray', 'fbURL', function ($firebaseArray, fbURL) {
            var firebase = $firebaseArray(new Firebase(fbURL + "/queue"));       
            return firebase;
        }])
    ;
});
