'use strict';

var utils = require('../utils/writer.js');
var Workshops = require('../service/WorkshopsService');

module.exports.createWorkshop = function createWorkshop (req, res, next) {
  var workshop = req.swagger.params['workshop'].value;
  Workshops.createWorkshop(workshop)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createWorkshopAdministrators = function createWorkshopAdministrators (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Workshops.createWorkshopAdministrators(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createWorkshopInterested = function createWorkshopInterested (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Workshops.createWorkshopInterested(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteWorkshop = function deleteWorkshop (req, res, next) {
  var id = req.swagger.params['id'].value;
  Workshops.deleteWorkshop(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findWorkshops = function findWorkshops (req, res, next) {
  var name = req.swagger.params['name'].value;
  var selectionMode = req.swagger.params['selectionMode'].value;
  var status = req.swagger.params['status'].value;
  Workshops.findWorkshops(name,selectionMode,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readWorkshop = function readWorkshop (req, res, next) {
  var id = req.swagger.params['id'].value;
  Workshops.readWorkshop(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWorkshop = function updateWorkshop (req, res, next) {
  var id = req.swagger.params['id'].value;
  var workshop = req.swagger.params['Workshop'].value;
  Workshops.updateWorkshop(id,workshop)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
