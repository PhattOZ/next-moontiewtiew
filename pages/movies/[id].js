import { fetchPopulars, getMovie } from "../../lib/movies";
import styles from "../../components/Movie.module.css";

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
  return (
    <div className={styles.page_container}>
      <div>
        <div className="text-4xl font-bold">{movie.title}</div>
      </div>
    </div>
  );
}
