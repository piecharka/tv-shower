import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage";
import WatchlistPage from "./pages/Watchlistpage";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/watchlist" element={<WatchlistPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
