import { useEffect, useState } from 'react';

import { MOVIES_API_BASE_URL } from '../../utils/config.js';
import { getSavedMovies, removeMovie, saveMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi.js';
import { filterMovies } from '../../utils/utils.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQueryRequested, setIsQueryRequested] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [showShortsOnly, setShowShortsOnly] = useState(false);

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
          JSON.stringify(markedMovieList)
        );
        localStorage.setItem('moviesQuery', query);
        setMovieList(markedMovieList);
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
        setMovieList((state) =>
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
        setMovieList((state) =>
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

  const handleShortsToggle = () => {
    localStorage.setItem('showShortsOnly', !showShortsOnly);
    setShowShortsOnly(!showShortsOnly);
  };

  useEffect(() => {
    getSavedMovies()
      .then((savedMovieList) => {
        const previousSessionCards = JSON.parse(
          localStorage.getItem('movieSearchResult') || '[]'
        );
        const previousSessionQuery = localStorage.getItem('moviesQuery' || '');
        const previousSessionShowShortsOnly = localStorage.getItem(
          'showShortsOnly',
          !showShortsOnly
        );

        if (previousSessionCards.length !== 0) {
          const markedMovieList = markSavedMovies(
            previousSessionCards,
            savedMovieList
          );
          setMovieList(markedMovieList);
          setQuery(previousSessionQuery);
          setIsQueryRequested(true);
          setShowShortsOnly(previousSessionShowShortsOnly === 'true');
        }
        setSavedMovieList(savedMovieList);
      })
      .catch((error) => {
        setIsRequestError(true);
        console.error(error);
      });
  }, [showShortsOnly]);

  return (
    <>
      <SearchForm
        value={query}
        activeToggle={showShortsOnly}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSearch}
        onToggle={handleShortsToggle}
      />
      {isQueryRequested && (
        <MoviesCardList
          movieList={movieList}
          showShortsOnly={showShortsOnly}
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
