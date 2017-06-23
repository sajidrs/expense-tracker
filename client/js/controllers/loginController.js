myApp.controller('loginController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
    
    $scope.delete = function(index){
        Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
            $scope.customers.splice(index, 1)
        })
    }
    
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, function(){
            $scope.form = {};
        })
    }
}]);