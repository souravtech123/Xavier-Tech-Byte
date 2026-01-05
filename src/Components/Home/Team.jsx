const teamMembers = [
  {
    name: "Atul Kumar",
    role: "Head Supervisor",
    description:
      "The Head Supervisor plays a key role in providing direction, supervision, and mentorship to the society. With experience and insight, they ensure that all initiatives align with academic values while encouraging student innovation and growth.",
  },
  {
    name: "Ashutosh Kumar Sahu",
    role: "Tech Lead",
    description:
      "Responsible for guiding technical projects, mentoring members, and driving hands-on learning in development and tech.",
  },
  {
    name: "Nausheen Jilani",
    role: "Executive Head",
    description:
      "The Executive Head provides strategic direction and operational leadership to the society. By guiding teams, managing responsibilities, and ensuring accountability, they help turn the society’s vision into reality.",
  },
  {
    name: "Prachi Priya",
    role: "Executive Sub Head",
    description:
      "The Executive SubHead helps turn ideas into action by supporting event execution, managing responsibilities, and ensuring teams stay organized and on track. They act as a reliable bridge between team members and leadership.",
  },
  {
    name: "Katyani Keshri",
    role: "PR Head",
    description:
      "The PR Head leads outreach and branding efforts, representing the society to external organizations and communities. They play a key role in collaborations, partnerships, and strengthening the society’s presence both online and offline.",
  },
  {
    name: "Sakshi Dubey",
    role: "Creative Head",
    description:
      "The Creative Head is responsible for shaping the creative vision of the society. From visuals to content concepts, they ensure the society’s presence remains engaging, innovative, and aligned with its brand values.",
  },
  {
  name: "Ayush",
    role: "Media Head",
    description:
      "The Media Head manages media coverage and visual documentation, showcasing the society’s activities and achievements effectively.",
  },
]

const Team = () => {
  return (
    <section id="team" className="bg-[#0B0F19] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-indigo-500">Team</span>
          </h2>
          <p className="text-gray-400 mt-4">
            The core members leading and guiding Xavier Tech Byte Society.
          </p>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto">
          <div className="border border-gray-800 rounded-2xl overflow-hidden">

            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#0F172A] px-6 py-4 text-sm font-semibold text-gray-300">
              <div className="col-span-3">Name</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-6">Responsibility</div>
            </div>

            {/* Table Rows */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-12 px-6 py-5 border-t border-gray-800 hover:bg-[#111827] transition"
              >
                {/* Name */}
                <div className="col-span-3 font-semibold">
                  {member.name}
                </div>

                {/* Role */}
                <div className="col-span-3 text-indigo-400 font-medium">
                  {member.role}
                </div>

                {/* Description */}
                <div className="col-span-6 text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 mb-4">
            Want to contribute and grow with the core team?
          </p>
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            Join the Team
          </button>
        </div>

      </div>
    </section>
  )
}

export default Team
