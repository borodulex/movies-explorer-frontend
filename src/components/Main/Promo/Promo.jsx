import './Promo.scss';

import block from 'bem-cn';

import promoIllustration from '../../../images/promo-illustration.svg';
import RegularLink from '../../UiKit/Links/RegularLink/RegularLink';

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
          <RegularLink
            mixClassName={b('button')}
            href="#about-project"
            button="outline"
          >
            Узнать больше
          </RegularLink>
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
