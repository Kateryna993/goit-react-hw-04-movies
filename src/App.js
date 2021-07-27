import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView.jsx';
import HomeView from './views/HomeView.jsx';
import MoviesSearchPage from './views/MoviesSearchView.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesSearchPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </Container>
  );
}
