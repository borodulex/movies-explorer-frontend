import './Button.scss';

import block from 'bem-cn';

const Button = ({ mixClassName, className, ...props }) => {
  const b = block('button');

  return <button className={b.mix(mixClassName)} {...props}></button>;
};

export default Button;
