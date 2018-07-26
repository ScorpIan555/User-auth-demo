import React, { Component } from 'react'
import { HTTPSyncClient, HTTPAsyncClient } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      visitor: {
        username: '',
        password: ''
      },
      currentUser: {}
    }
    // Bind this to class methods
    this.updateVisitor = this.updateVisitor.bind(this)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    // Synchronous GET request to '/auth/currentUser' endpoint
    // **** Note: This is (working) demonstration code, included only to show difference between a sync/async GET request
    HTTPSyncClient.get('/auth/currentuser', null)
    .then(data => {
      const user = data.user
      console.log('CURRENT USER (sync): ' + JSON.stringify(user))
      this.props.currentUserReceivedSync(user)
    })
    .catch(err => {
      console.log('ERROR: ' + JSON.stringify(err))
    })

    // Asynchronous GET request to '/auth/currentUser' endpoint
    // **** Note: THIS is how you'd do it
    this.props.currentUserReceived()
  }

  updateVisitor(attr, event) {
    // console.log(attr + ' == ' + event.target.value)
    let updatedVisitor = Object.assign({}, this.state.visitor)
    updatedVisitor[attr] = event.target.value
    this.setState({
      visitor: updatedVisitor
    })
  }

  register(event) {
    event.preventDefault()

    this.props.registerUser(this.state.visitor)
  }

  login(event) {
    event.preventDefault()

    this.props.loginUser(this.state.visitor)
  }

  render() {
    const currentUser = this.props.user.currentUser // can be null
    console.log('Render.currentUser: ', JSON.stringify(currentUser))

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Register</h1>
            <form>
              <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="username" /><br />
              <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="password" /><br />
              <button onClick={this.register}>Join</button>
            </form>

            <hr />

            <h1>Login</h1>
            <form>
              <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
              <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="Password" /><br />
              <button onClick={this.login} >Login</button>
            </form>
          </div>
          <div className="col-md-6">
            { currentUser == null ? null : <h1>Welcome {currentUser.username}</h1> }
          </div>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    currentUserReceivedSync: (user) => dispatch(actions.currentUserReceivedSync(user)),
    currentUserReceived: () => dispatch(actions.currentUserReceived()),
    registerUser: (user) => dispatch(actions.registerUser(user)),
    loginUser: (user) => dispatch(actions.loginUser(user)),
    logoutUser: () => dispatch(actions.logoutUser())
  }
}

export default connect(stateToProps, dispatchToProps)(Auth)
