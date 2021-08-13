import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <div className="landing">
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  );
};

export default Main;
