const opportunities = [
    {
      title: "Internships",
      icon: "💼",
      description:
        "Get access to internship opportunities, referrals, and guidance to apply effectively.",
    },
    {
      title: "Hackathons",
      icon: "🏆",
      description:
        "Participate in national and international hackathons with team support.",
    },
    {
      title: "Open Source",
      icon: "🌍",
      description:
        "Contribute to open-source projects and build a strong GitHub profile.",
    },
    {
      title: "Competitions",
      icon: "⚡",
      description:
        "Take part in coding contests, innovation challenges, and tech competitions.",
    },
    {
      title: "Projects & Portfolio",
      icon: "🛠",
      description:
        "Work on real-world projects to build an impressive portfolio.",
    },
    {
      title: "Career Guidance",
      icon: "🚀",
      description:
        "Resume reviews, roadmap guidance, and mentorship from seniors & peers.",
    },
  ];
  
  const Opportunities = () => {
    return (
      <section id="opportunities" className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Opportunities <span className="text-indigo-500">We Provide</span>
            </h2>
            <p className="text-gray-400 mt-4">
              We help students go beyond classrooms by connecting them with
              real-world opportunities in tech.
            </p>
          </div>
  
          {/* Opportunity Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
  
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
  
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
              Join & Unlock Opportunities
            </button>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Opportunities;
  