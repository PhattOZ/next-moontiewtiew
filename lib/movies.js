const TMDBAPI_KEY = "c8fd0f4b1605e0c9d33b24b13c6e5924";

export async function fetchPopulars() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDBAPI_KEY}&language=en-US`
  );
  const json = await res.json();

  return json.results;
}

export async function getMovie(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${TMDBAPI_KEY}&language=en-US`
  );

  const json = await res.json();

  return json;
}
