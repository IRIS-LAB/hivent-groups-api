'use strict';


/**
 *
 * project Group 
 * returns Group
 **/
exports.createProject = function(project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * users List 
 * returns Group
 **/
exports.createProjectAdministrators = function(id,users) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * users List 
 * returns Group
 **/
exports.createProjectInterested = function(id,users) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * users List 
 * returns Group
 **/
exports.createProjectMembers = function(id,users) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteProject = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * status List Status [ PROPOSED, OPENED, CLOSED ] (optional)
 * name List  (optional)
 * returns List
 **/
exports.findProjects = function(status,name) {
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


/**
 *
 * id Long 
 * returns Group
 **/
exports.readProject = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * project Group 
 * returns Group
 **/
exports.updateProject = function(id,project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

