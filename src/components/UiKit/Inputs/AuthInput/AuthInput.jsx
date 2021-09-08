import './AuthInput.scss';

import block from 'bem-cn';

const AuthInput = (props) => {
  const {
    mixClassName,
    label,
    id,
    name,
    type,
    theme,
    value,
    required,
    minLength,
    maxLength,
    pattern,
    patternCustomMessage,
    errorMessage,
    disabled,
    onChange,
  } = props;

  const b = block('auth-input');

  return (
    <>
      <label className={b({ theme }).mix(mixClassName)} htmlFor={id}>
        {label}
        <input
          className={b('field', { type: !!errorMessage ? 'error' : '', theme })}
          id={id}
          name={name}
          value={value || ''}
          type={type}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          data-patterncustommessage={patternCustomMessage}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
      <span className={b('error', { visible: !!errorMessage, theme })}>
        {errorMessage || 'Что-то пошло не так...'}
      </span>
    </>
  );
};

export default AuthInput;
