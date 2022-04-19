import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className={classes.navigation_box}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${classes.navigation_active} ${classes.navigation_title}`
            : classes.navigation_title
        }
      >
        TV-shower
      </NavLink>
      <nav className={classes.section_list}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.navigation_active} ${classes.navigation_title}`
              : classes.navigation_title
          }
          to="/watchlist"
        >
          Watch list
        </NavLink>
        <NavLink
          to="/ratings"
          className={({ isActive }) =>
            isActive
              ? `${classes.navigation_active} ${classes.navigation_title}`
              : classes.navigation_title
          }
        >
          Your ratings
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
