import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-3">
            Xavier Tech Byte Society
          </h3>
          <p className="text-sm leading-relaxed">
            A student-led tech society focused on product building, hackathons,
            open-source contributions, and real-world skill development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer">Team</li>
            <li className="hover:text-green-400 cursor-pointer">Join Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Email: xaviertechbyte@gmail.com</li>
            <li>Location: Xavier University</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-green-400">LinkedIn</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
            <a href="#" className="hover:text-green-400">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-center text-sm">
        © {new Date().getFullYear()} Xavier Tech Byte Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
