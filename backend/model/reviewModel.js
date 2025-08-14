const mongoose = require('mongoose')

const reviewschema = new mongoose.Schema({
    rating:{
        type : Number,
        default : ""
    },
    comment:{
        type : String,
        default : ""
    },
    userMail:{
        type : String,
        required : true
    },
    username:{
        type : String,
        required : true
    }
})
    const reviews = mongoose.model("reviews",reviewschema)
    
    module.exports = reviews