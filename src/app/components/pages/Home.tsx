import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Shield,
  GraduationCap,
  BookOpen,
  Palette,
  Music,
  Heart,
  Star,
  Clock,
  Sun,
  Utensils,
  Brain,
  Home as HomeIcon,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const kidsPlaying = "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const teacherReading = "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const artClass = "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const playground = "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080";
const circleTime = "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

// ── Custom hook: count-up animation triggered by IntersectionObserver ──
function useCountUp(target: number, duration: number = 1500, suffix: string = "") {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref, suffix };
}

// ── Stat card with counter ──
function StatCard({ icon: Icon, rawValue, label }: { icon: any; rawValue: string; label: string }) {
  const numeric = parseInt(rawValue.replace(/\D/g, ""), 10);
  const suffix = rawValue.replace(/[0-9]/g, "");
  const isNumeric = !isNaN(numeric);
  const { count, ref } = useCountUp(isNumeric ? numeric : 0, 1600, suffix);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 mx-auto mb-3 text-[#0047FF]" />
      <div className="text-3xl font-bold text-gray-900 mb-1">
        {isNumeric ? `${count}${suffix}` : rawValue}
      </div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </div>
  );
}

// ── Slide-in animation hook ──
function useSlideIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export function Home() {
  const [openScheduleIndex, setOpenScheduleIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const storyLeft = useSlideIn();
  const storyRight = useSlideIn();

  const programs = [
    {
      id: "playgroup",
      title: "Playgroup",
      age: "1.5 - 2.5 years",
      description: "Introduction to social learning through play-based activities",
      icon: Heart,
      color: "bg-red-500",
      glowColor: "rgba(239,68,68,0.22)",
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "2.5 - 3.5 years",
      description: "Building foundational skills through interactive learning",
      icon: BookOpen,
      color: "bg-blue-500",
      glowColor: "rgba(59,130,246,0.22)",
    },
    {
      id: "junior-kg",
      title: "Junior KG",
      age: "3.5 - 4.5 years",
      description: "Developing cognitive and motor skills with structured curriculum",
      icon: Palette,
      color: "bg-green-500",
      glowColor: "rgba(34,197,94,0.22)",
    },
    {
      id: "senior-kg",
      title: "Senior KG",
      age: "4.5 - 5.5 years",
      description: "Preparing for primary school with advanced learning concepts",
      icon: Star,
      color: "bg-yellow-500",
      glowColor: "rgba(234,179,8,0.22)",
    },
  ];

  const dailySchedule = [
    {
      time: "8:00 AM – 9:00 AM",
      activity: "Arrival & Free Play",
      icon: Sun,
      watermark: "☀",
      details: ["Greeting circle", "Free-choice play stations", "Social warm-up activities"],
    },
    {
      time: "9:00 AM – 10:00 AM",
      activity: "Circle Time & Learning",
      icon: Brain,
      watermark: "📚",
      details: ["Alphabet & number recognition", "Show-and-tell sessions", "Interactive story reading"],
    },
    {
      time: "10:00 AM – 11:00 AM",
      activity: "Creative Activities",
      icon: Palette,
      watermark: "🎨",
      details: ["Finger painting", "Building blocks & clay modeling", "Craft projects"],
    },
    {
      time: "11:00 AM – 12:00 PM",
      activity: "Outdoor Play",
      icon: HomeIcon,
      watermark: "🌳",
      details: ["Playground exploration", "Group sports & games", "Nature observation walks"],
    },
    {
      time: "12:00 PM – 1:00 PM",
      activity: "Snack & Rest Time",
      icon: Utensils,
      watermark: "🍎",
      details: ["Nutritious snack break", "Quiet rest / nap time", "Breathing & relaxation exercises"],
    },
    {
      time: "1:00 PM – 2:00 PM",
      activity: "Story Time & Music",
      icon: Music,
      watermark: "🎵",
      details: ["Rhymes & sing-alongs", "Guided storytelling", "Music & movement activities"],
    },
  ];

  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Parent · Nursery",
      text: "The nursery curriculum at Mother Care helped my daughter build confidence and social skills from day one. Best Pre-School in Surat for early childhood education!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Parent · Playgroup",
      text: "Enrolling our son in the Playgroup program was the best decision. The teachers are nurturing, and the holistic development approach is evident every day.",
      rating: 5,
    },
    {
      name: "Sneha Shah",
      role: "Parent · Junior KG",
      text: "Mother Care Pre-School in Jahangir Pura offers a safe, loving environment. The Jr. KG curriculum prepared my child beautifully for primary school.",
      rating: 5,
    },
  ];

  const galleryImages = [
    { src: kidsPlaying, caption: "Learning Through Play" },
    { src: teacherReading, caption: "Morning Reading Session" },
    { src: artClass, caption: "Art & Expression" },
    { src: playground, caption: "Outdoor Adventures" },
    { src: circleTime, caption: "Circle Time Fun" },
    { src: heroImage, caption: "Happy Classrooms" },
  ];

  const trustStats = [
    { icon: Award, rawValue: "15+", label: "Years of Excellence" },
    { icon: Users, rawValue: "2000+", label: "Students Educated" },
    { icon: Shield, rawValue: "100%", label: "Safe Environment" },
    { icon: GraduationCap, rawValue: "Expert", label: "Experienced Teachers" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Task 2 – star badge with white pill around star */}
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="bg-white text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center shadow-sm text-xs">⭐</span>
                15+ Years of Excellence in Early Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Nurturing Young Minds for a{" "}
                <span className="text-[#0047FF]">Bright Future</span>
              </h1>
              <p className="text-lg text-gray-700">
                At Mother Care Pre-School, we believe in learning through fun and exploration.
                Join our family of 2000+ happy students and give your child the best start in life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions#tour" className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl text-center">
                  📅 Book a School Tour
                </Link>
                <Link to="/admissions" className="bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center">
                  Apply for Admission
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={heroImage} alt="Happy children at Mother Care Pre-School" className="rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-green-500 text-white p-3 rounded-full"><Shield size={24} /></div>
                <div>
                  <div className="font-bold text-gray-900">Safe & Secure</div>
                  <div className="text-sm text-gray-600">Certified Environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task 3 – Counter Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} rawValue={stat.rawValue} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Task 4 & 5 – Programs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            {/* Task 4 – more visible subheading */}
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Age-appropriate curriculum designed to foster holistic development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className="group bg-white rounded-2xl shadow-md transition-all duration-300 p-6 hover:-translate-y-2"
                style={{}}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${program.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div className={`${program.color} text-white p-4 rounded-xl inline-block mb-4`}>
                  <program.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{program.age}</div>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <div className="flex items-center text-[#0047FF] font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Task 6 & 7 – A Day at Our Pre-School */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Task 6 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Day At Our Pre-School</h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Structured yet flexible daily routine designed for optimal learning and fun
            </p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            {/* Task 7 – vertical connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-6">
              {dailySchedule.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openScheduleIndex === index;
                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon centered on the line (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 bg-white border-2 border-slate-200 rounded-full p-2 shadow">
                      <item.icon className="text-[#0047FF]" size={22} />
                    </div>
                    {/* Mobile icon */}
                    <div className="md:hidden bg-white border-2 border-slate-200 rounded-full p-2 shadow flex-shrink-0">
                      <item.icon className="text-[#0047FF]" size={22} />
                    </div>
                    {/* Content card – takes ~45% width on desktop */}
                    <button
                      onClick={() => setOpenScheduleIndex(isOpen ? null : index)}
                      className={`relative flex-1 md:w-[45%] md:flex-none text-left bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-shadow overflow-hidden ${
                        isLeft ? "md:mr-[55%]" : "md:ml-[55%]"
                      }`}
                    >
                      {/* Watermark */}
                      <span className="absolute right-3 bottom-2 text-4xl opacity-10 select-none pointer-events-none">
                        {item.watermark}
                      </span>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{item.activity}</div>
                          <div className="text-sm text-slate-600">{item.time}</div>
                        </div>
                        {isOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                      </div>
                      {/* Accordion content */}
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? "200px" : "0px" }}
                      >
                        <ul className="mt-3 space-y-1 border-t border-slate-200 pt-3">
                          {item.details.map((d, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Task 8 – Gallery with lightbox + hover captions */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Life Gallery</h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Capturing joyful moments and memorable experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square group"
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                {/* Hover caption */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <span className="w-full text-center text-white text-sm font-medium py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#0047FF] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              View Full Gallery <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition">
              <X size={24} />
            </button>
            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
              className="absolute right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition"
            >
              <ArrowRight size={24} />
            </button>
            <div className="max-w-4xl w-full">
              <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].caption} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <p className="text-white text-center mt-4 text-lg font-medium">{galleryImages[lightboxIndex].caption}</p>
            </div>
          </div>
        )}
      </section>

      {/* Task 9 – Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose Mother Care Pre-School in Surat
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Real experiences from our wonderful parent community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/search/Mother+Care+Pre-School+Surat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#0047FF] text-[#0047FF] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-sm hover:shadow-md"
            >
              ⭐ Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Task 10 – Our Story two-column */}
      <section className="py-16 bg-amber-50/40">
        <div className="container mx-auto px-4">
          <div
            ref={storyLeft.ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-center transition-all duration-700 ${
              storyLeft.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Left col – 60% */}
            <div className="lg:col-span-3 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story: 15+ Years of Nurturing Bright Futures in Surat
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Founded with a vision to provide the <strong>Best Pre-School education in Surat</strong>,
                Mother Care Pre-School has been a trusted name in <strong>Early Childhood Education</strong>{" "}
                for over <strong>15 years</strong>. Our <strong>Nursery and Playgroup programs</strong> are
                designed around one core belief: every child deserves a joyful, safe, and stimulating start.
                Through our <strong>Holistic Development</strong> approach, we nurture cognitive, emotional,
                and social growth, preparing children not just for school, but for life.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["15+ Years", "2000+ Graduates", "98% Parent Satisfaction"].map((pill) => (
                  <span key={pill} className="bg-[#0047FF] text-white text-sm font-semibold px-4 py-2 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
            {/* Right col – 40% */}
            <div
              ref={storyRight.ref as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                storyRight.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-blue-50 rounded-2xl min-h-64 flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src={kidsPlaying}
                  alt="Mother Care Pre-School campus Surat"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Give Your Child the Best Start?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our family of happy learners. Schedule a tour to see our facilities and meet our caring staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions#tour" className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl">
              📅 Book a School Tour
            </Link>
            <Link to="/admissions" className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
