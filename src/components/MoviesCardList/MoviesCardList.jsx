import './MoviesCardList.scss';

import block from 'bem-cn';
import { useEffect, useState } from 'react';

import { filterShortMovies } from '../../utils/utils';
import MoviesCard from '../MoviesCard/MoviesCard';
import DefaultButton from '../UiKit/Buttons/DefaultButton/DefaultButton';
import Preloader from '../UiKit/Preloader/Preloader';

const MoviesCardList = (props) => {
  const {
    movieList,
    showShortsOnly,
    isLoading,
    isRequestError,
    type,
    disableMoreButton,
    onSave,
    onRemove,
  } = props;

  const b = block('movies-cards');

  const [cardsCount, setCardsCount] = useState(0);

  const getCardsForRender = (cards) => {
    const cardsForRender = showShortsOnly ? filterShortMovies(cards) : cards;

    return disableMoreButton
      ? cardsForRender
      : cardsForRender.slice(0, cardsCount);
  };

  const checkCardsOverflow = () => {
    return showShortsOnly
      ? filterShortMovies(movieList).length > cardsCount
      : movieList.length > cardsCount;
  };

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

  useEffect(() => {
    console.log(
      'getCardsForRender(movieList).length',
      getCardsForRender(movieList).length
    );
    console.log(
      'getCardsForRender(movieList).length',
      getCardsForRender(movieList).length
    );
    console.log('cardsCount', cardsCount);
    console.log(
      getCardsForRender(movieList).length > cardsCount && !disableMoreButton
    );
  });

  return (
    <section className={b()}>
      <div className={b('container')}>
        {isLoading ? (
          <Preloader mixClassName={b('preloader')} />
        ) : (
          <>
            {movieList.length === 0 ? (
              <p>
                {isRequestError
                  ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
                  : 'Ничего не найдено'}
              </p>
            ) : (
              <>
                <ul className={b('list')}>
                  {getCardsForRender(movieList).map((card) => (
                    <li className={b('item')} key={card.movieId}>
                      <MoviesCard
                        card={card}
                        isSaved={card.isSaved}
                        type={type}
                        onSave={onSave}
                        onRemove={onRemove}
                      />
                    </li>
                  ))}
                </ul>
                {checkCardsOverflow() && !disableMoreButton && (
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
