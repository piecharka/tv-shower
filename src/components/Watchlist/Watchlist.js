import { useContext } from "react";
import WatchListContext from "../../store/watchlist-context";
const WatchList = () => {
  const ctx = useContext(WatchListContext);
  return (
    <div>
      {ctx.watchList.map((data, key) => {
        return <p key={key}>{data.name}</p>;
      })}
    </div>
  );
};

export default WatchList;
