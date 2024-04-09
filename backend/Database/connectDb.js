import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('connect to mongoDb')
    } catch (error) {
        console.log("error connecting do mongoDb", error.message)
    }
}

export default connectToMongoDb