import '../../ButtonLink/styles.css';

import block from 'bem-cn';

import AppLink from '../AppLink';

const ButtonAppLink = (props) => {
  const { exact, to, mixClassName, type, children } = props;

  const b = block('button-link');

  return (
    <AppLink exact={exact} to={to} mixClassName={b({ type }).mix(mixClassName)}>
      {children}
    </AppLink>
  );
};

export default ButtonAppLink;
