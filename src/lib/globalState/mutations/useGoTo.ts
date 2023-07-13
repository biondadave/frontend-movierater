import { actions } from "../actions";
import { useGlobalState } from "../GlobalStateContext";
import { State } from "../types";

export const useGoTo = () => {
  const { dispatch } = useGlobalState();
  return (next: State) => dispatch(actions.goTo(next));
};
