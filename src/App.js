import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage";
import WatchlistPage from "./pages/Watchlistpage";
import Ratingpage from "./pages/Ratingpage";
import ListPage from "./pages/ListPage";
import { useContext } from "react";
import MovieContext from "./store/movie-context";
function App() {
  const ctx = useContext(MovieContext);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/watchlist" element={<WatchlistPage />}></Route>
        <Route path="/ratings" element={<Ratingpage />}></Route>
        <Route
          path="/ratings/ratedmovies-list"
          element={<ListPage list={ctx.ratingList} />}
        ></Route>
        <Route
          path="/ratings/favourite-list"
          element={<ListPage list={ctx.favouritesList} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
