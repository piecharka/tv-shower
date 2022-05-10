import { useEffect, useContext, useState, Fragment } from "react";
import MovieContext from "../../store/movie-context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import classes from "./FavouriteIcon.module.css";
const FavouriteIcon = (props) => {
  const [favouriteMovie, setFavouriteMovie] = useState(false);
  const ctx = useContext(MovieContext);

  const favouriteMovieOn = () => {
    setFavouriteMovie(true);
    ctx.addFavouriteMovie(props.data);
  };
  const favouriteMovieOff = () => {
    setFavouriteMovie(false);
    ctx.deleteFavouriteMovie(props.data);
  };

  useEffect(() => {
    const favouriteElement = ctx.favouritesList.find(
      (item) => item.id === props.data.id
    );
    if (favouriteElement) setFavouriteMovie(true);
  }, [ctx.favouritesList, props.data.id]);

  return (
    <Fragment>
      {!favouriteMovie && (
        <AiOutlineHeart
          className={classes.favourite_icon}
          onClick={favouriteMovieOn}
        />
      )}
      {favouriteMovie && (
        <AiFillHeart
          className={classes.favourite_icon}
          onClick={favouriteMovieOff}
        />
      )}
    </Fragment>
  );
};

export default FavouriteIcon;
