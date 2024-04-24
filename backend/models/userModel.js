import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    enum: ["male", "Female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
});

const User = mongoose("User", userSchema);

export default User;
