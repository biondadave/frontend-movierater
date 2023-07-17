import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ListIcon,
  ListItem,
  OrderedList,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { State } from "../../lib/globalState/types";

export const TopTen: React.FC = () => {
  const goTo = useGoTo();
  const movies = useTopTenMovies();
  const sum = movies.reduce((a, b) => a + b.votes, 0);
  //const lenght= movies.votes;
  console.log(sum);
  return (
    
    <Box>
      <Title>Top ten</Title>
      <OrderedList>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <Progress value={sum} size="sm" colorScheme="pink" /> {movie.title}{" "}
            ({movie.votes} voti)
          </ListItem>
        ))}
      </OrderedList>
      <Button onClick={() => goTo(State.vote)} mt={5}>
        Vota
      </Button>
    </Box>
  );
};
