const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose
	.connect('mongodb://127.0.0.1:27017/dbUser')
	.then(console.log('Database connection successful.'))
	.catch((err) => console.log('Database connection failed: ' + err))
