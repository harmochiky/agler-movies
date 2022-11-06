const isFavMovie = (movies = [], movie) => {
  let fav = false;

  if (!movie) return false;
  if (movies.length <= 0) return false;
  if (movies === null) return false;

  movies.forEach((x) => {
    if (x.id === movie.id) {
      fav = true;
    }
  });

  return fav;
};
export default isFavMovie;
