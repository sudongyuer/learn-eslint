/**
 * @fileoverview sudongyuer&#39;s plugin
 * @author sudongyuer
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

console.log(requireIndex(__dirname + "/rules"))
// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs={
  sudongyuerConfig:{
    rules:{
      "sudongyuer/find-todo":["error","todo","fixme"]
    }
  }
}


