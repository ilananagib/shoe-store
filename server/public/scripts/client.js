var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['$http', function ($http) {
    console.log('ShoeController works!');
}]);

var self = this;
self.shoes = [];
self.newShoe = {};

self.postShoe = function (){
    $http({
        method: 'POST',
        url: '/shoe',
        data: self.newShoe
    })
    .then(function(response){
        self.getShoe();
        console.log(response)
    })
    .catch(function(error){
        console.log('error on /shoe POST', error)
    })
}

self.getShoe = function (){
    $http({
        method: 'GET',
        url: '/shoe'
    })

    .then(function(response){
        self.shoes = response.data;
        console.log(rersponse.data)
    })
    .catch(function(error){
        console.log('error on /shoe GET', error)
    })
}
self.getShoe();





