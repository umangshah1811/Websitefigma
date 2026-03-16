import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUp, Clock } from "lucide-react";
import logo from "../../assets/logo.png";

/* ── Live Open/Closed badge (IST) ── */
function OpenNowBadge() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 60 * 60000);
      const day = ist.getDay();
      const mins = ist.getHours() * 60 + ist.getMinutes();
      setIsOpen(day >= 1 && day <= 6 && mins >= 480 && mins < 840);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${
      isOpen ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
    }`}>
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
        isOpen ? "bg-green-500 animate-pulse" : "bg-gray-400"
      }`} />
      {isOpen ? "Open Now" : "Currently Closed"}
    </span>
  );
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Our Pre-School", path: "/about" },
    { label: "Our Preschool Programs", path: "/programs" },
    { label: "Admissions Process", path: "/admissions" },
    { label: "School Events", path: "/events" },
    { label: "Student Gallery", path: "/gallery" },
    { label: "School Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  const schedule = [
    { day: "Monday", hours: "8:00 AM – 2:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 2:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 2:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 2:00 PM" },
    { day: "Friday", hours: "8:00 AM – 2:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=108+Green+Aristo+Road+Canal+Road+Jahangir+Pura+Surat+Gujarat+395005";

  return (
    <>
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-24 right-4 z-40 bg-[#0047FF] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <footer>
        {/* ── Top blue section: Brand + Quick Links + Programs ── */}
        <div className="bg-[#0047FF] text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logo} alt="Mother Care Pre-School Logo" className="h-12 w-12" />
                  <div>
                    <div className="font-bold text-lg">Mother Care Pre-School</div>
                    <div className="text-xs text-blue-200 italic">Learn With Fun-To-Turn</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mb-3">
                  Proudly serving families in Jahangirpura, Canal Road, Dandi, Jahangirabad and across Surat, Gujarat.
                </p>
                <address className="not-italic text-sm text-blue-100 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#00C853]" />
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] transition-colors">
                      108, Green Aristo Road, Canal Road, Jahangir Pura, Surat, Gujarat 395005
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="flex-shrink-0 text-[#00C853]" />
                    <a href="tel:+918866023444" className="hover:text-[#00C853] transition-colors">+91 88660 23444</a>
                  </div>
                </address>
                {/* Social */}
                <div className="flex gap-3 mt-5">
                  <a href="https://www.facebook.com/share/18Gv2HHf3B/" target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#00C853] transition-colors" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/mothercaresurat" target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#00C853] transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path} className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Programs</h3>
                <ul className="space-y-2">
                  <li><Link to="/programs/playgroup" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Playgroup <span className="text-blue-300">(Ages 1.5–2.5)</span></Link></li>
                  <li><Link to="/programs/nursery" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Nursery <span className="text-blue-300">(Ages 2.5–3.5)</span></Link></li>
                  <li><Link to="/programs/junior-kg" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Junior KG <span className="text-blue-300">(Ages 3.5–4.5)</span></Link></li>
                  <li><Link to="/programs/senior-kg" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Senior KG <span className="text-blue-300">(Ages 4.5–5.5)</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── TASK 5: Middle white section: Hours + Contact + Map ── */}
        <div className="bg-white border-t-4 border-[#0047FF]">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Operating Hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-[#0047FF]" />
                  <h3 className="font-bold text-lg text-gray-900">Operating Hours</h3>
                </div>
                <OpenNowBadge />
                <ul className="mt-4 space-y-2">
                  {schedule.map(({ day, hours }) => (
                    <li key={day} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                      <span className="text-gray-500 font-medium">{day}</span>
                      <span className={hours === "Closed" ? "text-red-500 font-semibold" : "text-gray-900 font-semibold"}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact + Map */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Contact Us</h3>
                <ul className="space-y-3 mb-5">
                  <li className="flex items-center gap-3 text-sm group">
                    <Phone size={16} className="text-[#0047FF] flex-shrink-0" />
                    <a href="tel:+918866023444" className="text-gray-700 hover:text-[#00C853] transition-colors font-medium">+91 88660 23444</a>
                  </li>
                  <li className="flex items-center gap-3 text-sm group">
                    <Mail size={16} className="text-[#0047FF] flex-shrink-0" />
                    <a href="mailto:info@mothercaresurat.in" className="text-gray-700 hover:text-[#00C853] transition-colors font-medium">info@mothercaresurat.in</a>
                  </li>
                  <li className="flex items-start gap-3 text-sm group">
                    <MapPin size={16} className="text-[#0047FF] flex-shrink-0 mt-0.5" />
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#00C853] transition-colors">
                      108, Green Aristo Road, Canal Road, Jahangir Pura, Surat, Gujarat 395005
                    </a>
                  </li>
                </ul>
                <iframe
                  src="https://maps.google.com/maps?q=Mother+Care+Pre-School+Surat&output=embed"
                  width="100%"
                  height="140"
                  loading="lazy"
                  title="Mother Care Pre-School location map"
                  style={{ borderRadius: "12px", border: "2px solid #e2e8f0" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="bg-[#0047FF]">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Join Our Family?</h3>
              <p className="text-blue-100 mb-4">Schedule a tour and see our school in action!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions#tour" className="bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all">Book a School Tour</Link>
                <Link to="/admissions" className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all">Apply for Admission</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── TASK 6: Legal bottom bar ── */}
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300 text-sm">
              © 2026 Mother Care Pre-School. All rights reserved. Trusted by families in Surat for over 15 years | 2000+ Happy Students
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
