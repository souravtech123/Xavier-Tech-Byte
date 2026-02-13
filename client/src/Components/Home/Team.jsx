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
    <section className="bg-gray-50 py-24 px-6">
    <div className="max-w-7xl mx-auto">
  
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
          Our Team
        </span>
        <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
          Meet the People Behind XTS
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          The minds behind Xavier Tech Byte Society — builders, designers,
          innovators, and leaders shaping real-world products.
        </p>
      </div>
  
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 transition hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
  
            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-indigo-600 mt-1 font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  </section>
  
  )
};

export default Team;
