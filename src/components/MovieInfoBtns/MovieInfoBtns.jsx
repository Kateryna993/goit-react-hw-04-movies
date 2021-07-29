import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import routes from '../../routes';
import style from './MovieInfoButtons.module.css';
// import { useLocation } from 'react-router-dom';

export default function MovieInfoButtons() {
  const location = useLocation();

  const { url } = useRouteMatch();

  // console.log(location.state);
  // console.log(location.state.from);

  return (
    <ul className={style.InfoBtnsWrapper}>
      <li className={style.InfoBtnElem}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state ? location.state.from : routes.home },
          }}
        >
          <button className={style.InfoButton} type="button">
            Cast
          </button>
        </NavLink>
      </li>
      <li className={style.InfoBtnElem}>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location.state ? location.state.from : routes.home },
          }}
        >
          <button className={style.InfoButton} type="button">
            Reviews
          </button>
        </NavLink>
      </li>
    </ul>
  );
}
