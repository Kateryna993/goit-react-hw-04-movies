import { useState, useEffect, Suspense } from 'react';

import {
  Route,
  Switch,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import routes from '../routes';
import MovieDetails from '../components/MoviesDetails/MovieDetails';
import MovieInfoButtons from '../components/MovieInfoBtns/MovieInfoBtns';
import ReturnButton from '../components/GoBackBtn/GoBackBtn';
import Loader from '../components/Loader/Loader';
import * as moviesApi from '../services/MoviesApi';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    moviesApi
      .FetchMovieInfo(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => error)
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? routes.home);
  };

  return (
    <>
      {movie && <ReturnButton onClick={handleGoBack} />}

      {movie && <MovieDetails movie={movie} />}
      {movie && (
        <h3
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#2a363b',
            fontSize: '20px',
          }}
        >
          Additional Information
        </h3>
      )}
      {loading && <Loader />}
      {movie && <MovieInfoButtons url={url} location={location} />}
      {movie && (
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={`${path}:moviesId/cast`}>
              {/* <CastView moviesId={moviesId} /> */}
            </Route>

            <Route path={`${path}:moviesId/reviews`}>
              {/* <ReviewsView moviesId={moviesId} /> */}
            </Route>
          </Switch>
        </Suspense>
      )}
    </>
  );
}
