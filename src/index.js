import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Serving is running on port: ${process.env.PORT} `);
  });
});
