import './Promo.scss';

import block from 'bem-cn';

import promoIllustration from '../../../images/promo-illustration.svg';
import ButtonRegularLink from '../../UiKit/Links/RegularLink/ButtonRegularLink/ButtonRegularLink';

const Promo = () => {
  const b = block('promo');

  return (
    <section className={b()}>
      <div className={b('container')}>
        <div className={b('text')}>
          <h1 className={b('title')}>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className={b('subtitle')}>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <ButtonRegularLink
            href="#about-project"
            type="outline"
            mixClassName={b('button')}
          >
            Узнать больше
          </ButtonRegularLink>
        </div>
        <img
          className={b('illustration')}
          src={promoIllustration}
          alt='Глобус "WEB"'
        />
      </div>
    </section>
  );
};

export default Promo;
