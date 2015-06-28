
var React = require( 'react' ),
    Thumbnail = require( './Thumbnail' );

// ----- ThumbnailList component
module.exports = React.createClass({

  render: function() {
    
    var list = this.props.thumbnailData.map( function( thumbnailProps ) {
      return <Thumbnail {...thumbnailProps} key={Math.random()} />
    });

    return <div>
      {list}
    </div>
    
  }

});