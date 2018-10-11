'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

module.exports.findGroups = function findGroups (req, res, next) {
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  var type = req.swagger.params['type'].value;
  var userId = req.swagger.params['userId'].value;
  Groups.findGroups(name,status,type,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
