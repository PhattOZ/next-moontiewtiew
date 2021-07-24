const imdbAPI_top250 = "https://imdb-api.com/en/API/Top250Movies/k_z6nwyfcr";
const imdbAPI_boxOfficeAllTime =
  "https://imdb-api.com/en/API/BoxOfficeAllTime/k_z6nwyfcr";

export async function getTop250() {
  const response = await fetch(imdbAPI_top250);
  const json = await response.json();
  const movies = json.items;

  return movies;
}

// Get first 100 all time box offices
export async function getBoxOfficeAllTime() {
  const response = await fetch(imdbAPI_boxOfficeAllTime);
  const json = await response.json();

  // Slice only first 100
  const movies = json.items.slice(0, 100);

  return movies;
}
