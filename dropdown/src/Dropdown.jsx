var React = require( 'react' ),
    Button = require( './Button' ),
    ListItem = require( './ListItem' )

// ----- Dropdown component
module.exports = React.createClass({

  getInitialState: function() {
    return {

       open: false,
       itemTitle: this.props.title

    };
  },

  // --- Click events
  handleButtonClick: function( event ) {
    this.setState({

      open: !this.state.open

    });
  },

  handleItemClick: function( item ) {
  
    this.setState({
      open: false,
      itemTitle: item
    });
  
  },

  // --- Render
  render: function () {

    var item = this.props.items.map( function( item ) {

      return <ListItem
        item={ item }
        whenItemClicked={ this.handleItemClick }
        className= { this.state.itemTitle === item ? 'active' : '' }
        key={ Math.random() }
      />
      
    }.bind( this ) );
  
    return <div className='dropdown'>
      <Button
        whenButtonClicked={ this.handleButtonClick }
        className='btn-default'
        title={ this.state.itemTitle }
        subTitleClassName='caret'
      />
      <ul
        className={ 'dropdown-menu' + ( this.state.open ? ' show' : '' ) }
      >
        { item }
      </ul>
    </div>
  
  }

});