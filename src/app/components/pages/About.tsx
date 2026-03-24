import { useState, useRef, useEffect } from "react";
import {
  Heart, Target, Shield, GraduationCap, BookOpen, Quote,
  CalendarDays, Users, Compass, BookMarked
} from "lucide-react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import founderImg from "../../../assets/founder.jpg";

const teamImage = "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const storyStats = [
  { value: "15+",      label: "Years of Excellence",   sublabel: "Trusted Since 2011" },
  { value: "2,000+",  label: "Happy Graduates",        sublabel: "Families Who Trust Us" },
  { value: "Holistic", label: "Development Approach",  sublabel: "Mind, Body & Soul" },
];

const coreValues = [
  {
    icon: Heart,
    title: "Nurturing Care",
    description: "We create a warm and supportive environment where every child feels safe, valued, and encouraged to grow.",
    accent: "#FF6B8A",
    bg: "from-rose-50 to-pink-50",
    ring: "border-rose-100",
  },
  {
    icon: BookMarked,
    title: "Joyful Learning",
    description: "We make learning engaging and meaningful through play, creativity, and hands-on discovery.",
    accent: "#0047FF",
    bg: "from-blue-50 to-indigo-50",
    ring: "border-blue-100",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We maintain a secure and caring space that gives families confidence and children the freedom to thrive.",
    accent: "#00A878",
    bg: "from-emerald-50 to-teal-50",
    ring: "border-emerald-100",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster strong partnerships among children, parents, and teachers to build a connected and caring community.",
    accent: "#F59E0B",
    bg: "from-amber-50 to-yellow-50",
    ring: "border-amber-100",
  },
];

const whyUs = [
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    description: "Our caring and experienced educators create meaningful learning experiences for every stage of early childhood.",
    accent: "#0047FF",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "We maintain a secure, well-supervised space where children can learn, explore, and thrive with confidence.",
    accent: "#00A878",
    bg: "bg-emerald-50",
  },
  {
    icon: BookOpen,
    title: "Holistic Curriculum",
    description: "Our balanced curriculum supports cognitive, social, emotional, and creative development through age-appropriate activities.",
    accent: "#7C3AED",
    bg: "bg-violet-50",
  },
  {
    icon: Heart,
    title: "Individual Attention",
    description: "With a thoughtful approach and supportive classrooms, each child receives the care and guidance they need to grow.",
    accent: "#FF6B8A",
    bg: "bg-rose-50",
  },
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

