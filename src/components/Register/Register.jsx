import './Register.scss';

import block from 'bem-cn';
import { useState } from 'react';

import FormButton from '../UiKit/Buttons/FormButton/FormButton';
import AuthInput from '../UiKit/Inputs/AuthInput/AuthInput';
import AppLink from '../UiKit/Links/AppLink/AppLink';
import Logo from '../UiKit/Logo/Logo';

const Register = () => {
  const b = block('register');

  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('sadfasdfassadfa');

  return (
    <section className={b()}>
      <form className={b('form')} name="register" noValidate>
        <Logo className={b('logo')} />
        <h1 className={b('title')}>Добро пожаловать!</h1>
        <fieldset className={b('inputs')}>
          <AuthInput
            mixClassName={b('input')}
            value={name}
            type="text"
            label="Имя"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <AuthInput
            mixClassName={b('input')}
            value={email}
            type="email"
            label="E-mail"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            mixClassName={b('input')}
            value={password}
            type="password"
            label="Пароль"
            id="password"
            activeError
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <FormButton mixClassName={b('button')}>Зарегистрироваться</FormButton>
        <div className={b('caption')}>
          <p className={b('question')}>Уже зарегистрированы?</p>
          <AppLink mixClassName={b('link')} to="/signin">
            Войти
          </AppLink>
        </div>
      </form>
    </section>
  );
};

export default Register;
