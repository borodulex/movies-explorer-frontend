import block from 'bem-cn';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.svg';

const Logo = (props) => {
  const { mixClass } = props;
  const b = block('logo');

  return (
    <Link to="/" className={b.mix(mixClass)}>
      <img src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;
