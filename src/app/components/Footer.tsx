import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Mother Care Pre-School" className="h-12 w-12" />
              <div>
                <div className="font-bold text-lg">Mother Care Pre-School</div>
                <div className="text-xs text-blue-200 italic">Learn With Fun To Turn</div>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Nurturing young minds for a bright future. Over 15 years of excellence in early
              childhood education in Surat, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-blue-100 hover:text-white text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-blue-100 hover:text-white text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-100 hover:text-white text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/playgroup" className="text-blue-100 hover:text-white text-sm">
                  Playgroup
                </Link>
              </li>
              <li>
                <Link to="/programs/nursery" className="text-blue-100 hover:text-white text-sm">
                  Nursery
                </Link>
              </li>
              <li>
                <Link to="/programs/junior-kg" className="text-blue-100 hover:text-white text-sm">
                  Junior KG
                </Link>
              </li>
              <li>
                <Link to="/programs/senior-kg" className="text-blue-100 hover:text-white text-sm">
                  Senior KG
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-100 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2 text-blue-100 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-blue-100 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@mothercaresurat.in</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/Mothercaresurat/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to Join Our Family?</h3>
          <p className="text-blue-100 mb-4">Schedule a tour and see our school in action!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#FFD633] transition-all"
            >
              Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Mother Care Pre-School. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs mt-2">
            Trusted by families in Surat for over 15 years | 2000+ Happy Students
          </p>
        </div>
      </div>
    </footer>
  );
}
