const About = () => {
    return (
      <section
        id="about"
        className="bg-[#0B0F19] text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              About <span className="text-indigo-500">Xavier Tech Byte Society</span>
            </h2>
  
            <p className="text-gray-400 leading-relaxed mb-4">
              Xavier Tech Byte Society is a student-led technology community created
              to empower learners through practical skills, real-world projects,
              and collaborative growth. We believe that technology is best learned
              by building, experimenting, and sharing knowledge.
            </p>
  
            <p className="text-gray-400 leading-relaxed mb-6">
              Our community is open to beginners, intermediates, and advanced
              learners who are passionate about development, problem-solving,
              innovation, and exploring modern technologies together.
            </p>
  
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                <h3 className="text-xl font-bold text-indigo-400">Learn</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Workshops, bootcamps & guided learning paths
                </p>
              </div>
  
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                <h3 className="text-xl font-bold text-indigo-400">Build</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Real projects, hackathons & teamwork
                </p>
              </div>
  
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                <h3 className="text-xl font-bold text-indigo-400">Grow</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Skills, confidence & career opportunities
                </p>
              </div>
  
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                <h3 className="text-xl font-bold text-indigo-400">Connect</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Like-minded students & mentors
                </p>
              </div>
            </div>
          </div>
  
          {/* Right Visual / Stats */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
  
            <div className="relative bg-[#0F172A] border border-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
                Why Join Us?
              </h3>
  
              <ul className="space-y-4 text-gray-300">
                <li>✅ Beginner-friendly environment</li>
                <li>✅ Hands-on learning approach</li>
                <li>✅ Project-based growth</li>
                <li>✅ Hackathons & competitions</li>
                <li>✅ Career & internship guidance</li>
              </ul>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default About;
  