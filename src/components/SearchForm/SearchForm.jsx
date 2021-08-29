import './SearchForm.scss';

import block from 'bem-cn';

import iconSearch from '../../images/icon-search.svg';
import FilterSwitch from '../UiKit/Buttons/FilterSwitch/FilterSwitch';
import IconButton from '../UiKit/Buttons/IconButton/IconButton';

const SearchForm = (props) => {
  const { value, activeToggle, onChange, onSubmit, onToggle } = props;

  const b = block('search-form');

  return (
    <section className={b()}>
      <div className={b('container')}>
        <form className={b('field')} onSubmit={onSubmit} name="test">
          <input
            className={b('input')}
            name="filmQuery"
            value={value || ''}
            type="text"
            placeholder="Фильм"
            required
            onChange={onChange}
            onInvalid={(e) =>
              e.target.setCustomValidity('Нужно ввести ключевое слово')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <IconButton
            mixClassName={b('button')}
            iconSrc={iconSearch}
            type="submit"
            size="medium"
            background="solid"
            shape="square"
          />
        </form>
        <div className={b('shorts')}>
          <FilterSwitch
            mixClassName={b('switch')}
            active={activeToggle}
            onToggle={onToggle}
          />
          <span className={b('switch-label')}>Короткометражки</span>
        </div>
        <div className={b('separator')} />
      </div>
    </section>
  );
};

export default SearchForm;
