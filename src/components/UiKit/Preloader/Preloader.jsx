import './Preloader.scss';

import block from 'bem-cn';

const Preloader = (props) => {
  const { mixClassName } = props;

  const b = block('preloader');

  return (
    <div className={b.mix(mixClassName)}>
      <div className={b('container')}>
        <span className={b('round')}></span>
      </div>
    </div>
  );
};

export default Preloader;
