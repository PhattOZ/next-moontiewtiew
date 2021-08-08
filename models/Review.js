import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  account: {
    type: String,
  },
  comment: {
    type: String,
  },
});

export default mongoose.models.review || mongoose.model("review", ReviewSchema);
