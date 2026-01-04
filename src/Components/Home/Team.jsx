const teamMembers = [
    {
      name: "Sourav Kumar",
      role: "Community Lead",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Aman Singh",
      role: "Technical Lead",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Priya Sharma",
      role: "Design Lead",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Rahul Verma",
      role: "PR & Outreach",
      image: "https://via.placeholder.com/300",
    },
  ];
  
  const Team = () => {
    return (
      <section id="team" className="bg-[#0B0F19] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Meet the <span className="text-indigo-500">Team</span>
            </h2>
            <p className="text-gray-400 mt-4">
              The passionate students behind Xavier Tech Byte Society who work
              together to build, lead, and grow the community.
            </p>
          </div>
  
          {/* Team Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500 transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-gray-700 mb-4"
                />
  
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-indigo-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Want to be part of the core team?
            </p>
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
              Join the Team
            </button>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Team;
  