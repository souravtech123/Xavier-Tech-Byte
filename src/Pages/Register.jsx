import { useState } from "react";

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered User:", formData);

    // simulate successful registration
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-[#0F172A] border border-gray-800 rounded-2xl p-8 text-white">

        {/* CONDITIONAL RENDERING */}
        {!submitted ? (
          <>
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-center mb-2">
              Join <span className="text-indigo-500">Xavier Tech Byte</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Become a part of our tech community 🚀
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              />

              <input
                type="text"
                name="branch"
                placeholder="Branch (BCA, CSE, IT, etc.)"
                required
                value={formData.branch}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              />

              <select
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-300"
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>

              <textarea
                name="interest"
                placeholder="Your interests (Web, AI, DSA, Design...)"
                rows="3"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
              >
                Register Now
              </button>
            </form>
          </>
        ) : (
          /* SUCCESS MESSAGE */
          <div className="text-center py-12">
            <div className="text-6xl mb-6">✅</div>

            <h2 className="text-3xl font-extrabold mb-4">
              Registration Successful
            </h2>

            <p className="text-gray-400 mb-6">
              Thank you for joining <span className="text-indigo-500">Xavier Tech Byte Society</span>.
              <br />
              Our team will contact you soon.
            </p>

            <p className="text-sm text-gray-500">
              🚀 Meanwhile, keep learning and building!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Register;
