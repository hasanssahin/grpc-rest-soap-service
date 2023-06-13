const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
	name: {
		type: String,
	},
	surname: {
		type: String,
	}
})

const User = mongoose.model('users', user)

module.exports = User
