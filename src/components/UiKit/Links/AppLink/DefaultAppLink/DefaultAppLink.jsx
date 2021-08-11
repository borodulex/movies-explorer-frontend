import '../../DefaultLink/styles.css';

import block from 'bem-cn';

import AppLink from '../AppLink';

const DefaultAppLink = (props) => {
  const { exact, to, mixClassName, size, select, onClick, children } = props;

  const b = block('default-link');

  return (
    <AppLink
      exact={exact}
      to={to}
      mixClassName={b({ size }).mix(mixClassName)}
      activeClassName={b({ select })}
      onClick={onClick}
    >
      {children}
    </AppLink>
  );
};

export default DefaultAppLink;
