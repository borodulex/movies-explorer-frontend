import '../Link/styles.scss';

import block from 'bem-cn';
import { NavLink } from 'react-router-dom';

const AppLink = (props) => {
  const { exact, to, mixClassName, activeClassName, onClick, children } = props;

  const b = block('link');

  return (
    <NavLink
      exact={exact}
      to={to}
      className={b.mix(mixClassName)}
      activeClassName={activeClassName}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;
