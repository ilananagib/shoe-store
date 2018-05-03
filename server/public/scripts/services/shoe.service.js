app.service('ShoeService', function ($http) {
    console.log('ShoeService is loaded');


    var self = this;
    self.shoes = {list: []};

    self.getShoes = function () {
        $http({
            method: 'GET',
            url: '/shoe',

        })
            .then(function (response) {
                self.shoes.list = response.data;
                console.log(response.data)
            })
            .catch(function (error) {
                console.log('error on /shoe GET', error)
            })
    }
    self.getShoes();

});

