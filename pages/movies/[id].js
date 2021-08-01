import { fetchPopulars, getMovie } from "../../lib/movies";
import styles from "../../components/Movie.module.css";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const movie = await getMovie(params.id);

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const movies = await fetchPopulars();

  const paths = movies.map((movie) => {
    return { params: { id: movie.id.toString() } };
  });

  return { paths, fallback: false };
}

export default function Movie({ movie }) {
  const image_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className={styles.page_container}>
      <div className="w-screen h-screen relative">
        <Image
          src={`${image_BASE_URL}${movie.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          objectPosition="right top"
        />
        <div className="absolute bg-gradient-to-r from-white to-transparent w-2/5 h-full flex flex-col justify-center">
          <div className="text-4xl font-bold pb-12">{movie.title}</div>
          <div className="">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
