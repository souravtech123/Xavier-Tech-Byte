import React from "react";

const steps = [
  {
    id: 1,
    title: "Fill the Registration Form",
    description:
      "Share your basic details and interests. No prior experience is required — curiosity is enough.",
  },
  {
    id: 2,
    title: "Join Our Community",
    description:
      "Get added to our official WhatsApp / Discord group to stay updated on events and projects.",
  },
  {
    id: 3,
    title: "Start Building & Learning",
    description:
      "Participate in hackathons, workshops, and real product-building with the team.",
  },
];

const JoinSociety = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-400">
            How to Join Xavier Tech Byte Society
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Whether you’re a beginner or an experienced developer, 
            Xavier Tech Byte Society welcomes everyone who wants to learn,
            build, and grow together.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-green-500/20 transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 text-black text-xl font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-400 transition"
          >
            Join the Society
          </a>
          <p className="text-gray-500 mt-4">
            Open for all Xavier University students • No registration fee
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinSociety;
