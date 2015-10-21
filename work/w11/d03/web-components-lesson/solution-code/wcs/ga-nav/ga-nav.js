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
