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
			res.json({
				confirmation: 'success',
				data: profile
			})

	})
})

router.post('/login', (req, res) => {
	res.json({
		confirmation: 'success',
    data: req.body
	})
})


module.exports = router
