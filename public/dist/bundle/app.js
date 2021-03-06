/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Actions for User Managment
    ~note that the currentUserReceivedSync: () method is a synchronous action
    ~note that the currentUserReceived: () method is an asynchronous action

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

  // Synchronous action retained for demonstration purposes
  // currentUserReceivedSync: (user) => {
  //   return  {
  //     type: 'CURRENT_USER_RECEIVED_SYNC',
  //     data: user
  //   }
  // },

  // Asynchronous actions
  currentUserReceived: function currentUserReceived() {
    return function (dispatch) {
      return dispatch(_utils.HTTPAsyncClient.asyncGet('/auth/currentuser', null, _constants2.default.CURRENT_USER_RECEIVED));
    };
  },

  registerUser: function registerUser(user) {
    return function (dispatch) {
      return dispatch(_utils.HTTPAsyncClient.asyncPost('/auth/register', user, _constants2.default.USER_CREATED));
    };
  },

  loginUser: function loginUser(user) {
    return function (dispatch) {
      return dispatch(_utils.HTTPAsyncClient.asyncPost('/auth/login', user, _constants2.default.USER_LOGGED_IN));
    };
  },

  logoutUser: function logoutUser() {
    return function (dispatch) {
      return dispatch(_utils.HTTPAsyncClient.asyncGet('/auth/logout', null, _constants2.default.USER_LOGGED_OUT));
    };
  }

};

/***/ }),

/***/ "./src/components/containers/Auth.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Auth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

    _this.state = {
      visitor: {
        username: '',
        password: ''
      },
      currentUser: {}
      // Bind this to class methods
    };_this.updateVisitor = _this.updateVisitor.bind(_this);
    _this.register = _this.register.bind(_this);
    _this.login = _this.login.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // // Synchronous GET request to '/auth/currentUser' endpoint
      // // **** Note: This is (working) demonstration code, included only to show difference between a sync/async GET request
      // HTTPSyncClient.get('/auth/currentuser', null)
      // .then(data => {
      //   const user = data.user
      //   console.log('CURRENT USER (sync): ' + JSON.stringify(user))
      //   this.props.currentUserReceivedSync(user)
      // })
      // .catch(err => {
      //   console.log('ERROR: ' + JSON.stringify(err))
      // })

      // Asynchronous GET request to '/auth/currentUser' endpoint
      // **** Note: THIS is how you'd do it
      this.props.currentUserReceived();
    }
  }, {
    key: 'updateVisitor',
    value: function updateVisitor(attr, event) {
      // console.log(attr + ' == ' + event.target.value)
      var updatedVisitor = Object.assign({}, this.state.visitor);
      updatedVisitor[attr] = event.target.value;
      this.setState({
        visitor: updatedVisitor
      });
    }
  }, {
    key: 'register',
    value: function register(event) {
      event.preventDefault();

      this.props.registerUser(this.state.visitor);
    }
  }, {
    key: 'login',
    value: function login(event) {
      event.preventDefault();

      this.props.loginUser(this.state.visitor);
    }
  }, {
    key: 'logout',
    value: function logout(event) {

      this.props.logoutUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var currentUser = this.props.user.currentUser; // can be null
      console.log('Render.currentUser: ', JSON.stringify(currentUser));

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'h1',
              null,
              'Register'
            ),
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement('input', { onChange: this.updateVisitor.bind(this, 'username'), className: 'form-control', type: 'text', placeholder: 'username' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { onChange: this.updateVisitor.bind(this, 'password'), className: 'form-control', type: 'password', placeholder: 'password' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'button',
                { onClick: this.register },
                'Join'
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'h1',
              null,
              'Login'
            ),
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement('input', { onChange: this.updateVisitor.bind(this, 'username'), className: 'form-control', type: 'text', placeholder: 'Username' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { onChange: this.updateVisitor.bind(this, 'password'), className: 'form-control', type: 'password', placeholder: 'Password' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'button',
                { onClick: this.login },
                'Login'
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'button',
                { onClick: this.logout },
                'Logout'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            currentUser == null ? null : _react2.default.createElement(
              'h1',
              null,
              'Welcome ',
              currentUser.username
            )
          )
        )
      );
    }
  }]);

  return Auth;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    user: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    // currentUserReceivedSync: (user) => dispatch(actions.currentUserReceivedSync(user)),
    currentUserReceived: function currentUserReceived() {
      return dispatch(_actions2.default.currentUserReceived());
    },
    registerUser: function registerUser(user) {
      return dispatch(_actions2.default.registerUser(user));
    },
    loginUser: function loginUser(user) {
      return dispatch(_actions2.default.loginUser(user));
    },
    logoutUser: function logoutUser() {
      return dispatch(_actions2.default.logoutUser());
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Auth);

/***/ }),

