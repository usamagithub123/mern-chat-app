import mongoose from "mongoose";

const connectdb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("error connecting to mongodb",error.message);
    }
}
export default connectdb;