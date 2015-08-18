#Closures

###Objectives


In order to understand closures, we need to be absolutely sure that we uderstand two things really well:

1) Scope

2) Treating functions as objects that can passed around.



###1) Let's make sure we understand scope

```
function showAmount(){
	var quantity = 10;
	
	function showFood(){
		var food = "tacos";
		
		function showDrink(){
			var drink = "cerveza";
		}
	}
}
```

Let's draw the scoping of the variables;

###2) Now let's make sure we understand functions as objects that can be passed around:

```
function outerFunction(){
	return "Hello!"
}
```

Question - What happens when we call outerFunction()?

Question - What happens when we assign a variable to the _result_ of running outerFunction()?


Here is the same function, but instead of returning a string to us, it is now returning ANOTHER FUNCTION.

```
function outerFunction(){
	return function(){
		console.log("This is the nested function")
	}
}
```

Question - What happens when we call outerFunction()?

Question - What happens when we assign a variable to the _result_ of running outerFunction()?

Let's run this in repl.it and play around with it. 


###Your task:
- Write a function that returns another function.

- Assign the result of calling the outer function to a variable.

- Invoke this function variable.



###Your task:

- Write out this code in repl.it:

```
function testClosure(){
	var x = 10;

	return function(){
		console.log(x);
	};
}
```

- Assign the result of calling testClosure() to a new variable.

- Invoke this new variable function. Is the result intuitive to you?


This is a CLOSURE!

A closure is an inner function that has access to the outer (enclosing) function's variables. The closure has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

The reason why people have difficulty with the concept is that, in this case, the testClosure function has already run. The variable "x" only exists within the scope of the testClosure function. Now that the testClosure function has already run, the variable "x" shouldn't really exist anymore.

It is as if the inner function "remembers" the environment in which it was created. 

###Your task:

1) Write out this code in repl.it:

```
function favoriteSportsTeam(teamName){
	return function(){
		console.log("The best team are the " + teamName);
	};
}

```

2) Invoke favoriteSportsTeam with the argument "Yankees", and assign the result to a variable called newYorker.

3) Invoke favoriteSportsTeam with the argument "Red Sox", and assign the result to a variable called bostonian.

4) Invoke favoriteSportsTeam with the argument "Dodgers", and assign the result to a variable called angeleno.

5) Call each of the variables you just made.

6) Explain to your neighbour what a closure is, and what makes this a closure.

----

Closures are very useful for "function factories". In the above example, we have created three new functions. If we inspected each function, they would look identical:

```
var newYorker = function(){
	console.log("The best team are the " + teamName);
};

var bostonian = function(){
	console.log("The best team are the " + teamName);
};

var angeleno = function(){
	console.log("The best team are the " + teamName);
};
```

But we know they are not the same - in each one, the variable teamName is actually different. It remembers what it was when it was created!

###Activity - 10 mins

- Explain to a partner what is going on here. What will be logged?

```
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var doubler = multiplier(2);

doubler(5);

```

- Use this function to create two new functions - "tripler" and "quadrupler".




	**15 Minutes**
	
	Create a function called called addNum. Create a global variable called num1 with a number 10. Inside the addNum function, there is a variable num2 defined as 5. Use a closure called sumNum and inside here is a variable num3. Use the closure to add them up and return the sum.
	
	Get up and explain to someone in class why this is a closure.



###Principle of Least Privilege

	You should always use private variables in JavaScript and Ruby. Unless there is a huge need for it, don't use it because it can a) pollute your namespace 2) . The need for closures come from a need to access those variables outside of the scope. For example, if a user entered in an input and it goes into a private variable, they still want to be able to access it. Closures allow that. For example:
	
	function setAnswer(answer){
		var answer = answer;
		function getAdjustedAnswer(){
			answer = answer / 10;
			return answer;
		}
		return getAjustedAnswer();
	}

###Activity:

	Write down why you want to use a use a closure (2 min) and explain to the person next to you.
