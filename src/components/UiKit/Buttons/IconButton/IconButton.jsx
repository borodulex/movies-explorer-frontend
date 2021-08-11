import './IconButton.css';

import block from 'bem-cn';

const IconButton = (props) => {
  const { mixClassName, children, onClick } = props;

  const b = block('icon-button');

  return (
    <button className={b.mix(mixClassName)} onClick={onClick}>
      <img src={children} alt="Иконка" />
    </button>
  );
};

export default IconButton;
