import { useEffect, useState } from 'react';

import { MOVIES_API_BASE_URL } from '../../utils/config.js';
import { getSavedMovies, removeMovie, saveMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQueryRequested, setIsQueryRequested] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);

  const parseMoviesApiResponse = (data) => {
    return data.map((item) => {
      return {
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: MOVIES_API_BASE_URL + item.image.url,
        trailer: item.trailerLink,
        thumbnail: MOVIES_API_BASE_URL + item.image.formats.thumbnail.url,
        movieId: item.id,
        nameRU: item.nameRU.trim(),
        nameEN: item.nameEN?.trim(),
      };
    });
  };

  const filterMovies = (cards, query) =>
    cards.filter(
      (item) =>
        item.nameRU.includes(query) ||
        (item.nameEN && item.nameEN.includes(query))
    );

  const markSavedMovies = (movieList, savedMovieList) => {
    return movieList.map((movie) => {
      let savedMovieId;
      return savedMovieList.find((savedMovie) => {
        if (savedMovie.movieId === movie.movieId && !savedMovie.isSaved) {
          savedMovieId = savedMovie._id;
          return true;
        } else {
          return false;
        }
      })
        ? { isSaved: true, _id: savedMovieId, ...movie }
        : movie;
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsQueryRequested(true);

    getMovies()
      .then((movieList) => {
        const parsedMovieList = parseMoviesApiResponse(movieList);
        const searchResultMovieList = filterMovies(parsedMovieList, query);
        const markedMovieList = markSavedMovies(
          searchResultMovieList,
          savedMovieList
        );
        localStorage.setItem(
          'movieSearchResult',
          JSON.stringify(searchResultMovieList)
        );
        localStorage.setItem('moviesQuery', query);
        setMoviesList(markedMovieList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsRequestError(true);
        setIsLoading(false);
      });
  };

  const handleSaveClick = (card) => {
    saveMovie(card)
      .then((res) => {
        const savedCard = { isSaved: true, ...res };
        setMoviesList((state) =>
          state.map((item) =>
            item.movieId === savedCard.movieId ? savedCard : item
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleRemoveClick = (card) => {
    removeMovie(card._id)
      .then(() => {
        setMoviesList((state) =>
          state.map((item) => {
            if (item._id === card._id) {
              const { isSaved, _id, ...unmarkedMovie } = item;
              return unmarkedMovie;
            } else {
              return item;
            }
          })
        );
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSavedMovies()
      .then((savedMovieList) => {
        const previousSessionCards = JSON.parse(
          localStorage.getItem('movieSearchResult') || '[]'
        );
        const previousSessionQuery = localStorage.getItem('moviesQuery' || '');

        if (previousSessionCards.length !== 0) {
          const markedMovieList = markSavedMovies(
            previousSessionCards,
            savedMovieList
          );
          setMoviesList(markedMovieList);
          setQuery(previousSessionQuery);
          setIsQueryRequested(true);
        }
        setSavedMovieList(savedMovieList);
      })
      .catch((error) => {
        setIsRequestError(true);
        console.error(error);
      });
  }, []);

  return (
    <>
      <SearchForm
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSearch}
      />
      {isQueryRequested && (
        <MoviesCardList
          movieList={moviesList}
          savedMovieList={savedMovieList}
          isLoading={isLoading}
          isRequestError={isRequestError}
          onSave={handleSaveClick}
          onRemove={handleRemoveClick}
        />
      )}
    </>
  );
};

export default Movies;
