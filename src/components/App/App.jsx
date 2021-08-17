import { useMediaQuery } from 'react-responsive';
import { Route, Switch, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
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

  const headerExcludePaths = ['/signin', '/signup'];
  const footerExcludePaths = ['/signin', '/signup', '/profile'];

  return (
    <div className="page">
      {!headerExcludePaths.includes(location.pathname) && (
        <Header
          isLoggedIn={true}
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
      {!footerExcludePaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
