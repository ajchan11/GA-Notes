angular.module('bowtiesApp')

.controller('BowtiesController', BowtiesController)

BowtiesController.$inject = ['$http']

function BowtiesController($http){
	// variable capture
	var vm = this

	vm.bowties = []

	$http.get('https://bowties-restful-api.herokuapp.com/api/bowties/')
		.then(function(response){
			vm.bowties = response.data
		})

	vm.addTie = function(){
		$http.post('https://bowties-restful-api.herokuapp.com/api/bowties', {
			material: vm.material, pattern: vm.pattern
		}).then(function(){
			vm.bowties.push({material: vm.material, pattern: vm.pattern})
			vm.material = ""
			vm.pattern = ""
		})

	}
}

