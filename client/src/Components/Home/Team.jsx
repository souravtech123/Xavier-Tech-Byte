import React from "react";
import img1 from '../../assets/Members/Atul.webp'
import img2 from '../../assets/Members/Ashutosh.webp'
import img3 from '../../assets/Members/Nausheen.webp'
import img4 from '../../assets/Members/Prachi.webp'
import img5 from '../../assets/Members/Keshri.webp'
import img6 from '../../assets/Members/Dubey.webp'
import img7 from '../../assets/Members/Ayush.webp'

const teamMembers = [
  {
    id: 1,
    name: "Atul Kumar",
    role: "Head Supervisor",
    image: img1,
  },
  {
    id: 2,
    name: "Ashutosh Sahu",
    role: "Tech Lead",
    image: img2,
  },
  {
    id: 3,
    name: "Nausheen Jilani",
    role: "Executive Head",
    image: img3,
  },
  {
    id: 4,
    name: "Prachi Priya",
    role: "Executive Sub head",
    image: img4,
  },
  {
    id: 5,
    name: "Katyani Keshri",
    role: "PR Sub-Head",
    image: img5,
  },
  {
    id: 6,
    name: "Sakshi Dubey",
    role: "Creastive Head",
    image: img6,
  },
  {
    id: 7,
    name: "Ayush",
    role: "Media Head",
    image: img7,
  },
];

const Team = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-400">
            Meet Our Team
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            The minds behind Xavier Tech Byte Society — builders, designers,
            innovators, and leaders shaping real-world products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-green-400 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
