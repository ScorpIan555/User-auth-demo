import React, { Component } from 'react'
import { HTTPClient } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      visitor: {
        username: '',
        password: ''
      }
    }
    this.updateVisitor = this.updateVisitor.bind(this)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    HTTPClient.get('/auth/currentuser', null)
    .then(data => {
      const user = data.user
      console.log('CURRENT USER: ' + JSON.stringify(user))
      this.props.currentUserReceived(user)
    })
    .catch(err => {
      console.log('ERROR: ' + JSON.stringify(err))
    })
  }

  updateVisitor(attr, event) {
    console.log(attr + ' == ' + event.target.value)

    let updatedVisitor = Object.assign({}, this.state.visitor)
    updatedVisitor[attr] = event.target.value

    this.setState({
      visitor: updatedVisitor
    })
  }

  register(event) {
    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.visitor))

    HTTPClient.post('/auth/register', this.state.visitor)
    .then(data => {
      console.log('GET: ' + JSON.stringify(user))
      const user = data.user
      this.props.currentUserReceived(user)
    })
    .catch(err => {
      console.log('ERROR:  ' + err.message)
    })
  }

  login(event) {
    event.preventDefault()
    console.log('login: ' + JSON.stringify(this.state.visitor))

    HTTPClient.post('/auth/login', this.state.visitor)
    .then(data => {
      console.log('GET: ' + JSON.stringify(data))
      const user = data.user
      this.props.currentUserReceived(user)
    })
    .catch(err => {
      console.log('ERROR:  ' + err.message)
    })
  }

  render() {
    const currentUser = this.props.user.currentUser // can be null

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Register</h1>
            <form>
              <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="username" /><br />
              <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="password" /><br />
              <button onClick={this.register.bind(this)}>Join</button>
            </form>

            <hr />

            <h1>Login</h1>
            <form>
              <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
              <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="Password" /><br />
              <button onClick={this.login.bind(this)} >Login</button>
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
    currentUserReceived: (user) => dispatch(actions.currentUserReceived(user))
  }
}

export default connect(stateToProps, dispatchToProps)(Auth)
