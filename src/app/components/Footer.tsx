import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
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
  /* ── Fixed Back to Top: targets document.documentElement for maximum compatibility ── */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home",                 path: "/" },
    { label: "About Our Pre-School", path: "/about" },
    { label: "Our Preschool Programs",path: "/programs" },
    { label: "Admissions Process",    path: "/admissions" },
    { label: "School Events",         path: "/events" },
    { label: "Student Gallery",        path: "/gallery" },
    { label: "School Blog",            path: "/blog" },
    { label: "Contact Us",             path: "/contact" },
  ];

  const schedule = [
    { day: "Monday",    hours: "8:00 AM – 2:00 PM" },
    { day: "Tuesday",   hours: "8:00 AM – 2:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 2:00 PM" },
    { day: "Thursday",  hours: "8:00 AM – 2:00 PM" },
    { day: "Friday",    hours: "8:00 AM – 2:00 PM" },
    { day: "Saturday",  hours: "8:00 AM – 2:00 PM" },
    { day: "Sunday",    hours: "Closed" },
  ];

  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=108+Green+Aristo+Road+Canal+Road+Jahangir+Pura+Surat+Gujarat+395005";

  return (
    <>
      {/* ── Fixed Back to Top button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-24 right-4 z-40 bg-[#0047FF] text-white p-3 rounded-full shadow-xl hover:bg-blue-700 active:scale-95 transition-all hover:scale-110"
      >
        {/* Arrow Up SVG inline to guarantee render */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* ── Unified 5-column white footer ── */}
      <footer className="bg-white text-gray-900 border-t-4 border-[#0047FF]">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Col 1 – Brand Bio */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Mother Care Pre-School Logo" className="h-12 w-12 object-contain" />
                <div>
                  <div className="font-bold text-base text-gray-900">Mother Care Pre-School</div>
                  <div className="text-xs text-gray-500 italic">Learn With Fun-To-Turn</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Proudly serving families in Jahangirpura, Canal Road, Dandi, Jahangirabad and across Surat, Gujarat.
              </p>
              <address className="not-italic text-sm text-gray-600 space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#0047FF]" />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] transition-colors">
                    108, Green Aristo Road, Canal Road, Jahangir Pura, Surat, Gujarat 395005
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-[#0047FF]" />
                  <a href="tel:+918866023444" className="hover:text-[#00C853] transition-colors">+91 88660 23444</a>
                </div>
              </address>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/18Gv2HHf3B/" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-[#00C853] hover:text-white transition-colors text-gray-600" aria-label="Facebook">
                  <Facebook size={17} />
                </a>
                <a href="https://www.instagram.com/mothercaresurat" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-[#00C853] hover:text-white transition-colors text-gray-600" aria-label="Instagram">
                  <Instagram size={17} />
                </a>
              </div>
            </div>

            {/* Col 2 – Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-gray-600 hover:text-[#00C853] text-sm transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Programs */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link to="/programs/playgroup"  className="text-gray-600 hover:text-[#00C853] text-sm transition-colors">Playgroup <span className="text-gray-400">(Ages 1.5–2.5)</span></Link></li>
                <li><Link to="/programs/nursery"    className="text-gray-600 hover:text-[#00C853] text-sm transition-colors">Nursery <span className="text-gray-400">(Ages 2.5–3.5)</span></Link></li>
                <li><Link to="/programs/junior-kg"  className="text-gray-600 hover:text-[#00C853] text-sm transition-colors">Junior KG <span className="text-gray-400">(Ages 3.5–4.5)</span></Link></li>
                <li><Link to="/programs/senior-kg"  className="text-gray-600 hover:text-[#00C853] text-sm transition-colors">Senior KG <span className="text-gray-400">(Ages 4.5–5.5)</span></Link></li>
              </ul>
            </div>

            {/* Col 4 – Operating Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#0047FF]" />
                <h3 className="font-bold text-gray-900">Operating Hours</h3>
              </div>
              <OpenNowBadge />
              <ul className="mt-3 space-y-1.5">
                {schedule.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between text-sm gap-3">
                    <span className="text-gray-500">{day}</span>
                    <span className={hours === "Closed" ? "text-red-500 font-semibold" : "text-gray-900 font-medium"}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5 – Contact + Map */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-[#0047FF] flex-shrink-0" />
                  <a href="tel:+918866023444" className="text-gray-600 hover:text-[#00C853] transition-colors">+91 88660 23444</a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-[#0047FF] flex-shrink-0" />
                  <a href="mailto:info@mothercaresurat.in" className="text-gray-600 hover:text-[#00C853] transition-colors">info@mothercaresurat.in</a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin size={14} className="text-[#0047FF] flex-shrink-0 mt-0.5" />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00C853] transition-colors">
                    108, Green Aristo Road, Canal Road, Jahangir Pura, Surat
                  </a>
                </li>
              </ul>
              <iframe
                src="https://maps.google.com/maps?q=Mother+Care+Pre-School+Surat&output=embed"
                width="100%"
                height="130"
                loading="lazy"
                title="Mother Care Pre-School location map"
                style={{ borderRadius: "10px", border: "1px solid #e2e8f0" }}
              />
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-10 bg-[#0047FF] rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Ready to Join Our Family?</h3>
            <p className="text-blue-100 mb-4">Schedule a tour and see our school in action!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions#tour" className="bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all">Book a School Tour</Link>
              <Link to="/admissions" className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all">Apply for Admission</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-6 border-t border-gray-200 pt-5 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Mother Care Pre-School. All rights reserved. Trusted by families in Surat for over 15 years | 2000+ Happy Students
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
