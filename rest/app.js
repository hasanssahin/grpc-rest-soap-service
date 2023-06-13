const express = require('express')
const cors = require('cors')
const app = express()

require('../database/connection')
const User = require('../models/user')

app.use(cors())
app.use(express.json())

app.post('/users', async (req, res) => {
	const user=new User(req.body)
	if(user){
		const result = await user.save()
		if(!result){
			res.json({message:"Error"})
		}else{
			res.json({user:user})
		}
	}else{
		res.json("HATA")
	}
})

app.listen(5000, () => {
	console.log('Server listening on PORT 5000')
})
