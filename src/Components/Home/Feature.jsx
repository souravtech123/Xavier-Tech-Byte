const WhatWeDo = () => {
    return (
      <section
        id="activities"
        className="bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              What We <span className="text-indigo-500">Do</span>
            </h2>
            <p className="text-gray-400 mt-4">
              We focus on practical learning, collaboration, and building real
              skills that matter in the tech industry.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">💻 Tech Workshops</h3>
              <p className="text-gray-400 text-sm">
                Hands-on workshops on Web Development, AI, DSA, and modern tools.
              </p>
            </div>
  
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">🛠 Project Building</h3>
              <p className="text-gray-400 text-sm">
                Build real-world projects in teams and showcase them in your
                portfolio.
              </p>
            </div>
  
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">🏆 Hackathons</h3>
              <p className="text-gray-400 text-sm">
                Participate in hackathons, coding challenges, and tech contests.
              </p>
            </div>
  
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">🎤 Tech Talks</h3>
              <p className="text-gray-400 text-sm">
                Guest sessions, expert talks, and peer-to-peer learning events.
              </p>
            </div>
  
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">🤝 Team Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Learn teamwork by working with developers, designers, and creators.
              </p>
            </div>
  
            <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-3">🚀 Career Growth</h3>
              <p className="text-gray-400 text-sm">
                Get guidance on internships, resumes, open source, and career paths.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeDo;
  