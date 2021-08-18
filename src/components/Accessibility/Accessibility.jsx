import './Accessibility.scss';

import block from 'bem-cn';

import AppLink from '../UiKit/Links/AppLink/AppLink';

const Accessibility = (props) => {
  const { mixClass } = props;

  const b = block('accessibility');

  return (
    <div className={b.mix(mixClass)}>
      <AppLink to="/signup" mixClassName={b('link')}>
        Регистрация
      </AppLink>
      <AppLink mixClassName={b('link')} to="/signin" button="solid">
        Войти
      </AppLink>
    </div>
  );
};

export default Accessibility;
