import SearchContainer from "../../components/search/searchContainer";
import { fetchPopulars } from "../../lib/tmdbAPI";
import Sidebar from "../../components/sidebar";

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
    <div className="flex pt-3">
      <Sidebar />
      <div className="flex-grow">
        <div className="uppercase text-3xl flex justify-center">Populars</div>
        <SearchContainer movies={movies} />
      </div>
    </div>
  );
}
