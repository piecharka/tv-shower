import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // ON START
    const watchListItems = JSON.parse(localStorage.getItem("watchlist"));
    if (watchListItems) {
      setWatchList(watchListItems);
    }

    const favouritesItems = JSON.parse(localStorage.getItem("favourites"));
    if (favouritesItems) {
      setFavouritesList(favouritesItems);
    }

    const ratingsItems = JSON.parse(localStorage.getItem("ratings"));
    if (ratingsItems) {
      setRatingList(ratingsItems);
    }
  }, []);
  useEffect(() => {
    //ON UPDATE
    localStorage.setItem("ratings", JSON.stringify(ratingList));
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    localStorage.setItem("favourites", JSON.stringify(favouritesList));
  }, [favouritesList, ratingList, watchList]);

  const copyHandler = (array, movie) => {
    const copy = array.find((element) => element.id === movie.id);
    if (copy) return true;
    else return false;
  };

  const rate = (movie, rating) => {
    if (!rating) {
      console.log(ratingList);
      console.log(rating);
      setRatingList((prevList) =>
        prevList.filter((item) => item.id !== movie.id)
      );
      return;
    }
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
    setWatchList((prevList) => {
      return [...prevList, movie];
    });
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
