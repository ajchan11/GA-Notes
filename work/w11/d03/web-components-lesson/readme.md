# Polymer

#### Objectives:
##### SWBAT

- Leverage the power of Web Components
- Import HTML Templates
- Understand the DOM Module
- Use WC Data Binding


### Reserach: What are the 4 major pieces of web components ( 15 minutes )

#### 10 min of searching

#### 5 Min of chat
- Custom Elements
- HTML Imports
- Templates
- Shadow DOM


#### What are the libraries that are used?

### Research: Why is declarative better?



### We Do - Code Along ( 20 min )
Go to the starter code, which is just the shell for what we're about to build.

Run the usual:

`$ npm i` 
`$ bower install`

Run an `$ http-server` in the `/solution-code` directory in an extra tab and just leave it running

So here we have some elements... lets fill em in

```html
<ga-nav>
  <ga-button route="images" active>Image</ga-button>
  <ga-button route="noteCards">Note Cards</ga-button>
</ga-nav>
<ga-page view="images" class="hidden">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png/252px-  Africa_and_Europe_from_a_Million_Miles_Away.png" />
</ga-page>
<ga-page view="noteCards" class="hidden">
  <ga-note-card>
    This is the notecard
  </ga-note-card>
</ga-page>
```


### We Do: Now we're going to build a button ( 10 min )
```html
<dom-module id="ga-button" attributes="route">
  <link rel="import" type="css" href="ga-button.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-button.js"></script>
</dom-module>
```
And the related JS...

```javascript
// element registration
Polymer( {
  is: "ga-button",
  properties: {
    active: {
      type: Boolean
    }
  }
})
```
### You Do: Go find a WC button you like ( 5 min )

**3 minutes**... Find a WC button you like

**2 Minutes**... Turn and share. Why?

### We Do: Codealong - Wire up the Nav ( 10 min )
```html
<dom-module id="ga-nav">
 <link rel="import" type="css" href="ga-nav.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-nav.js"></script>
</dom-module>
```

And the related JS

```javascript
// element registration
Polymer( { is: "ga-nav",
  ready: function () {
    var self = this
    Array.from( self.querySelectorAll( "ga-button" ) ).forEach( ( elem ) => {
      elem.addEventListener( "click", ( event ) => {
        this.changeView( elem.getAttribute( "route" ) )
      })
    })
  },
  changeView: function ( newView ) {
    Array.from( document.querySelectorAll( "ga-page" ) ).forEach( function ( elem ) {
      elem.classList.add( "hidden" )
    })
    document.querySelector( "ga-page[view='" + newView + "']" ).classList.remove( "hidden" )
  }
} )
```
### You Do: Go find a WC Navigation you like ( 5 min )

First 3 minutes... find

Second 2, Turn and share


### We Do - Wire up the pages ( 15 min )
```html
<dom-module id="ga-page">
 <link rel="import" type="css" href="ga-page.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-page.js"></script>
</dom-module>
```
And the related JS

```javascript
// element registration
Polymer( {
  is: "ga-page",
  ready: function () {
    var route = document.querySelector( "ga-button[active]" ).getAttribute( "route" )
    if ( this.getAttribute( "view" ) === route ) {
      this.classList.remove( "hidden" )
    }
  }
} )
```

### You Do: Go find a WC Navigation you like ( 5 min )

First 3 minutes... find

Second 2, Turn and share

### We Do - Wire up the notes ( 15 min )
```html
<dom-module id="ga-note-card">
 <link rel="import" type="css" href="ga-note-card.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-note-card.js"></script>
</dom-module>
```
And the related JS

```javascript
Polymer({
	is: "ga-note-card"
})
```


## Paper Elements

### Intro ( 15 min )

Lets find some paper elements and put them together... our objective.
- Nav Bar
- Map
- Material Design


### You Do - Find your favorites ( 40 min )

Build a small Todo list application with Web Components using Polymer 1.0 & Paper Elements.
