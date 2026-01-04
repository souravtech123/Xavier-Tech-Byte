const Footer = () => {
    return (
      <footer id="contact" className="bg-[#0B0F19] text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
  
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Xavier <span className="text-indigo-500">Tech Byte</span>
            </h3>
            <p className="text-sm leading-relaxed">
              A student-driven tech community focused on learning, building real
              projects, and growing together in technology.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Opportunities</li>
              <li className="hover:text-white cursor-pointer">Team</li>
            </ul>
          </div>
  
          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Join Us</li>
              <li className="hover:text-white cursor-pointer">Become a Member</li>
              <li className="hover:text-white cursor-pointer">Workshops</li>
              <li className="hover:text-white cursor-pointer">Hackathons</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>📧 xaviertechbyte@gmail.com</li>
              <li>🏫 Xavier’s Campus</li>
              <li>📍 India</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Xavier Tech Byte Society. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  