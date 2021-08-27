import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={[]} type="saved" />
    </>
  );
};

export default SavedMovies;
