import iconProfile from '../../images/icon-profile.svg';
import DefaultAppLinkWithIcon from '../UiKit/Links/AppLink/DefaultAppLinkWithIcon/DefaultAppLinkWithIcon';

// TODO Реализовать более изящное решение кнопки профиля
const AccountButton = (props) => {
  const { mixClassName } = props;

  return (
    <DefaultAppLinkWithIcon
      to="/profile"
      icon={iconProfile}
      mixClassName={mixClassName}
    >
      Аккаунт
    </DefaultAppLinkWithIcon>
  );
};

export default AccountButton;
