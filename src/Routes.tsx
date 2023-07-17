import React from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Vote } from "./components/vote/Vote";
import { useGlobalState } from "./lib/globalState/GlobalStateContext";
import { useLoadMovies } from "./lib/globalState/mutations/useLoadMovies";
import { State } from "./lib/globalState/types";
import { TopTen } from "./components/dashboard/TopTen";

export const Routes: React.FC = () => {
  const { state } = useGlobalState();

  // Load movies at bootstrap
  useLoadMovies();

  // TODO: Task 7 - Add an "ErrorPage" case for api error handling
  switch (state.current) {
    case State.vote:
      return <Vote />;
    case State.topTen:
      return <TopTen />;
    case State.dashboard:
    default:
      return <Dashboard />;
  }
};
