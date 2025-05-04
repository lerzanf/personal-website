import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Switchers = () => {
  return (
    <div className="flex justify-end items-center gap-4 text-[15px] font-bold text-[#777777]">
      <ThemeToggle />
      <span>|</span>
      <LanguageToggle />
    </div>
  );
};

export default Switchers;
