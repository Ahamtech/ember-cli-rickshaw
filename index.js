/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-rickshaw',

  included: function included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/rickshaw/rickshaw.js');
    app.import(app.bowerDirectory + '/rickshaw/rickshaw.css');
  }
};
