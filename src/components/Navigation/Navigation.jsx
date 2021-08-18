import './Navigation.scss';

import block from 'bem-cn';

import AppLink from '../UiKit/Links/AppLink/AppLink';

function Navigation(props) {
  const { listData, mixClass, type, onClick } = props;

  const b = block('main-nav');

  return (
    <nav className={b.mix(mixClass)}>
      <ul className={b('list', { vertical: type === 'sidebar' })}>
        {listData.map((item) => {
          return (
            <li
              className={b('item', {
                vertical: type === 'sidebar',
                size: type === 'sidebar' && 'large',
              })}
              key={item.name}
            >
              <AppLink
                exact
                to={item.path}
                mixClassName={b('link')}
                active={type === 'sidebar' ? 'underline' : 'bold'}
                onClick={onClick}
              >
                {item.name}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
