## 2.1 - Intro to HTML ( The Basics )
### Objectives (SWBAT):
 - Write HTML that gets rendered as a document in the browser
 - Build a form with different types of inputs
 - Explore and use a programming or markup language's standard library and built-in functions (Learn & use new semantic elements)
 - Use HTML5 structural elements
 - Understand a code style guide


#### 2.1.1 - MarkDown
We use markdown... 

```md
 h1 - # MarkDown
 h2 - ## MarkDown
 Link - [name](url:// )
 Image - ![alt](url:// )
```

#### 2.1.2 - Standard markup
Stuff

```html
	<html></html>
	
	<head></head>
	
	<title></title>
	
	<body></body>
	
	<script></script>
	
	<style></style>
```

#### 2.1.3 - Commonly used Tags
Common tag things

```html
	<div></div>
	
	<span></span>
	
	<section></section>
	
	<nav></nav>
```



#### 2.1.4 - Lists (horizontal & vertical)



#### 2.1.5 -  Forms & Inputs
So there are 20+ types of inputs... Why so many and why are they different?
For large format (Laptop/Desktop) input won't matter, however for mobile devices or smaller screens, the on-screen keyboard only has so much realestate.
So the types change what 'view' is set for the on-screen keyboard. For example type `tel` gives just a telephone pad (numbers) on-screen

- [More HTML input types](http://www.w3schools.com/html/html_form_input_types.asp)

- The Tag:
	- METHOD: "get | post | update | delete"
	- ACTION: "/url/for/domain"
	- ACCEPT-CHARSET: "utf8"
	- TARGET: "_blank"

```html
	<form method="post" action="url://" >
		<input type="text" />
		<textarea></textarea>
		<input type="password" />
		<input type="radio" name="important" value="theVal"/>
		<input type="checkbox" name="importantName" value="valTwo" />
		<select name="">
			<option value="val">Name</option>
		</select>
		<input type="submit" name="submit" value="Submit" />
		<input type="button" name="btnName" value="valUe" />
		<input type="number" name="quantity" min="1" max="5" />
		<input type="date" name="bday" />
		<input type="tel" name="phoneNum" />
		<input type="color" name="favcolor" />
		<input type="month" name="bdaymonth" />
		<input type="week" name="week_year" />
		<input type="time" name="usr_time" />
		<input type="datetime" name="bdaytime" />
		<input type="datetime-local" name="bdaytime" />
		<input type="email" name="email" />
		<input type="search" name="googlesearch" />
		<input type="url" name="homepage" />
	</form>
```

#### 2.1.6 - HTML: Blocks and Forms - All together

##### Example:
```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<nav>
			<ul>
				<li></li>
				<li></li>
			<ul>
		</nav>
		<section>
			<form>
				Input: <input type="text" name="inputText" />
				Radio 1: <input type="radio" name="radOne" value="1" />
				Radio 2: <input type="radio" name="radOne" value="2" />
			</form>
		</section>
	</body>
</html>
```




