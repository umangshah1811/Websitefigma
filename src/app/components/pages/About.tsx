import { Award, Users, Heart, Target, Shield, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router";

const teamImage = "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const classroomImage = "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "We provide a warm, loving environment where every child feels valued and secure.",
    },
    {
      icon: Sparkles,
      title: "Joyful Learning",
      description: "Learning through play and exploration makes education fun and memorable.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Our certified safe environment ensures peace of mind for parents.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong relationships between children, parents, and teachers.",
    },
  ];

  const achievements = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Happy Students", value: "2000+" },
    { label: "Experienced Teachers", value: "25+" },
    { label: "Success Rate", value: "100%" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Mother Care Pre-School
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              For over 15 years, we've been nurturing young minds and building bright futures in
              Surat. Our mission is to provide quality early childhood education in a safe,
              loving, and stimulating environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Mother Care Pre-School was established with a vision to create an educational
                institution that prioritizes the holistic development of children. We believe
                that early childhood is a critical period that shapes a child's future.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our founder recognized the need for a preschool that combines academic excellence
                with emotional nurturing. What started as a small center has grown into one of
                Surat's most trusted preschools, educating over 2000 children who have gone on to
                excel in their academic and personal lives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to uphold our founding principles while incorporating modern
                teaching methodologies and best practices in early childhood education.
              </p>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Our caring teachers"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="bg-blue-500 text-white p-4 rounded-2xl inline-block mb-6">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide a nurturing, stimulating, and safe environment where children can
                explore, learn, and grow through play-based activities and structured learning.
                We aim to foster a love for learning that lasts a lifetime while developing
                essential social, emotional, and cognitive skills.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="bg-yellow-500 text-white p-4 rounded-2xl inline-block mb-6">
                <Sparkles size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the leading early childhood education center in Surat,
                setting the standard for excellence in preschool education. We envision a future
                where every child who walks through our doors develops into a confident,
                curious, and compassionate individual ready for lifelong learning.
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
              >
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

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-[#0047FF] mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Mother Care?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Expert Teachers",
                  description:
                    "Our qualified and experienced teachers are passionate about early childhood education.",
                },
                {
                  icon: Shield,
                  title: "Safe Environment",
                  description:
                    "Certified safe facilities with CCTV monitoring and strict safety protocols.",
                },
                {
                  icon: BookOpen,
                  title: "Holistic Curriculum",
                  description:
                    "Age-appropriate programs that develop cognitive, social, and emotional skills.",
                },
                {
                  icon: Heart,
                  title: "Individual Attention",
                  description:
                    "Small class sizes ensure each child receives personalized care and attention.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-white p-3 rounded-xl shadow h-fit">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Mother Care Difference
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our facilities and meet our dedicated staff
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
