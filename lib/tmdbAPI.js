export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";
export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";

const rawKey = process.env.TMDBAPI_KEY;
const API_KEY = rawKey.replace(/['"]+/g, "");

console.log(API_KEY);

export async function fetchPopulars() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
  );
  const json = await res.json();

  return json.results;
}

export async function fetchTopRated() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );
  const json = await res.json();

  return json.results;
}

export async function fetchUpcomings() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );
  const json = await res.json();

  return json.results;
}

export async function getMovie(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );

  const json = await res.json();

  return json;
}

export async function search(key) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${key}`
  );

  const json = await res.json();

  return json;
}
