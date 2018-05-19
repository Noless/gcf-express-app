"use strict";

// Handle invocations without a trailing slash.
// Without a trailing "/" req.path = null and req.url = null
// which won't match to your app.get("/", ...) route

module.exports = app => (req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`;
  }
  return app(req, res);
};