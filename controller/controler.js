var myApp = angular.module('demoApp', []);

myApp.controller('listadoCtrl', function ($scope, $http) {
  	$http.get('http://localhost:8080/BDD_docentes/webresources/com.model.profesor').success(function(data) {
    $scope.elementos =data;
    $scope.buscar=elementos;
    console.log(data)
 });
 
});
