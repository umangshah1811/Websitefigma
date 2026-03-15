import { Link } from "react-router";
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
} from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const kidsPlaying = "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const teacherReading = "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const artClass = "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const playground = "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080";
const circleTime = "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Home() {
  const trustStats = [
    { icon: Award, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "2000+", label: "Students Educated" },
    { icon: Shield, value: "100%", label: "Safe Environment" },
    { icon: GraduationCap, value: "Expert", label: "Experienced Teachers" },
  ];

  const programs = [
    {
      id: "playgroup",
      title: "Playgroup",
      age: "1.5 - 2.5 years",
      description: "Introduction to social learning through play-based activities",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "2.5 - 3.5 years",
      description: "Building foundational skills through interactive learning",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      id: "junior-kg",
      title: "Junior KG",
      age: "3.5 - 4.5 years",
      description: "Developing cognitive and motor skills with structured curriculum",
      icon: Palette,
      color: "bg-green-500",
    },
    {
      id: "senior-kg",
      title: "Senior KG",
      age: "4.5 - 5.5 years",
      description: "Preparing for primary school with advanced learning concepts",
      icon: Star,
      color: "bg-yellow-500",
    },
  ];

  const dailySchedule = [
    { time: "8:00 AM - 9:00 AM", activity: "Arrival & Free Play", icon: Sun },
    { time: "9:00 AM - 10:00 AM", activity: "Circle Time & Learning", icon: Brain },
    { time: "10:00 AM - 11:00 AM", activity: "Creative Activities", icon: Palette },
    { time: "11:00 AM - 12:00 PM", activity: "Outdoor Play", icon: HomeIcon },
    { time: "12:00 PM - 1:00 PM", activity: "Lunch & Rest", icon: Utensils },
    { time: "1:00 PM - 2:00 PM", activity: "Story Time & Music", icon: Music },
  ];

  const testimonials = [
    {
      name: "Priya Patel",
      role: "Parent of Aarav (Senior KG)",
      text: "Mother Care has been wonderful for our son. The teachers are caring and the curriculum is excellent. He's learned so much!",
      rating: 5,
    },
    {
      name: "Rajesh Shah",
      role: "Parent of Diya (Nursery)",
      text: "We're so happy we chose Mother Care. The safe environment and nurturing approach have helped our daughter blossom.",
      rating: 5,
    },
    {
      name: "Meera Desai",
      role: "Parent of Rohan (Junior KG)",
      text: "The best preschool in Surat! The staff is professional, and my child loves going to school every day.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ 15+ Years of Excellence in Early Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Nurturing Young Minds for a{" "}
                <span className="text-[#0047FF]">Bright Future</span>
              </h1>
              <p className="text-lg text-gray-700">
                At Mother Care Pre-School, we believe in learning through fun and exploration.
                Join our family of 2000+ happy students and give your child the best start in
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions#tour"
                  className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl text-center"
                >
                  📅 Book a School Tour
                </Link>
                <Link
                  to="/admissions"
                  className="bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Happy children at Mother Care Pre-School"
                className="rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-green-500 text-white p-3 rounded-full">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Safe & Secure</div>
                  <div className="text-sm text-gray-600">Certified Environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-[#0047FF]" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Age-appropriate curriculum designed to foster holistic development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-2"
              >
                <div className={`${program.color} text-white p-4 rounded-xl inline-block mb-4`}>
                  <program.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{program.age}</div>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <div className="flex items-center text-[#0047FF] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A Day at Our Preschool */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Day at Our Preschool
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured yet flexible daily routine designed for optimal learning and fun
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailySchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="bg-white p-3 rounded-full shadow">
                    <item.icon className="text-[#0047FF]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.activity}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Gallery */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Life Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing joyful moments and memorable experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[kidsPlaying, teacherReading, artClass, playground, circleTime, heroImage].map(
              (image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square"
                >
                  <img
                    src={image}
                    alt={`Student activity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )
            )}
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
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our wonderful parent community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mother Care Pre-School was founded over 15 years ago with a simple yet powerful
                vision: to create a nurturing environment where children can learn, grow, and
                discover their potential through fun and engaging activities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began with a commitment to provide quality early childhood education
                in Surat. Today, we're proud to have educated over 2000 students, many of whom
                are now excelling in their academic pursuits and making their mark in the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that every child is unique and deserves personalized attention. Our
                experienced teachers, safe facilities, and holistic curriculum ensure that your
                child receives the best possible start in their educational journey. At Mother
                Care, we don't just teach – we nurture, inspire, and empower young minds to
                think, create, and dream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our family of happy learners. Schedule a tour to see our facilities and meet
            our caring staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl"
            >
              📅 Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
