// import express
const express = require('express')
// import usercontroller
const userController = require('./controllers/userController')
// import book controller
const bookController = require('./controllers/bookController')
// import review controller
const reviewController = require('./controllers/reviewController')
// import middleware
const jwt = require('./middleware/jwtMiddleware')
// import multer
const multerConfig = require('./middleware/multerMiddleware')
const { addReviewController } = require('./controllers/reviewController')

// instance
const routes = new express.Router()

// path to register a user
routes.post('/register',userController.registerController)

// path to login
routes.post('/login',userController.loginController)

//--------------------------------USER----------------------------------------

// path to add book
routes.post('/add-book', jwt,multerConfig.array('uploadImages', 3) , bookController.addBookController)

// path to get all home books
routes.get('/home-books',bookController.homeBookController)

// path to view book
routes.get('/view-book/:id',bookController.getViewBookController)

// path to add review
routes.post('/add-review',jwt,reviewController.addReviewController)

// path to view book
routes.get('/view-review',reviewController.viewReviewController)


// export
module.exports = routes