var React = require( 'react' ),
    Thumbnail = require( './Thumbnail' );

// ThumbnailList
module.exports = React.createClass({

  // Render
  render: function() {  
    var list = this.props.thumbnailData.map( function( thumbnailProps ) {
      return <Thumbnail {...thumbnailProps} key={Math.random()} />
    });

    return (
      <div>
        {list}
      </div>
    );  
  }

});