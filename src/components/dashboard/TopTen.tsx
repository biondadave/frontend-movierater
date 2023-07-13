import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, ListIcon, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";

export const TopTen: React.FC = () => {
  const movies = useTopTenMovies();

  return (
    <Box>
      <Title>Top ten</Title>
      <OrderedList>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <ListIcon as={ChevronRightIcon} color="brand.2" /> {movie.title} (
            {movie.votes} voti)
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
};
