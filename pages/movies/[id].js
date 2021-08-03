import { fetchTopRated, getMovie } from "../../lib/tmdbAPI";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const movie = await getMovie(params.id);

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const movies = await fetchTopRated();

  const paths = movies.map((movie) => {
    return { params: { id: movie.id.toString() } };
  });

  return { paths, fallback: true };
}

export default function Movie({ movie }) {
  const image_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="absolute w-full h-full flex justify-center">loading</div>
    );
  }

  return (
    <>
      <div className="h-screen relative">
        <Image
          src={`${image_BASE_URL}${movie.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          objectPosition="right top"
        />
        <div className="absolute bg-gradient-to-r from-white to-transparent w-3/5 h-full flex flex-col justify-center px-3">
          <div className="text-4xl font-semibold pb-12">{movie.title}</div>
          <div className="w-2/3">{movie.overview}</div>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-black">review</div>
      </div>
    </>
  );
}
