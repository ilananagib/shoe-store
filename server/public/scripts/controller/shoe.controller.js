app.controller('ShoeController', ['ShoeService', function (ShoeService) {
    console.log('ShoeController works!');
}]);

var self = this;
self.shoes = [];
self.newShoe = {};