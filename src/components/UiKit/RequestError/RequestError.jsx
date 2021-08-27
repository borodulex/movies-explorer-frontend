import './RequestError.scss';

import block from 'bem-cn';

const RequestError = (props) => {
  const { mixClassName, children } = props;

  const b = block('request-error');

  return <span className={b.mix(mixClassName)}>{children}</span>;
};

export default RequestError;
