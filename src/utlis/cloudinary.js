import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: "dqo4orpsk",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) throw Error("File path not provided.");

  try {
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log(`File at ${localFilePath} uploaded succesfully!`);
    fs.unlinkSync(localFilePath, (error) =>
      error ? console.error(`error => ${error}`) : null
    );
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath, (error) =>
      error ? console.error(`error => ${error}`) : null
    );
    console.log(`error => ${error}`);
    throw error;
  }
};

export { uploadOnCloudinary };
