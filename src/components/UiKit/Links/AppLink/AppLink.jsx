import '../Link/styles.scss';

import block from 'bem-cn';
import { NavLink } from 'react-router-dom';

const AppLink = (props) => {
  const { mixClassName, active, to, exact, icon, button, children, onClick } =
    props;

  const b = block('link');

  return (
    <NavLink
      className={String(b({ icon: !!icon, button }).mix(mixClassName))}
      activeClassName={String(b({ active }))}
      to={to}
      exact={exact}
      onClick={onClick}
    >
      {children}
      {icon && (
        <img className={b('icon')} alt={`Иконка ${children}`} src={icon} />
      )}
    </NavLink>
  );
};

export default AppLink;
