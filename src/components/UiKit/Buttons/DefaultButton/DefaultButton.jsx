import './DefaultButton.scss';

import block from 'bem-cn';

const DefaultButton = (props) => {
  const { mixClassName, type, children } = props;

  const b = block('default-button');

  return (
    <button type="button" className={b({ type }).mix(mixClassName)}>
      {children}
    </button>
  );
};

export default DefaultButton;
