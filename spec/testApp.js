'use strict';

var  eventHub = require('../src/eventHub');

function App() {
  this.vent = eventHub;
}

var app = new App();

_.extend(app, Backbone.Events);

module.exports = app;
