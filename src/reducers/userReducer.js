import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the reducer for user management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.data))
			newState['currentUser'] = action.data
			return newState

		default:
			return state
	}
}
