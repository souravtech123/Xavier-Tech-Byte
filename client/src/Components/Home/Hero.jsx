import { NavLink } from "react-router";

export default function Hero() {
   
  

    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
  
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            🚀 Official Tech Society
          </span>
  
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Xavier <span className="text-blue-600">Tech Byte</span> Society
          </h1>
  
          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A community of innovators, developers, designers, and problem-solvers
            building real-world tech through projects, hackathons, and open source.
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
               to={'/join'}
              className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Join the Community
            </NavLink>
  
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              Explore Projects
            </a>
          </div>
  
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">20+</h3>
              <p className="text-gray-600 mt-1">Active Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-1">Projects Built</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600 mt-1">Hackathons</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  