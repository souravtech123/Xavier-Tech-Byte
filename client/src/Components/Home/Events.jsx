import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events() {
  const pastEvents = [
    {
      title: "Tech Kriti",
      date: "Oct 2024",
      description:
        "Tech Kriti marks the official launch of Xavier Tech Byte, a student-led tech community focused on learning, innovation, and collaboration. The event introduces the vision and future roadmap of the community, encouraging students to build practical skills, work on real projects, and grow together in the tech ecosystem.",
    },
    {
      title: "Game Development Workshop",
      date: "Nov 2024",
      description:
        "Game Dev Workshop is a hands-on session designed to introduce students to the fundamentals of game development. Participants will learn how games are built, explore core concepts like gameplay mechanics and design, and take their first step into creating interactive experiences.",
    },
    {
      title: "XTS Unplugged",
      date: "March 2025",
      description:
        "Tech Talks is an interactive discussion session where teachers and students come together to share ideas, experiences, and insights on technology. The session encourages open conversations, clears doubts, and bridges the gap between academic learning and real-world tech applications.",
    },
    {
      title: "Build With AI",
      date: "May 2025",
      description:
        "AI Workshop is a hands-on session designed to introduce students to the basics of Artificial Intelligence. Participants will explore how AI works, understand real-world use cases, and learn how to build simple AI-powered applications.",
    },
    {
      title: "Innvoverse TechFest",
      date: "August 2025",
      description:
        "Innoverse Techfest is a celebration of innovation and technology, bringing together students to explore ideas, showcase creativity, and engage in exciting tech-based activities. The fest encourages learning through competitions, workshops, and collaborative experiences, inspiring participants to think beyond limits.",
    },
  ];

  // 🔴 No upcoming events for now
  const upcomingEvents = [];

  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold text-blue-600">
            Events
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Events & Upcoming Activities
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From workshops and hackathons to meetups and bootcamps,
            we actively organize events that focus on real learning
            and collaboration.
          </p>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Past Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h4>
                <p className="mt-2 text-sm text-blue-600 font-medium">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  {event.date}
                </p>
                <p className="mt-4 text-gray-600">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h3>

          {upcomingEvents.length === 0 ? (
            <div className="p-10 bg-white rounded-xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 text-lg font-medium">
                No upcoming events right now
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Stay tuned — exciting events are coming soon 🚀
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <button className="self-start md:self-center px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                    Register
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
