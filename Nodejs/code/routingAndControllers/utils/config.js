import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

export const dbConnection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}