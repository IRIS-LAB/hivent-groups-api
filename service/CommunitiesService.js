'use strict';


/**
 *
 * community Group 
 * returns Group
 **/
exports.createCommunity = function(community) {
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
exports.createCommunityAdministrators = function(id,users) {
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
exports.createCommunityInterested = function(id,users) {
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
 * users List id de l'utilisateur
 * returns Group
 **/
exports.createCommunityMembers = function(id,users) {
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
exports.deleteCommunity = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * name List  (optional)
 * status List Status [ PROPOSED, OPENED, CLOSED ] (optional)
 * returns List
 **/
exports.findCommunities = function(name,status) {
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
exports.readCommunity = function(id) {
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
 * community Group 
 * returns Group
 **/
exports.updateCommunity = function(id,community) {
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

