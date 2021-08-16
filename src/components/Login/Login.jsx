import './Login.scss';

import block from 'bem-cn';

import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';
import Logo from '../UiKit/Logo/Logo';

const Login = () => {
  const b = block('login');

  return (
    <main className={b()}>
      <section className={b('container')}>
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
            <DefaultAppLink mixClassName={b('link')} to="/signup">
              Регистрация
            </DefaultAppLink>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
