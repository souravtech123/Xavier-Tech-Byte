import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Xavier Tech Byte Society
          </h3>
          <p className="text-sm leading-relaxed">
            A student-led tech society focused on product building, hackathons,
            open-source contributions, and real-world skill development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-600 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition">
              Gallery
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition">
              Team
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition">
              Join Us
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Email: xaviertechbyte@gmail.com</li>
            <li>Location: Xavier University</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h4>
          <div className="flex gap-4 mt-2 text-sm">
            <a href="#" className="hover:text-indigo-600 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Xavier Tech Byte Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
