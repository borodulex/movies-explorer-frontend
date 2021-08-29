import './MoviesCard.scss';

import block from 'bem-cn';
import { useState } from 'react';

import CardButton from '../UiKit/Buttons/CardButton/CardButton';

const MoviesCard = (props) => {
  const { movie, isSaved = false, type, onSave, onRemove } = props;

  const b = block('movies-card');

  const [isButtonVisible, setIsButtonVisible] = useState(isSaved);

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleButtonClick = () => {
    if (type === 'saved' || isSaved) {
      onRemove && onRemove(movie);
    } else {
      onSave && onSave(movie);
    }
  };

  return (
    <article
      className={b()}
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => !isSaved && setIsButtonVisible(false)}
    >
      <a
        className={b('link')}
        href={movie.trailer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={movie.image}
          alt={`Карточка фильма ${movie.nameRU}`}
          className={b('image')}
        />
        <div className={b('body')}>
          <h3 className={b('title')}>{movie.nameRU}</h3>
          <div className={b('duration')}>{convertDuration(movie.duration)}</div>
        </div>
      </a>
      {isButtonVisible && (
        <CardButton
          mixClassName={b('button')}
          type={type === 'saved' ? 'remove' : isSaved ? 'checked' : 'unchecked'}
          onClick={handleButtonClick}
        />
      )}
    </article>
  );
};

export default MoviesCard;
