import './MoviesCardList.scss';

import block from 'bem-cn';

import MoviesCard from '../MoviesCard/MoviesCard';
import DefaultButton from '../UiKit/Buttons/DefaultButton/DefaultButton';

const MoviesCardList = (props) => {
  const { cards } = props;

  const b = block('movies-cards');

  return (
    <section className={b()}>
      <div className={b('container')}>
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
        <DefaultButton type={'section'} mixClassName={b('button')}>
          Ещё
        </DefaultButton>
      </div>
    </section>
  );
};

export default MoviesCardList;
