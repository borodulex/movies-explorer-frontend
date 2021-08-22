import './MoviesCardList.scss';

import block from 'bem-cn';

import MoviesCard from '../MoviesCard/MoviesCard';
import DefaultButton from '../UiKit/Buttons/DefaultButton/DefaultButton';
import Preloader from '../UiKit/Preloader/Preloader';

const MoviesCardList = (props) => {
  const { cards, isLoading, type } = props;

  const b = block('movies-cards');

  return (
    <section className={b()}>
      <div className={b('container')}>
        {isLoading ? (
          <Preloader mixClassName={b('preloader')} />
        ) : (
          <>
            <ul className={b('list')}>
              {cards.map((card) => (
                <li className={b('item')} key={card.nameRU}>
                  <MoviesCard
                    image={card.image}
                    name={card.nameRU}
                    duration={card.duration}
                    saved={card.saved}
                    type={type}
                  />
                </li>
              ))}
            </ul>
            {cards.length >= 12 && (
              <DefaultButton type={'section'} mixClassName={b('button')}>
                Ещё
              </DefaultButton>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
