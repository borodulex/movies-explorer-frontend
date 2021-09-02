import './MoviesCardList.scss';

import block from 'bem-cn';
import { useEffect, useState } from 'react';

import {
  INITIAL_CARDS_COUNT_DESKTOP,
  INITIAL_CARDS_COUNT_MOBILE,
  INITIAL_CARDS_COUNT_TABLET,
  MOBILE_WIDTH,
  TABLET_WIDTH,
} from '../../utils/consts';
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

  const checkMobile = () => window.innerWidth < MOBILE_WIDTH;
  const checkTablet = () => window.innerWidth < TABLET_WIDTH;

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
    setCardsCount(
      (isMobile && INITIAL_CARDS_COUNT_MOBILE) ||
        (isTablet && INITIAL_CARDS_COUNT_TABLET) ||
        INITIAL_CARDS_COUNT_DESKTOP
    );
  }, [isLoading]);

  return (
    <section className={b()}>
      <div className={b('container')}>
        {isLoading ? (
          <Preloader mixClassName={b('preloader')} />
        ) : (
          <>
            {getCardsForRender(movieList).length === 0 ? (
              <p className={b('error')}>
                {isRequestError
                  ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
                  : 'Ничего не найдено'}
              </p>
            ) : (
              <>
                <ul className={b('list')}>
                  {getCardsForRender(movieList).map((movie) => (
                    <li className={b('item')} key={movie.movieId}>
                      <MoviesCard
                        movie={movie}
                        isSaved={movie.isSaved}
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
