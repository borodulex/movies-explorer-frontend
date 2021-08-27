import './Login.scss';

import block from 'bem-cn';
import { useHistory } from 'react-router';

import { requestErrorsLogin } from '../../utils/consts';
import { useFormWithValidation } from '../../utils/hooks/useForm';
import { authorize } from '../../utils/MainApi';
import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import AppLink from '../UiKit/Links/AppLink/AppLink';
import Logo from '../UiKit/Logo/Logo';
import RequestError from '../UiKit/RequestError/RequestError';

const Login = (props) => {
  const { onSuccess } = props;

  const b = block('login');

  const {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    setIsValid(false);
    authorize(email, password)
      .then(() => {
        onSuccess();
        resetForm();
        history.push('/movies');
      })
      .catch((error) => {
        setIsValid(false);
        setErrors({
          ...errors,
          request: requestErrorsLogin[error.status],
        });
        console.log(error);
      });
  };

  return (
    <section className={b()}>
      <form
        className={b('form')}
        name="login"
        noValidate
        onSubmit={handleSubmit}
      >
        <Logo className={b('logo')} />
        <h1 className={b('title')}>Рады видеть!</h1>
        <fieldset className={b('inputs')}>
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
            Войти
          </FormButton>
          <div className={b('caption')}>
            <p className={b('question')}>Ещё не зарегистрированы?</p>
            <AppLink mixClassName={b('link')} to="/signup">
              Регистрация
            </AppLink>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
