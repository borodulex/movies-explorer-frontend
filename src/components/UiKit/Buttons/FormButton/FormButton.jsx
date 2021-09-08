import './FormButton.scss';

import block from 'bem-cn';

import Button from '../Button/Button';

const FormButton = (props) => {
  const { mixClassName, type, theme, disabled, children, onClick } = props;

  const b = block('form-button');

  return (
    <Button
      mixClassName={b({ theme, disabled }).mix(mixClassName)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FormButton;
