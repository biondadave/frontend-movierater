import { useAllMovies } from "./useAllMovies";

/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  const movies = useAllMovies();

  // TODO: reorder only best 10 movies by vote, desc (movie with more votes first)

  /**
   * ! NOTE TASK 3
   * si poteva semplificare ritornando direttamente il risultato senza instanzionare la costante topTenMoviese
   * ed accondando il metodo sort con il metodo slice per ottenere i primi 10 film
   *
   * return movies.sort((a, b) => (a.votes > b.votes ? -1 : 1)).slice(0, 10);
   *
   */

  movies.sort((a, b) => b.votes - a.votes);
  const topTenMovies = movies.slice(1, 10);

  return topTenMovies;
};
