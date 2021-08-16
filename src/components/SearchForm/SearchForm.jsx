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

  return (
    <section className={b()}>
      <div className={b('container')}>
        <form className={b('field')} noValidate>
          <input className={b('input')} type="text" placeholder="Фильм" />
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
