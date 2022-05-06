import { Fragment, useCallback, useEffect, useState } from "react";
import SearchBar from "../components/Search/SearchBar";
import SearchResultsList from "../components/Search/SearchResultsList";

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState([]);
  const inputHandler = (input) => {
    setSearchText(input);
  };
  const fetchData = useCallback(async () => {
    if (searchText === "") {
      setMovieData([]);
      return;
    }

    const json = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchText}`
    )
      .then((response) => response.json())
      .then((data) => data);
    setMovieData(json.splice(0, 8));
  }, [searchText]);
  useEffect(() => {
    if (searchText !== "") {
      fetchData();
    }
  }, [fetchData, searchText]);

  return (
    <Fragment>
      <SearchBar onInput={inputHandler} />
      {searchText.length !== 0 && <SearchResultsList data={movieData} />}
    </Fragment>
  );
};

export default Homepage;
