import './MoviesCardList.scss';

import block from 'bem-cn';
import { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import DefaultButton from '../UiKit/Buttons/DefaultButton/DefaultButton';
import Preloader from '../UiKit/Preloader/Preloader';

const MoviesCardList = (props) => {
  const { cards, isLoading, isRequestError, type, onSave, onDelete } = props;

  const b = block('movies-cards');

  const [cardsCount, setCardsCount] = useState(0);

  const getCardsForRender = (cards) => cards.slice(0, cardsCount);

  const checkMobile = () => window.innerWidth < 480;
  const checkTablet = () => window.innerWidth < 768;

  const handleMoreButtonClick = () => {
    const isMobile = checkMobile();
    const isTablet = checkTablet();

    if (isMobile) {
      setCardsCount(cardsCount + 1);
    } else if (isTablet) {
      cardsCount % 2 === 0
        ? setCardsCount(cardsCount + 2)
        : setCardsCount(cardsCount + 3);
    } else {
      cardsCount % 3 === 0
        ? setCardsCount(cardsCount + 3)
        : cardsCount % 2 === 0
        ? setCardsCount(cardsCount + 4)
        : setCardsCount(cardsCount + 5);
    }
  };

  useEffect(() => {
    const isMobile = checkMobile();
    const isTablet = checkTablet();
    setCardsCount((isMobile && 5) || (isTablet && 8) || 12);
  }, [isLoading]);

  return (
    <section className={b()}>
      <div className={b('container')}>
        {isLoading ? (
          <Preloader mixClassName={b('preloader')} />
        ) : (
          <>
            {cards.length === 0 ? (
              <p>
                {isRequestError
                  ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
                  : 'Ничего не найдено'}
              </p>
            ) : (
              <>
                <ul className={b('list')}>
                  {getCardsForRender(cards).map((card) => (
                    <li className={b('item')} key={card.nameRU}>
                      <MoviesCard
                        card={card}
                        isSaved={card.isSaved}
                        type={type}
                        onSave={onSave}
                        onDelete={onDelete}
                      />
                    </li>
                  ))}
                </ul>
                {cards.length > cardsCount && (
                  <DefaultButton
                    type={'section'}
                    mixClassName={b('button')}
                    onClick={handleMoreButtonClick}
                  >
                    Ещё
                  </DefaultButton>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
