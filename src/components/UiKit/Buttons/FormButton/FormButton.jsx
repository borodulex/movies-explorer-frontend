import './FormButton.scss';

import block from 'bem-cn';

import Button from '../Button/Button';

const FormButton = (props) => {
  const { mixClassName, type, theme, error, children, onClick } = props;

  const b = block('form-button');

  return (
    <Button
      type={type}
      mixClassName={b({ theme, disabled: error }).mix(mixClassName)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FormButton;
