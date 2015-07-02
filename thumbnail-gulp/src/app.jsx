var React = require( 'react' ),
    ThumbnailList = require( './ThumbnailList' );

// Options
var options = {
  thumbnailData: [
    {
      number: 12,
      title: 'Show courses',
      header: 'Learn ReactJS',
      imageURL: 'https://cdn.auth0.com/blog/react-js/react.png',
      description: 'ReactJS is actually the easiest frontend library to learn. I enjoy learning it, and I think I\'ll be able to make some money off of it.'
    },
    {
      number: 25,
      title: 'Show courses',
      header: 'Learn Gulp',
      imageURL: 'http://brunch.io/images/others/gulp.png',
      description: 'Gulp is one of the things that I\'ve learned in the past few months. It really does help me in optimizing my build processes a lot.'
    },
    {
      number: 2,
      title: 'Show courses',
      header: 'Learn Bower',
      imageURL: 'http://bower.io/img/bower-logo.png',
      description: 'Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.'
    }
  ]
};

// Render to HTML
React.render(
  React.createElement( ThumbnailList, options ),
  document.getElementsByClassName( 'container' )[0]
);