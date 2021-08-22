import './NotFound.scss';

import block from 'bem-cn';
import { useHistory } from 'react-router-dom';

import LinkButton from '../UiKit/Buttons/LinkButton/LinkButton';

const NotFound = () => {
  const b = block('not-found');
  const history = useHistory();

  return (
    <section className={b()}>
      <h1 className={b('title')}>404</h1>
      <p className={b('subtitle')}>Страница не найдена</p>
      <LinkButton mixClassName={b('button')} onClick={() => history.goBack()}>
        Назад
      </LinkButton>
    </section>
  );
};

export default NotFound;
