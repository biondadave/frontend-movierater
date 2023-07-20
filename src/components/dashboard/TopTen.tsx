import { Box, Button, ListItem, OrderedList, Progress } from "@chakra-ui/react";
import React from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";

export const TopTen: React.FC = () => {
  const goTo = useGoTo();
  const movies = useTopTenMovies();

  /**
   * ! NOTE TASK 6
   * si poteva utilizzare il parametro opacity sull'elemento ListItem utilizzando una funzione per calcolare
   * l'opacità in base all'indice.
   *
   * <ListItem opacity={(movies.length - i) * 0.1} key={movie.id}>
   *
   *  Il valore della singola barra progress dovrebbe risultare in percentuale sulla base dei voti totali, quindi
   *  se i voti sono due la barra deve essere al 50% su due film.
   *
   * const { state } = useGlobalState();
   * const votes = state.votes;
   *
   * const total = Object.values(votes).reduce((acc, vote) => acc + vote, 0);
   *
   * <Progress value={(movie.votes / total) * 100} ...
   */

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
