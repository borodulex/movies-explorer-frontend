import { useEffect, useState } from 'react';

import { getSavedMovies, removeMovie } from '../../utils/MainApi';
import { sortArrayOfObjectByProperty } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  const handleMovieCardRemove = (card) => {
    removeMovie(card._id)
      .then((res) => {
        setSavedMovies(savedMovies.filter((item) => item._id !== card._id));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSavedMovies()
      .then((data) =>
        setSavedMovies(sortArrayOfObjectByProperty(data, 'nameRU'))
      )
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <SearchForm />
      {savedMovies.length !== 0 && (
        <MoviesCardList
          movieList={savedMovies}
          type="saved"
          disableMoreButton
          onRemove={handleMovieCardRemove}
        />
      )}
    </>
  );
};

export default SavedMovies;
