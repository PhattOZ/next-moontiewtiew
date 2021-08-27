import dbConnect from "../../../lib/dbConnect";
import Review from "../../../models/Review";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        // UPSERT: If no document is found, create it
        const option = { upsert: true };

        const review = await Review.updateOne(
          { movie_id: req.body.movie_id },
          { $push: { reviews: req.body.reviews } },
          option
        );
        res.status(201).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
