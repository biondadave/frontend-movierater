import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useAllMovies } from "../../lib/globalState/selectors/useAllMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";
import { TopTen } from "./TopTen";

export const Dashboard: React.FC = () => {
  const goTo = useGoTo();
  const movies = useAllMovies();
  const alreadyVoted = Boolean(
    movies.reduce((total, movie) => total + movie.votes, 0),
  );

  if (!alreadyVoted) {
    return (
      <Box>
        <Title>Movie Rater</Title>
        <Box>Non hai ancora votato nessun film, vota adesso!</Box>
        <Button onClick={() => goTo(State.vote)} mt={5}>
          Vota
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <TopTen />
      <Button onClick={() => goTo(State.vote)} mt={5}>
        Vota di nuovo
      </Button>
    </Box>
  );
};
