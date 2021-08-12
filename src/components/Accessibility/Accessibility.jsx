import './Accessibility.scss';

import block from 'bem-cn';

import ButtonAppLink from '../UiKit/Links/AppLink/ButtonAppLink/ButtonAppLink';
import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';

const Accessibility = (props) => {
  const { mixClass } = props;

  const b = block('accessibility');

  return (
    <div className={b.mix(mixClass)}>
      <DefaultAppLink to="/signup" mixClassName={b('link')} size="small">
        Регистрация
      </DefaultAppLink>
      <ButtonAppLink to="/signin" type="solid" mixClassName={b('link')}>
        Войти
      </ButtonAppLink>
    </div>
  );
};

export default Accessibility;
