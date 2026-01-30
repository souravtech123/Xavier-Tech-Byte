import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events() {
  const pastEvents = [
    {
      title: "Web Dev Bootcamp",
      date: "Oct 2025",
      description:
        "A hands-on workshop covering HTML, CSS, JavaScript, and project building.",
    },
    {
      title: "Hackathon Sprint",
      date: "Nov 2025",
      description:
        "Team-based hackathon focused on solving real-world problems.",
    },
  ];

  const upcomingEvents = [
    {
      title: "Open Source Kickstart",
      date: "Feb 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Xavier Campus",
    },
    {
      title: "AI & Web Meetup",
      date: "Mar 2026",
      time: "11:00 AM - 3:00 PM",
      location: "Seminar Hall",
    },
  ];

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
        </div>

      </div>
    </section>
  );
}
