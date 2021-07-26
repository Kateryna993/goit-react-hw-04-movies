import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView.jsx';
import HomeView from './views/HomeView.jsx';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies"></Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
