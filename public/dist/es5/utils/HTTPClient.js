"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

module.exports = {
  post: function (endpoint, body) {
    return new Promise(function (resolve, reject) {
      superagent.post(endpoint).send(body).set("Accept", "application/json").end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  },

  get: function (endpoint, params) {
    return new Promise(function (resolve, reject) {
      superagent.get(endpoint).query(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  }


};