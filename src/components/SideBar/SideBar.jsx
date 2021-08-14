import './SideBar.scss';

import block from 'bem-cn';
import { motion } from 'framer-motion';

import iconClose from '../../images/icon-close.svg';
import { sideBarNavData } from '../../utils/data';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation';
import IconButton from '../UiKit/Buttons/IconButton/IconButton';

const SideBar = (props) => {
  const { visible, onClose } = props;

  const b = block('sidebar');

  const overlayVariants = {
    visible: {
      display: 'block',
      opacity: 0.3,
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const sideBarVariants = {
    open: {
      transform: 'translateX(0%)',
    },
    closed: {
      transform: 'translateX(100%)',
    },
  };

  const animationTransition = {
    type: 'tween',
    duration: 0.3,
  };

  return (
    <div className={b()}>
      <motion.div
        initial={false}
        animate={visible ? 'visible' : 'hidden'}
        variants={overlayVariants}
        transition={animationTransition}
        className={b('overlay')}
      />
      <motion.div
        initial={false}
        animate={visible ? 'open' : 'closed'}
        variants={sideBarVariants}
        transition={animationTransition}
        className={b('container')}
      >
        <IconButton
          mixClassName={b('button')}
          onClick={onClose}
          iconSrc={iconClose}
        />
        <Navigation
          mixClass={b('navigation')}
          type="sidebar"
          listData={sideBarNavData}
          onClick={onClose}
        />
        <AccountButton mixClassName={b('account')} />
      </motion.div>
    </div>
  );
};

export default SideBar;
