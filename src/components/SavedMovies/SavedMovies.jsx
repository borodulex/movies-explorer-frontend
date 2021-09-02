import { useEffect, useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { getSavedMovies, removeMovie } from '../../utils/MainApi';
import { sortArrayOfObjectByProperty } from '../../utils/utils';
import { filterMovies } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [savedMovieListForRender, setSavedMovieListForRender] = useState([]);
  const [showShortsOnly, setShowShortsOnly] = useState(false);

  const { values, handleChange } = useForm();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResult = filterMovies(savedMovieList, values.savedMoviesQuery);
    const sortedSearchResultByName = sortArrayOfObjectByProperty(
      searchResult,
      'nameRU'
    );
    setSavedMovieListForRender(sortedSearchResultByName);
  };

  const handleMovieCardRemove = (card) => {
    removeMovie(card._id)
      .then(() => {
        setSavedMovieListForRender(
          savedMovieListForRender.filter((item) => item._id !== card._id)
        );
        setSavedMovieList((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleShortsToggle = () => setShowShortsOnly(!showShortsOnly);

  const handleEmptyInput = () => setSavedMovieListForRender(savedMovieList);

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        const sortedDataByName = sortArrayOfObjectByProperty(data, 'nameRU');
        setSavedMovieList(sortedDataByName);
        setSavedMovieListForRender(sortedDataByName);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <SearchForm
        name="savedMoviesQuery"
        value={values.savedMoviesQuery}
        activeToggle={showShortsOnly}
        onChange={handleChange}
        onSubmit={handleSearch}
        onToggle={handleShortsToggle}
        onInvalid={handleEmptyInput}
      />
      <MoviesCardList
        movieList={savedMovieListForRender}
        showShortsOnly={showShortsOnly}
        type="saved"
        disableMoreButton
        onRemove={handleMovieCardRemove}
      />
    </>
  );
};

export default SavedMovies;
