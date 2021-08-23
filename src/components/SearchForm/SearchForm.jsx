import './SearchForm.scss';

import block from 'bem-cn';
import { useState } from 'react';

import iconSearch from '../../images/icon-search.svg';
import FilterSwitch from '../UiKit/Buttons/FilterSwitch/FilterSwitch';
import IconButton from '../UiKit/Buttons/IconButton/IconButton';

const SearchForm = () => {
  const b = block('search-form');

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={b()}>
      <div className={b('container')}>
        <form className={b('field')} onSubmit={handleSubmit} name="test">
          <input
            className={b('input')}
            type="text"
            placeholder="Фильм"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity('Нужно ввести ключевое слово')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <IconButton
            mixClassName={b('button')}
            iconSrc={iconSearch}
            size={'medium'}
            type={'solid'}
            shape={'square'}
          />
        </form>
        <div className={b('shorts')}>
          <FilterSwitch
            mixClassName={b('switch')}
            active={isOn}
            onToggle={toggleSwitch}
          />
          <span className={b('switch-label')}>Короткометражки</span>
        </div>
        <div className={b('separator')} />
      </div>
    </section>
  );
};

export default SearchForm;
