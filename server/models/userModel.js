import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: ture, unique: true },
  email: { type: String, required: ture, unique: true },
  photo: { type: String, required: ture },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: {type: Number, default:5}
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;
