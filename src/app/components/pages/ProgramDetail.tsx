import { useParams, Link } from "react-router";
import { Heart, BookOpen, Palette, Star, Clock, Users, Target, CheckCircle, ChevronLeft } from "lucide-react";

const programsData: Record<string, any> = {
  playgroup: {
    title: "Playgroup",
    age: "2 - 3 years",
    icon: Heart,
    color: "bg-red-500",
    description:
      "Our Playgroup program provides a gentle introduction to the school environment, focusing on sensory exploration, social interaction, and building trust.",
    image:
      "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    learningGoals: [
      "Develop basic social and communication skills",
      "Build confidence in a safe, nurturing environment",
      "Encourage sensory exploration and discovery",
      "Foster independence and self-help skills",
    ],
    activities: [
      "Sensory play with various textures and materials",
      "Music and movement sessions",
      "Story time and puppetry",
      "Art and craft activities",
      "Indoor and outdoor play",
      "Circle time and group activities",
    ],
    skillsDeveloped: [
      "Fine and gross motor skills",
      "Basic language and vocabulary",
      "Social interaction and sharing",
      "Following simple instructions",
      "Self-care and hygiene habits",
    ],
  },
  nursery: {
    title: "Nursery",
    age: "3 - 4 years",
    icon: BookOpen,
    color: "bg-blue-500",
    description:
      "The Nursery program builds on foundational skills with more structured learning, creative expression, and early literacy and numeracy concepts.",
    image:
      "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    learningGoals: [
      "Introduce early literacy and numeracy concepts",
      "Enhance language and communication skills",
      "Develop creativity through arts and crafts",
      "Build social skills and emotional awareness",
    ],
    activities: [
      "Language and phonics introduction",
      "Number recognition and counting games",
      "Creative arts, painting, and crafts",
      "Music, dance, and movement",
      "Science experiments and nature exploration",
      "Dramatic play and role-playing",
    ],
    skillsDeveloped: [
      "Letter and number recognition",
      "Improved vocabulary and expression",
      "Hand-eye coordination",
      "Problem-solving abilities",
      "Empathy and cooperation",
    ],
  },
  "junior-kg": {
    title: "Junior KG",
    age: "4 - 5 years",
    icon: Palette,
    color: "bg-green-500",
    description:
      "Junior KG focuses on developing pre-reading and pre-writing skills, mathematical concepts, and critical thinking through engaging, hands-on learning.",
    image:
      "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    learningGoals: [
      "Develop pre-reading and pre-writing skills",
      "Understand basic mathematical concepts",
      "Enhance scientific curiosity and exploration",
      "Foster creativity and self-expression",
    ],
    activities: [
      "Phonics and early reading practice",
      "Writing readiness and pencil control",
      "Mathematical concepts and patterns",
      "Science and nature activities",
      "Art, music, and creative expression",
      "Physical education and sports",
    ],
    skillsDeveloped: [
      "Reading and writing readiness",
      "Basic math skills (counting, shapes, patterns)",
      "Scientific thinking and observation",
      "Creativity and imagination",
      "Teamwork and collaboration",
    ],
  },
  "senior-kg": {
    title: "Senior KG",
    age: "5 - 6 years",
    icon: Star,
    color: "bg-yellow-500",
    description:
      "Senior KG prepares children for primary school with advanced learning, independent work habits, and strong foundational skills in all subject areas.",
    image:
      "https://images.unsplash.com/photo-1625999874116-dba9a603fa24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzczNTAzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    learningGoals: [
      "Achieve reading and writing proficiency",
      "Master foundational mathematics skills",
      "Develop critical thinking and problem-solving",
      "Build confidence and school readiness",
    ],
    activities: [
      "Reading comprehension and fluency",
      "Writing sentences and stories",
      "Advanced mathematics and logic",
      "Science projects and experiments",
      "Computer literacy introduction",
      "Leadership and presentation skills",
    ],
    skillsDeveloped: [
      "Reading and writing fluency",
      "Advanced mathematical reasoning",
      "Analytical and critical thinking",
      "Independence and responsibility",
      "Confidence and public speaking",
    ],
  },
};

export function ProgramDetail() {
  const { programId } = useParams();
  const program = programId ? programsData[programId] : null;

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program not found</h2>
          <Link to="/programs" className="text-[#0047FF] hover:underline">
            Return to Programs
          </Link>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-[#0047FF] hover:underline mb-6"
          >
            <ChevronLeft size={20} /> Back to Programs
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`${program.color} text-white p-4 rounded-2xl inline-block mb-4`}>
                <Icon size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h1>
              <div className="flex items-center gap-2 text-lg text-gray-700 mb-6">
                <Users size={20} />
                <span>Age Group: {program.age}</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{program.description}</p>
            </div>
            <div>
              <img
                src={program.image}
                alt={program.title}
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Target className="text-[#0047FF]" size={32} />
              Learning Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.learningGoals.map((goal: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Palette className="text-[#0047FF]" size={32} />
              Daily Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.activities.map((activity: string, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0047FF] rounded-full"></div>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="text-[#0047FF]" size={32} />
              Skills Developed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.skillsDeveloped.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                >
                  <div className="bg-[#0047FF] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{skill}</span>
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
            Enroll Your Child in {program.title}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Give your child the best start with our expert teachers and nurturing environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
