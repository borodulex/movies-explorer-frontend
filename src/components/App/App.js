import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/movies">
          <Movies></Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies></SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
