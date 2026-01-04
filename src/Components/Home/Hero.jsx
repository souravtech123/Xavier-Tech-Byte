const Hero = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0B0F19] to-black text-white pt-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-600/10 text-indigo-400 text-sm font-semibold">
              Official Tech Community of Xavier
            </span>
  
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building Future <br />
              <span className="text-indigo-500">Tech Leaders</span>
            </h1>
  
            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              Xavier Tech Byte Society is a student-driven tech community focused on
              learning, building real-world projects, hackathons, and growing
              together in tech.
            </p>
  
            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
                Join the Community
              </button>
  
              <button className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition">
                Explore Events
              </button>
            </div>
          </div>
  
          {/* Right Visual */}
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
  
            <div className="relative bg-[#0F172A] border border-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                What We Do
              </h3>
  
              <ul className="space-y-3 text-gray-300">
                <li>🚀 Workshops & Bootcamps</li>
                <li>💻 Web, AI & DSA Learning</li>
                <li>🛠 Build Real Projects</li>
                <li>🏆 Hackathons & Competitions</li>
                <li>🤝 Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  