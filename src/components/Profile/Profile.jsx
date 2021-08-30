import './Profile.scss';

import block from 'bem-cn';
import { useContext, useState } from 'react';

import { CurrentUserContext } from '../../contexts/currentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';
import { requestErrorsProfile } from '../../utils/consts';
import { signout, updateBio } from '../../utils/MainApi';
import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import LinkButton from '../UiKit/Buttons/LinkButton/LinkButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import RequestError from '../UiKit/RequestError/RequestError';

const Profile = (props) => {
  const { onSignOut } = props;

  const b = block('profile');

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = useState(false);

  const { values, handleChange, errors, setErrors, isValid, setIsValid } =
    useFormWithValidation();

  const handleEditButtonClick = () => {
    setIsRequestSuccess(false);
    setIsEditMode(true);
  };

  const handleSubmitButtonClick = () => {
    const { name = currentUser.name, email = currentUser.email } = values;

    updateBio(name, email)
      .then((updatedUser) => {
        const { name, email } = updatedUser;
        setCurrentUser({ name, email });
        setIsRequestSuccess(true);
        setIsEditMode(false);
      })
      .catch((error) => {
        setIsValid(false);
        setErrors({
          ...errors,
          request: requestErrorsProfile[error.status],
        });
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signout()
      .then(() => {
        onSignOut();
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className={b()}>
      <form className={b('form')} name="profile" noValidate>
        <h1 className={b('title')}>{`Привет, ${currentUser.name}!`}</h1>
        <fieldset className={b('inputs')}>
          <AuthInput
            label="Имя"
            id="name"
            name="name"
            theme="profile"
            type="text"
            value={values.name === undefined ? currentUser.name : values.name}
            required
            minLength={2}
            maxLength={30}
            pattern={'[а-яА-ЯёЁa-zA-Z\\s-]+'}
            patternCustomMessage={
              'Имя может содержать только латиницу, кириллицу, пробел или дефис'
            }
            errorMessage={errors.name}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <div className={b('separator')}></div>
          <AuthInput
            label="E-mail"
            id="email"
            name="email"
            theme="profile"
            type="email"
            value={
              values.email === undefined ? currentUser.email : values.email
            }
            required
            errorMessage={errors.email}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          {isRequestSuccess && (
            <span className={b('success-message')}>
              Данные успешно обновлены
            </span>
          )}
        </fieldset>

        <div className={b('controls')}>
          {isEditMode ? (
            <>
              <RequestError>{errors.request}</RequestError>
              <FormButton
                mixClassName={b('button')}
                type="button"
                theme="primary"
                disabled={
                  !isValid ||
                  values.name === currentUser.name ||
                  values.email === currentUser.email
                }
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
                onClick={handleSignOut}
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
