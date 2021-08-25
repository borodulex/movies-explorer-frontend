import { useEffect, useState } from 'react';

import { MOVIES_API_BASE_URL } from '../../utils/config.js';
import { removeMovie, saveMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
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
        trailer: item.trailer,
        thumbnail: MOVIES_API_BASE_URL + item.image.formats.thumbnail,
        movieId: item.movieId,
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

  const handleSearch = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsQueryRequested(true);

    getMovies()
      .then((movies) => {
        console.log(movies);
        const parsedMovies = parseMoviesApiResponse(movies);
        const movieSearchResult = filterMovies(parsedMovies, query);
        localStorage.setItem('moviesQuery', query);
        localStorage.setItem(
          'movieSearchResult',
          JSON.stringify(movieSearchResult)
        );
        setMoviesList(movieSearchResult);
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
        const savedCard = { isSaved: true, _id: res._id, ...res };
        setMoviesList((state) =>
          state.map((item) =>
            item.movieId === savedCard.movieId ? savedCard : item
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteClick = (card) => {
    removeMovie(card._id)
      .then(() =>
        setMoviesList((state) =>
          state.map((item) => item.movieId !== card.movieId)
        )
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const previousSessionCards = JSON.parse(
      localStorage.getItem('movieSearchResult') || '[]'
    );
    const previousSessionQuery = localStorage.getItem('moviesQuery' || '');

    setQuery(previousSessionQuery);
    setMoviesList(previousSessionCards);
    setIsQueryRequested(true);
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
          cards={moviesList}
          isLoading={isLoading}
          isRequestError={isRequestError}
          onSave={handleSaveClick}
          onDelete={handleDeleteClick}
        />
      )}
    </>
  );
};

export default Movies;
