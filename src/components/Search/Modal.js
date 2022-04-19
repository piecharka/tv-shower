import classes from "./Modal.module.css";
import MovieContext from "../../store/movie-context";
import { useEffect, useContext, useState } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import Rating from "@mui/material/Rating";
const Modal = (props) => {
  const [rating, setRating] = useState(props.data.rate ? props.data.rate : 0);
  //console.log(props.data.rate);
  const ctx = useContext(MovieContext);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        props.onExit();
      }
    });
  }, [props]);
  const ratingBeginning = () => {
    const element = ctx.ratingList.find((item) => item.id === props.data.id);
    if (!element || !element.rate) return 0;
    return element.rate;
  };

  const addToWatchList = () => {
    ctx.addMovieWatchList(props.data);
  };
  const deleteFromWatchList = () => {
    ctx.deleteMovieWatchList(props.data);
    props.onExit();
  };
  const ratingHandler = (event, newValue) => {
    setRating(newValue);
    ctx.rate(props.data, newValue);
    ctx.deleteMovieWatchList(props.data);
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
          <h3 className={classes.modal_title}>{props.data.name}</h3>
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
            <Rating
              name="simple-controlled"
              value={rating === 0 ? ratingBeginning() : rating}
              size="large"
              onChange={ratingHandler}
            />
            <a
              className={`${classes.modal_button} ${classes.modal_readmore_button}`}
              href={props.data.url}
            >
              Read more
            </a>
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
