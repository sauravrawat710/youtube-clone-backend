import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    console.info(`Mongo connected !! DB HOST: ${db.connection.host}`);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};
