import './Profile.scss';

import block from 'bem-cn';
import { useState } from 'react';

import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import LinkButton from '../UiKit/Buttons/LinkButton/LinkButton';
import ProfileInput from '../UiKit/Inputs/ProfileInput/ProfileInput';

const Profile = (props) => {
  const { onLogout } = props;

  const b = block('profile');

  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSubmitButtonClick = () => {
    setIsError(true);
  };

  return (
    <section className={b()}>
      <form className={b('form')} name="profile" noValidate>
        <h1 className={b('title')}>Привет, Виталий!</h1>
        <fieldset className={b('inputs')}>
          <ProfileInput
            label="Имя"
            id="name"
            type="text"
            value={name}
            required
            disabled={!isEditMode}
            onChange={handleNameChange}
          />
          <div className={b('separator')}></div>
          <ProfileInput
            label="E-mail"
            id="email"
            type="email"
            value={email}
            required
            disabled={!isEditMode}
            onChange={handleEmailChange}
          />
        </fieldset>

        <div className={b('controls')}>
          {isEditMode ? (
            <>
              {isError && (
                <span className={b('error')}>
                  При обновлении профиля произошла ошибка.
                </span>
              )}
              <FormButton
                mixClassName={b('button')}
                type="button"
                theme="primary"
                error={isError}
                onClick={handleSubmitButtonClick}
              >
                Сохранить
              </FormButton>
            </>
          ) : (
            <>
              <LinkButton
                mixClassName={b('control')}
                type="button"
                onClick={handleEditButtonClick}
              >
                Редактировать
              </LinkButton>
              <LinkButton
                mixClassName={b('control')}
                type="button"
                theme="highlight"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </LinkButton>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Profile;
