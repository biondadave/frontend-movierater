import React, { useContext, useMemo } from "react";
import { initialState } from "./initialState";
import { IGlobalState, actionPayloads } from "./types";
import { useMovieRaterLogic } from "./useMovieRaterLogic";

const GlobalContext = React.createContext<{
  state: IGlobalState;
  dispatch: React.Dispatch<actionPayloads>;
}>({ state: initialState, dispatch: () => {} });

interface IProps extends React.PropsWithChildren {}

/**
 * Initialize GlobalState
 */
export const GlobalStateProvider: React.FC<IProps> = ({ children }) => {
  const { state, dispatch } = useMovieRaterLogic();

  console.log(state);

  const globalProviderValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * Access to GlobalState and dispatcher
 */
export const useGlobalState = () => {
  const globalState = useContext(GlobalContext);
  if (!globalState) {
    console.warn(
      "Error: useGlobalState must be used under GlobalStateProvider",
    );
  }
  return globalState;
};
