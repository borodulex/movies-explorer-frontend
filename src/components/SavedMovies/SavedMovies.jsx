import { savedCardList } from '../../utils/data';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={savedCardList} type="saved" />
    </div>
  );
};

export default SavedMovies;
