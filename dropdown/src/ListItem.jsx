var React = require( 'react' );

// ----- ListItem component
module.exports = React.createClass({

  handleClick: function( event ) {
  
    this.props.whenItemClicked( this.props.item );
  
  },

  render: function() {
  
    return <li className={ this.props.className }>
      <a onClick={ this.handleClick }>{ this.props.item }</a>
    </li>
  
  }

});