const apiRequest = require('./apiRequest');

console.log("hello");

apiRequest.httpsGet("",r=>{
    console.log(r)
})
