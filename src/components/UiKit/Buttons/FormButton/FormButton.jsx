import './FormButton.scss';

import block from 'bem-cn';

import Button from '../Button/Button';

const FormButton = (props) => {
  const { mixClassName, children } = props;

  const b = block('form-button');

  return (
    <Button type="submit" mixClassName={b.mix(mixClassName)}>
      {children}
    </Button>
  );
};

export default FormButton;
