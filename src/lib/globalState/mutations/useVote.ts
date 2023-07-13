import { useState } from "react";
import { useGlobalState } from "../GlobalStateContext";
import { actions } from "../actions";

interface ISelect {
  (s: string): void;
}

interface IVote {
  (): void;
}
interface IUseVote {
  (): [
    /**
     * Current choice
     */
    string,
    /**
     * Make a choice
     */
    ISelect,
    /**
     * Submit vote
     */
    IVote,
  ];
}

export const useVote: IUseVote = () => {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useGlobalState();

  const select: ISelect = (s) => setValue(s);

  const vote: IVote = () => dispatch(actions.vote(value));

  return [value, select, vote];
};
