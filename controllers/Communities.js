'use strict';

var utils = require('../utils/writer.js');
var Communities = require('../service/CommunitiesService');

module.exports.createCommunity = function createCommunity (req, res, next) {
  var community = req.swagger.params['community'].value;
  Communities.createCommunity(community)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCommunityAdministrators = function createCommunityAdministrators (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Communities.createCommunityAdministrators(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCommunityInterested = function createCommunityInterested (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Communities.createCommunityInterested(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCommunityMembers = function createCommunityMembers (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Communities.createCommunityMembers(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCommunity = function deleteCommunity (req, res, next) {
  var id = req.swagger.params['id'].value;
  Communities.deleteCommunity(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCommunities = function findCommunities (req, res, next) {
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Communities.findCommunities(name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readCommunity = function readCommunity (req, res, next) {
  var id = req.swagger.params['id'].value;
  Communities.readCommunity(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCommunity = function updateCommunity (req, res, next) {
  var id = req.swagger.params['id'].value;
  var community = req.swagger.params['community'].value;
  Communities.updateCommunity(id,community)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
