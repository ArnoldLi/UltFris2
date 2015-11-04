define(['controller-broker'
       , 'toastr'
       , 'firebase'
       , 'listSvc'       
       , 'firebaseListSvc'

], function (ctrlModule, toaster) {

    ctrlModule.controller('indexController', function ($scope, $location, list, authenticate, firebaseListSvc) {
        $scope.test = list;
        $scope.hello = 'hello world';

        var list = firebaseListSvc.listActions("queue");
        
        list.$add({ foo: "bar" }).then(function (ref) {
           var id = ref.key();
           console.log("added record with id " + id);
           list.$indexFor(id); // returns location in the array
        });

        
    });

});