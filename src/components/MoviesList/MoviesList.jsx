import { NavLink, withRouter } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import routes from '../../routes';
// import PropTypes from 'prop-types';

// import * as api from '../../services/MoviesApi';
const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path, release_date }, index) => (
        <li key={index}>
          <NavLink
            to={{
              pathname: `${routes.movieList}/${id}`,
              state: { from: location },
            }}
          >
            <MovieItem
              title={title}
              imgUrl={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              date={release_date && release_date.slice(0, 4)}
            />
            {/* <img
            src={
              poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt={`${title} poster`}
          /> */}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// MoviesList.propTypes = {
//   movies: PropTypes.array,
// };
export default withRouter(MoviesList);
