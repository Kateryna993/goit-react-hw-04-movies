import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import style from './MovieInfoButtons.module.css';
// import { useLocation } from 'react-router-dom';

export default function MovieInfoButtons() {
  const location = useLocation();

  const { url } = useRouteMatch();

  // console.log(url);

  return (
    <ul className={style.InfoBtnsWrapper}>
      <li className={style.InfoBtnElem}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: location,
          }}
        >
          <button className={style.InfoButton} type="button">
            Cast
          </button>
        </NavLink>
      </li>
      <li className={style.InfoBtnElem}>
        <NavLink to={{ pathname: `${url}/reviews`, state: location }}>
          <button className={style.InfoButton} type="button">
            Reviews
          </button>
        </NavLink>
      </li>
    </ul>
  );
}
