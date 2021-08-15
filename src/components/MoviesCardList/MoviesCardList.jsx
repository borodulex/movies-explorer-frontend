import './MoviesCardList.scss';

import block from 'bem-cn';

import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const { cards } = props;

  const b = block('movies-cards');

  return (
    <section className={b()}>
      <ul className={b('list')}>
        {cards.map((card) => (
          <li className={b('item')}>
            <MoviesCard
              image={card.image}
              name={card.nameRU}
              duration={card.duration}
              saved={card.saved}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
