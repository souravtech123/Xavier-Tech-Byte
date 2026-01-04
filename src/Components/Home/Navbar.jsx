import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Xavier <span className="text-indigo-500">Tech Byte</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-300">
          <li onClick={() => scrollTo("about")} className="hover:text-white cursor-pointer">About</li>
          <li onClick={() => scrollTo("events")} className="hover:text-white cursor-pointer">Events</li>
          <li onClick={() => scrollTo("opportunities")} className="hover:text-white cursor-pointer">Opportunities</li>
          <li onClick={() => scrollTo("team")} className="hover:text-white cursor-pointer">Team</li>
          <li onClick={() => scrollTo("contact")} className="hover:text-white cursor-pointer">Contact</li>

          <NavLink to="/register" className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Register
          </NavLink>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col gap-6 px-6 py-6 text-gray-300">
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("events")}>Events</li>
            <li onClick={() => scrollTo("opportunities")}>Opportunities</li>
            <li onClick={() => scrollTo("team")}>Team</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>

            <NavLink to= 'register'className="bg-indigo-600 py-2 rounded-lg text-white">
              Register
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
