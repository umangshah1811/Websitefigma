import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    title: "Annual Day Celebration 2026",
    date: "March 25, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    description:
      "Join us for our grand annual day celebration featuring performances by our students, awards, and fun activities.",
    image:
      "https://images.unsplash.com/photo-1625999874116-dba9a603fa24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzczNTAzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
  {
    title: "Holi Color Festival",
    date: "March 17, 2026",
    time: "9:00 AM - 11:00 AM",
    location: "School Playground",
    description:
      "Celebrate the festival of colors with safe, eco-friendly colors and lots of fun activities for children.",
    image:
      "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "March 20, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Individual Classrooms",
    description:
      "One-on-one meetings to discuss your child's progress, achievements, and areas of improvement.",
    image:
      "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
  {
    title: "Sports Day",
    date: "April 5, 2026",
    time: "8:00 AM - 12:00 PM",
    location: "School Playground",
    description:
      "Fun-filled sports activities, races, and games designed for young children to promote physical fitness.",
    image:
      "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
  {
    title: "Summer Camp Registration",
    date: "April 15, 2026",
    time: "All Day",
    location: "Online & Campus",
    description:
      "Register for our exciting summer camp with creative activities, learning modules, and outdoor fun.",
    image:
      "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
  {
    title: "Art Exhibition",
    date: "April 22, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "School Gallery",
    description:
      "Showcase of creative artwork, paintings, and crafts made by our talented young artists.",
    image:
      "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "upcoming",
  },
];

export function Events() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Events & Activities</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Stay updated with our exciting events, celebrations, and activities throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFCC00] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={16} className="text-[#0047FF]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock size={16} className="text-[#0047FF]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={16} className="text-[#0047FF]" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Campaign */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admissions Open for 2026-2027</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Limited seats available! Enroll your child now for the upcoming academic year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </a>
            <a
              href="/admissions"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
