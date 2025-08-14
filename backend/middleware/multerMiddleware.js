//  import multer
const multer = require('multer')


const storage = multer.diskStorage({
    destination : (req, file, callback)=>{
        callback(null, './imgUploads')
    },
    filename : (req, file, callback)=>{
        callback(null, `Image - ${file.originalname}`)
    }
})


const fileFilter = (req, file, callback)=>{
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
        callback(null, true)
    }
    else{
        callback(null, false)
        callback(new Error('Only accepts png, jpg and jpeg files'))
    }

}


const multerConfig = multer({
    storage, // storage : storage , here key and value are same
    fileFilter //fileFilter : fileFilter
})


module.exports = multerConfig
