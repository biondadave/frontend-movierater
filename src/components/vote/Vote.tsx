import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useVote } from "../../lib/globalState/mutations/useVote";
import { useRandomMovies } from "../../lib/globalState/selectors/useRandomMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";

export const Vote: React.FC = () => {
  const movies = useRandomMovies();
  const [value, select, vote] = useVote();
  const goTo = useGoTo();
  const [isMovieSelected, setIsMovieSelected] = useState(false);

  const handleSelect = (selectedMovieId) => {
    select(selectedMovieId);
    setIsMovieSelected(true);
  };

  const voteAndGo = () => {
    if (isMovieSelected) {
      vote();
      goTo(State.dashboard);
    }
  };

  return (
    <Box>
      <Title>Qual'è il migliore tra:</Title>
      <RadioGroup onChange={handleSelect} value={value}>
        <List>
          {movies.map((movie) => (
            <ListItem py={2} key={movie.id}>
              <Radio value={movie.id}>
                <Heading fontSize="md">{movie.title}</Heading>
                <Box>
                  del {movie.year}, di {movie.author}
                </Box>
              </Radio>
            </ListItem>
          ))}
        </List>
      </RadioGroup>
      <Button onClick={voteAndGo} mt={5} disabled={!isMovieSelected}>
        Vota
      </Button>
    </Box>
  );
};