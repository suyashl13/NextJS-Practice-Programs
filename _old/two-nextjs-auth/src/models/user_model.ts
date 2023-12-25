import { Schema, model, models } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email "],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: { type: String, required: false },
    forgotPasswordExpiry: { type: Date, required: false },
    verifyToken: { type: String, required: false },
    verifyTokenExpiry: { type: Date, required: false },
  },
  { timestamps: true }
);

const User = models.users || model("users", UserSchema);

export default User;
