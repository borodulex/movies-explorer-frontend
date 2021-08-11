import './DefaultAppLinkWithIcon.css';

import block from 'bem-cn';

import DefaultAppLink from '../DefaultAppLink/DefaultAppLink';

const DefaultAppLinkWithIcon = (props) => {
  const { mixClassName, to, icon, children } = props;

  const b = block('default-link-with-icon');
  return (
    <DefaultAppLink to={to} mixClassName={b.mix(mixClassName)}>
      {children}
      <img src={icon} alt={`Иконка ${children}`} className={b('icon')} />
    </DefaultAppLink>
  );
};

export default DefaultAppLinkWithIcon;
