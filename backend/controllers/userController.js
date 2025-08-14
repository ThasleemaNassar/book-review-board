
const users = require("../model/userModel")
const jwt = require('jsonwebtoken')

// register
exports.registerController = async(req,res)=>{
    
    const { username , password , email} = req.body
    console.log(username, password , email);
    
    try {
        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json('User Already exist')
        }
        else{
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}

// login
exports.loginController = async(req,res)=>{
    const {email , password} = req.body
    console.log(email,password);
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){

            if(existingUser.password == password){
                const token = jwt.sign({userMail:existingUser.email}, process.env.JWTSECRETKEY)
                res.status(200).json({existingUser, token})
            }
            else{
                res.status(403).json('Invalid credentials')
            }
        }
        else{
            res.status(406).json("User doesn't Exist. Please register")
        }
    } catch (error) {
        res.status(500).json(error)
        
    }
    
}