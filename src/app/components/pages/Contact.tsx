import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=108+Green+Aristo+Road+Canal+Road+Jahangir+Pura+Surat+Gujarat+395005";
const EMAIL = "mothercare79ps@gmail.com";
const PHONE = "+91 8866023444";
const WA_NUMBER = "918866023444"; // WhatsApp number without + sign

const SUBJECT_LABELS: Record<string, string> = {
  admissions: "Admissions Inquiry",
  tour: "School Tour Request",
  general: "General Information",
  curriculum: "Curriculum Questions",
  fees: "Fees & Payment",
  other: "Other",
};

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
        Monday \u2013 Saturday: 8:30 AM \u2013 1:30 PM
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
  const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a clean, readable WhatsApp message
    const subjectLabel = SUBJECT_LABELS[formData.subject] ?? formData.subject;
    const waText = [
      "\ud83d\udcdd *New Enquiry - Mother Care Pre-School*",
      "",
      `\ud83d\udc64 *Name:* ${formData.name}`,
      `\ud83d\udcde *Phone:* ${formData.phone}`,
      `\u2709\ufe0f *Email:* ${formData.email}`,
      `\ud83d\udcc2 *Subject:* ${subjectLabel}`,
      "",
      `\ud83d\udcac *Message:*`,
      formData.message,
      "",
      "_Sent via Mother Care Pre-School website_",
    ].join("\n");

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show success state and reset form
    setSubmitted(true);
    setFormData(emptyForm);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We\u2019d love to hear from you. Get in touch with us for any questions or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left \u2013 info cards + map */}
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

            {/* Right \u2013 contact form */}
            <div>
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6 flex items-center gap-1.5">
                  <span className="inline-block w-4 h-4" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  Your message will be sent directly to our WhatsApp
                </p>

                {submitted ? (
                  /* \u2500\u2500 Success state \u2500\u2500 */
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle size={56} className="text-green-500" />
                    <h3 className="text-2xl font-bold text-gray-900">WhatsApp Opened!</h3>
                    <p className="text-gray-600 max-w-xs">
                      Your message has been prefilled in WhatsApp. Just tap
                      <strong> Send</strong> in WhatsApp to deliver it to the school.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 bg-[#0047FF] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* \u2500\u2500 Form \u2500\u2500 */
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                      <textarea required rows={4} value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        placeholder="Write your message here..."></textarea>
                    </div>
                    <button type="submit"
                      className="w-full text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </button>
                  </form>
                )}
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
