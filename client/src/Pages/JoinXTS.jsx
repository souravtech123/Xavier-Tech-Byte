import { useState } from "react";
import { useNavigate } from "react-router";

export default function JoinXTS() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/xts/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      navigate("/success");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT – Context */}
        <div>
          <span className="text-sm font-semibold text-indigo-600">
            Xavier Tech Byte
          </span>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
            Apply to Join <br /> the XTS Community
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            XTS is a student-led tech ecosystem focused on building real skills,
            real projects, and real impact. We’re looking for curious minds who
            want to grow beyond classrooms.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
              <p className="text-gray-700">
                Work on real-world tech projects
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
              <p className="text-gray-700">
                Learn directly from mentors & peers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
              <p className="text-gray-700">
                Build a strong tech portfolio
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Applications are reviewed manually by the XTS core team.
          </p>
        </div>

        {/* RIGHT – Application Form */}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area of Interest
              </label>
              <select
                name="role"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-indigo-600"
              >
                <option value="">Select one</option>
                <option>Web Development</option>
                <option>Backend / APIs</option>
                <option>AI / ML</option>
                <option>UI / UX Design</option>
                <option>Content / Community</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join XTS? (Optional)
              </label>
              <textarea
                name="message"
                rows="4"
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 resize-none focus:outline-none focus:border-indigo-600"
              />
            </div>

            <button
              disabled={loading}
              className="w-full lg:w-auto px-10 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
