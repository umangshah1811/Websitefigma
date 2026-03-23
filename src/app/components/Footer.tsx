import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, CalendarDays } from "lucide-react";
import logo from "../../assets/logo.png";

const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=108+Green+Aristo+Road+Canal+Road+Jahangir+Pura+Surat+Gujarat+395005";

// ── Mobile-aware footer link: flashes green on tap via :active + touchstart ──
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [touched, setTouched] = useState(false);
  return (
    <Link
      to={to}
      className="text-sm transition-colors"
      style={{ color: touched ? "#00C853" : undefined }}
      onTouchStart={() => setTouched(true)}
      onTouchEnd={() => setTimeout(() => setTouched(false), 400)}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#00C853")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
    >
      {children}
    </Link>
  );
}

function OpenNowBadge() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 60 * 60000);
      const day = ist.getDay();
      const mins = ist.getHours() * 60 + ist.getMinutes();
      setIsOpen(day >= 1 && day <= 6 && mins >= 510 && mins < 810);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${
        isOpen ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isOpen ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
      {isOpen ? "Open Now" : "Currently Closed"}
    </span>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home",                   path: "/" },
    { label: "About Our Pre-School",   path: "/about" },
    { label: "Our Preschool Programs",  path: "/programs" },
    { label: "Admissions Process",     path: "/admissions" },
    { label: "School Events",          path: "/events" },
    { label: "Student Gallery",        path: "/gallery" },
    { label: "School Blog",            path: "/blog" },
    { label: "Contact Us",             path: "/contact" },
  ];

  const schedule = [
    { day: "Monday",    hours: "8:30 AM – 1:30 PM" },
    { day: "Tuesday",   hours: "8:30 AM – 1:30 PM" },
    { day: "Wednesday", hours: "8:30 AM – 1:30 PM" },
    { day: "Thursday",  hours: "8:30 AM – 1:30 PM" },
    { day: "Friday",    hours: "8:30 AM – 1:30 PM" },
    { day: "Saturday",  hours: "8:30 AM – 1:30 PM" },
    { day: "Sunday",    hours: "Closed" },
  ];

  return (
    <>
      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{ zIndex: 9999 }}
        className="fixed bottom-24 right-4 bg-[#0047FF] text-white p-3 rounded-full shadow-xl hover:bg-blue-700 active:scale-95 transition-all hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" style={{ pointerEvents: "none" }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <footer className="bg-white text-gray-900 border-t-4 border-[#0047FF]">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Col 1 – Brand Bio */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Mother Care Pre-School Logo" className="h-14 w-14 object-contain rounded-full flex-shrink-0" />
                <div>
                  <div className="font-bold text-base text-gray-900">Mother Care Pre-School</div>
                  <div className="text-xs text-gray-500 italic">Learn With Fun-To-Turn</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Proudly serving families in Jahangirpura, Canal Road, Dandi, Jahangirabad and across Surat, Gujarat.
              </p>
              <address className="not-italic text-sm text-gray-600 space-y-2 mb-5 mt-5">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#0047FF]" />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] active:text-[#00C853] transition-colors">
                    108, Green Aristo Road, Canal Road, Jahangir Pura, Surat, Gujarat 395005
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-[#0047FF]" />
                  <a href="tel:+918866023444" className="hover:text-[#00C853] active:text-[#00C853] transition-colors">+91 88660 23444</a>
                </div>
              </address>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/18Gv2HHf3B/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="p-2 rounded-full text-white transition-opacity hover:opacity-80" style={{ backgroundColor: "#1877F2" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/mothercaresurat" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="p-2 rounded-full text-white transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 – Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.path}>
                    <FooterLink to={l.path}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Programs */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><FooterLink to="/programs/playgroup">Playgroup <span className="text-gray-400">(Ages 2–3)</span></FooterLink></li>
                <li><FooterLink to="/programs/nursery">Nursery <span className="text-gray-400">(Ages 3–4)</span></FooterLink></li>
                <li><FooterLink to="/programs/junior-kg">Junior KG <span className="text-gray-400">(Ages 4–5)</span></FooterLink></li>
                <li><FooterLink to="/programs/senior-kg">Senior KG <span className="text-gray-400">(Ages 5–6)</span></FooterLink></li>
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

            {/* Col 5 – Contact Us */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-[#0047FF] flex-shrink-0" />
                  <a href="tel:+918866023444" className="text-gray-600 hover:text-[#0047FF] active:text-[#0047FF] transition-colors font-medium underline-offset-2 hover:underline">
                    +91 88660 23444
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-[#0047FF] flex-shrink-0" />
                  <a href="mailto:info@mothercaresurat.in" className="text-gray-600 hover:text-[#0047FF] active:text-[#0047FF] transition-colors underline-offset-2 hover:underline">
                    info@mothercaresurat.in
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin size={14} className="text-[#0047FF] flex-shrink-0 mt-0.5" />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0047FF] active:text-[#0047FF] transition-colors underline-offset-2 hover:underline">
                    108, Green Aristo Road, Canal Road, Jahangir Pura, Surat
                  </a>
                </li>
              </ul>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[10px] overflow-hidden hover:opacity-90 transition-opacity"
                aria-label="Get directions to Mother Care Pre-School"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Mother+Care+Pre-School+Surat&output=embed"
                  width="100%" height="130" loading="lazy"
                  title="Mother Care Pre-School location map"
                  style={{ borderRadius: "10px", border: "1px solid #e2e8f0", display: "block", pointerEvents: "none" }}
                />
              </a>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-10 bg-[#0047FF] rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Ready to Join Our Family?</h3>
            <p className="text-blue-100 mb-4">Schedule a tour and see our school in action!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/admissions#tour"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all"
              >
                <CalendarDays size={16} style={{ pointerEvents: "none" }} />
                Book a School Tour
              </Link>
              <Link to="/admissions" className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all">
                Apply for Admission
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 border-t border-gray-200 pt-5 text-center">
            <p className="text-gray-500 text-sm">
              Copyright 2026 Mother Care Pre-School. All rights reserved. Trusted by families in Surat for over 15 years | 2000+ Happy Students
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
