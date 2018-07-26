import superagent from 'superagent'
import constants from '../constants'


const asyncGet = (endpoint, params, actionType) => {
  if(constants.CURRENT_USER_RECEIVED || constants.USER_LOGGED_OUT) {
    return dispatch => superagent
                       .get(endpoint)
                       .query(params)
                       .set('Accept', 'application/json')
                       .then(data => {
                         // check actionType, then dispatch asynchronously to userReducer
                         console.log('asyncGet data:', data)
                         if(actionType != null) {
                           dispatch({
                             type: actionType,
                             params: params,
                             data: data.body.user
                           })
                         }
                       })
                       .catch(err => {
                         console.log('ERROR: ', err)
                         return err
                       })
  }
}


const asyncPost = (endpoint, body, actionType) => {
    if(constants.USER_CREATED || constants.USER_LOGGED_IN) {
      return dispatch => superagent
                         .post(endpoint)
                         .send(body)
                         .set('Accept', 'application/json')
                         .then(response => {
                           // check actionType, then dispatch asynchronously to userReducer
                           if(actionType != null) {
                             dispatch({
                               type: actionType,
                               data: response.body.user
                             })
                           }
                         })
                         .catch(err => {
                           console.log('ERROR: ', err.message)
                           throw err
                         })
    }
}


export default {
  asyncGet: asyncGet,
  asyncPost: asyncPost
}
