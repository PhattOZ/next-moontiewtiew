import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  movie_id: {
    type: String,
    required: true,
  },
  reviews: [
    {
      user_id: {
        type: String,
        required: [true, "Account is required"],
      },
      review: {
        type: String,
        required: [true, "Comment cannot be empty"],
      },
    },
  ],
});

export default mongoose.models.review || mongoose.model("review", ReviewSchema);
