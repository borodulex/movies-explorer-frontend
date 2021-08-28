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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const b = block('app');

  const location = useLocation();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const headerIncludedPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerIncludedPaths = ['/', '/movies', '/saved-movies'];

  const [currentUser, setCurrentUser] = useState({});
  const [isCurrentUserFetched, setIsCurrentUserFetched] = useState(false);

  const getCurrentUser = () => {
    getBio()
      .then((user) => {
        setCurrentUser(user);
        setIsCurrentUserFetched(true);
      })
      .catch((error) => {
        setIsCurrentUserFetched(true);
      });
  };

  useEffect(() => {
    if (isObjEmpty(currentUser)) {
      getCurrentUser();
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {isCurrentUserFetched && (
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
              <ProtectedRoute
                path="/movies"
                loggedIn={!isObjEmpty(currentUser)}
                component={Movies}
              />
              <ProtectedRoute
                path="/saved-movies"
                loggedIn={!isObjEmpty(currentUser)}
                component={SavedMovies}
              />
              <ProtectedRoute
                path="/profile"
                loggedIn={!isObjEmpty(currentUser)}
                component={Profile}
              />
              <Route path="/signin">
                <Login onSuccess={getCurrentUser} />
              </Route>
              <Route path="/signup">
                <Register onSuccess={getCurrentUser} />
              </Route>
              <ProtectedRoute
                loggedIn={!isObjEmpty(currentUser)}
                component={NotFound}
              />
            </Switch>
          </main>
          {footerIncludedPaths.includes(location.pathname) && (
            <Footer mixClassName={b('footer')} />
          )}
        </div>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
