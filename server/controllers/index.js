'use strict';

const admin__comment = require("./admin__comment")
const comment = require("./comment")
const admin__subcomment = require("./admin__subcomment")
const subcomment = require("./subcomment")
const content_id = require("./content-id")

module.exports = {
  admin__comment,
  comment,
  admin__subcomment,
  subcomment,
  "content-id": content_id
};
