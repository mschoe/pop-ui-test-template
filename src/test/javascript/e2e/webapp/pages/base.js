'use strict';

var Page = require('../../page');

module.exports = Page.extend({

  pageHeader: function() {
  	return element(by.css('.page-header')).getText();
  }

});
