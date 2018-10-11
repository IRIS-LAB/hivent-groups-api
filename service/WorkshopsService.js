'use strict';


/**
 *
 * workshop Group 
 * returns Group
 **/
exports.createWorkshop = function(workshop) {
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
 * users List id seulement
 * returns Group
 **/
exports.createWorkshopAdministrators = function(id,users) {
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
 * users List id seulement
 * returns Group
 **/
exports.createWorkshopInterested = function(id,users) {
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
exports.deleteWorkshop = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * name List  (optional)
 * selectionMode List SelectionMode [ NOLIMIT, RANDOM, FIRST ] (optional)
 * status List Status [ PROPOSED, OPENED, CLOSED ] (optional)
 * returns List
 **/
exports.findWorkshops = function(name,selectionMode,status) {
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
exports.readWorkshop = function(id) {
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
 * workshop Group 
 * returns Group
 **/
exports.updateWorkshop = function(id,workshop) {
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

