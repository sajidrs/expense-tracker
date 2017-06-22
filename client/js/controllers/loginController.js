myApp.controller('loginController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, function(){
            $scope.form = {};
        })
    }
}]);