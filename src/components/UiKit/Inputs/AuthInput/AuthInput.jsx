import './AuthInput.scss';

import block from 'bem-cn';

const AuthInput = (props) => {
  const { mixClassName, label, type, id, required, activeError } = props;

  const b = block('auth-input');

  return (
    <>
      <label className={b('label').mix(mixClassName)} htmlFor={id}>
        {label}
        <input
          className={b({ type: activeError ? 'error' : '' })}
          type={type}
          id={id}
          required={required}
        />
      </label>
      <span className={b('error', { visible: activeError })}>
        Что-то пошло не так...
      </span>
    </>
  );
};

export default AuthInput;
