import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Navigation = () => {
  return (
    <nav className={style.navigationBlock}>
      <NavLink
        className={style.link}
        activeClassName={style.activeLink}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={style.link}
        activeClassName={style.activeLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
