import {
  getMovie,
  POSTER_BASE_URL,
  BACKDROP_BASE_URL,
} from "../../lib/tmdbAPI";
import Image from "next/image";
import dbConnect from "../../lib/reviews";
import Reviews from "../../models/Review";

export default function Movie({ movie, reviews }) {
  return (
    <>
      <div className="h-screen relative">
        <Image
          src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          objectPosition="right top"
          className="opacity-60"
        />
        <div className="absolute bg-gradient-to-r from-white to-transparent w-3/5 h-full flex items-center px-3">
          <div className="flex">
            <div>
              <Image
                src={`${POSTER_BASE_URL}${movie.poster_path}`}
                width={780}
                height={1170}
                className="rounded-md"
              />
            </div>
            <div className=" flex flex-col justify-center px-3">
              <div className="text-4xl font-semibold pb-12">{movie.title}</div>
              <div className="w-2/3">{movie.overview}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {reviews !== [] ? (
          reviews.map((review) => (
            <div key={review._id} className="p-3 border-2 shadow-lg">
              <div className="font-semibold text-2xl">{review.account}</div>
              <div>{review.comment}</div>
            </div>
          ))
        ) : (
          <div>Be the first to review!</div>
        )}
      </div>
      <div className="w-full px-6">
        <form>
          <div>Write</div>
          <textarea
            type="text"
            className="w-full border-2 border-indigo-200 focus:border-indigo-500 outline-none rounded-md"
            placeholder="Leave a review"
            rows={4}
          />
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const movie = await getMovie(params.id);

  const result = await Reviews.find({});

  const reviews = result.map((doc) => {
    const review = doc.toObject();
    review._id = review._id.toString();
    return review;
  });

  return {
    props: { movie, reviews },
  };
}
