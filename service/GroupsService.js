'use strict';


/**
 *
 * name String  (optional)
 * status String Status [ PROPOSED, OPENED, CLOSED ] (optional)
 * type String Type [ PROJECT, WORKSHOP, COMMUNITY ] (optional)
 * userId Long  (optional)
 * returns List
 **/
exports.findGroups = function(name,status,type,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "type" : { },
  "capacity" : 6,
  "openedDate" : "2000-01-23",
  "pathImage" : "pathImage",
  "closedDate" : "2000-01-23",
  "proposedDate" : "2000-01-23",
  "members" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "name" : "name",
  "defaultEventSelectionMode" : { },
  "id" : 0,
  "interested" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "administrators" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "status" : { }
}, {
  "description" : "description",
  "type" : { },
  "capacity" : 6,
  "openedDate" : "2000-01-23",
  "pathImage" : "pathImage",
  "closedDate" : "2000-01-23",
  "proposedDate" : "2000-01-23",
  "members" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "name" : "name",
  "defaultEventSelectionMode" : { },
  "id" : 0,
  "interested" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "administrators" : [ {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  }, {
    "firstname" : "firstname",
    "pathImage" : "pathImage",
    "mail" : "mail",
    "id" : 1,
    "lastname" : "lastname"
  } ],
  "status" : { }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

