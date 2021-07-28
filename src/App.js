import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView.jsx';
import HomeView from './views/HomeView.jsx';
import MoviesSearchPage from './views/MoviesSearchView.jsx';
import { Toaster } from 'react-hot-toast';
// import routes from './routes.js';
import MovieDetailsView from './views/MovieDetailsView.jsx';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesSearchPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </Container>
  );
}
