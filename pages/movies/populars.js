import { fetchPopulars } from "../../lib/movies";
import Image from "next/image";

export async function getStaticProps() {
  const movies = await fetchPopulars();
  return {
    props: {
      movies,
    },
  };
}

export default function Populars({ movies }) {
  return (
    <div className="pt-6">
      {movies.map(({ id, vote_average, title, poster_path }) => (
        <div
          className="flex p-1 m-2 rounded-sm bg-gradient-to-tr from-gray-300 to-gray-600 transition-transform duration-100 transform hover:-translate-y-1 hover:scale-101"
          key={id}
        >
          <Image
            src={`http://image.tmdb.org/t/p/w154${poster_path}`}
            width={154}
            height={231}
          />
          <div>
            <div className="text-xl">vote_average: {vote_average}</div>
            <div className="text-lg">{title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
