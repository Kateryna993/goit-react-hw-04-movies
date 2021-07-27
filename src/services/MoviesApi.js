import axios from 'axios';
const BaseUrl = 'https://api.themoviedb.org/3';
const ApiKey = '00058587d68cb4a4d089885f915b5f25';

// 1.список самых популярных фильмов на сегодня для создания коллекции на главной странице.

const FetchTrendingMovies = page => {
  return axios
    .get(`${BaseUrl}/trending/movie/day?api_key=${ApiKey}&page=${page}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// 2. поиск кинофильма по ключевому слову на странице фильмов.
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const FetchMoviesByKeyword = (searchQuery, page) => {
  return axios
    .get(
      `${BaseUrl}/search/movie?api_key=${ApiKey}&query=${searchQuery}&page=${page}&language=en-US`,
    )
    .then(({ data }) => data)
    .catch(error => error);
};

// 3.запрос полной информации о фильме для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const FetchMovieInfo = movieId => {
  return axios
    .get(`${BaseUrl}/movie/${movieId}?api_key=${ApiKey}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
};

// 4. запрос информации о актёрском составе для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

const FetchMovieCast = movieId => {
  return axios
    .get(`${BaseUrl}/movie/${movieId}/credits?api_key=${ApiKey}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
};

// 5. запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

const FetchMovieReviews = movieId => {
  return axios
    .get(
      `${BaseUrl}/movie/${movieId}}/reviews?api_key=${ApiKey}&language=en-US`,
    )
    .then(({ data }) => data)
    .catch(error => error);
};

export {
  FetchTrendingMovies,
  FetchMoviesByKeyword,
  FetchMovieInfo,
  FetchMovieCast,
  FetchMovieReviews,
};
