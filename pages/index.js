import Layout from "../components/layout";
import Image from "next/image";

import { getBoxOfficeAllTime, getTop250 } from "../lib/movies";

export async function getStaticProps() {
  const movies = await getBoxOfficeAllTime();
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <Layout>
      <video autoPlay muted loop className="h-screen object-cover">
        <source src="/marvelOpening.mp4"></source>
      </video>

      <section className="grid grid-cols-5 gap-y-3 place-items-center">
        {movies.map(({ id, title, rank, worldwideLifetimeGross }) => (
          <div
            className="rounded-lg p-3 bg-gradient-to-tr from-white via-gray-50 to-gray-500 shadow-lg"
            key={id}
          >
            <div>
              <div className="text-sm font-medium">{title}</div>
              <div>Rank: {rank}</div>
              <div>Gross: {worldwideLifetimeGross}</div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
