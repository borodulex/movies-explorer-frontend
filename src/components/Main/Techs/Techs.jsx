import './Techs.scss';

import block from 'bem-cn';

import SectionHeading from '../../SectionHeading/SectionHeading';

const Techs = () => {
  const b = block('techs');

  return (
    <section className={b()}>
      <div className={b('container')}>
        <SectionHeading>Технологии</SectionHeading>
        <h3 className={b('title')}>7 технологий</h3>
        <p className={b('paragraph')}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className={b('list')}>
          <li className={b('item')}>HTML</li>
          <li className={b('item')}>CSS</li>
          <li className={b('item')}>JS</li>
          <li className={b('item')}>React</li>
          <li className={b('item')}>Git</li>
          <li className={b('item')}>Express.js</li>
          <li className={b('item')}>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
