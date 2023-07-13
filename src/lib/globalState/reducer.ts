import { actionPayloads, IGlobalState, State } from "./types";

export const reducer = (
  state: IGlobalState,
  action: actionPayloads,
): IGlobalState => {
  console.log("Dispatched", action);

  switch (action.type) {
    case "loadMovies":
      return { ...state, movies: action.payload, current: State.dashboard };

    case "vote":
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.payload]: (state.votes[action.payload] || 0) + 1,
        },
      };

    case "goTo":
      return {
        ...state,
        current: action.payload,
      };

    default:
      return state;
  }
};
