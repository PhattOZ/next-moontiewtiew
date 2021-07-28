const TMDBAPI_KEY = "c8fd0f4b1605e0c9d33b24b13c6e5924";
const POPULAR_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDBAPI_KEY}&language=en-US`;

export async function fetchPopulars() {
  const res = await fetch(POPULAR_BASE_URL);
  const json = await res.json();

  return json.results;
}
