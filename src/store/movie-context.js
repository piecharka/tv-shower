import React, { useState } from "react";
const MovieContext = React.createContext({
  watchList: [],
  ratingList: [],
  favouritesList: [],

  rate: (movie, rating) => {},
  addMovieWatchList: (movie) => {},
  deleteMovieWatchList: (movie) => {},
  addFavouriteMovie: (movie) => {},
  deleteFavouriteMovie: (movie) => {},
});

export const MovieContextProvider = (props) => {
  const [watchList, setWatchList] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);

  const copyHandler = (array, movie) => {
    const copy = array.find((element) => element.id === movie.id);
    if (copy) return true;
    else return false;
  };

  const rate = (movie, rating) => {
    if (copyHandler(ratingList, movie)) return;

    setWatchList((prevList) => {
      return prevList.filter((item) => item.id !== movie.id);
    });
    setRatingList((prevList) => {
      prevList.filter((item) => item.id === movie.id);
      return [...prevList, { ...movie, rate: rating }];
    });
  };

  const addMovieWatchList = (movie) => {
    if (copyHandler(watchList, movie)) return;
    setWatchList((prevList) => [...prevList, movie]);
  };
  const deleteMovieWatchList = (movie) => {
    setWatchList((prevList) => prevList.filter((item) => item.id !== movie.id));
  };

  const addFavouriteMovie = (movie) => {
    if (copyHandler(favouritesList, movie)) return;
    setFavouritesList((prevList) => [...prevList, movie]);
  };
  const deleteFavouriteMovie = (movie) => {
    setFavouritesList((prevList) =>
      prevList.filter((item) => item.id !== movie.id)
    );
  };

  const contextValue = {
    watchList,
    ratingList,
    favouritesList,
    rate,
    addMovieWatchList,
    deleteMovieWatchList,
    addFavouriteMovie,
    deleteFavouriteMovie,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
