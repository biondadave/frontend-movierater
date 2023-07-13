import { Heading } from "@chakra-ui/react";
import React from "react";

interface IProps extends React.PropsWithChildren {}

export const Title: React.FC<IProps> = ({ children }) => (
  <Heading fontSize="lg" mb={5}>
    {children}
  </Heading>
);
