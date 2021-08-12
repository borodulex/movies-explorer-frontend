import { useMediaQuery } from 'react-responsive';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="page">
      {location.pathname !== '/signin' && (
        <Header
          isLoggedIn={false}
          isMobile={isMobile}
          showHamburgerMenu={isTablet}
        />
      )}
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
