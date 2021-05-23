"use strict";

const os = require("os");

/**
 * @param {import("express").Express} app
 */
module.exports = function (app) {
  const home = app.route("/home");
  home.get((req, res) => {
    res.send({
      status: 200,
      hostname: os.hostname(),
      statusText: "OK",
    });
  });
};
