import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from '../services/MoviesApi';

import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeViewMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function onFetchTrendingMovies() {
      setLoading(true);

      FetchTrendingMovies(page)
        .then(({ results }) => {
          setMovies(prevMovies => [...prevMovies, ...results]);
        })
        .catch(error => error)
        .finally(() => {
          setLoading(false);
          if (page > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        });
    }

    onFetchTrendingMovies();
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const shouldRenderOnLoadMore = movies.length > 0 && !loading;

  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          color: '#454850',
          fontSize: '28px',
          textShadow: '1px 1px grey',
        }}
      >
        Trending Movies
      </h2>

      {movies && <MoviesList movies={movies} />}
      {loading && <Loader />}
      {shouldRenderOnLoadMore && <Button onClick={onLoadMore} />}
    </div>
  );
}
