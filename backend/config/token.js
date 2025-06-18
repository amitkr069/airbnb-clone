import jwt from "jsonwebtoken"
// token bnayenge isme

// ek secret number bnayege pehle koi v random apne mn se. in .env file
const genToken = async (userId)=>{
    try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET,
            {expiresIn:"7d"})
            return token
    } catch (error) {
        console.login("token error")
    }
}
export default genToken;