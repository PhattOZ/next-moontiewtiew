import SearchContainer from "../../components/search/searchContainer";
import { fetchTopRated } from "../../lib/tmdbAPI";

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
      <SearchContainer data={movies} />
    </div>
  );
}
