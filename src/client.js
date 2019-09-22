import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";

hydrate(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
