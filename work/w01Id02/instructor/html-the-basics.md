<!-- Instructor: $ cd w01/d02/samples/ && source setup.sh -->
# WDI 2.1 - Morning - Intro to HTML ( The Basics )
--

| **Section**          | **Timing** |        **Summary**                  |
|----------------------|------------|-------------------------------------|
| Morning (Objectives)	| 5 min      | Intro to HTML                       |
| I Do             		| 10 min     | 2.1.2 - Standard Markup             |
| We Do            		| 10 min     | 2.1.2 - Commonly used Tags          |
| I Do             		| 5 min      | 2.1.3 - Lists (ordered & unordered) |
| We Do					| 10 min     | 2.1.4 - Forms & Inputs              |
| I Do						| 5 min      | 2.1.5 - New symantic HTML5 tags     |
| We Do					| 10 min     | 2.1.6 - HTML: Blocks and Forms      |
| You Do					| 15 min     | 2.1.7 - About Me                    |
| Bonus					| 5 min		| 2.1.8 - Markdown

### Objectives (SWBAT):
 - Write HTML that gets rendered as a document in the browser
 - Build a form with different types of inputs
 - Explore and use a markup language standard library and built-in functions (learn & use new semantic elements)
 - Use HTML5 structural elements
 - Understand a code style guide


## 2.1.1 - Standard markup - 10 min

**CFU: Give me 7 HTML Tags: one at a time...**

<br />
--
#### PAUSE 2 Min
--

- HTML: Hypertext Markup Language: *a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.*
- DOCTYPE:
- The text between `<html>` and `</html>` describes an HTML document(W3Schools)
- The text between `<head>` and `</head>` provides information about the document (W3Schools)
	- The text between `<title>` and `</title>` provides a title for the document (W3Schools)
- The text between `<body>` and `</body>` describes the visible page content (W3Schools)
- The text between `<script>` and `</script>` is for a logic based interpreted computer langauge like javascript for interacting with the browser.
- External styles are defined in an external CSS file, and then linked to in the <head> section of an HTML page using the `<link />` tag (W3Schools)
- Internal styling is defined in the <head> section of an HTML page, using a `<style> `element (W3Schools)

```html
- <!DOCTYPE html>
- <html></html>
- <head></head>
- <title></title>
- <body></body>
- <script></script>
- <style></style>
- <link rel=''/>
```

- Nesting **example:**
	
```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<link rel=''/>
	</head>
	<body>
		<script></script>
	</body>
</html>
```
	


## 2.1.2 - Commonly used Tags - 10 min
Common tags
 Headers, paragraphs, a, img, span, and div tags

```html
<h1>Hello World!</h1>	
<p>
	Paragraph
</p>
<span>small text</span>	
<div>
	Block Stuff & Text
</div>
```
#### We Do (Save a file): 
Lets make a hello world file that shows our name in big bold text and a sub heading of 'Biography' and then a quick little paragraph about yourself.

**CFU: What might this look like? Practice:**
	
<!--
index.html
<head><title>Hello World!</title></head>
<h1>Eric Hodonsky</h1>
<h2>Biography</h2>
<p>
	Biography goes here
</p>
--> 

<br />
--
#### PAUSE
--

## 2.1.3 - Lists (horizontal & vertical) - 5 min




## 2.1.4 -  Forms & Inputs - 10 min
So there are 20+ types of inputs... Why so many and why are they different?
For large format (Laptop/Desktop) input won't matter, however for mobile devices or smaller screens, the on-screen keyboard only has so much realestate.
So the types change what 'view' is set for the on-screen keyboard. For example type `tel` gives just a telephone pad (numbers) on-screen

- [More HTML input types](http://www.w3schools.com/html/html_form_input_types.asp)

- The form tag: `<form> </form>`
- Inputs... they need labels. It's bad form to wrap a label around an input

| Property          | Value(s)                     |
|-------------------|------------------------------|
| METHOD				| get / post / update / delete |
| ACTION				| "/url/for/domain"	           |
| ACCEPT-CHARSET    | "utf8"                       |
| TARGET 				| "_blank"                     |
| ENCTYPE 			| "multipart/form"	           |


```html
	<form method="get" action="url://" >
		<label for="forId">Text Input</label>
		<input id="forId" type="text" />
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

##### We Do: Lets build a form that submits to itself

- `<form action="/" method="get" ></form>`
- Lets get a name `<input type="text" name="wholeName" value="" />`

## 2.1.5 - New symantic HTML5 tags
HTML5 has a lot of cool symantic built in tags, and pretty much all of the tags from before still exist. There's a lot of assumptions out there about HTML6, but don't believe the hype till the spec is agreed on.

Examples:

```html
<header>
	<nav></nav> // Navigation
</header>
<footer>&copy; Copywrite</footer>
<section>Piece of a page</section>
<article>An article, or excerpt</article>
<canvas>Graphics & Physics tag</canvas>
<command>button</command>
<datalist>
	<li></li>
	<li></li>
</datalist>
<video src="">HTML5 Video</video>
```

## 2.1.6 - HTML: Blocks and Forms - All together - 5 min

### We Do:


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
		<scripy></script>
	</body>
</html>
```

## 2.1.7 - About Me - 15 min
### You Do:
Build a 'About Me' page with what we've learned yesterday and today. We'll expand on it even more as we go... 


## 2.1.8 - MarkDown - 5 min
We use markdown... it's not super important.

```md
 h1 - # MarkDown
 h2 - ## MarkDown
 Link - [name](url:// )
 Image - ![alt](url:// )
```





