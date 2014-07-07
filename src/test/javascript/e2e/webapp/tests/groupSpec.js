'use strict';

var utils = require('../../utils');

var GroupsPage = require('../pages/groups');
var CreateNewGroupPage = require('../pages/createNewGroup')

var groupsPage = new GroupsPage();
var createNewGroupPage = new CreateNewGroupPage();

describe('groups-page', function() {

  describe('test setup', function() {
    it('should navigate to admin webapp', function() {
      groupsPage.navigateToWebapp('Admin');
    });
  });

  describe('overview', function() {

    beforeEach(function() {
      groupsPage.navigateTo();
    });


    it('should have correct header', function() {
      utils.login('jonny1', 'jonny1', true);
      expect(groupsPage.pageHeader()).toBe('Groups');
    });


    it('should have new goup button', function() {
      expect(groupsPage.newGroupButton().isPresent()).toBe(true);
    });


    it('should navigate to new group page', function() {
      // when
      groupsPage.newGroupButton().click();

      // then
      createNewGroupPage.isActive();
    });

  });


  describe('new group', function() {

    beforeEach(function() {
      createNewGroupPage.navigateTo();
    });


    it('should create new group', function() {
      createNewGroupPage.createNewGroup('123', 'Franz', 'Marketing');
    });

  });

});
