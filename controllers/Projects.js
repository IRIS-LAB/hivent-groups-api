'use strict';

var utils = require('../utils/writer.js');
var Projects = require('../service/ProjectsService');

module.exports.createProject = function createProject (req, res, next) {
  var project = req.swagger.params['project'].value;
  Projects.createProject(project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createProjectAdministrators = function createProjectAdministrators (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Projects.createProjectAdministrators(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createProjectInterested = function createProjectInterested (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Projects.createProjectInterested(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createProjectMembers = function createProjectMembers (req, res, next) {
  var id = req.swagger.params['id'].value;
  var users = req.swagger.params['users'].value;
  Projects.createProjectMembers(id,users)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProject = function deleteProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Projects.deleteProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProjects = function findProjects (req, res, next) {
  var status = req.swagger.params['status'].value;
  var name = req.swagger.params['name'].value;
  Projects.findProjects(status,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readProject = function readProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Projects.readProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProject = function updateProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  var project = req.swagger.params['project'].value;
  Projects.updateProject(id,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
