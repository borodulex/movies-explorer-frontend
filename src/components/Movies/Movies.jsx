import './Movies.scss';

import block from 'bem-cn';

import { cardList } from '../../utils/data.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const b = block('movies');

  return (
    <section className={b()}>
      <SearchForm />
      <MoviesCardList cards={cardList} isLoading={false} />
    </section>
  );
};

export default Movies;
