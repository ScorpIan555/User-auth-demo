"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _utils = require("../../utils");

var HTTPSyncClient = _utils.HTTPSyncClient;
var HTTPAsyncClient = _utils.HTTPAsyncClient;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Auth = (function (Component) {
  function Auth() {
    _classCallCheck(this, Auth);

    _get(Object.getPrototypeOf(Auth.prototype), "constructor", this).call(this);
    this.state = {
      visitor: {
        username: "",
        password: ""
      },
      currentUser: {}
    };
    // Bind this to class methods
    this.updateVisitor = this.updateVisitor.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  _inherits(Auth, Component);

  _prototypeProperties(Auth, null, {
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;
        // Synchronous GET request to '/auth/currentUser' endpoint
        // **** Note: This is (working) demonstration code, included only to show difference between a sync/async GET request
        HTTPSyncClient.get("/auth/currentuser", null).then(function (data) {
          var user = data.user;
          console.log("CURRENT USER (sync): " + JSON.stringify(user));
          _this.props.currentUserReceivedSync(user);
        })["catch"](function (err) {
          console.log("ERROR: " + JSON.stringify(err));
        });

        // Asynchronous GET request to '/auth/currentUser' endpoint
        // **** Note: THIS is how you'd do it
        this.props.currentUserReceived();
      },
      writable: true,
      configurable: true
    },
    updateVisitor: {
      value: function updateVisitor(attr, event) {
        // console.log(attr + ' == ' + event.target.value)
        var updatedVisitor = Object.assign({}, this.state.visitor);
        updatedVisitor[attr] = event.target.value;
        this.setState({
          visitor: updatedVisitor
        });
      },
      writable: true,
      configurable: true
    },
    register: {
      value: function register(event) {
        event.preventDefault();

        this.props.registerUser(this.state.visitor);
      },
      writable: true,
      configurable: true
    },
    login: {
      value: function login(event) {
        event.preventDefault();

        this.props.loginUser(this.state.visitor);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var currentUser = this.props.user.currentUser; // can be null
        console.log("Render.currentUser: ", JSON.stringify(currentUser));

        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-4" },
              React.createElement(
                "h1",
                null,
                "Register"
              ),
              React.createElement(
                "form",
                null,
                React.createElement("input", { onChange: this.updateVisitor.bind(this, "username"), className: "form-control", type: "text", placeholder: "username" }),
                React.createElement("br", null),
                React.createElement("input", { onChange: this.updateVisitor.bind(this, "password"), className: "form-control", type: "password", placeholder: "password" }),
                React.createElement("br", null),
                React.createElement(
                  "button",
                  { onClick: this.register },
                  "Join"
                )
              ),
              React.createElement("hr", null),
              React.createElement(
                "h1",
                null,
                "Login"
              ),
              React.createElement(
                "form",
                null,
                React.createElement("input", { onChange: this.updateVisitor.bind(this, "username"), className: "form-control", type: "text", placeholder: "Username" }),
                React.createElement("br", null),
                React.createElement("input", { onChange: this.updateVisitor.bind(this, "password"), className: "form-control", type: "password", placeholder: "Password" }),
                React.createElement("br", null),
                React.createElement(
                  "button",
                  { onClick: this.login },
                  "Login"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-6" },
              currentUser == null ? null : React.createElement(
                "h1",
                null,
                "Welcome ",
                currentUser.username
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Auth;
})(Component);

var stateToProps = function (state) {
  return {
    user: state.user
  };
};

var dispatchToProps = function (dispatch) {
  return {
    currentUserReceivedSync: function (user) {
      return dispatch(actions.currentUserReceivedSync(user));
    },
    currentUserReceived: function () {
      return dispatch(actions.currentUserReceived());
    },
    registerUser: function (user) {
      return dispatch(actions.registerUser(user));
    },
    loginUser: function (user) {
      return dispatch(actions.loginUser(user));
    },
    logoutUser: function () {
      return dispatch(actions.logoutUser());
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Auth);