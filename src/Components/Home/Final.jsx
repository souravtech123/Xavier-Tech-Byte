const FinalCTA = () => {
    return (
      <section
        id="join"
        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-28"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Start Your <br />
            <span className="text-black">Tech Journey?</span>
          </h2>
  
          <p className="text-white/90 text-lg mb-10">
            Join Xavier Tech Byte Society and become part of a community where
            students learn, build real projects, participate in hackathons, and
            grow together.
          </p>
  
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition">
              Join the Community
            </button>
  
            <button className="px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
              Become a Member
            </button>
          </div>
  
          <p className="mt-10 text-sm text-white/80">
            🚀 Open for beginners • No prior experience required
          </p>
        </div>
      </section>
    );
  };
  
  export default FinalCTA;
  