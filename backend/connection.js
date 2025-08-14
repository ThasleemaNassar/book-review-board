// import mongoose
const mongoose = require('mongoose')

const connectionstring = process.env.DATABASE

// connecttion
mongoose.connect(connectionstring).then(()=>{
    console.log('mongodb connected successfully');
    
}).catch((err)=>{
    console.log(`mongodb connection failed due to : ${err}`);
    
})