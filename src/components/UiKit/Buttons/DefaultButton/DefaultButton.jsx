import './DefaultButton.scss';

import block from 'bem-cn';

const DefaultButton = (props) => {
  const { mixClassName, type, children, onClick } = props;

  const b = block('default-button');

  return (
    <button
      type="button"
      className={b({ type }).mix(mixClassName)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
