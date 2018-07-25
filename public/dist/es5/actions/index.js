"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var TurboClient = require("../utils").TurboClient;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {};


// fetchUsers: (params) => {
// 	return dispatch => {
// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
// 	}
// },
//
// addUser: (params) => {
// 	return dispatch => {
// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
// 	}
// },
//
// // Unlike addUser, register() also maintains a session for login state. After calling
// // TurboClient.createUser(), the new user is logged in as well:
// register: (params) => {
// 	return dispatch => {
// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
// 	}
// },
//
// loginUser: (credentials) => {
// 	return dispatch => {
// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
// 	}
// },
//
// currentUser: () => {
// 	return dispatch => {
// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
// 	}
// },

// register: (params) => {
// 	return dispatch => {
// 		return dispatch(HTTPClient.createUser(params, constants.USER_CREATED))
// 	}
// },
//
// loginUser: (credentials) => {
// 	return dispatch => {
// 		return dispatch(HTTPClient.login(credentials, constants.CURRENT_USER_RECEIVED))
// 	}
// },