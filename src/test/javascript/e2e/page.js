'use strict';

function Page() { }

Page.extend = function(data) {

  function SubPage() {}

  SubPage.extend = this.extend;

  SubPage.prototype = Object.create(this.prototype);
  SubPage.prototype.constructor = SubPage;

  Object.keys(data).forEach(function(k) {
    SubPage.prototype[k] = data[k];
  });

  return SubPage;
};

Page.prototype.navigateTo = function () {
  browser.get(this.url);
};

Page.prototype.isActive = function() {
  expect(browser.getCurrentUrl()).toBe('http://localhost:8080' + this.url);
};

Page.prototype.navigateToWebapp = function(appName) {
  browser.get('camunda/app/' + appName.toLowerCase() + '/');
  browser.driver.manage().window().maximize();

  var navbarName = element(by.css('.brand'));
  expect(navbarName.getText()).toEqual('camunda ' + appName);
};


module.exports = Page;
