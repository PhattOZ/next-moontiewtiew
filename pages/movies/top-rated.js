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
    <>
      <Sidebar />

      <div className="flex-grow pt-3">
        <div className="uppercase text-3xl flex justify-center">Top Rated</div>
        <SearchContainer movies={movies} />
      </div>
    </>
  );
}