function GoldenStatCard({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const isNum = !isNaN(numeric) && value !== "Holistic";
  const { count, ref } = useCountUp(isNum ? numeric : 0, 1800);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center px-5 py-6 rounded-xl border-2 border-[#D4AF37] bg-gradient-to-b from-white to-[#FFFBEF] transition-all duration-300"
      style={{
        boxShadow: hovered ? "0 0 20px rgba(212,175,55,0.50), 0 4px 16px rgba(0,0,0,0.08)" : "0 0 15px rgba(212,175,55,0.30), 0 2px 6px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 flex-shrink-0 border-2 border-[#D4AF37] bg-white" style={{ boxShadow: "0 0 8px rgba(212,175,55,0.35)" }}>
        <img src={logo} alt="Mother Care Pre-School" className="w-8 h-8 object-contain rounded-full" />
      </div>
      <div className="text-2xl font-extrabold text-gray-900 leading-tight">
        {isNum ? `${count.toLocaleString()}${suffix}` : value}
      </div>
      <div className="text-sm font-bold text-[#B8860B] mt-0.5">{label}</div>
      <div className="text-xs text-gray-500 mt-0.5">{sublabel}</div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description, accent, bg, ring }: {
  icon: any; title: string; description: string; accent: string; bg: string; ring: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col items-center text-center rounded-2xl border ${ring} bg-gradient-to-br ${bg} p-7 transition-all duration-300`}
      style={{
        boxShadow: hovered
          ? `0 8px 32px rgba(0,0,0,0.10), 0 0 0 2px ${accent}33`
          : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5 flex-shrink-0 bg-white shadow-md"
        style={{ border: `2px solid ${accent}33` }}
      >
        <Icon size={28} style={{ color: accent, pointerEvents: "none" }} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-b-2xl transition-all duration-300"
        style={{ width: hovered ? "60%" : "30%", backgroundColor: accent, opacity: 0.7 }}
      />
    </div>
  );
}

function WhyUsCard({ icon: Icon, title, description, accent, bg }: {
  icon: any; title: string; description: string; accent: string; bg: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-300"
      style={{
        boxShadow: hovered
          ? `0 8px 28px rgba(0,0,0,0.10), 0 0 0 2px ${accent}22`
          : "0 2px 8px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div
        className={`${bg} rounded-xl p-3 h-fit flex-shrink-0`}
        style={{ border: `1.5px solid ${accent}22` }}
      >
        <Icon size={26} style={{ color: accent, pointerEvents: "none" }} />
      </div>
      <div>
        <h3 className="font-bold text-base text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Mother Care Pre-School</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              For over 15 years, we have been nurturing young minds and building bright futures in Surat. Our
              mission is to provide quality early childhood education in a safe, loving, and stimulating environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="Mother Care Pre-School Logo" className="h-16 w-16 rounded-full object-contain flex-shrink-0 shadow-md" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story: Shapers of Young Minds Since 2011</h2>
                  <p className="text-sm text-[#0047FF] font-semibold mt-0.5">15+ Years of Nurturing Bright Futures in Surat</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                Mother Care Pre-School was established not just to educate, but to inspire. Our journey began
                with a single vision: to create a nurturing sanctuary in Surat where children could discover
                their unique potential through joyful, stimulating play.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, our 15-year legacy stands as a testament to our commitment, a legacy built on trust,
                empathy, and the unwavering belief that early childhood education is the most critical period
                for shaping a child&apos;s future.
              </p>
            </div>
            <div>
              <img src={teamImage} alt="Our caring teachers at Mother Care Pre-School Surat" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
          </div>

          {/* Founder section */}
          <div className="mt-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl border border-[#D4AF37]/40 p-8 md:p-12" style={{ boxShadow: "0 0 24px rgba(212,175,55,0.15)" }}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex flex-col items-center gap-4">
                <div
                  className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    border: "3px solid #D4AF37",
                    boxShadow: "0 0 0 6px rgba(212,175,55,0.18), 0 8px 32px rgba(212,175,55,0.25)",
                  }}
                >
                  <img
                    src={founderImg}
                    alt="Mrs. Pooja Shah, Founder & Principal of Mother Care Pre-School Surat"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">Mrs. Pooja Shah</p>
                  <p className="text-sm text-[#B8860B] font-semibold">Founder &amp; Principal</p>
                </div>
              </div>
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-start gap-3">
                  <Quote size={36} className="flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">A Message from Our Founder</h2>
                </div>
                <p className="text-gray-700 leading-8 text-base md:text-lg" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  &ldquo;With over two decades of passion for early education, I established Mother Care with a
                  simple mission: to treat every child with the same love, patience, and nurture as a mother.
                  Our school is not just a place of learning. It is a second home, a sanctuary where every
                  child&apos;s curiosity is celebrated and every milestone is cherished.&rdquo;
                </p>
                <p className="text-gray-600 leading-7 text-sm md:text-base">
                  Her vision has guided Mother Care Pre-School through{" "}
                  <strong>15 successful years</strong> of shaping young minds in Surat, creating a legacy
                  built on empathy, trust, and a deep belief that every child deserves the best possible start.
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white border border-[#D4AF37] text-[#B8860B]"
                  style={{ boxShadow: "0 0 10px rgba(212,175,55,0.20)" }}
                >
                  <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain" />
                  Mother Care Pre-School, Surat &middot; Est. 2011
                </div>
              </div>
            </div>
          </div>

          {/* Golden Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {storyStats.map((s) => (
              <GoldenStatCard key={s.value} value={s.value} label={s.label} sublabel={s.sublabel} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#0047FF] uppercase tracking-widest mb-2">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-3xl border border-blue-100 p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-500/8 pointer-events-none" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500 text-white mb-6 shadow-lg">
                <Target size={28} style={{ pointerEvents: "none" }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We provide a safe, nurturing, and inspiring environment where children learn through play,
                exploration, and guided activities. Our mission is to support every child&apos;s early development
                by building confidence, curiosity, creativity, and strong social skills.
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-blue-500 group-hover:w-24 transition-all duration-500" />
            </div>
            <div className="group relative bg-white rounded-3xl border border-amber-100 p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-400/8 pointer-events-none" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400 text-white mb-6 shadow-lg">
                <Compass size={28} style={{ pointerEvents: "none" }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our vision is to be a trusted early learning center that helps children grow into confident,
                kind, and curious individuals. We aim to create a joyful foundation for lifelong learning in
                a caring and supportive community.
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-amber-400 group-hover:w-24 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#0047FF] uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">The principles that shape every experience at Mother Care</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((v) => (
              <ValueCard key={v.title} icon={v.icon} title={v.title} description={v.description} accent={v.accent} bg={v.bg} ring={v.ring} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#0047FF] uppercase tracking-widest mb-2">Our Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Mother Care?</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">What makes us the trusted choice for families across Surat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <WhyUsCard key={item.title} icon={item.icon} title={item.title} description={item.description} accent={item.accent} bg={item.bg} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Mother Care Difference</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Schedule a tour to see our facilities and meet our dedicated staff</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions#tour" className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl">
              <CalendarDays size={18} style={{ pointerEvents: "none" }} />
              Book a School Tour
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
