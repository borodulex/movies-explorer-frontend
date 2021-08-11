import './Navigation.css';

import block from 'bem-cn';

import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';

function Navigation(props) {
  const { listData, mixClass, vertical, isMobile, onClick } = props;

  const b = block('main-nav');

  return (
    <nav className={b.mix(mixClass)}>
      <ul className={b('list', { vertical })}>
        {listData.map((item, i) => {
          return (
            <li className={b('item', { vertical })}>
              <DefaultAppLink
                exact
                to={item.path}
                className={b('link')}
                activeClassName={b('link', { active: true })}
                size={isMobile ? 'mobile' : ''}
                select={isMobile ? 'underline' : 'bold'}
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
