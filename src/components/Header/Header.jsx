import './Header.scss';

import block from 'bem-cn';
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

  const b = block('header');

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className={b()}>
      <Logo mixClass={b('logo')} />
      {!showHamburgerMenu && isLoggedIn && (
        <Navigation
          className={b('anvigation')}
          listData={mainNavData}
          select={'bold'}
        />
      )}
      <div className={b('accessibility')}>
        {isLoggedIn ? (
          showHamburgerMenu ? (
            <>
              <IconButton
                onClick={handleSideBarToggle}
                iconSrc={iconHamburger}
              />
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
