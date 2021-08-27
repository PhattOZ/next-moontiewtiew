import {
  getMovie,
  POSTER_BASE_URL,
  BACKDROP_BASE_URL,
} from "../../lib/tmdbAPI";
import Image from "next/image";
import dbConnect from "../../lib/dbConnect";
import Reviews from "../../models/Review";
import ReviewForm from "../../components/reviewForm";

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
        {reviews.length !== 0 ? (
          reviews.map((review) => (
            <div key={review.user_id} className="p-3 border-2">
              <div className="font-semibold text-2xl">{review.user_id}</div>
              <div>{review.review}</div>
            </div>
          ))
        ) : (
          <div>Be the first to review!</div>
        )}
      </div>
      <div className="w-full px-6 ring-1">
        <ReviewForm movie_id={movie.id} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const movie = await getMovie(params.id);

  const result = await Reviews.findOne({ movie_id: params.id }, { _id: 0 });

  // Mongoose Models inherit from Documents, which have a toObject() method
  // https://stackoverflow.com/questions/7503450/how-do-you-turn-a-mongoose-document-into-a-plain-object

  const reviews = result !== null ? result.toObject().reviews : [];

  return {
    props: { movie, reviews },
  };
}
