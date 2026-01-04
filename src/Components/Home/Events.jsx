import { useState } from "react";

const eventsData = {
  upcoming: [
    {
      title: "Web Development Bootcamp",
      date: "12 April 2026",
      type: "Workshop",
      description: "Hands-on web development bootcamp covering HTML, CSS & React.",
    },
    {
      title: "AI & Machine Learning Session",
      date: "20 April 2026",
      type: "Tech Talk",
      description: "Introduction to AI concepts and real-world applications.",
    },
  ],
  past: [
    {
      title: "Hackathon 1.0",
      date: "10 March 2026",
      type: "Hackathon",
      description: "24-hour coding challenge with team collaboration.",
    },
    {
      title: "Git & GitHub Workshop",
      date: "22 February 2026",
      type: "Workshop",
      description: "Version control basics and collaboration using GitHub.",
    },
  ],
};

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section id="events" className="bg-[#0B0F19] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-indigo-500">Events</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Explore our upcoming activities and glimpse into our past events.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "upcoming"
                ? "bg-indigo-600 border-indigo-600"
                : "border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Upcoming Events
          </button>

          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "past"
                ? "bg-indigo-600 border-indigo-600"
                : "border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData[activeTab].map((event, index) => (
            <div
              key={index}
              className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-indigo-600/10 text-indigo-400">
                {event.type}
              </span>

              <h3 className="text-xl font-semibold mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {event.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{event.date}</span>

                {activeTab === "upcoming" ? (
                  <button className="text-indigo-400 hover:text-indigo-300 font-semibold">
                    Register →
                  </button>
                ) : (
                  <span className="text-green-400 font-semibold">
                    Completed ✔
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
