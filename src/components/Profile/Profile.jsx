import './Profile.scss';

import block from 'bem-cn';

const Profile = () => {
  const b = block('profile');

  return (
    <section className={b()}>
      <h1>Страница "Профиль"</h1>
    </section>
  );
};

export default Profile;
