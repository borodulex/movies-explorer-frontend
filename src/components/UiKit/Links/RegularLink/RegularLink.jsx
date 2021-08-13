import '../Link/styles.scss';

import block from 'bem-cn';

const RegularLink = (props) => {
  const { href, mixClassName, children } = props;

  const b = block('link');

  return (
    <a className={b.mix(mixClassName)} href={href}>
      {children}
    </a>
  );
};

export default RegularLink;
