import './ProfileInput.scss';

import block from 'bem-cn';

const ProfileInput = (props) => {
  const { mixClassName, label, type, id, value, required, disabled, onChange } =
    props;

  const b = block('profile-input');

  return (
    <>
      <label className={b.mix(mixClassName)} htmlFor={id}>
        {label}
        <input
          className={b('field')}
          type={type}
          id={id}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default ProfileInput;
