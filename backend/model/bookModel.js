const mongoose = require('mongoose')

const bookschema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    author:{
        type : String,
        required : true
    },
    language:{
        type : String,
        required : true
    },
    noofpages:{
        type : Number,
        required : true
    },
    isbn:{
        type : String,
        required : true
    },
    imageurl:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    dprice:{
        type : Number,
        required : true
    },
    abstract:{
        type : String,
        required : true
    },
    uploadImages:{
        type : Array,
        required : true
    },
    userMail:{
        type : String,
        required : true
    }
})



const books = mongoose.model("books",bookschema)

module.exports = books