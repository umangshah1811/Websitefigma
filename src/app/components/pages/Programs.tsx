import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Heart, BookOpen, Palette, Star, ChevronRight, CalendarDays,
  Puzzle, GraduationCap, Users, Leaf, Shield, Handshake,
} from "lucide-react";

// ── Program data ────────────────────────────────────────────────────────────────────────────
const programs = [
  {
    id: "playgroup",
    title: "Playgroup",
    age: "2 - 3 years",
    description:
      "A gentle introduction to the school environment where little ones explore, play, and develop social skills through interactive activities.",
    icon: Heart,
    colorClass: "bg-red-500",
    glowColor: "#EF4444",
    highlights: [
      "Sensory play activities",
      "Music and movement",
      "Basic social interaction",
      "Parent-teacher collaboration",
    ],
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "3 - 4 years",
    description:
      "Building foundational skills through structured play, creative activities, and early learning concepts in a nurturing environment.",
    icon: BookOpen,
    colorClass: "bg-blue-500",
    glowColor: "#3B82F6",
    highlights: [
      "Language development",
      "Number recognition",
      "Creative arts & crafts",
      "Outdoor play & motor skills",
    ],
  },
  {
    id: "junior-kg",
    title: "Junior KG",
    age: "4 - 5 years",
    description:
      "Developing cognitive abilities, fine motor skills, and pre-reading skills through engaging activities and structured curriculum.",
    icon: Palette,
    colorClass: "bg-green-500",
    glowColor: "#22C55E",
    highlights: [
      "Pre-reading & writing skills",
      "Basic mathematics concepts",
      "Science exploration",
      "Social & emotional development",
    ],
  },
  {
    id: "senior-kg",
    title: "Senior KG",
    age: "5 - 6 years",
    description:
      "Preparing children for primary school with advanced learning concepts, problem-solving skills, and independence.",
    icon: Star,
    colorClass: "bg-yellow-500",
    glowColor: "#EAB308",
    highlights: [
      "Reading & writing proficiency",
      "Advanced mathematics",
      "Critical thinking skills",
      "School readiness preparation",
    ],
  },
];

// ── Feature data (What Makes Our Programs Special) ────────────────────────────────────────────────
const features = [
  {
    icon: Puzzle,
    title: "Play-Based Learning",
    description: "Children learn best through play. Our curriculum integrates fun activities with educational objectives.",
    accent: "#3B82F6",
    iconBg: "bg-blue-50",
  },
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description: "Our qualified educators are trained in early childhood development and passionate about teaching.",
    accent: "#8B5CF6",
    iconBg: "bg-violet-50",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "We maintain low student-teacher ratios to ensure personalized attention for each child.",
    accent: "#EF4444",
    iconBg: "bg-red-50",
  },
  {
    icon: Leaf,
    title: "Holistic Development",
    description: "We focus on cognitive, physical, social, and emotional development for well-rounded growth.",
    accent: "#22C55E",
    iconBg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Child-safe facilities with CCTV monitoring and strict safety protocols give parents peace of mind.",
    accent: "#0047FF",
    iconBg: "bg-blue-50",
  },
  {
    icon: Handshake,
    title: "Parent Partnership",
    description: "Regular communication and involvement keep parents informed about their child's progress.",
    accent: "#F59E0B",
    iconBg: "bg-amber-50",
  },
];

function useScrollHighlight(threshold = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) setInView(entry.isIntersecting);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function ProgramCard({
  id, title, age, description, icon: Icon, colorClass, glowColor, highlights,
}: (typeof programs)[0]) {
  const { ref, inView } = useScrollHighlight(0.6);
  const [hovered, setHovered] = useState(false);
  const active = hovered || inView;

  const boxShadow = active
    ? `0 0 0 3px ${glowColor}, 0 20px 40px ${glowColor}4D`
    : "0 4px 16px rgba(0,0,0,0.08)";

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden"
      style={{
        boxShadow,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: active ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div className="p-8">
        <div className={`${colorClass} text-white p-4 rounded-2xl inline-block mb-4`}>
          <Icon size={40} style={{ pointerEvents: "none" }} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="text-lg text-gray-600 mb-4">{age}</div>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Program Highlights:</h3>
          <ul className="space-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: glowColor }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={`/programs/${id}`}
          className="inline-flex items-center gap-2 bg-[#0047FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          Learn More <ChevronRight size={20} style={{ pointerEvents: "none" }} />
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon, title, description, accent, iconBg,
}: (typeof features)[0]) {
  const { ref, inView } = useScrollHighlight(0.6);
  const [hovered, setHovered] = useState(false);
  const active = hovered || inView;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden"
      style={{
        borderLeft: `4px solid ${active ? accent : accent + "55"}`,
        boxShadow: active
          ? `0 8px 28px rgba(0,0,0,0.11), 0 0 0 1px ${accent}22`
          : "0 2px 10px rgba(0,0,0,0.07)",
        transform: active ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
        style={{ border: `1.5px solid ${accent}33` }}
      >
        <Icon size={22} style={{ color: accent, pointerEvents: "none" }} />
      </div>
      <div>
        <h3 className="font-bold text-base text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div
        className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full pointer-events-none"
        style={{ backgroundColor: accent + "0D" }}
      />
    </div>
  );
}

export function Programs() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Age-appropriate programs designed to nurture your child's growth and development at every stage
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((p) => (
              <ProgramCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Programs Special */}
      <section className="py-20 bg-gradient-to-br from-amber-50/60 via-white to-blue-50/60">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#0047FF] uppercase tracking-widest mb-2">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                What Makes Our Programs Special
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Everything we do is designed with your child's best growth in mind.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-1 w-10 rounded-full bg-[#FFCC00]" />
                <div className="h-1 w-24 rounded-full bg-[#0047FF]" />
                <div className="h-1 w-10 rounded-full bg-[#FFCC00]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enroll Your Child?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Visit us to learn more about our programs and see our facilities</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions#tour"
              className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              <CalendarDays size={18} style={{ pointerEvents: "none" }} />
              Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
