import './MoviesCard.scss';

import block from 'bem-cn';
import { useState } from 'react';

import CardButton from '../UiKit/Buttons/CardButton/CardButton';

const MoviesCard = (props) => {
  const { image, name, duration, saved = false } = props;

  const [isShown, setIsShown] = useState(saved);
  const [isMovieSaved, setIsMovieSaved] = useState(saved);

  const b = block('movies-card');

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  return (
    <article
      className={b()}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => !isMovieSaved && setIsShown(false)}
    >
      <img src={image} alt={`Карточка фильма ${name}`} className={b('image')} />
      <div className={b('body')}>
        <h3 className={b('title')}>{name}</h3>
        <div className={b('duration')}>{convertDuration(duration)}</div>
      </div>
      {isShown && (
        <CardButton
          mixClassName={b('button')}
          type={isMovieSaved ? 'checked' : 'unchecked'}
          onClick={() => setIsMovieSaved(!isMovieSaved)}
        />
      )}
    </article>
  );
};

export default MoviesCard;
