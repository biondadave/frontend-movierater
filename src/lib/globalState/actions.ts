import { MovieList } from "../../api/types";
import { IAction, State } from "./types";

export const actions = {
  loadMovies: (movies: MovieList): IAction<"loadMovies", MovieList> => ({
    type: "loadMovies",
    payload: movies,
  }),

  vote: (id: string): IAction<"vote", string> => ({
    type: "vote",
    payload: id,
  }),

  goTo: (state: State): IAction<"goTo", State> => ({
    type: "goTo",
    payload: state,
  }),
};
