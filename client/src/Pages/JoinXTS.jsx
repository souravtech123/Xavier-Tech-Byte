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
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-2xl font-bold text-center mb-6">
            Join XTS Community
          </h1>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="input"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="input"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              onChange={handleChange}
              className="input"
            />

            <select
              name="role"
              required
              onChange={handleChange}
              className="input"
            >
              <option value="">Area of Interest</option>
              <option>Web Development</option>
              <option>Backend / APIs</option>
              <option>AI / ML</option>
              <option>UI / UX Design</option>
              <option>Content / Community</option>
            </select>

            <textarea
              name="message"
              rows="3"
              placeholder="Why do you want to join XTS? (optional)"
              onChange={handleChange}
              className="input"
            />

            <button
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
