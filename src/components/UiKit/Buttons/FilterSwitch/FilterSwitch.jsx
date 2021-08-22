import './FilterSwitch.scss';

import block from 'bem-cn';
import { motion } from 'framer-motion';

const FilterSwitch = (props) => {
  const { mixClassName, active, onToggle } = props;

  const b = block('filter-switch');
  const transitionHandle = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <button className={b({ active }).mix(mixClassName)} onClick={onToggle}>
      <motion.div
        className={b('handle', { active })}
        layout
        transition={transitionHandle}
      />
    </button>
  );
};

export default FilterSwitch;
