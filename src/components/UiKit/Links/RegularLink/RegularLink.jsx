import '../Link/styles.scss';

import block from 'bem-cn';

const RegularLink = (props) => {
  const { mixClassName, href, target, rel, button, children } = props;

  const b = block('link');

  return (
    <a
      className={b({ button }).mix(mixClassName)}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default RegularLink;
