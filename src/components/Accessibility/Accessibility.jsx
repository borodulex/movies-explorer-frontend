import './Accessibility.scss';

import block from 'bem-cn';

import ButtonAppLink from '../UiKit/Links/AppLink/ButtonAppLink/ButtonAppLink';
import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';

const Accessibility = (props) => {
  const { mixClass, isMobile } = props;

  const b = block('accessibility');

  return (
    <div className={b.mix(mixClass)}>
      <DefaultAppLink to="/signup" mixClassName={b('link')}>
        Регистрация
      </DefaultAppLink>
      <ButtonAppLink
        to="/signin"
        type="solid"
        mixClassName={b('link')}
        size={isMobile && 'small'}
      >
        Войти
      </ButtonAppLink>
    </div>
  );
};

export default Accessibility;
