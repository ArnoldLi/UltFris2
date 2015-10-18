define(['angular'], function (ng) {
    return ng.module('app.services', ['ngResource','firebase'])
       .value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
       .value('fbURL', 'https://ultfris.firebaseio.com')
    ;
});