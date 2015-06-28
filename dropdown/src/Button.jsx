var React = require( 'react' );

// ----- Badge component
module.exports = React.createClass({

  render: function() {
    return(
      <button
        onClick={ this.props.whenButtonClicked }
        className={ 'btn ' + this.props.className }
        type="button"
      >
        { this.props.title }
        <span
          className={ this.props.subTitleClassName }
        >
          { this.props.number }
        </span>
      </button>
    );
  }

});