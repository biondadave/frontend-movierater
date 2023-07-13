import { useGlobalState } from "../GlobalStateContext";
import { useMemo } from "react";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  const randomMovies = useMemo(() => {
    const movies = state.movies;
    const shuffledMovies = movies.sort(() => Math.random() - 0.5);
    return shuffledMovies.slice(0, 2);
  }, [state.movies]);

  return randomMovies;
};