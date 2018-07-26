// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Profile = require('../models/Profile')


router.get('/test', (req, res) => {
	res.json({
		confirmation: 'success',
    data: 'This is a test endpoint'
	})
})

// Return data on the user who is currently logged in
router.get('/currentuser', (req, res) => {
	// session not defined -> user not logged in
	if(req.vertexSession == null) {
		res.json({
			confirmation: 'success',
			user: null
		})
		return
	}
	// session is defined, user key in session object not defined -> user not logged in
	if(req.vertexSession.user == null) {
		res.json({
			confirmation: 'success',
			user: null
		})
		return
	}
	// session is defined, user key in session object is defined -> user logged in
	Profile.findById( req.vertexSession.user.id, (err, profile) => {
		if(err) {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
			return
		}
		res.json({
			confirmation: 'success',
			user: profile
		})
	})
})


router.post('/register', (req, res) => {
	const body = req.body
	console.log('REGISTER: ' + JSON.stringify(body))

	Profile.create(body, (err, profile) => {
		if(err) {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
			return
		}
			console.log("SUCCESS: ", profile)
			req.vertexSession.user = { id: profile._id.toString() }
			res.json({
				confirmation: 'success',
				user: profile
			})

	})
})


router.post('/login', (req, res) => {
	const body = req.body
	const username = body.username

	Profile.find({ username: username }, (err, profiles) => {
		// Request returns an error
		if(err) {
			res.json({
				confirmation: 'fail',
		    message: err.message
			})
			return
		}
		// Request returns no profiles
		if(profiles.length == 0) {
			res.json({
				confirmation: 'fail',
		    message: 'Profile not found'
			})
			return
		}
		// Request returns profile
		const profile = profiles[0]
		// Check password
		const password = body.password
		if(profile.password != password) {
			res.json({
				confirmation: 'fail',
				message: 'Incorrect password'
			})
			return
		}
		req.vertexSession.user = { id: profile._id.toString() }

		res.json({
			confirmation: 'success',
			user: profile
		})
	})
})


router.get('/logout', (req, res) => {
	req.vertexSession.reset()
	res.json({
		confirmation: 'success',
		user: null
	})
})


module.exports = router
