import './MoviesCard.scss';

import block from 'bem-cn';
import { useState } from 'react';

import CardButton from '../UiKit/Buttons/CardButton/CardButton';

const MoviesCard = (props) => {
  const { card, isSaved = false, type, onSave, onDelete } = props;

  const b = block('movies-card');

  const [isButtonVisible, setIsButtonVisible] = useState(isSaved);

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleButtonClick = () => {
    if (type === 'saved') {
      onDelete && onDelete();
    } else {
      onSave && onSave(card);
    }
  };

  return (
    <article
      className={b()}
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => !isSaved && setIsButtonVisible(false)}
    >
      <img
        src={card.image}
        alt={`Карточка фильма ${card.nameRU}`}
        className={b('image')}
      />
      <div className={b('body')}>
        <h3 className={b('title')}>{card.nameRU}</h3>
        <div className={b('duration')}>{convertDuration(card.duration)}</div>
      </div>
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
