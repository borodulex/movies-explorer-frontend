import './Header.scss';

import { useState } from 'react';

import iconHamburger from '../../images/icon-hamburger.svg';
import { mainNavData } from '../../utils/data';
import Accessibility from '../Accessibility/Accessibility';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation';
import SideBar from '../SideBar/SideBar';
import IconButton from '../UiKit/Buttons/IconButton/IconButton';
import Logo from '../UiKit/Logo/Logo';

const Header = (props) => {
  const { isLoggedIn, isMobile, showHamburgerMenu } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className="header">
      <Logo mixClass="header__logo" />
      {!showHamburgerMenu && isLoggedIn && (
        <Navigation
          className="header__navigation"
          listData={mainNavData}
          select={'bold'}
        />
      )}
      <div className="header__accessibility">
        {isLoggedIn ? (
          showHamburgerMenu ? (
            <>
              <IconButton onClick={handleSideBarToggle}>
                {iconHamburger}
              </IconButton>
              <SideBar visible={isSideBarOpen} onClose={handleSideBarToggle} />
            </>
          ) : (
            <AccountButton />
          )
        ) : (
          <Accessibility isMobile={isMobile} />
        )}
      </div>
    </header>
  );
};

export default Header;
