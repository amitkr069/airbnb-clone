// this is for authentication - signup, login, logout
import genToken from "../config/token.js"
import User from "../model/user_model.js"
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    try {
        // body se name email & password lenge
        let {name, email, password} = req.body

        // if user already exists to error throw krwa denge
        let existUser = await User.findOne({email}) // database se find kr rhe "User" is from user_model.js
        if(existUser){
            return res.status(400).json({message: "User already exists"})
        }

        // agr nii h then create user
        
        // first encrypt the password
        let hashPassword = await bcrypt.hash(password, 10) // 10 is a string isme 10 characters add kr dega
        let user = await User.create({name, email, password:hashPassword})

        // now mongodb me jo unique id generate hota h usse token generate karenge
        // token with the help of jsonwebtoken
        // iske liye confg ke andr token.js bna lenge - whn se imprt kr lenge wo function
        let token = await genToken(user._id)

        //now is token ko cookie ke andr parse krna h
        res.cookie("token", token,{
            httpOnly:true, //jb secure hoga then https jo jayega av only http h
            secure: process.env.NODE_ENVIRONMENT = "production", // jb NODE_ENVIRONMENT production me chl jayega tb secure ho jayega
            sameSite : "strict",
            maxAge: 7*24*60*60*1000 // 7 days to millisec me

        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message:`signUp error ${error}`})
    }
}
