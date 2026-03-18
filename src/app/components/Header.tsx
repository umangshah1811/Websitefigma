import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, CalendarDays } from "lucide-react";
import logo from "../../assets/logo.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home",        path: "/" },
    { name: "About Us",    path: "/about" },
    { name: "Programs",    path: "/programs" },
    { name: "Admissions",  path: "/admissions" },
    { name: "Events",      path: "/events" },
    { name: "Gallery",     path: "/gallery" },
    { name: "Blog",        path: "/blog" },
    { name: "Contact",     path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Brand — always visible on all screen sizes */}
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src={logo}
              alt="Mother Care Pre-School"
              className="h-12 w-12 rounded-full object-contain flex-shrink-0"
            />
            <div className="block min-w-0">
              <div className="font-bold text-sm sm:text-lg leading-tight text-[#0047FF] truncate">
                Mother Care Pre-School
              </div>
              {/* Tagline: always visible on all screen sizes */}
              <div className="text-xs text-gray-600 italic">
                Learn With Fun-To-Turn
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-[#0047FF] transition-colors ${
                  isActive(link.path) ? "text-[#0047FF]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/parent-portal"
              className="text-sm font-medium text-gray-700 hover:text-[#0047FF] transition-colors"
            >
              Parent Portal
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/admissions#tour"
              className="inline-flex items-center gap-2 bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-md hover:shadow-lg"
            >
              <CalendarDays size={16} style={{ pointerEvents: "none" }} />
              Book a School Tour
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#0047FF] flex-shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-[#0047FF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/parent-portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Parent Portal
              </Link>
              <Link
                to="/admissions#tour"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold text-center mt-2"
              >
                <CalendarDays size={16} style={{ pointerEvents: "none" }} />
                Book a School Tour
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
