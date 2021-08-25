import './App.scss';

import block from 'bem-cn';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const b = block('app');

  const location = useLocation();
  const history = useHistory();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const headerIncludedPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerIncludedPaths = ['/', '/movies', '/saved-movies'];

  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleFakeLogin = () => {
    setIsLoggedIn(true);
    history.push('/movies');
  };

  const handleFakeLogout = () => {
    setIsLoggedIn(false);
    history.push('/');
  };

  return (
    <div className={b()}>
      {headerIncludedPaths.includes(location.pathname) && (
        <Header
          mixClassName={b('header')}
          isLoggedIn={isLoggedIn}
          showHamburgerMenu={isTablet}
        />
      )}
      <main className={b('content')}>
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
            <Profile onLogout={handleFakeLogout} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleFakeLogin} />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      {footerIncludedPaths.includes(location.pathname) && (
        <Footer mixClassName={b('footer')} />
      )}
    </div>
  );
}

export default App;
