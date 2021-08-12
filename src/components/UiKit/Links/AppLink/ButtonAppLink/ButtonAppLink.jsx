import '../../ButtonLink/styles.scss';

import block from 'bem-cn';

import AppLink from '../AppLink';

const ButtonAppLink = (props) => {
  const { exact, to, mixClassName, type, size, children } = props;

  const b = block('button-link');

  return (
    <AppLink
      exact={exact}
      to={to}
      mixClassName={b({ type, size }).mix(mixClassName)}
    >
      {children}
    </AppLink>
  );
};

export default ButtonAppLink;
