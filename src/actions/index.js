import constants from '../constants'
import { HTTPAsyncClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Actions for User Managment
    ~note that the currentUserReceivedSync: () method is a synchronous action
    ~note that the currentUserReceived: () method is an asynchronous action

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

  // Synchronous action retained for demonstration purposes
  currentUserReceivedSync: (user) => {
    return  {
      type: 'CURRENT_USER_RECEIVED_SYNC',
      data: user
    }
  },

  // Asynchronous actions
  currentUserReceived: () => {
    return dispatch => {
      return dispatch(HTTPAsyncClient.asyncGet('/auth/currentuser', null, constants.CURRENT_USER_RECEIVED))
    }
  },

  registerUser: (user) => {
    return dispatch => {
      return dispatch(HTTPAsyncClient.asyncPost('/auth/register', user, constants.USER_CREATED))
    }
  },

  loginUser: (user) => {
    return dispatch => {
      return dispatch(HTTPAsyncClient.asyncPost('/auth/login', user, constants.USER_LOGGED_IN))
    }
  },

  logoutUser: () => {
    return dispatch => {
      return dispatch(HTTPAsyncClient.asyncGet('/auth/logout', null, constants.USER_LOGGED_OUT))
    }
  },


}
