"use strict";

var utils = require('loader-utils');

module.exports = function (content) {
  this.cacheable && this.cacheable();
  var opt = utils.parseQuery(this.query);
  return opt.data ? opt.data + content : content;
};
