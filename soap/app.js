const http = require('http');
const soap = require('soap');
const fs = require('fs');
require('../database/connection')
const User = require('../models/user');

async function createNewUser(args) {
  const user = new User(args);
  const result = await user.save();
  if (!result) {
    return {
      result: false
    };
  } else {
    return {
      result: true
    };
  }
}

const serviceObject = {
  CreateUserService: {
    CreateUserServiceSoapPort: {
      CreateUser: createNewUser
    },
    CreateUserServiceSoap12Port: {
      CreateUser: createNewUser
    }
  }
};

const xml = fs.readFileSync('./user.wsdl', 'utf8');

const server = http.createServer();

soap.listen(server, '/wsdl', serviceObject, xml, () => {
	console.log("Check http://localhost:8000/wsdl" + "?wsdl to see if the service is working");
});

const port = 8000;
server.listen(port, () => {
  console.log(`SOAP sunucusu ${port} portunda çalışıyor`);
});
