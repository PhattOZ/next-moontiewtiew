import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, "Account is required"],
  },
  comment: {
    type: String,
    required: [true, "Comment cannot be empty"],
  },
});

export default mongoose.models.review || mongoose.model("review", ReviewSchema);
