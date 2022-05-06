import classes from "./SearchResultsList.module.css";
import { useState } from "react";
import Modal from "./Modal";
const SearchResultsList = (props) => {
  const [modal, setModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const exitModal = () => {
    setModal(false);
  };
  return (
    <ul className={classes.search_list}>
      {props.data.map((movie, key) => {
        const movieDetailsHandler = () => {
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
