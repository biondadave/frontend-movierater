import { IGlobalState, State } from "./types";

export const initialState: IGlobalState = {
  current: State.dashboard,
  movies: [],
  votes: {},
};
