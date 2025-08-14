// import dotenv module
require('dotenv').config()
// import express
const express = require('express')
// import cors
const cors = require('cors')
// import routrs
const routes = require('./routes')
// import connection file
require('./connection')




// create server
const bookreviewServer = express()
// use cors to connect with frontend
bookreviewServer.use(cors())
// parse the json data
bookreviewServer.use(express.json())
// server
bookreviewServer.use(routes)



// port
const PORT = 4000 || process.env.PORT


// listen to the port to accept the request
bookreviewServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
    
})
