import './Register.scss';

import block from 'bem-cn';

import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import DefaultAppLink from '../UiKit/Links/AppLink/DefaultAppLink/DefaultAppLink';
import Logo from '../UiKit/Logo/Logo';

const Register = () => {
  const b = block('register');

  return (
    <main className={b()}>
      <section className={b('container')}>
        <Logo className={b('logo')} />
        <h1 className={b('title')}>Добро пожаловать!</h1>
        <form className={b('form')} name="register" noValidate>
          <fieldset className={b('inputs')}>
            <AuthInput
              mixClassName={b('input')}
              type="text"
              label="Имя"
              id={'name'}
              required
            />
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
              activeError
              required
            />
          </fieldset>
          <FormButton mixClassName={b('button')}>Зарегистрироваться</FormButton>
          <div className={b('caption')}>
            <p className={b('question')}>Уже зарегистрированы?</p>
            <DefaultAppLink mixClassName={b('link')} to="/signin">
              Войти
            </DefaultAppLink>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
