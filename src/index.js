import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { WatchListContextProvider } from "./store/watchlist-context";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <WatchListContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WatchListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
