const reviews = require("../model/reviewModel");
const tok = require('../middleware/jwtMiddleware') 

// add a review
exports.addReviewController = async(req,res)=>{

    const {id} = req.params
    // console.log(id);
    const {rating,comment} = req.body
    // console.log(req.body);
    
    // console.log(req.payload);

    

    try {
        const existingReview = await reviews.findOne({userMail:req.payload})
        console.log(existingReview);
        
        if(existingReview){
            res.status(401).json('Review added already')
        }
        else{
            const userMail = req.payload
            console.log(userMail);
            
            const username =userMail.slice(0, -10)
            console.log(username);
            
            const newReview = new reviews({
              rating,comment,userMail:req.payload,username:username
            })

            // console.log(newReview);
            
        await newReview.save()
        res.status(200).json(newReview)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// get home books
exports.viewReviewController = async(req,res)=>{
    try {
        const allReviews = await reviews.find().sort({_id:-1})
        res.status(200).json(allReviews)
        console.log(allReviews);
        
    } catch (error) {
        res.status(500).json(error)
    }
}