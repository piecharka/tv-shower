import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "./store/movie-context";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
