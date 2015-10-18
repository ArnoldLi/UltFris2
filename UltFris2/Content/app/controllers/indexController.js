define(['controller-broker'
       , 'toastr'
       , 'firebase'
       , 'playerSvc'       
       , 'firebaseSvc'

], function (ctrlModule, toaster) {

    ctrlModule.controller('indexController', function ($scope, $location, firebaseQueueSvc, players, firebaseQueueAuthSvc) {
        $scope.test = players;
        $scope.hello = 'hello world';

        var list = firebaseQueueSvc;
        
        //list.$add({ foo: "bar" }).then(function (ref) {
        //    var id = ref.key();
        //    console.log("added record with id " + id);
        //    list.$indexFor(id); // returns location in the array
        //});
    });

});