import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            Xavier <span className="text-blue-600">Tech Byte</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#events" className="hover:text-blue-600 transition">
            Events
          </a>
          <a href="#team" className="hover:text-blue-600 transition">
            Team
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#events" onClick={() => setOpen(false)}>Events</a>
            <a href="#team" onClick={() => setOpen(false)}>Team</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <button className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white">
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
