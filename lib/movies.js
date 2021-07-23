const imdbAPI = "https://imdb-api.com/en/API/Top250Movies/k_z6nwyfcr";

export async function getTop250() {
  const response = await fetch(imdbAPI);
  const json = await response.json();
  const movies = await json.items;

  console.log(movies);

  return movies;
}
