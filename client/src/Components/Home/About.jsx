export default function About() {
    return (
      <section
        id="about"
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Building a Strong Tech Culture at Xavier
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Xavier Tech Byte Society is a student-led technology community
              focused on learning, building, and growing together through
              practical experience.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Founded with the vision of creating a hands-on tech ecosystem,
                Xavier Tech Byte Society empowers students to go beyond theory
                and work on real-world projects. We believe learning is most
                effective when it is collaborative, practical, and impact-driven.
              </p>
  
              <p>
                Our society brings together developers, designers, problem-solvers,
                and tech enthusiasts to explore domains like web development,
                open source, hackathons, UI/UX, and emerging technologies.
              </p>
  
              <p>
                Through projects, workshops, peer learning, and competitions,
                we aim to prepare students for industry challenges while
                fostering innovation, leadership, and teamwork.
              </p>
            </div>
  
            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🚀 Our Mission
                </h3>
                <p className="text-gray-600">
                  To create a collaborative environment where students learn by
                  building, experimenting, and solving real problems using technology.
                </p>
              </div>
  
              <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🌍 Our Vision
                </h3>
                <p className="text-gray-600">
                  To become a recognized student tech community that produces
                  skilled, confident, and industry-ready innovators.
                </p>
              </div>
  
              <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🤝 Community First
                </h3>
                <p className="text-gray-600">
                  We believe growth happens faster when students learn together,
                  share knowledge, and support each other.
                </p>
              </div>
  
              <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  💡 Learn by Doing
                </h3>
                <p className="text-gray-600">
                  Our approach emphasizes hands-on projects, hackathons,
                  and real-world problem-solving.
                </p>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  