'use strict';

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

var sysinfo = require('../').sysinfo;

inspect(sysinfo.getdiskstat());
