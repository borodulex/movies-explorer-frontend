import { useEffect, useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { getSavedMovies, removeMovie } from '../../utils/MainApi';
import { sortArrayOfObjectByProperty } from '../../utils/utils';
import { filterMovies } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [showShortsOnly, setShowShortsOnly] = useState(false);

  const { values, handleChange } = useForm();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchResult = filterMovies(savedMovieList, values.filmQuery);
    setSavedMovieList(searchResult);
  };

  const handleMovieCardRemove = (card) => {
    removeMovie(card._id)
      .then(() => {
        setSavedMovieList(
          savedMovieList.filter((item) => item._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleShortsToggle = () => setShowShortsOnly(!showShortsOnly);

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        setSavedMovieList(sortArrayOfObjectByProperty(data, 'nameRU'));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <SearchForm
        value={values.filmQuery}
        activeToggle={showShortsOnly}
        onChange={handleChange}
        onSubmit={handleSearch}
        onToggle={handleShortsToggle}
      />
      {savedMovieList.length !== 0 && (
        <MoviesCardList
          movieList={savedMovieList}
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
