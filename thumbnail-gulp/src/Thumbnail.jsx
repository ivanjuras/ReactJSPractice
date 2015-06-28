var React = require( 'react' ),
    Badge = require( './Badge' );

// ----- Thumbnail component
module.exports = React.createClass({

  render: function() {  
    return (

      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageURL} alt="..." />
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <Badge title={this.props.title} number={this.props.number} />
          </div>
        </div>
      </div>

    );
  }

});