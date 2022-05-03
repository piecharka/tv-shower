import RatedMovies from "./RatedMovies";
import MovieContext from "../../store/movie-context";
import { useContext } from "react";
import CountUp from "react-countup";
import classes from "./RatingSection.module.css";
const RatingSection = () => {
  const ctx = useContext(MovieContext);
  return (
    <div>
      <div className={classes.count_box}>
        <span className={classes.count_flex}>
          <CountUp
            end={ctx.ratingList.length}
            duration={1}
            className={classes.count}
          />
          <p className={classes.count_text}>ratings</p>
        </span>
        <span className={classes.count_flex}>
          <CountUp
            className={classes.count}
            duration={1}
            end={ctx.favouritesList.length}
          />
          <p className={classes.count_text}>favourites</p>
        </span>
      </div>
      {ctx.ratingList.length !== 0 && (
        <div className={classes.movie_box}>
          <RatedMovies />
          {ctx.ratingList.length > 5 && (
            <button className={classes.showmore_button}>Show more</button>
          )}
        </div>
      )}
    </div>
  );
};

export default RatingSection;
