import React, { useState } from "react";
const WatchListContext = React.createContext({
  watchList: [],
  addMovie: (movie) => {},
});

export const WatchListContextProvider = (props) => {
  const [watchList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    setMovieList((prevList) => [...prevList, movie]);
  };

  const contextValue = {
    watchList,
    addMovie,
  };

  return (
    <WatchListContext.Provider value={contextValue}>
      {props.children}
    </WatchListContext.Provider>
  );
};

export default WatchListContext;
