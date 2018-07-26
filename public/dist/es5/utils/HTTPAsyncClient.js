"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var constants = _interopRequire(require("../constants"));




var asyncGet = function (endpoint, params, actionType) {
  if (constants.CURRENT_USER_RECEIVED || constants.USER_LOGGED_OUT) {
    return function (dispatch) {
      return superagent.get(endpoint).query(params).set("Accept", "application/json").then(function (data) {
        // check actionType, then dispatch asynchronously to userReducer
        console.log("asyncGet data:", data);
        if (actionType != null) {
          dispatch({
            type: actionType,
            params: params,
            data: data.body.user
          });
        }
      })["catch"](function (err) {
        console.log("ERROR: ", err);
        return err;
      });
    };
  }
};


var asyncPost = function (endpoint, body, actionType) {
  if (constants.USER_CREATED || constants.USER_LOGGED_IN) {
    return function (dispatch) {
      return superagent.post(endpoint).send(body).set("Accept", "application/json").then(function (response) {
        // check actionType, then dispatch asynchronously to userReducer
        if (actionType != null) {
          dispatch({
            type: actionType,
            data: response.body.user
          });
        }
      })["catch"](function (err) {
        console.log("ERROR: ", err.message);
        throw err;
      });
    };
  }
};


module.exports = {
  asyncGet: asyncGet,
  asyncPost: asyncPost
};