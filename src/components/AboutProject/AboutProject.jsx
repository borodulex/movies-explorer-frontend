import './AboutProject.scss';

import block from 'bem-cn';

import SectionHeading from '../SectionHeading/SectionHeading';

const AboutProject = () => {
  const b = block('about-project');

  return (
    <section className={b()} id="about-project">
      <div className={b('container')}>
        <SectionHeading>О проекте</SectionHeading>
        <div className={b('columns')}>
          <div className={b('column')}>
            <h3 className={b('title')}>Дипломный проект включал 5 этапов</h3>
            <p className={b('desc')}>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className={b('column')}>
            <h3 className={b('title')}>На выполнение диплома ушло 5 недель</h3>
            <p className={b('desc')}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className={b('steps')}>
          <span className={b('section', { type: 'solid' })}>1 неделя</span>
          <span className={b('section', { type: 'neutral' })}>4 недели</span>
          <span className={b('section', { type: 'transparent' })}>
            Back-end
          </span>
          <span className={b('section', { type: 'transparent' })}>
            Front-end
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
