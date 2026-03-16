import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUp, Clock } from "lucide-react";
import logo from "../../assets/logo.png";

// ── Live "Open Now" indicator (IST = UTC+5:30) ──
function OpenNowBadge() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      // Convert to IST
      const istOffset = 5.5 * 60;
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + istOffset * 60000);
      const day = ist.getDay(); // 0=Sun
      const hour = ist.getHours();
      const min = ist.getMinutes();
      const totalMin = hour * 60 + min;
      setIsOpen(day >= 1 && day <= 6 && totalMin >= 480 && totalMin < 840);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
      isOpen ? "bg-green-500/20 text-green-300" : "bg-gray-500/20 text-gray-400"
    }`}>
      <span className={`w-2 h-2 rounded-full ${
        isOpen ? "bg-green-400 animate-pulse" : "bg-gray-500"
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

  return (
    <>
      {/* Back to Top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-24 right-4 z-40 bg-[#0047FF] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <footer className="bg-[#0047FF] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 text-center md:text-left">

            {/* Column 1 – Brand & NAP */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <img src={logo} alt="Mother Care Pre-School Logo" className="h-12 w-12" />
                <div>
                  <div className="font-bold text-lg">Mother Care Pre-School</div>
                  <div className="text-xs text-blue-200 italic">Learn With Fun-To-Turn</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-3">
                Proudly serving families in Jahangirpura, Canal Road, Dandi, Jahangirabad and across Surat, Gujarat.
              </p>
              <address className="not-italic text-sm text-blue-100 space-y-1">
                <div className="flex items-start gap-2 justify-center md:justify-start">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#00C853]" />
                  <span>108, Green Aristo Road, Canal Road, Jahangir Pura, Surat, Gujarat 395005, India</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone size={14} className="flex-shrink-0 text-[#00C853]" />
                  <a href="tel:+918866023444" className="hover:text-white">+91 88660 23444</a>
                </div>
              </address>
            </div>

            {/* Column 2 – Quick Links */}
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

            {/* Column 3 – Programs */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link to="/programs/playgroup" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Playgroup <span className="text-blue-300">(Ages 1.5–2.5)</span></Link></li>
                <li><Link to="/programs/nursery" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Nursery <span className="text-blue-300">(Ages 2.5–3.5)</span></Link></li>
                <li><Link to="/programs/junior-kg" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Junior KG <span className="text-blue-300">(Ages 3.5–4.5)</span></Link></li>
                <li><Link to="/programs/senior-kg" className="text-blue-100 hover:text-[#00C853] text-sm transition-colors">Senior KG <span className="text-blue-300">(Ages 4.5–5.5)</span></Link></li>
              </ul>
            </div>

            {/* Column 4 – Operating Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <Clock size={18} />
                <h3 className="font-semibold text-lg">Operating Hours</h3>
              </div>
              <OpenNowBadge />
              <ul className="mt-3 space-y-1.5">
                {schedule.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between text-sm gap-4">
                    <span className="text-gray-300">{day}</span>
                    <span className={hours === "Closed" ? "text-red-300" : "text-white font-medium"}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 – Contact & Map */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2 text-blue-100 text-sm justify-center md:justify-start">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#00C853]" />
                  <a href="tel:+918866023444" className="hover:text-white">+91 88660 23444</a>
                </li>
                <li className="flex items-center gap-2 text-blue-100 text-sm justify-center md:justify-start">
                  <Mail size={14} className="flex-shrink-0 text-[#00C853]" />
                  <span>info@mothercaresurat.in</span>
                </li>
              </ul>
              {/* Google Maps embed placeholder */}
              <iframe
                src="https://maps.google.com/maps?q=Mother+Care+Pre-School+Surat&output=embed"
                width="100%"
                height="130"
                loading="lazy"
                title="Mother Care Pre-School location"
                style={{ borderRadius: "8px", border: 0 }}
              />
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/Mothercaresurat/" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#00C853] hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#00C853] hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to Join Our Family?</h3>
            <p className="text-blue-100 mb-4">Schedule a tour and see our school in action!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions#tour" className="bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all">Book a School Tour</Link>
              <Link to="/admissions" className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all">Apply for Admission</Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-blue-500 pt-6 text-center">
            <p className="text-blue-200 text-sm">© {new Date().getFullYear()} Mother Care Pre-School. All rights reserved. | Designed with ❤️ for the children of Surat</p>
          </div>
        </div>
      </footer>
    </>
  );
}
