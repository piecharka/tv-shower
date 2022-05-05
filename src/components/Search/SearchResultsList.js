import classes from "./SearchResultsList.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
const SearchResultsList = (props) => {
  const [modal, setModal] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    if (props.data.length === 0) {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  }, [props.data]);

  const exitModal = () => {
    setModal(false);
  };
  return (
    <ul className={classes.search_list}>
      {!isInputEmpty &&
        props.data.map((movie, key) => {
          const movieDetailsHandler = () => {
            console.log(movie);
            setModal(true);
            setMovieDetails(movie.show);
          };
          return (
            <li
              className={classes.list_item}
              onClick={movieDetailsHandler}
              key={key}
            >
              {movie.show.image !== null && (
                <img
                  className={classes.list_item_img}
                  src={movie.show.image.medium}
                  alt={movie.show.name}
                />
              )}
              <p className={classes.list_item_title}>{movie.show.name}</p>
            </li>
          );
        })}
      {modal && (
        <Modal data={movieDetails} watchList={false} onExit={exitModal} />
      )}
    </ul>
  );
};

export default SearchResultsList;
