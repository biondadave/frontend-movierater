import { useAllMovies } from "./useAllMovies";

/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  const movies = useAllMovies();

  // TODO: reorder only best 10 movies by vote, desc (movie with more votes first)

  return movies;
};
