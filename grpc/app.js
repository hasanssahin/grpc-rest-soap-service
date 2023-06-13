const PROTO_PATH = './user.proto'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
require('../database/connection')
const User = require('../models/user')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true,
})

async function createNewUser (call,callback){
	const reqBody = call.request
	const user = new User(reqBody)
	const result = await user.save()
	if (!result) {
		console.log('Error')
	}else{
		callback(null, { result })
	}
}

const userProto = grpc.loadPackageDefinition(packageDefinition)
const server = new grpc.Server()

server.addService(userProto.UserService.service, {
	createNewUser: createNewUser
})

server.bindAsync(
	'127.0.0.1:3000',
	grpc.ServerCredentials.createInsecure(),
	(error, port) => {
		server.start()
		console.log('Server listening on PORT 3000')
	}
)
