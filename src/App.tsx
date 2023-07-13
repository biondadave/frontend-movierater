import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Routes } from "./Routes";
import { Layout } from "./components/layout/Layout";
import { GlobalStateProvider } from "./lib/globalState/GlobalStateContext";
import { theme } from "./theme";

const appTheme = extendTheme(theme);

export const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ChakraProvider theme={appTheme}>
        <Layout>
          <Routes />
        </Layout>
      </ChakraProvider>
    </GlobalStateProvider>
  );
};
