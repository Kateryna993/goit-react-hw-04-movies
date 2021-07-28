import { NavLink, withRouter, useLocation } from 'react-router-dom';
import routes from '../../routes';
import style from './MoviesList.module.css';
import PropTypes from 'prop-types';
import noMoviePoster from '../../images/no-cover.png';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.cardSet}>
      {movies.map(({ id, poster_path, title, release_date }, index) => (
        <li key={index} className={style.movieCardElem}>
          <NavLink
            className={style.link}
            to={{
              pathname: `${routes.movieList}/${id}`,
              state: { from: location },
            }}
          >
            <div className={style.imgCardElem}>
              <img
                className={style.movieCardImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noMoviePoster
                }
                alt={`${title} poster`}
              />

              <div className={style.movieCardText}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.filmRelease}>
                  {release_date && <span>({release_date.slice(0, 4)})</span>}
                </p>
              </div>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
export default withRouter(MoviesList);
