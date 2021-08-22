import './Portfolio.scss';

import block from 'bem-cn';

import RegularLink from '../../UiKit/Links/RegularLink/RegularLink';

const Portfolio = () => {
  const b = block('portfolio');

  return (
    <section className={b()}>
      <div className={b('container')}>
        <h2 className={b('heading')}>Портфолио</h2>
        <ul className={b('list')}>
          <li className={b('item')}>
            <RegularLink
              mixClassName={b('link')}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={b('title')}>Статичный сайт</span>
              <span className={b('title')}>↗</span>
            </RegularLink>
            <div className={b('separator')}></div>
            <RegularLink
              mixClassName={b('link')}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={b('title')}>Адаптивный сайт</span>
              <span className={b('title')}>↗</span>
            </RegularLink>
            <div className={b('separator')}></div>
            <RegularLink
              mixClassName={b('link')}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={b('title')}>Одностраничное приложение</span>
              <span className={b('title')}>↗</span>
            </RegularLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
