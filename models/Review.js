import mongoose from "mongoose";

const subschema = new mongoose.Schema(
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
  { _id: false }
);

const ReviewSchema = new mongoose.Schema({
  movie_id: {
    type: String,
    required: true,
  },
  reviews: [subschema],
});

export default mongoose.models.review || mongoose.model("review", ReviewSchema);
