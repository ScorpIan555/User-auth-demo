"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var HTTPClient = require("../../utils").HTTPClient;
var Auth = (function (Component) {
  function Auth() {
    _classCallCheck(this, Auth);

    _get(Object.getPrototypeOf(Auth.prototype), "constructor", this).call(this);
    this.state = {
      visitor: {
        username: "",
        password: ""
      }
    };
    this.updateVisitor = this.updateVisitor.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  _inherits(Auth, Component);

  _prototypeProperties(Auth, null, {
    updateVisitor: {
      value: function updateVisitor(attr, event) {
        console.log(attr + " == " + event.target.value);

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
        console.log("register: " + JSON.stringify(this.state.visitor));

        HTTPClient.post("/auth/register", this.state.visitor).then(function (data) {
          console.log("GET: " + JSON.stringify(data));
        })["catch"](function (err) {
          console.log("ERROR:  " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    login: {
      value: function login(event) {
        event.preventDefault();
        console.log("login: " + JSON.stringify(this.state.visitor));

        HTTPClient.post("/auth/login", this.state.visitor).then(function (data) {
          console.log("GET: " + JSON.stringify(data));
        })["catch"](function (err) {
          console.log("ERROR:  " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-6" },
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
                  { onClick: this.register.bind(this) },
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
                  { onClick: this.login.bind(this) },
                  "Login"
                )
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

module.exports = Auth;