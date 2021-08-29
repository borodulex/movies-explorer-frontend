import { useEffect, useState } from 'react';

import { getSavedMovies, removeMovie } from '../../utils/MainApi';
import { sortArrayOfObjectByProperty } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [showShortsOnly, setShowShortsOnly] = useState(false);

  const handleMovieCardRemove = (card) => {
    removeMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== card._id));
      })
      .catch((error) => console.error(error));
  };

  const handleShortsToggle = () => {
    localStorage.setItem('showShortsOnly', !showShortsOnly);
    setShowShortsOnly(!showShortsOnly);
  };

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        setSavedMovies(sortArrayOfObjectByProperty(data, 'nameRU'));
        const previousSessionShowShortsOnly = localStorage.getItem(
          'showShortsOnly',
          !showShortsOnly
        );
        setShowShortsOnly(previousSessionShowShortsOnly === 'true');
      })
      .catch((error) => console.error(error));
  }, [showShortsOnly]);

  return (
    <>
      <SearchForm activeToggle={showShortsOnly} onToggle={handleShortsToggle} />
      {savedMovies.length !== 0 && (
        <MoviesCardList
          movieList={savedMovies}
          showShortsOnly={showShortsOnly}
          type="saved"
          disableMoreButton
          onRemove={handleMovieCardRemove}
        />
      )}
    </>
  );
};

export default SavedMovies;
