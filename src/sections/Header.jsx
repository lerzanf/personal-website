import Switchers from "../components/Switchers";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="pb-3">
        <Switchers />
      </div>
      <div className="flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;