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
    <>
      <Sidebar />
      <div className="flex-grow pt-3">
        <div className="uppercase text-3xl flex justify-center">Populars</div>
        <SearchContainer movies={movies} />
      </div>
    </>
  );
}
