import { fetchTopRated } from "../../lib/tmdbAPI";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../../components/searchBar";

export async function getStaticProps() {
  const movies = await fetchTopRated();
  return {
    props: {
      movies,
    },
  };
}

export default function Discover({ movies }) {
  return (
    <div className="pt-3">
      <div className="uppercase text-3xl flex justify-center">
        Discover the world of film
      </div>
      <SearchBar />

      <div className="">
        {movies.map(({ id, vote_average, title, poster_path }) => (
          <div key={id}>
            <Link href={`${id}`}>
              <a className="flex p-2 m-2 rounded-md bg-gradient-to-tr from-gray-300 to-gray-600 transition-transform duration-100 transform hover:-translate-y-1 hover:scale-101">
                <Image
                  src={`http://image.tmdb.org/t/p/w154${poster_path}`}
                  width={154}
                  height={231}
                />
                <div className="px-3">
                  <div className="text-2xl font-semibold tracking-wide">
                    {title}
                  </div>
                  <div className="text-xl">vote_average: {vote_average}</div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
