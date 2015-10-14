// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular
	.module('app')
    .controller('MainController', MainController);

    function MainController(){
    	var self = this;

    	self.person = {
    		name: "John"
    	}
    	
    	console.log(self)
    	// Here is where you write all the code that 
    	// describes how your controller should work!


    }

