const founders = [
    {
      name: "Atul Kumar",
      role: "Founder & Head Supervisor",
      description:
        "The visionary behind Xavier Tech Byte Society, responsible for establishing the foundation, guiding the community, and fostering a student-driven culture of learning, innovation, and collaboration.",
    },
    {
      name: "Aman Singh",
      role: "Co-Founder & Technical Lead",
      description:
        "Co-founded the society with a focus on technical excellence, project-based learning, and mentoring students to build real-world tech solutions.",
    },
  ]
  


const Founders = () => {
    return (
      <section id="founders" className="bg-[#0B0F19] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Our <span className="text-indigo-500">Founders</span>
            </h2>
            <p className="text-gray-400 mt-4">
              The visionaries who laid the foundation of Xavier Tech Byte Society
              and shaped its mission, values, and culture.
            </p>
          </div>
  
          {/* Founder Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-[#0F172A] border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition"
              >
                {/* Name */}
                <h3 className="text-2xl font-semibold mb-2">
                  {founder.name}
                </h3>
  
                {/* Role */}
                <p className="text-indigo-400 font-medium mb-4">
                  {founder.role}
                </p>
  
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* Quote / Legacy Line */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 italic">
              “A strong vision creates strong communities.”
            </p>
          </div>
  
        </div>
      </section>
    )
  }
  
  export default Founders
  