const soap = require("soap");
const url = "http://localhost:8000/wsdl?wsdl";

soap.createClient(url,(err,client)=>{
    if(!err){
        const user={
            name:"Yeşil",
            surname:"Turuncu"
        }
        client.CreateUser(user,(err,sonuc)=>{
            if(!err){
                console.log(sonuc.result);
            }
        })
    }
})