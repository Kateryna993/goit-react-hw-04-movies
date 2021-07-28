import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FetchMoviesByKeyword } from '../services/MoviesApi';
import toast from 'react-hot-toast';
import Searchbar from '../components/MoviesSearch/MoviesSearch';
import Loader from '../components/Loader/Loader';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesSearchPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    function onFetchMoviesByKeyword() {
      setLoading(true);

      FetchMoviesByKeyword(searchQuery, page)
        .then(({ results }) => {
          // console.log(results);
          setMovies(prevMovies => [...prevMovies, ...results]);

          if (results.length === 0) {
            toast.error('No movies with this keyword to be found!');
          } else if (results.length < 19 && results.length > 0) {
            toast.error('List of movies with this keyword ended!');
          }
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

    onFetchMoviesByKeyword();
  }, [page, searchQuery]);

  const handleFormSubmit = searchQuery => {
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });

    onChangeState();
  };

  const onChangeState = () => {
    setPage(1);
    setMovies([]);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);

    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  const shouldRenderOnLoadMore = movies.length > 0 && !loading;

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} location={location} />}
      {loading && <Loader />}
      {shouldRenderOnLoadMore && <LoadMoreButton onClick={onLoadMore} />}
    </div>
  );
}
