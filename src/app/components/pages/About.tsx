import { useState, useRef, useEffect } from "react";
import { Award, Users, Heart, Target, Shield, GraduationCap, BookOpen, Sparkles, Quote, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";

const teamImage = "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";

// Placeholder founder photo — replace src with actual photo when available
const founderImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByaW5jaXBhbCUyMHNjaG9vbHxlbnwxfHx8fDE3NzM1MDM3MDd8MA&ixlib=rb-4.1.0&q=80&w=400";

const storyStats = [
  { value: "15+",    label: "Years of Excellence",  sublabel: "Trusted Since 2011" },
  { value: "2,000+", label: "Happy Graduates",       sublabel: "Families Who Trust Us" },
  { value: "Holistic", label: "Development Approach", sublabel: "Mind, Body & Soul" },
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

function GoldenStatCard({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel: string;
}) {
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
        boxShadow: hovered
          ? "0 0 20px rgba(212,175,55,0.50), 0 4px 16px rgba(0,0,0,0.08)"
          : "0 0 15px rgba(212,175,55,0.30), 0 2px 6px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
      {/* School logo as icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 flex-shrink-0 border-2 border-[#D4AF37] bg-white"
        style={{ boxShadow: "0 0 8px rgba(212,175,55,0.35)" }}
      >
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

export function About() {
  const values = [
    { icon: Heart,     title: "Nurturing Care",   description: "We provide a warm, loving environment where every child feels valued and secure." },
    { icon: Sparkles,  title: "Joyful Learning",  description: "Learning through play and exploration makes education fun and memorable." },
    { icon: Shield,    title: "Safety First",     description: "Our certified safe environment ensures peace of mind for parents." },
    { icon: Users,     title: "Community",        description: "We build strong relationships between children, parents, and teachers." },
  ];

  return (
    <div>
      {/* Hero Section */}
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
            {/* Left: Story copy */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logo}
                  alt="Mother Care Pre-School Logo"
                  className="h-16 w-16 rounded-full object-contain flex-shrink-0 shadow-md"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Story: Shapers of Young Minds Since 2011
                  </h2>
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
                for shaping a child's future.
              </p>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src={teamImage}
                alt="Our caring teachers at Mother Care Pre-School Surat"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* ── Founder Section ─────────────────────────────── */}
          <div className="mt-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl border border-[#D4AF37]/40 p-8 md:p-12"
            style={{ boxShadow: "0 0 24px rgba(212,175,55,0.15)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {/* Founder Photo */}
              <div className="md:col-span-2 flex flex-col items-center gap-4">
                <div
                  className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    border: "3px solid #D4AF37",
                    boxShadow: "0 0 0 6px rgba(212,175,55,0.18), 0 8px 32px rgba(212,175,55,0.25)",
                  }}
                >
                  <img
                    src={founderImage}
                    alt="Mrs. Pooja Shah, Founder & Principal of Mother Care Pre-School Surat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">Mrs. Pooja Shah</p>
                  <p className="text-sm text-[#B8860B] font-semibold">Founder &amp; Principal</p>
                </div>
              </div>

              {/* Founder Quote & Bio */}
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-start gap-3">
                  <Quote
                    size={36}
                    className="flex-shrink-0 mt-1"
                    style={{ color: "#D4AF37" }}
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    A Message from Our Founder
                  </h2>
                </div>
                <p
                  className="text-gray-700 leading-8 text-base md:text-lg"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  "With over two decades of passion for early education, I established Mother Care with a
                  simple mission: to treat every child with the same love, patience, and nurture as a mother.
                  Our school is not just a place of learning — it is a second home, a sanctuary where every
                  child's curiosity is celebrated and every milestone is cherished."
                </p>
                <p className="text-gray-600 leading-7 text-sm md:text-base">
                  Her vision has guided Mother Care Pre-School through{" "}
                  <strong>15 successful years</strong> of shaping young minds in Surat, creating a legacy
                  built on empathy, trust, and a deep belief that every child deserves the best possible start.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white border border-[#D4AF37] text-[#B8860B]"
                  style={{ boxShadow: "0 0 10px rgba(212,175,55,0.20)" }}
                >
                  <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain" />
                  Mother Care Pre-School, Surat · Est. 2011
                </div>
              </div>
            </div>
          </div>

          {/* ── Golden Stat Cards ────────────────────────────── */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {storyStats.map((s) => (
              <GoldenStatCard key={s.value} value={s.value} label={s.label} sublabel={s.sublabel} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="bg-blue-500 text-white p-4 rounded-2xl inline-block mb-6"><Target size={40} /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide a nurturing, stimulating, and safe environment where children can explore, learn,
                and grow through play-based activities and structured learning. We aim to foster a love for
                learning that lasts a lifetime while developing essential social, emotional, and cognitive skills.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="bg-yellow-500 text-white p-4 rounded-2xl inline-block mb-6"><Sparkles size={40} /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the leading early childhood education center in Surat, setting the
                standard for excellence in preschool education. We envision a future where every child who
                walks through our doors develops into a confident, curious, and compassionate individual
                ready for lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="text-[#0047FF]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Mother Care?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, title: "Expert Teachers",      description: "Our qualified and experienced teachers are passionate about early childhood education." },
                { icon: Shield,        title: "Safe Environment",     description: "Certified safe facilities with CCTV monitoring and strict safety protocols." },
                { icon: BookOpen,      title: "Holistic Curriculum",  description: "Age-appropriate programs that develop cognitive, social, and emotional skills." },
                { icon: Heart,         title: "Individual Attention", description: "Small class sizes ensure each child receives personalized care and attention." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="bg-blue-50 p-3 rounded-xl h-fit">
                    <item.icon className="text-[#0047FF]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Mother Care Difference</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our facilities and meet our dedicated staff
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
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
