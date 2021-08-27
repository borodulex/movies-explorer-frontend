import './Header.scss';

import block from 'bem-cn';
import { useState } from 'react';

import iconHamburger from '../../images/icon-hamburger.svg';
import iconProfile from '../../images/icon-profile.svg';
import { mainNavData } from '../../utils/consts';
import Accessibility from '../Accessibility/Accessibility';
import Navigation from '../Navigation/Navigation';
import SideBar from '../SideBar/SideBar';
import IconButton from '../UiKit/Buttons/IconButton/IconButton';
import AppLink from '../UiKit/Links/AppLink/AppLink';
import Logo from '../UiKit/Logo/Logo';

const Header = (props) => {
  const { mixClassName, isLoggedIn, showHamburgerMenu } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const b = block('header');

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className={b.mix(mixClassName)}>
      <Logo mixClass={b('logo')} />
      {!showHamburgerMenu && isLoggedIn && (
        <Navigation
          className={b('anvigation')}
          listData={mainNavData}
          select={'bold'}
        />
      )}
      {isLoggedIn ? (
        <>
          {showHamburgerMenu ? (
            <>
              <IconButton
                mixClassName={b('hamburger-button').mix(b('accessibility'))}
                iconSrc={iconHamburger}
                onClick={handleSideBarToggle}
              />
              <SideBar visible={isSideBarOpen} onClose={handleSideBarToggle} />
            </>
          ) : (
            <AppLink
              mixClassName={b('profile-button').mix(b('accessibility'))}
              to="/profile"
              icon={iconProfile}
            >
              Аккаунт
            </AppLink>
          )}
        </>
      ) : (
        <Accessibility mixClassName={b('accessibility')} />
      )}
    </header>
  );
};

export default Header;
