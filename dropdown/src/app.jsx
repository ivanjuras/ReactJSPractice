var React = require( 'react' ),
    Dropdown = require( './Dropdown' );

// ----- Options
var options = {

  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut cream pie'
  ]

};


// ----- Render the class and place it into HTML
React.render(
  React.createElement( Dropdown, options ),
  document.querySelector( '.container' )
);