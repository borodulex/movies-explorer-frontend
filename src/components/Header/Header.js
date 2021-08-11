import './Header.css';

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
  const { isLoggedIn, isMobile } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Logo mixClass="header__logo" />
      {!isMobile && isLoggedIn && (
        <Navigation
          className="header__navigation"
          listData={mainNavData}
          isMobile={isMobile}
        />
      )}
      <div className="header__accessibility">
        {isLoggedIn ? (
          isMobile ? (
            <>
              <IconButton onClick={handleSideBarToggle}>
                {iconHamburger}
              </IconButton>
              <SideBar
                isOpen={isOpen}
                onClose={handleSideBarToggle}
                isMobile={isMobile}
              />
            </>
          ) : (
            <AccountButton />
          )
        ) : (
          <Accessibility />
        )}
      </div>
    </header>
  );
};

export default Header;
