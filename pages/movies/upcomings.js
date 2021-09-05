import SearchContainer from "../../components/search/searchContainer";
import { fetchUpcomings } from "../../lib/tmdbAPI";
import Sidebar from "../../components/sidebar";

export async function getStaticProps() {
  const movies = await fetchUpcomings();
  return {
    props: {
      movies,
    },
  };
}

export default function Upcomings({ movies }) {
  return (
    <>
      <Sidebar />
      <div className="flex-grow pt-3">
        <div className="uppercase text-3xl flex justify-center">Upcomings</div>
        <SearchContainer movies={movies} />
      </div>
    </>
  );
}
