import classes from "./Modal.module.css";
import WatchListContext from "../../store/watchlist-context";
import { useEffect, useContext } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
const Modal = (props) => {
  const ctx = useContext(WatchListContext);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        props.onExit();
      }
    });
  }, [props]);

  const addToWatchList = () => {
    ctx.addMovie(props.data);
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
            <button onClick={addToWatchList} className={classes.modal_button}>
              Add to watch list
            </button>
            <a className={classes.modal_button} href={props.data.url}>
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
