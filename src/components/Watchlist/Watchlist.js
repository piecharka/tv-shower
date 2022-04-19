import { useContext, useState } from "react";
import classes from "./Watchlist.module.css";
import Modal from "../Search/Modal";
import MovieContext from "../../store/movie-context";
const WatchList = () => {
  const [modal, setModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const exitModal = () => {
    setModal(false);
  };

  const ctx = useContext(MovieContext);
  return (
    <div className={classes.grid}>
      {ctx.watchList.map((data, key) => {
        const movieDetailsHandler = () => {
          setModal(true);
          setMovieDetails(data);
        };
        if (data.image === null)
          return (
            <div
              onClick={movieDetailsHandler}
              className={classes.grid_item_img}
            >
              <p>{data.name}</p>
            </div>
          );
        return (
          <img
            key={key}
            onClick={movieDetailsHandler}
            src={data.image.original}
            alt={data.name}
            className={classes.grid_item_img}
          />
        );
      })}

      {modal && (
        <Modal data={movieDetails} watchList={true} onExit={exitModal} />
      )}
    </div>
  );
};

export default WatchList;
