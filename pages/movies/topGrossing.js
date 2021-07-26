import { getBoxOfficeAllTime } from "../../lib/movies";

export async function getStaticProps() {
  const movies = await getBoxOfficeAllTime();
  return {
    props: {
      movies,
    },
  };
}

export default function TopGrossing({ movies }) {
  return (
    <div>
      {movies.map(({ id, rank, title, worldwideLifetimeGross, year }) => (
        <div
          className="flex p-1 my-1 bg-gradient-to-tr from-gray-300 to-gray-600 transition-transform duration-100 transform hover:-translate-y-1 hover:scale-101"
          key={id}
        >
          <div>rank: {rank}</div>
          <div>title: {title}</div>
        </div>
      ))}
    </div>
  );
}
