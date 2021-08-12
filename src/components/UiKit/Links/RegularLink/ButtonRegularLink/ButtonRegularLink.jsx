import '../../ButtonLink/styles.scss';

import block from 'bem-cn';

import RegularLink from '../RegularLink';

const ButtonRegularLink = (props) => {
  const { href, mixClassName, type, children } = props;

  const b = block('button-link');
  return (
    <RegularLink href={href} mixClassName={b({ type }).mix(mixClassName)}>
      {children}
    </RegularLink>
  );
};

export default ButtonRegularLink;
