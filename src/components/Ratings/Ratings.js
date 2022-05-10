import { Fragment, useState, useContext, useEffect } from "react";
import Rating from "@mui/material/Rating";
import MovieContext from "../../store/movie-context";
const Ratings = (props) => {
  const ctx = useContext(MovieContext);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const ratingElement = ctx.ratingList.find(
      (item) => item.id === props.data.id
    );
    if (ratingElement && ratingElement.rate) setRating(ratingElement.rate);
  }, [props.data.id, ctx.ratingList]);

  const ratingHandler = (event, newValue) => {
    setRating(newValue);
    ctx.rate(props.data, newValue);
    ctx.deleteMovieWatchList(props.data);
  };
  return (
    <Fragment>
      <Rating
        name="simple-controlled"
        value={rating}
        size="large"
        onChange={ratingHandler}
      />
    </Fragment>
  );
};

export default Ratings;
