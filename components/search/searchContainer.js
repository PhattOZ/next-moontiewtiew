import SearchBar from "./searchBar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { search } from "../../lib/tmdbAPI";

export default function SearchContainer({ movies }) {
  const [searchResult, setSearchResult] = useState([]);

  const handleOnSearch = async (keyword) => {
    const response = await search(keyword);
    const results = response.results;
    setSearchResult(results);
  };

  const movieList = (movies) =>
    movies.map(({ id, vote_average, title, poster_path }) => (
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
    ));

  return (
    <>
      <SearchBar onSearch={handleOnSearch} />
      <div className="">
        {searchResult.length ? movieList(searchResult) : movieList(movies)}
      </div>
    </>
  );
}
