import { useEffect, useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { getSavedMovies, removeMovie, saveMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi.js';
import {
  filterMovies,
  markSavedMovies,
  parseMoviesApiResponse,
} from '../../utils/utils.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [movieListForRender, setMovieListForRender] = useState([]);
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQueryRequested, setIsQueryRequested] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [showShortsOnly, setShowShortsOnly] = useState(false);

  const { values, handleChange } = useForm();

  const handleSearch = (e) => {
    e.preventDefault();
    setIsQueryRequested(true);

    if (movieList.length === 0) {
      setIsLoading(true);
      getMovies()
        .then((movieList) => {
          const parsedMovieList = parseMoviesApiResponse(movieList);
          const searchResult = filterMovies(parsedMovieList, values.movieQuery);
          const markedSearchResult = markSavedMovies(
            searchResult,
            savedMovieList
          );
          localStorage.setItem('movieList', JSON.stringify(parsedMovieList));
          setMovieList(parsedMovieList);
          setMovieListForRender(markedSearchResult);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsRequestError(true);
          setIsLoading(false);
        });
    } else {
      const searchResult = filterMovies(movieList, values.movieQuery);
      const markedSearchResult = markSavedMovies(searchResult, savedMovieList);
      setMovieListForRender(markedSearchResult);
    }
  };

  const handleSaveClick = (card) => {
    saveMovie(card)
      .then((res) => {
        const savedCard = { isSaved: true, ...res };
        setMovieListForRender((state) =>
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
        setMovieListForRender((state) =>
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

  const handleShortsToggle = () => setShowShortsOnly(!showShortsOnly);

  useEffect(() => {
    getSavedMovies()
      .then((savedMovieList) => {
        const prevSessionMovieList = JSON.parse(
          localStorage.getItem('movieList') || '[]'
        );
        console.log('prevSessionMovieList', prevSessionMovieList);
        if (prevSessionMovieList.length !== 0) {
          const markedMovieList = markSavedMovies(
            prevSessionMovieList,
            savedMovieList
          );
          setMovieList(markedMovieList);
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
        name="movieQuery"
        value={values.movieQuery}
        activeToggle={showShortsOnly}
        onChange={handleChange}
        onSubmit={handleSearch}
        onToggle={handleShortsToggle}
      />
      {isQueryRequested && (
        <MoviesCardList
          movieList={movieListForRender}
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
