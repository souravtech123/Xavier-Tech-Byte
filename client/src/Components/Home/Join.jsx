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
    <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900">
        How to Join Xavier Tech Byte Society
      </h2>
      <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
        Whether you’re a beginner or an experienced developer,
        Xavier Tech Byte Society welcomes everyone who wants to learn,
        build, and grow together.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
      {steps.map((step) => (
        <div
          key={step.id}
          className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition"
        >
          <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold">
            {step.id}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center">
      <NavLink
        href="#"
        className="inline-flex items-center justify-center bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
      >
        Join the Society
      </a>
      <p className="text-gray-500 mt-4 text-sm">
        Open for all Xavier University students • No registration fee
      </p>
    </div>

  </div>
</section>

  );
};

export default JoinSociety;
