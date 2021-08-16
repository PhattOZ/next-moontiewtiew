import SearchContainer from "../../components/search/searchContainer";
import { fetchTopRated } from "../../lib/tmdbAPI";
import Sidebar from "../../components/sidebar";

export async function getStaticProps() {
  const movies = await fetchTopRated();
  return {
    props: {
      movies,
    },
  };
}

export default function TopRated({ movies }) {
  return (
    <div className="flex pt-3">
      <Sidebar />

      <div className="flex-grow">
        <div className="uppercase text-3xl flex justify-center">Top Rated</div>
        <SearchContainer movies={movies} />
      </div>
    </div>
  );
}
