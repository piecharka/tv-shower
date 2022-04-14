import React, { useState } from "react";
const WatchListContext = React.createContext({
  watchList: [],
  addMovie: (movie) => {},
});

export const WatchListContextProvider = (props) => {
  const [watchList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    const copy = watchList.find((element) => element.id === movie.id);
    if (copy) return;
    setMovieList((prevList) => {
      return [...prevList, movie];
    });
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
