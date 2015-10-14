angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;
  vm.all = [];
  vm.addPresident = addPresident;
  vm.newPresident = {};
  vm.getPresidents = getPresidents;
  vm.deletePresident = deletePresident;

  getPresidents();
  function getPresidents(){
    $http
      .get('http://localhost:8080/api/presidents')
      .then(function(response){
        vm.all = response.data.presidents;
    });
  }

  function addPresident(){
    $http
      .post('http://localhost:8080/api/presidents', vm.newPresident)
      .then(function(response){
        getPresidents();
    });
    vm.newPresident = {};
  }

  function deletePresident(president){
    $http
      .delete("http://localhost:8080/api/presidents/" + president._id)
      .then(function(response){
        var index = vm.all.indexOf(president);
        vm.all.splice(index, 1);
      });
  }
}
