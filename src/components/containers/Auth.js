import React, { Component } from 'react'
import { HTTPClient } from '../../utils'

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
      console.log('GET: ' + JSON.stringify(data))
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
    })
    .catch(err => {
      console.log('ERROR:  ' + err.message)
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">

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
        </div>
      </div>
    )
  }
}

export default Auth
