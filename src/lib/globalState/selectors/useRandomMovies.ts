import { useMemo } from "react";
import { useGlobalState } from "../GlobalStateContext";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 2
   * Si poteva semplificare ancora di più la sintassi facendo ritornare direttamente il risultato della funzione
   * ed accodando il metodo slice per prendere i primi due film dell'array.
   *
   * const result = useMemo(
   *  () => state.movies.sort(() => (Math.random() - 0.5)).slice(0, 2),
   *  [state.movies],
   * );
   *
   * return result;
   *
   */

  const randomMovies = useMemo(() => {
    const movies = state.movies;
    const shuffledMovies = movies.sort(() => Math.random() - 0.5);
    return shuffledMovies.slice(0, 2);
  }, [state.movies]);

  return randomMovies;
};
