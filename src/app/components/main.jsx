'use strict';

var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  DatePicker = mui.DatePicker;

var Main = React.createClass({

  render() {

    return (
      <div className="example-page">

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        <DatePicker  />

      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
  
});

module.exports = Main;
