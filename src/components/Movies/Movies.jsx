import { cardList } from '../../utils/data.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={cardList} isLoading={false} />
    </>
  );
};

export default Movies;
