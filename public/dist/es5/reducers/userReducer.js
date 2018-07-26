"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the reducer for user management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);

	switch (action.type) {

		// Capture current user from Asynchronous Http Call
		case constants.CURRENT_USER_RECEIVED:
			console.log("CURRENT_USER_RECEIVED: " + JSON.stringify(action.data));
			newState.currentUser = action.data;
			return newState;

		// Capture current user from Synchronous Http Call
		// case constants.CURRENT_USER_RECEIVED_SYNC:
		// 	console.log('CURRENT_USER_RECEIVED_SYNC: ' + JSON.stringify(action.data))
		// 	newState['currentUser'] = action.data
		// 	return newState

		case constants.USER_CREATED:
			console.log("USER_CREATED: ", action.data);
			newState.currentUser = action.data;

			return newState;

		case constants.USER_LOGGED_IN:
			console.log("USER_LOGGED_IN:", action.data);
			newState.currentUser = action.data;

			return newState;


		default:
			return state;
	}
};