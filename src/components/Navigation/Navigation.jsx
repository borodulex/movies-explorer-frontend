import './Navigation.scss';

import block from 'bem-cn';

import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';

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
              <DefaultAppLink
                exact
                to={item.path}
                mixClassName={b('link')}
                select={type === 'sidebar' ? 'underline' : 'bold'}
                onClick={onClick}
              >
                {item.name}
              </DefaultAppLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
