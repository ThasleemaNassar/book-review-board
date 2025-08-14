// import book model
const books = require('../model/bookModel')
const tok = require('../middleware/jwtMiddleware') 


//------------------------------USER----------------------------------------

//  add a book
exports.addBookController = async(req,res)=>{
    //  logic
    const {title, author, language, noofpages, isbn, imageurl, category, price, dprice, abstract} = req.body
    console.log(title, author, language, noofpages, isbn, imageurl, category, price, dprice, abstract);
    
    console.log(req.files);
    console.log(req.payload);
    
    console.log(req);
    

    try {
        const existingBook = await books.findOne({title, userMail:req.payload})
        console.log(existingBook);
        
        if(existingBook){
            res.status(401).json('Book already exist')
        }
        else{
            const newBook = new books({
              title, author, language, noofpages, isbn, imageurl, category, price, dprice, abstract,uploadImages:req.files,userMail:req.payload  
            })
        await newBook.save()
        res.status(200).json(newBook)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// get home books
exports.homeBookController = async(req,res)=>{
    try {
        const allHomeBooks = await books.find().sort({_id:-1})
        res.status(200).json(allHomeBooks)
        // console.log(allHomeBooks);
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// get a particular book
exports.getViewBookController = async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try {
        const specificBook = await books.findOne({_id:id})
         res.status(200).json(specificBook)
    } catch (error) {
         res.status(500).json(error)
    }
    
}

// // add a review
// exports.addReviewController = async(req,res)=>{
//     const {id} = req.params
//     console.log(id);
//     const {rating,comment} = req.body
//     console.log(rating,comment);
    
//     try {
//         const existingReview = await books.findOne({_id:id,userMail:req.payload})
//         if(existingReview){
//             res.status(406).json('User alredy added a Review')
//         }
//         else{
//             const newReview = books({rating,comment})
//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }
    
// }




// // get all user added books
// exports.getAllUserAddedBooksController = async(req,res)=>{
//     const userMail = req.payload
//     try {
//         const allUserBooks = await books.find({userMail})
//         res.status(200).json(allUserBooks)
        
//     } catch (error) {
//         res.error(500).json(error)
//     }
// }

// get all books - userside
// exports.getAllBookUserController = async(req,res)=>{
//     const {search} = req.query
//     console.log(search);

//     const userMail = req.payload
    
//     try {
//         const query = {
//             title :{
//                 $regex : search, $options:"i"
//             },
//             userMail:{
//                 $ne : userMail
//             }
//         }

//         const allBookUser = await books.find(query)
//         res.status(200).json(allBookUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }
