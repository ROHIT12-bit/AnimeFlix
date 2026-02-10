import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    tgId: { type: String, unique: true, sparse: true },
    name: { type: String, default: "" },
    favorites: { type: [String], default: [] }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