/***/ "./src/components/containers/index.js":
/*!********************************************!*\
  !*** ./src/components/containers/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Auth = undefined;

var _Auth = __webpack_require__(/*! ./Auth */ "./src/components/containers/Auth.js");

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Auth = _Auth2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                               	Export your container components here. The Users
                               	container is just an example and you will likely
                               	remove it in favor of your own containers.
                               * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                               */

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	USERS_RECEIVED: 'USERS_RECEIVED',
	USER_CREATED: 'USER_CREATED',
	USER_LOGGED_IN: 'USER_LOGGED_IN',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
	CURRENT_USER_RECEIVED_SYNC: 'CURRENT_USER_RECEIVED_SYNC',
	USER_LOGGED_OUT: 'USER_LOGGED_OUT'

};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(/*! ./stores */ "./src/stores/index.js");

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _containers = __webpack_require__(/*! ./components/containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux
	already implemented. The Intro component is the
	visual content and most likely, you will want
	to remove it and replace with your own visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_containers.Auth, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userReducer = undefined;

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             	Export your reducers here
                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             */

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the reducer for user management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		// Capture current user from Asynchronous Http Call
		case _constants2.default.CURRENT_USER_RECEIVED:
			console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.data));
			newState['currentUser'] = action.data;
			return newState;

		// Capture current user from Synchronous Http Call
		// case constants.CURRENT_USER_RECEIVED_SYNC:
		// 	console.log('CURRENT_USER_RECEIVED_SYNC: ' + JSON.stringify(action.data))
		// 	newState['currentUser'] = action.data
		// 	return newState

		case _constants2.default.USER_CREATED:
			console.log('USER_CREATED: ', action.data);
			newState['currentUser'] = action.data;

			return newState;

		case _constants2.default.USER_LOGGED_IN:
			console.log('USER_LOGGED_IN:', action.data);
			newState['currentUser'] = action.data;

			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ "./src/utils/HTTPAsyncClient.js":
/*!**************************************!*\
  !*** ./src/utils/HTTPAsyncClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncGet = function asyncGet(endpoint, params, actionType) {
  if (_constants2.default.CURRENT_USER_RECEIVED || _constants2.default.USER_LOGGED_OUT) {
    return function (dispatch) {
      return _superagent2.default.get(endpoint).query(params).set('Accept', 'application/json').then(function (data) {
        // check actionType, then dispatch asynchronously to userReducer
        console.log('asyncGet data:', data);
        if (actionType != null) {
          dispatch({
            type: actionType,
            params: params,
            data: data.body.user
          });
        }
      }).catch(function (err) {
        console.log('ERROR: ', err);
        return err;
      });
    };
  }
};

var asyncPost = function asyncPost(endpoint, body, actionType) {
  if (_constants2.default.USER_CREATED || _constants2.default.USER_LOGGED_IN) {
    return function (dispatch) {
      return _superagent2.default.post(endpoint).send(body).set('Accept', 'application/json').then(function (response) {
        // check actionType, then dispatch asynchronously to userReducer
        if (actionType != null) {
          dispatch({
            type: actionType,
            data: response.body.user
          });
        }
      }).catch(function (err) {
        console.log('ERROR: ', err.message);
        throw err;
      });
    };
  }
};

exports.default = {
  asyncGet: asyncGet,
  asyncPost: asyncPost
};

/***/ }),

/***/ "./src/utils/HTTPSyncClient.js":
/*!*************************************!*\
  !*** ./src/utils/HTTPSyncClient.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  post: function post(endpoint, body) {
    return new Promise(function (resolve, reject) {
      _superagent2.default.post(endpoint).send(body).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  },

  get: function get(endpoint, params) {
    return new Promise(function (resolve, reject) {
      _superagent2.default.get(endpoint).query(params).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  }

};

/***/ }),

/***/ "./src/utils/ServerEntry.js":
/*!**********************************!*\
  !*** ./src/utils/ServerEntry.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTTPAsyncClient = exports.HTTPSyncClient = exports.renderComponents = exports.ServerEntry = undefined;

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(/*! ./renderComponents */ "./src/utils/renderComponents.js");

var _renderComponents2 = _interopRequireDefault(_renderComponents);

var _HTTPSyncClient = __webpack_require__(/*! ./HTTPSyncClient */ "./src/utils/HTTPSyncClient.js");

var _HTTPSyncClient2 = _interopRequireDefault(_HTTPSyncClient);

var _HTTPAsyncClient = __webpack_require__(/*! ./HTTPAsyncClient */ "./src/utils/HTTPAsyncClient.js");

var _HTTPAsyncClient2 = _interopRequireDefault(_HTTPAsyncClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TurboClient from './TurboClient'
exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;
exports.HTTPSyncClient = _HTTPSyncClient2.default;
exports.HTTPAsyncClient = _HTTPAsyncClient2.default;

/***/ }),

/***/ "./src/utils/renderComponents.js":
/*!***************************************!*\
  !*** ./src/utils/renderComponents.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, component) {
	var app = _react2.default.createElement(component);
	var provider = _react2.default.createElement(_ServerEntry2.default, { component: app, store: initialState });

	return {
		react: _server2.default.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	};
};

/***/ })

/******/ });
//# sourceMappingURL=app.map