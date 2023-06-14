const axios=require('axios')
const url = 'http://localhost:5000/users';

const user = {
    name: 'Mavi',
    surname: 'Mor'
};

axios.post(url,user).then(res=>{
    console.log(res.data);
}).catch(err=>{
    console.log(err);
})