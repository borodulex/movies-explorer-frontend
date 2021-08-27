import './App.scss';

import block from 'bem-cn';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Switch, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/currentUserContext';
import { getBio } from '../../utils/MainApi';
import { isObjEmpty } from '../../utils/utils';
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
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const headerIncludedPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerIncludedPaths = ['/', '/movies', '/saved-movies'];

  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUser = () => {
    getBio()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isObjEmpty(currentUser)) {
      getCurrentUser();
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className={b()}>
        {headerIncludedPaths.includes(location.pathname) && (
          <Header
            mixClassName={b('header')}
            isLoggedIn={!isObjEmpty(currentUser)}
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
              <Profile />
            </Route>
            <Route path="/signin">
              <Login onSuccess={getCurrentUser} />
            </Route>
            <Route path="/signup">
              <Register onSuccess={getCurrentUser} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
