import mongoose from "mongoose";

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // console.log(process.env.MONGO_URL);
        console.log("DB connected")
    }
    catch (error){
        console.log("db error")
        console.error(error.message);
    }
}
export default connectDb;