import './CardButton.scss';

import block from 'bem-cn';

const CardButton = (props) => {
  const { mixClassName, type, onClick } = props;
  const b = block('card-button');

  return (
    <button
      type="button"
      className={b({ type }).mix(mixClassName)}
      onClick={onClick}
    ></button>
  );
};

export default CardButton;
