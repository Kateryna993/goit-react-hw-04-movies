import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import routes from './routes.js';
// import NotFoundView from './views/NotFoundView.jsx';
// import HomeView from './views/HomeView.jsx';
// import MoviesSearchPage from './views/MoviesSearchView.jsx';
// import MovieDetailsView from './views/MovieDetailsView.jsx';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);
const MoviesSearchPage = lazy(() =>
  import('./views/MoviesSearchView.jsx' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView.jsx' /* webpackChunkName: "movies-search-view" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /* webpackChunkName: "notfound-view" */),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact>
            <HomeView />
          </Route>
          <Route path={routes.movieList} exact>
            <MoviesSearchPage />
          </Route>
          <Route path={routes.movieDetails}>
            <MovieDetailsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <Toaster position="top-right" />
    </Container>
  );
}
