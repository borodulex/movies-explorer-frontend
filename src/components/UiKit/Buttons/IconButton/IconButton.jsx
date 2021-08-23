import './IconButton.scss';

import block from 'bem-cn';

const IconButton = (props) => {
  const { mixClassName, iconSrc, size, type, shape, onClick } = props;

  const b = block('icon-button');

  return (
    <button
      className={b({ size, type, shape }).mix(mixClassName)}
      type="submit"
      onClick={onClick}
    >
      <img className={b('icon')} src={iconSrc} alt="Иконка" />
    </button>
  );
};

export default IconButton;
