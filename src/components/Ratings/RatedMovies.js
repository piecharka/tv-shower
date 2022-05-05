import classes from "./RatedMovies.module.css";
const RatedMovies = (props) => {
  return (
    <div className={classes.rated_movies_box}>
      {props.movieList.map((movie, index) => {
        console.log(index);
        if (index > 4) return;
        return (
          <div key={index}>
            <img
              className={classes.rated_movies_img}
              src={movie.image.original}
              alt={movie.name}
            />
            <h3>{movie.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RatedMovies;
