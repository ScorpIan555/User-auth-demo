const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    username: { type: String, trim: true, default: ''},
    password: { type: String, default: ''},
    timestamp: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Profile', Profile)
