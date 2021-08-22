import './MoviesCard.scss';

import block from 'bem-cn';
import { useState } from 'react';

import CardButton from '../UiKit/Buttons/CardButton/CardButton';

const MoviesCard = (props) => {
  const {
    image,
    name,
    duration,
    saved = false,
    type,
    onSave,
    onDelete,
  } = props;

  const [isShown, setIsShown] = useState(saved);
  const [isMovieSaved, setIsMovieSaved] = useState(saved);

  const b = block('movies-card');

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleButtonClick = () => {
    if (type === 'saved') {
      onDelete && onDelete();
    } else {
      setIsMovieSaved(!isMovieSaved);
      onSave && onSave();
    }
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
          type={
            type === 'saved' ? 'remove' : isMovieSaved ? 'checked' : 'unchecked'
          }
          onClick={handleButtonClick}
        />
      )}
    </article>
  );
};

export default MoviesCard;
