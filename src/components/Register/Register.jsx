import './Register.scss';

import block from 'bem-cn';
import { useHistory } from 'react-router';

import { requestErrorsRegister } from '../../utils/consts';
import { useFormWithValidation } from '../../utils/hooks/useForm';
import { register } from '../../utils/MainApi';
import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import AppLink from '../UiKit/Links/AppLink/AppLink';
import Logo from '../UiKit/Logo/Logo';
import RequestError from '../UiKit/RequestError/RequestError';

const Register = (props) => {
  const { onSuccess } = props;

  const b = block('register');

  const history = useHistory();

  const {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    register(name, email, password)
      .then((createdUser) => {
        onSuccess();
        resetForm();
        history.push('/movies');
      })
      .catch((error) => {
        setIsValid(false);
        setErrors({
          ...errors,
          request: requestErrorsRegister[error.status],
        });
        error.json().then((error) => console.log(error));
      });
  };

  return (
    <section className={b()}>
      <form className={b('form')} onSubmit={handleSubmit} noValidate>
        <Logo className={b('logo')} />
        <h1 className={b('title')}>Добро пожаловать!</h1>
        <fieldset className={b('inputs')}>
          <AuthInput
            mixClassName={b('input')}
            label="Имя"
            id="name"
            name="name"
            type="text"
            value={values.name}
            required
            minLength={2}
            maxLength={30}
            pattern={'[а-яА-ЯёЁa-zA-Z\\s-]+'}
            patternCustomMessage={
              'Имя может содержать только латиницу, кириллицу, пробел или дефис'
            }
            errorMessage={errors.name}
            onChange={handleChange}
          />
          <AuthInput
            mixClassName={b('input')}
            label="E-mail"
            id="email"
            name="email"
            type="email"
            value={values.email}
            required
            errorMessage={errors.email}
            onChange={handleChange}
          />
          <AuthInput
            mixClassName={b('input')}
            label="Пароль"
            id="password"
            name="password"
            type="password"
            value={values.password}
            required
            minLength={8}
            errorMessage={errors.password}
            onChange={handleChange}
          />
        </fieldset>
        <div className={b('footer')}>
          <RequestError mixClassName={b('request-error')}>
            {errors.request}
          </RequestError>
          <FormButton
            mixClassName={b('button')}
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </FormButton>
          <div className={b('caption')}>
            <p className={b('question')}>Уже зарегистрированы?</p>
            <AppLink mixClassName={b('link')} to="/signin">
              Войти
            </AppLink>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
