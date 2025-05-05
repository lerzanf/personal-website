import Switchers from "../components/Switchers";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="pb-3">
        <Switchers />
      </div>
      <div className="flex justify-between items-center">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;