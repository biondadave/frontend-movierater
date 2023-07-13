import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

/**
 * Start mock server
 */
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
