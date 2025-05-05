const Navbar = () => {
  return (
    <nav className="space-x-6 text-lg font-medium">
      <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
      <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
      <a href="#footer" className="text-[#3730A3] border-[#3730A3] border px-8 py-3 rounded-md hover:bg-indigo-700 hover:text-white">Hire Me</a>
    </nav>
  );
};

export default Navbar;