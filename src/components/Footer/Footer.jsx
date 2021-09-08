import './Footer.scss';

import block from 'bem-cn';

import RegularLink from '../UiKit/Links/RegularLink/RegularLink';

const Footer = (props) => {
  const { mixClassName } = props;

  const b = block('footer');

  return (
    <footer className={b.mix(mixClassName)}>
      <div className={b('container')}>
        <p className={b('caption')}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className={b('columns')}>
          <p className={b('copyright')}>© 2020</p>
          <ul className={b('links-list')}>
            <li className={b('item')}>
              <RegularLink
                mixClassName={b('link')}
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </RegularLink>
            </li>
            <li className={b('item')}>
              <RegularLink
                mixClassName={b('link')}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </RegularLink>
            </li>
            <li className={b('item')}>
              <RegularLink
                mixClassName={b('link')}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </RegularLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
