import dotenv from "dotenv";
import { run } from "./db/db.js";

dotenv.config({
  path: "./env",
});

run();
