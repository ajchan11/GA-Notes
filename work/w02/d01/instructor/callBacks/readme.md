# 6.3 - JavaScript callBacks

### Roadmap
| **Section**          				| **Timing** |        **Summary**                  
|--------------------------------	|------- |---------------------
| Review 								| 5 min  | 6.3.0 - Functions
| Basic Concepts						| 10 min | 6.3.1 - First Class Objects
| Practice							| 10 min | 6.3.2 - Referencing vs. Invoking
| UnNamed functions					| 10 min | 6.3.3 - Lambdas / Anonymous 
| Advanced scope						| 25 min | 6.3.4 - Context & Scope & `this`
| Asynchronous & Event Listeners	| 15 min | 6.3.5 - Passing named functions or lambdas as callBacks


### SWBAT: 
- Explain the concept of a 'callback'
- Describe the difference between asynchronous and synchronous program execution, and why callbacks are important to asynchronous program flow
- Explain the difference between referencing and invoking a function.
- Describe what an anonymous function is and when you would use one
- Explain Javascript 'context' and what the value of the 'this' keyword refers to
- Explain what the default context of Javascript executing in the browser is.
- Pass a named function as a callback to another function
- Pass an anonymous function as a callback to another function



## 6.3.1 - Functions: First Class Objects (10 min)
Javascript treats functions as first class objects. Which means that it supports creating new functions as a program runs, storing them in data structures, passing them as arguments to other functions, and returning them as values.

**More simply put: JavaScript treats functions as variables.**

Essentially they'res just a special object that can do all the things a regular object can do.

[Function is an instance of Object](http://repl.it/BCGC)

## 6.3.2 - Referencing vs. Invoking a function - 10 min

### Referencing
- [You can store a function in a variable](http://repl.it/BCGJ)
- [Pass a function as an argument to another function](http://repl.it/BCGL/1)

### Invoking

> CFU: Pair up, make a repl.it, first driver should make a function `doubler` that takes in a single number argument and doubles it. SWITCH. Second driver try to invoke this funciton and make it break with a string, now fix the function so it logs an error if the `typeof` is not a number

## 6.3.3 - Lambdas / Anonymous Functions - 10 min

[An anonymous function is a function without a name](http://repl.it/BCGO)

When you call `function(){}`, it's returning a function object that is invoked and the body is executed
For Example:

```js
function foo(msg){
    console.log(msg);
}
```

Is the same as:

```js
var foo = function (msg) {
    console.log(msg);
}
```
This is why I prefer declaring or defining functions by assignment, as well as it forces you to manually hoist your functions so they're available when you want them to run. This makes it less work for the interpreting of JavaScript as it doesn't have to hoist for you.

- [Returning anonymous functions](http://repl.it/BCGk)
- [Predicating](http://repl.it/BCGp)

> CFU: We've already used these where? (events)

## 6.3.4 - Context & Scope & `this`
Context is most often determined by how a function is invoked. When a function is called as a method of an object, this is set to the object the method is called on.

### Default Context
- [`this` is window, the global object](http://repl.it/BCFr/1)
- [An object will capture the context](http://repl.it/BCFs/3)
- [Binding is only effected by the most immediate member](http://repl.it/BCFv/2)

### Execution Context
- Each time a new execution context is created it is appended to the top of the execution stack. 
- An execution context can be divided into a creation and execution phase.
	- In the creation phase, the interpreter will first create a variable object (also called an activation object) that is composed of all the variables, function declarations, and arguments defined inside the execution context.
	- From there the scope chain is initialized next, and the value of this is determined last. Then in the execution phase, code is interpreted and executed.



![Execution context](https://cdn.pbrd.co/images/2N0GvGWO.png)

#### The Scope Chain

For each execution context there is a scope chain coupled with it. The scope chain contains the variable object for every execution context in the execution stack. It is used for determining variable access and identifier resolution. For example:

```javascript
// Global Context
function first(){ //Execution Context
	second();
	console.log( "First" );
	function second(){ //Execution Context
		console.log( "Second" );
		third();
		function third(){ //Execution Context
			fourth();
			console.log( "Third" );
			function fourth(){ //Execution Context
	            console.log( "Fourth" );
	   		}
	   }
	}   
}
first();
```

[Context Examples](http://repl.it/BCGd/1)

> CFU: Lets do some REPL.ITs

## 6.3.5 - Passing named functions or lambdas as callBacks

[Asynchronous Functions](http://repl.it/BCGS)

### Event Listeners

[Named event listeners](http://codepen.io/relicmelex/pen/QbRgWX?editors=101)
<br />
[Lambda event listeners](http://codepen.io/relicmelex/pen/NqVgWm?editors=101)


<br /><br />

> callBacks IYOW:

<!--
- We can pass a function as an argument in another function and later execute that passed-in function and even return it to be executed later. 
-->

<br /><br />

## LAB 6.4 - callBack heaven

### Regular callBacks
Copy these snippets into a repl.it and solve..

[`exersize_1/index.js`]()
<br />
[`exersize_2/index.js`](http://repl.it/BCMS/2)



### Bonus: Events callBacks
... then make a local directory and place the `index.html` and `script.js` in there from the exersize_3 folder.
Link the script and style files into the html document and follow the instructions in `script.js`
This should end up being a submitting form to itself that validates data following the rules in `script.js`

`exersize_3/script.js` & `exersize_3/index.html`
