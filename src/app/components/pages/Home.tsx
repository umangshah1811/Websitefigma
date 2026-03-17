import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Shield,
  GraduationCap,
  BookOpen,
  Palette,
  Heart,
  Star,
  ChevronRight,
  X,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Trophy,
  GraduationCap as GradCap,
  Sparkles,
} from "lucide-react";
import logo from "../../../assets/logo.png";

const heroImage =
  "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const kidsPlaying =
  "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const teacherReading =
  "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const artClass =
  "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const playground =
  "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080";
const circleTime =
  "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const floatStyle = `
@keyframes floatUp {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-7px); }
}
.float-icon { animation: floatUp 3s ease-in-out infinite; }
`;

const storyStats = [
  { icon: Trophy,   value: "15+",    label: "Years of Excellence", sublabel: "Trusted Since 2009" },
  { icon: GradCap,  value: "2,000+", label: "Happy Graduates",     sublabel: "Families Who Trust Us" },
  { icon: Sparkles, value: "98%",    label: "Parent Satisfaction", sublabel: "Holistic Approach" },
];

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatCard({
  icon: Icon,
  rawValue,
  label,
}: {
  icon: any;
  rawValue: string;
  label: string;
}) {
  const numeric = parseInt(rawValue.replace(/\D/g, ""), 10);
  const suffix = rawValue.replace(/[0-9]/g, "");
  const isNum = !isNaN(numeric);
  const { count, ref } = useCountUp(isNum ? numeric : 0, 1600);
  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow"
    >
      <Icon className="w-12 h-12 mx-auto mb-3 text-[#0047FF]" />
      <div className="text-3xl font-bold text-gray-900 mb-1">
        {isNum ? `${count}${suffix}` : rawValue}
      </div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </div>
  );
}

function GoldenStatCard({
  icon: Icon,
  value,
  label,
  sublabel,
}: {
  icon: any;
  value: string;
  label: string;
  sublabel: string;
}) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const isNum = !isNaN(numeric) && value !== "98%";
  const { count, ref } = useCountUp(isNum ? numeric : 0, 1800);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center px-6 py-5 rounded-xl border-2 border-[#D4AF37] bg-gradient-to-b from-white to-[#FFFBEF] transition-all duration-300"
      style={{
        boxShadow: hovered
          ? "0 0 20px rgba(212,175,55,0.45), 0 4px 16px rgba(0,0,0,0.08)"
          : "0 0 8px rgba(212,175,55,0.18), 0 2px 6px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #D4AF37, #F5D97A)" }}
      >
        <Icon size={20} className="text-white" style={{ pointerEvents: "none" }} />
      </div>
      <div className="text-2xl font-extrabold text-gray-900 leading-tight">
        {value === "98%" ? value : isNum ? `${count.toLocaleString()}${suffix}` : value}
      </div>
      <div className="text-sm font-bold text-[#B8860B] mt-0.5">{label}</div>
      <div className="text-xs text-gray-500 mt-0.5">{sublabel}</div>
    </div>
  );
}

function useSlideIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const dailySchedule = [
  {
    time: "8:00 AM – 9:00 AM",
    activity: "Arrival & Free Play",
    leftEmoji: "🌅",
    bg: "from-orange-50 to-yellow-50",
    border: "border-orange-200",
    details: ["Greeting circle", "Free-choice play stations", "Social warm-up activities"],
  },
  {
    time: "9:00 AM – 10:00 AM",
    activity: "Circle Time & Learning",
    leftEmoji: "📖",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    details: ["Alphabet & number recognition", "Show-and-tell sessions", "Interactive story reading"],
  },
  {
    time: "10:00 AM – 11:00 AM",
    activity: "Creative Activities",
    leftEmoji: "🎨",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    details: ["Finger painting", "Building blocks & clay modeling", "Craft projects"],
  },
  {
    time: "11:00 AM – 12:00 PM",
    activity: "Outdoor Play",
    leftEmoji: "🌳",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    details: ["Playground exploration", "Group sports & games", "Nature observation walks"],
  },
  {
    time: "12:00 PM – 1:00 PM",
    activity: "Snack & Rest Time",
    leftEmoji: "🍎",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    details: ["Nutritious snack break", "Quiet rest / nap time", "Breathing & relaxation exercises"],
  },
  {
    time: "1:00 PM – 2:00 PM",
    activity: "Story Time & Music",
    leftEmoji: "🎵",
    bg: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    details: ["Rhymes & sing-alongs", "Guided storytelling", "Music & movement activities"],
  },
];

const galleryImages = [
  {
    src: kidsPlaying,
    alt: "Best Playgroup in Surat – Children learning through play at Mother Care Pre-School",
    caption: "Best Playgroup in Surat",
    ariaLabel: "Playgroup children playing at Mother Care Pre-School Surat",
  },
  {
    src: teacherReading,
    alt: "Nursery Classroom Activities Surat – Teacher reading with children at Mother Care Pre-School",
    caption: "Nursery Classroom Activities Surat",
    ariaLabel: "Nursery classroom reading at Mother Care Pre-School Surat",
  },
  {
    src: artClass,
    alt: "Mother Care Pre-School Student Life – Art and creative expression class in Surat",
    caption: "Mother Care Pre-School Student Life",
    ariaLabel: "Art class at Mother Care Pre-School Surat",
  },
  {
    src: playground,
    alt: "Holistic Early Childhood Education Gujarat – Outdoor play at Mother Care Pre-School Surat",
    caption: "Holistic Early Childhood Education Gujarat",
    ariaLabel: "Outdoor playground at Mother Care Pre-School Gujarat",
  },
  {
    src: circleTime,
    alt: "Mother Care Pre-School Student Life – Circle time group learning Surat",
    caption: "Circle Time – Group Learning",
    ariaLabel: "Circle time at Mother Care Pre-School Surat",
  },
  {
    src: heroImage,
    alt: "Best Playgroup in Surat – Happy preschool classroom at Mother Care Pre-School",
    caption: "Happy Classrooms – Mother Care Surat",
    ariaLabel: "Happy classroom at Mother Care Pre-School Surat",
  },
];

const reviewGlows = [
  "rgba(239,68,68,0.18)",
  "rgba(59,130,246,0.18)",
  "rgba(34,197,94,0.18)",
];

export function Home() {
  const [hoveredSchedule, setHoveredSchedule] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  const storyLeft = useSlideIn();
  const storyRight = useSlideIn();

  const lightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };
  const lightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

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
      glowColor: "rgba(234,179,8,0.30)",
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

  const trustStats = [
    { icon: Award,         rawValue: "15+",    label: "Years of Excellence" },
    { icon: Users,         rawValue: "2000+",  label: "Students Educated" },
    { icon: Shield,        rawValue: "100%",   label: "Safe Environment" },
    { icon: GraduationCap, rawValue: "Expert", label: "Experienced Teachers" },
  ];

  return (
    <div>
      <style>{floatStyle}</style>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="bg-white text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                  <Star size={14} fill="currentColor" style={{ pointerEvents: "none" }} />
                </span>
                15+ Years of Excellence in Early Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Nurturing Young Minds for a{" "}
                <span className="text-[#0047FF]">Bright Future</span>
              </h1>
              <p className="text-lg text-gray-700">
                At Mother Care Pre-School, we believe in learning through fun and exploration. Join our
                family of 2000+ happy students and give your child the best start in life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions#tour"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl"
                >
                  <CalendarDays size={18} style={{ pointerEvents: "none" }} />
                  Book a School Tour
                </Link>
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2 bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Happy children at Mother Care Pre-School Surat"
                className="rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-green-500 text-white p-3 rounded-full">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Safe &amp; Secure</div>
                  <div className="text-sm text-gray-600">Certified Environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((s, i) => (
              <StatCard key={i} icon={s.icon} rawValue={s.rawValue} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Age-appropriate curriculum designed to foster holistic development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Link
                key={p.id}
                to={`/programs/${p.id}`}
                className="group bg-white rounded-2xl shadow-md p-6 block"
                style={{
                  boxShadow:
                    hoveredProgram === p.id
                      ? `0 8px 32px 4px ${p.glowColor}, 0 2px 8px rgba(0,0,0,0.06)`
                      : "0 1px 3px rgba(0,0,0,0.1)",
                  transform: hoveredProgram === p.id ? "translateY(-8px)" : "translateY(0)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={() => setHoveredProgram(p.id)}
                onMouseLeave={() => setHoveredProgram(null)}
              >
                <div className={`${p.color} text-white p-4 rounded-xl inline-block mb-4`}>
                  <p.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{p.age}</div>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <div className="flex items-center text-[#0047FF] font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Day At Our Pre-School</h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Structured yet flexible daily routine designed for optimal learning and fun
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {dailySchedule.map((item, index) => {
              const isHovered = hoveredSchedule === index;
              return (
                <div
                  key={index}
                  className="flex items-stretch gap-4"
                  onMouseEnter={() => setHoveredSchedule(index)}
                  onMouseLeave={() => setHoveredSchedule(null)}
                >
                  <div className="flex flex-col items-center justify-start pt-4 w-14 flex-shrink-0">
                    <span className="text-4xl float-icon select-none" aria-hidden="true">{item.leftEmoji}</span>
                  </div>
                  <div
                    className={`flex-1 border-2 ${item.border} bg-gradient-to-r ${
                      item.bg
                    } rounded-2xl px-5 py-4 transition-all duration-300 ${
                      isHovered ? "shadow-lg" : "shadow-sm"
                    }`}
                  >
                    <div className="font-bold text-gray-900 text-base">{item.activity}</div>
                    <div className="text-sm text-slate-500 mt-0.5 mb-1">{item.time}</div>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isHovered ? "160px" : "0px", opacity: isHovered ? 1 : 0 }}
                    >
                      <ul className="mt-2 space-y-1 border-t border-white/60 pt-2">
                        {item.details.map((d, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
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
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={img.ariaLabel}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end">
                  <span className="w-full text-center text-white text-xs md:text-sm font-semibold py-3 px-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 leading-snug">
                    {img.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-white text-[#0047FF] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View Full Gallery <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center p-4"
            role="dialog"
            aria-label="Image lightbox"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition z-[9999]"
              style={{ pointerEvents: "all" }}
            >
              <X size={24} style={{ pointerEvents: "none" }} />
            </button>
            <button
              type="button"
              onClick={lightboxPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/40 transition z-[9999]"
              style={{ pointerEvents: "all" }}
            >
              <ArrowLeft size={24} style={{ pointerEvents: "none" }} />
            </button>
            <button
              type="button"
              onClick={lightboxNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/40 transition z-[9999]"
              style={{ pointerEvents: "all" }}
            >
              <ArrowRight size={24} style={{ pointerEvents: "none" }} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-gray-400 text-center text-sm mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Reviews */}
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
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md transition-all duration-300"
                style={{
                  boxShadow:
                    hoveredReview === i
                      ? `0 0 28px 6px ${reviewGlows[i]}, 0 4px 16px rgba(0,0,0,0.08)`
                      : undefined,
                }}
                onMouseEnter={() => setHoveredReview(i)}
                onMouseLeave={() => setHoveredReview(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0047FF] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <svg className="ml-auto w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google Review">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="fill-yellow-400 text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Mother+care+pre+school+surat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-[#0047FF] hover:text-[#0047FF] transition-all shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-amber-50/40">
        <div className="container mx-auto px-4">
          <div
            ref={storyLeft.ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-center transition-all duration-700 ${
              storyLeft.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Mother Care Pre-School Logo"
                    className="w-12 h-12 object-contain rounded-full flex-shrink-0 shadow-sm"
                  />
                  Our Story
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#0047FF]">
                  15+ Years of Nurturing Bright Futures in Surat
                </h3>
              </div>
              <p className="text-gray-700 leading-8 text-base">
                Founded with a vision to provide the{" "}
                <strong>Best Pre-School education in Surat</strong>, Mother Care Pre-School has been a
                trusted name in <strong>Early Childhood Education</strong> for over{" "}
                <strong>15 years</strong>.
              </p>
              <p className="text-gray-700 leading-8 text-base">
                Our <strong>Nursery and Playgroup programs</strong> are designed around one core belief:
                every child deserves a joyful, safe, and stimulating start. Through our{" "}
                <strong>Holistic Development</strong> approach, we nurture cognitive, emotional, and
                social growth, preparing children not just for school, but for life.
              </p>

              {/* Golden Award-Style Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {storyStats.map((s) => (
                  <GoldenStatCard
                    key={s.value}
                    icon={s.icon}
                    value={s.value}
                    label={s.label}
                    sublabel={s.sublabel}
                  />
                ))}
              </div>
            </div>
            <div
              ref={storyRight.ref as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                storyRight.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-blue-50 rounded-2xl min-h-64 flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src={kidsPlaying}
                  alt="Mother Care Pre-School campus Surat – Best Preschool in Gujarat"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our family of happy learners. Schedule a tour to see our facilities and meet our caring staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions#tour"
              className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl"
            >
              <CalendarDays size={18} style={{ pointerEvents: "none" }} />
              Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
