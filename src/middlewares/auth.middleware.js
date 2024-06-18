import { User } from "../models/user.model";
import { asyncHandler } from "../utlis/asyncHandler";
import { jwt } from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (res, res, next) => {
  try {
    const token =
      res.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select(
      "-password, -refreshToken"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Access Token",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "Invalid Access Token",
    });
  }
});
