import './SectionHeading.scss';

import block from 'bem-cn';

const SectionHeading = (props) => {
  const { children } = props;
  const b = block('section-heading');

  return (
    <div className={b()}>
      <h2 className={b('text')}>{children}</h2>
      <div className={b('separator')}></div>
    </div>
  );
};

export default SectionHeading;
