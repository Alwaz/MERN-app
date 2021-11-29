import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  user_name: String,
  user_email: String,
});

// Compile model from schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
