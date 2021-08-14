import './Movies.scss';

import block from 'bem-cn';

import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  const b = block('movies');

  return (
    <section className={b()}>
      <SearchForm />
    </section>
  );
};

export default Movies;
