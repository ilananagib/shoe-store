app.controller('ShoeController', ['ShoeService', function (ShoeService) {
    console.log('ShoeController works!');


    var self = this;
    self.shoes = ShoeService.shoes;

    self.getShoeService = function () {
        ShoeService.getShoes();
    }

}]);


// self.postShoe = function (shoes) {
//     $http({
//         method: 'POST',
//         url: '/shoe',
//         data: shoes
//     })
//         .then(function (response) {
//             self.getShoes();
//             console.log(response)
//         })
//         .catch(function (error) {
//             console.log('error on /shoe POST', error)
//         })
// }

// self.getShoes = function () {          move everything to service.js
//     $http({
//         method: 'GET',
//         url: '/shoe',

//     })
//         .then(function (response) {
//             self.shoes = response.data;
//             console.log(response.data)
//         })
//         .catch(function (error) {
//             console.log('error on /shoe GET', error)
//         })
// }
//     self.getShoes();

// });

