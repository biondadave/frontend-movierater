import { useGlobalState } from "../GlobalStateContext";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  // TODO: return only 2 random movies (use useMemo)

  return state.movies;
};
