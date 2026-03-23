import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=108+Green+Aristo+Road+Canal+Road+Jahangir+Pura+Surat+Gujarat+395005";
const EMAIL = "mothercare79ps@gmail.com";
const PHONE = "+91 8866023444";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    bg: "from-red-50 to-rose-50",
    iconBg: "bg-red-500",
    glow: "#EF4444",
    content: (
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:underline leading-relaxed text-base"
      >
        108, Green Aristo Road, Canal Road,
        <br />Jahangir Pura, Surat, Gujarat 395005, India
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Call Us",
    bg: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
    glow: "#3B82F6",
    content: (
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="text-blue-600 hover:underline font-medium text-base"
      >
        {PHONE}
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    bg: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500",
    glow: "#22C55E",
    content: (
      <a
        href={`mailto:${EMAIL}`}
        className="text-green-600 hover:underline font-medium text-base break-all"
      >
        {EMAIL}
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Office Hours",
    bg: "from-yellow-50 to-amber-50",
    iconBg: "bg-yellow-500",
    glow: "#EAB308",
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Monday – Saturday: 8:30 AM – 1:30 PM
        <br />
        <span className="text-red-500 font-medium">Sunday: Closed</span>
      </p>
    ),
  },
];

function ContactCard({
  icon: Icon, title, bg, iconBg, glow, content,
}: (typeof contactCards)[0]) {
  return (
    <div
      className={`group flex items-start gap-4 p-6 bg-gradient-to-br ${bg} rounded-2xl border border-transparent
        transition-all duration-300 cursor-default
        hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 12px 32px ${glow}30, 0 0 0 2px ${glow}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      <div className={`${iconBg} text-white p-3 rounded-xl flex-shrink-0 shadow-md
        transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {content}
      </div>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We’d love to hear from you. Get in touch with us for any questions or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left – info cards + map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {contactCards.map((card) => (
                  <ContactCard key={card.title} {...card} />
                ))}
              </div>

              {/* Map */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg h-64 hover:opacity-95 transition-opacity"
                aria-label="Get directions to Mother Care Pre-School"
              >
                <iframe
                  src="https://maps.google.com/maps?q=108+Green+Aristo+Road+Canal+Road+Jahangirpura+Surat+Gujarat+395005&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mother Care Pre-School Location"
                />
              </a>
            </div>

            {/* Right – contact form */}
            <div>
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select required value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="tour">School Tour Request</option>
                      <option value="general">General Information</option>
                      <option value="curriculum">Curriculum Questions</option>
                      <option value="fees">Fees &amp; Payment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea required rows={5} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="submit"
                    className="w-full bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit Us?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour or apply for admission today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg">
              Book a School Tour
            </a>
            <a href="/admissions"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Apply for Admission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
