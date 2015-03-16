'use strict';

var Dispatcher = require('../Dispatcher.js');
var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = copyProperties(new Dispatcher(), {

  handleAction: function(name, params) {
    this.dispatch({
      actionType: name,
      params: params || {}
    });
  },

}, Dispatcher);

module.exports = AppDispatcher;
