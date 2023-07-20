import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  // TODO: associate movies with votes
  // state contains movies and votes in separate properties,
  // join them and return an IRatedMovie array

  /**
   * ! NOTE TASK 1
   * si poteva evitare l'instanziamento delle costanti movies e votes, il resto ok
   *
   * const movies = state.movies.map((movie) => ({
   *   ...movie,
   *   votes: state.votes[movie.id] || 0,
   * }));
   *
   * return movies;
   *
   */

  const movies = state.movies as Movie[];
  const votes = state.votes;

  const ratedMovies: IRatedMovie[] = movies.map((movie, index) => {
    return {
      ...movie,

      votes: votes[index],
    };
  });

  return ratedMovies;
};
