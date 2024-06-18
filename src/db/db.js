import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error: ", error);
  }
}
