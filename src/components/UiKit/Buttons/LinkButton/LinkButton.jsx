import './LinkButton.scss';

import block from 'bem-cn';

import Button from '../Button/Button';

const LinkButton = (props) => {
  const { mixClassName, theme, type, children, onClick } = props;

  const b = block('link-button');

  return (
    <Button
      mixClassName={b({ theme }).mix(mixClassName)}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
