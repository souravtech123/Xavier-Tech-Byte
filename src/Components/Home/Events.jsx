import { useState } from "react"

const eventsData = {
  upcoming: [],

  past: [
    {
      title: "Tech Kriti",
      date: "1st Oct 2024",
      type: "Official Launch of Xavier Tech Byte",
      description:
        "Tech Kriti is the grand launch of Xavier Tech Byte Society, where passion meets technology. It’s the starting point for students who want to learn, build real projects, collaborate, and grow together in the world of tech.",
    },
    {
      title: "Game Dev Workshop",
      date: "2 November 2024",
      type: "Workshop",
      description:
        "Ready to stop playing games and start creating them? The Game Dev Workshop is all about learning game development the fun way — build, experiment, and bring your ideas to life with code and creativity.",
    },
    {
      title: "XTS Unplugged",
      date: "17 March 2025",
      type: "Tech Talk",
      description:
        "Tech Talk is where classrooms turn into conversations. It’s a space for students to interact openly with professors, discuss real tech trends, clear doubts, and gain guidance for their future — no pressure, just learning and meaningful discussions.",
    },
    {
      title: "Build With AI",
      date: "10th May 2025",
      type: "AI Workshop",
      description:
        "AI is not the future — it’s happening now. The Build with AI Workshop, powered by GDG Ranchi, helps students explore AI in the most practical way possible. Learn, build, and experiment with AI tools that are shaping today’s tech world 🤖✨",
    },
    {
      title: "XTS Founder’s Legacy & Farewell",
      date: "29 May 2025",
      type: "Farewell",
      description:
        "The XTS Farewell Ceremony is not just about saying goodbye — it’s about celebrating memories, growth, and the bonds that will always connect us as part of XTS. A tribute to the journey and a cheer for what’s next.",
    },
    {
      title: "Innoverse TechFest",
      date: "29 August 2025",
      type: "Tech-Fest",
      description:
        "Innoverse Tech Fest is where ideas collide with innovation. Code, create, compete, and connect in a tech-powered environment built for students who want to explore what’s next 🚀🌌",
    },
  ],
}

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

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
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Upcoming Events
          </button>

          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "past"
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Event Cards */}
        {eventsData[activeTab].length === 0 ? (
          <div className="text-center text-gray-400 text-lg py-16">
            🚫 No Upcoming Events at the moment. Stay tuned!
          </div>
        ) : (
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
        )}

      </div>
    </section>
  )
}

export default Events
