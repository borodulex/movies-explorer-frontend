import './AboutMe.scss';

import block from 'bem-cn';

import studentPortrait from '../../../images/portrait.jpg';
import RegularLink from '../../UiKit/Links/RegularLink/RegularLink';
import SectionHeading from '../../UiKit/SectionHeading/SectionHeading';

const AboutMe = () => {
  const b = block('about-me');
  return (
    <section className={b()}>
      <div className={b('container')}>
        <SectionHeading>Студент</SectionHeading>
        <div className={b('bio')}>
          <div className={b('text')}>
            <h3 className={b('title')}>Виталий</h3>
            <p className={b('subtitle')}>Фронтенд-разработчик, 30 лет</p>
            <p className={b('desc')}>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className={b('social-links')}>
              <li className={b('social-link')}>
                <RegularLink
                  mixClassName={b('link')}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </RegularLink>
              </li>
              <li className={b('social-link')}>
                <RegularLink
                  mixClassName={b('link')}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </RegularLink>
              </li>
            </ul>
          </div>
          <img
            className={b('photo')}
            alt="Портретное фото студента"
            src={studentPortrait}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
