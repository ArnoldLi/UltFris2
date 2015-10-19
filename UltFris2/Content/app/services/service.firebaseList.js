define(['service-broker',
        'firebase'
], function (svcModule) {
    svcModule.factory('firebaseListSvc', ['$firebaseArray','fbURL', 'fbAuthToken', function ($firebaseArray, fbURL, fbAuthToken) {
            return {
                authenticate : function (option) {
                    var firebase = new Firebase(fbURL + "/"+ option);        
                    firebase.authWithCustomToken(fbAuthToken, function (error, authData) {})
                    return firebase;
                }
                , listActions: function (option) {
                    var firebase = $firebaseArray(new Firebase(fbURL + "/" + option));       
                    return firebase;
                }
            } 
        }])
    ;
});
