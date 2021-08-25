import './IconButton.scss';

import block from 'bem-cn';

const IconButton = (props) => {
  const { mixClassName, iconSrc, size, type, background, shape, onClick } =
    props;

  const b = block('icon-button');

  return (
    <button
      className={b({ size, background, shape }).mix(mixClassName)}
      type={type}
      onClick={onClick}
    >
      <img className={b('icon')} src={iconSrc} alt="Иконка" />
    </button>
  );
};

export default IconButton;
