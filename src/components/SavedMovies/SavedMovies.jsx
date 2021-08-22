import { savedCardList } from '../../utils/data';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={savedCardList} type="saved" />
    </>
  );
};

export default SavedMovies;
