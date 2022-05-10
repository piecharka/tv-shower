import classes from "./Modal.module.css";
import MovieContext from "../../store/movie-context";
import { useEffect, useContext } from "react";
import FavouriteIcon from "../Favourite/FavouriteIcon";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import Ratings from "../Ratings/Ratings";

const Modal = (props) => {
  const ctx = useContext(MovieContext);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        props.onExit();
      }
    });
  }, [props]);

  //Rating and favourite feature in the beginning

  const addToWatchList = () => {
    ctx.addMovieWatchList(props.data);
  };
  const deleteFromWatchList = () => {
    ctx.deleteMovieWatchList(props.data);
    props.onExit();
  };

  return (
    <div className={classes.theme}>
      <div className={classes.modal}>
        {props.data.image !== null && (
          <img
            className={classes.modal_image}
            src={props.data.image.medium}
            alt={props.data.name}
          />
        )}
        <div>
          <div className={classes.title_box}>
            <h3 className={classes.modal_title}>{props.data.name}</h3>
            <FavouriteIcon data={props.data} />
          </div>
          <div
            className={classes.modal_description}
            dangerouslySetInnerHTML={{ __html: props.data.summary }}
          ></div>

          <div className={classes.modal_button_box}>
            {!props.watchList && (
              <button
                onClick={addToWatchList}
                className={`${classes.modal_button} ${classes.modal_watchlist_button}`}
              >
                Add to watch list
              </button>
            )}
            {props.watchList && (
              <button
                onClick={deleteFromWatchList}
                className={`${classes.modal_button} ${classes.modal_watchlist_button}`}
              >
                Delete from watch list
              </button>
            )}
            <a
              className={`${classes.modal_button} ${classes.modal_readmore_button}`}
              href={props.data.url}
            >
              Read more
            </a>
            <Ratings data={props.data} />
          </div>
        </div>

        <AiOutlineFullscreenExit
          onClick={props.onExit}
          className={classes.exit_icon}
          size={32}
        />
      </div>
    </div>
  );
};

export default Modal;
