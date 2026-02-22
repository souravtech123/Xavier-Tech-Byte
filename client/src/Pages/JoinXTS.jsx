import { useState } from "react";

export default function JoinXTS() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ⭐ KEY STATE

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://xavier-tech-byte.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      // ✅ SHOW SUCCESS
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 py-20">

        {/* ✅ SUCCESS SCREEN */}
        {success ? (
          <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold text-green-600">
              Application Submitted 🎉
            </h1>
            <p className="mt-4 text-gray-600">
              Thank you for applying to <strong>Xavier Tech Byte</strong>.
              <br />
              Our team will contact you soon.
            </p>
          </div>
        ) : (
          /* 🔽 FORM + CONTENT */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <div>
              <span className="text-sm font-semibold text-indigo-600">
                Xavier Tech Byte
              </span>

              <h1 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
                Apply to Join <br /> the XTS Community
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                XTS is a student-led tech ecosystem focused on building real skills,
                real projects, and real impact.
              </p>

              <div className="mt-10 space-y-4">
                <p>✔ Work on real-world tech projects</p>
                <p>✔ Learn from mentors & peers</p>
                <p>✔ Build a strong tech portfolio</p>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Application Form
              </h2>

              {error && (
                <div className="mb-6 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2"
                />

                <select
                  name="role"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2"
                >
                  <option value="">Select Area of Interest</option>
                  <option>Web Development</option>
                  <option>Backend / APIs</option>
                  <option>AI / ML</option>
                  <option>UI / UX Design</option>
                  <option>Content / Community</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Why do you want to join? (Optional)"
                  rows="4"
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2"
                />

                <button
                  disabled={loading}
                  className="px-10 py-3 bg-indigo-600 text-white rounded-md disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}