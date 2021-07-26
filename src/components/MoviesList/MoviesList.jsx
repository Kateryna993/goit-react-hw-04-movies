import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import style from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
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
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={`${title} poster`}
              />

              <h4 className={style.title}>{title}</h4>
              <p className={style.filmRelease}>({release_date.slice(0, 4)})</p>
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

// {
//   /* <MovieItem
//               title={title}
//               imgUrl={
//                 poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
//               }
//               date={release_date && release_date.slice(0, 4)}
//             /> */
// }
