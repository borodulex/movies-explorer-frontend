import './Login.scss';

import block from 'bem-cn';

import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import AppLink from '../UiKit/Links/AppLink/AppLink';
import Logo from '../UiKit/Logo/Logo';

const Login = () => {
  const b = block('login');

  return (
    <section className={b()}>
      <div className={b('container')}>
        <Logo className={b('logo')} />
        <h1 className={b('title')}>Рады видеть!</h1>
        <form className={b('form')} name="login" noValidate>
          <fieldset className={b('inputs')}>
            <AuthInput
              mixClassName={b('input')}
              type="email"
              label="E-mail"
              id={'email'}
              required
            />
            <AuthInput
              mixClassName={b('input')}
              type="password"
              label="Пароль"
              id={'password'}
              required
            />
          </fieldset>
          <FormButton mixClassName={b('button')}>Войти</FormButton>
          <div className={b('caption')}>
            <p className={b('question')}>Ещё не зарегистрированы?</p>
            <AppLink mixClassName={b('link')} to="/signup">
              Регистрация
            </AppLink>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
