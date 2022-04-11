import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    props.onInput(e.target.value);
  };
  return (
    <form className={classes.form} onSubmit={inputHandler}>
      <label className={classes.form_title}>Search for show title</label>
      <input
        className={classes.search_input}
        type="text"
        onChange={inputHandler}
      ></input>
    </form>
  );
};

export default SearchBar;
