import classes from "./List.module.css";
import { IoLanguageOutline } from "react-icons/io5";
import FavouriteIcon from "../Favourite/FavouriteIcon";
import Ratings from "../Ratings/Ratings";
const List = (props) => {
  return (
    <ul className={classes.list_box}>
      {props.list.map((movie, key) => {
        return (
          <li key={key} className={classes.list_item}>
            <div className={classes.item_box}>
              <img
                className={classes.item_img}
                src={movie.image.original}
                alt={movie.name}
              />
              <div className={classes.content_box}>
                <span className={classes.title_box}>
                  <h3 className={classes.item_title}>{movie.name}</h3>
                  <FavouriteIcon data={movie} />
                </span>
                <p className={classes.content_text}>
                  {movie.genres.map((item) => (
                    <span>{item} </span>
                  ))}
                </p>
                <p className={classes.content_text}>
                  <IoLanguageOutline /> {movie.language}
                </p>
                <Ratings data={movie} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
