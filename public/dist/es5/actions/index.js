"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var HTTPAsyncClient = require("../utils").HTTPAsyncClient;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Actions for User Managment
    ~note that the currentUserReceivedSync: () method is a synchronous action
    ~note that the currentUserReceived: () method is an asynchronous action

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

  // Synchronous action retained for demonstration purposes
  currentUserReceivedSync: function (user) {
    return {
      type: "CURRENT_USER_RECEIVED_SYNC",
      data: user
    };
  },

  // Asynchronous actions
  currentUserReceived: function () {
    return function (dispatch) {
      return dispatch(HTTPAsyncClient.asyncGet("/auth/currentuser", null, constants.CURRENT_USER_RECEIVED));
    };
  },

  registerUser: function (user) {
    return function (dispatch) {
      return dispatch(HTTPAsyncClient.asyncPost("/auth/register", user, constants.USER_CREATED));
    };
  },

  loginUser: function (user) {
    return function (dispatch) {
      return dispatch(HTTPAsyncClient.asyncPost("/auth/login", user, constants.USER_LOGGED_IN));
    };
  },

  logoutUser: function () {
    return function (dispatch) {
      return dispatch(HTTPAsyncClient.asyncGet("/auth/logout", null, constants.USER_LOGGED_OUT));
    };
  } };