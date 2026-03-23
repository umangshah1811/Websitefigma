import { useState } from "react";
import { Link } from "react-router";
import {
  FileText, Calendar, IndianRupee, CheckCircle,
  User, Phone, Baby,
} from "lucide-react";

// ── Admission process steps ──────────────────────────────────────────────────
const admissionSteps = [
  {
    icon: FileText,
    title: "Fill Application",
    description: "Complete the online admission form with your child's details",
    stepBg: "bg-red-50",
    stepBorder: "border-red-200",
    numBg: "bg-red-500",
    iconColor: "text-red-500",
    shadowColor: "rgba(239,68,68,0.18)",
    glowColor: "#EF4444",
    emoji: "📝",
  },
  {
    icon: Calendar,
    title: "Schedule Tour",
    description: "Visit our campus and meet our teachers",
    stepBg: "bg-blue-50",
    stepBorder: "border-blue-200",
    numBg: "bg-blue-500",
    iconColor: "text-blue-500",
    shadowColor: "rgba(59,130,246,0.18)",
    glowColor: "#3B82F6",
    emoji: "🏫",
  },
  {
    icon: IndianRupee,
    title: "Pay Fees",
    description: "Complete the admission fee payment online",
    stepBg: "bg-green-50",
    stepBorder: "border-green-200",
    numBg: "bg-green-500",
    iconColor: "text-green-500",
    shadowColor: "rgba(34,197,94,0.18)",
    glowColor: "#22C55E",
    emoji: "💰",
  },
  {
    icon: CheckCircle,
    title: "Confirmation",
    description: "Receive confirmation and welcome kit",
    stepBg: "bg-yellow-50",
    stepBorder: "border-yellow-200",
    numBg: "bg-yellow-500",
    iconColor: "text-yellow-500",
    shadowColor: "rgba(234,179,8,0.18)",
    glowColor: "#EAB308",
    emoji: "🎉",
  },
];

export function Admissions() {
  const [tourFormData, setTourFormData] = useState({
    parentName: "", email: "", phone: "",
    childName: "", childAge: "", preferredDate: "", preferredTime: "",
  });

  const [admissionFormData, setAdmissionFormData] = useState({
    fatherName: "", fatherOccupation: "", fatherPhone: "",
    motherName: "", motherOccupation: "", motherPhone: "",
    email: "", address: "",
    childName: "", dateOfBirth: "", gender: "", program: "",
    previousSchool: "", medicalConditions: "",
    emergencyContact: "", emergencyPhone: "",
  });

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon to confirm your school tour.");
    setTourFormData({ parentName: "", email: "", phone: "", childName: "", childAge: "", preferredDate: "", preferredTime: "" });
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your admission application has been submitted successfully! We will contact you soon.");
  };

  return (
    <div>

      {/* ── Hero ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #667eea 0%, #f093fb 50%, #ffecd2 100%)" }}
      >
        {/* polka-dot overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/30 backdrop-blur-sm text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
              🎒 Enroll Today
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 drop-shadow">
              Admissions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Join the Mother Care family and give your child the best start in their educational journey
            </p>
          </div>
        </div>
      </section>

      {/* ── Admission Process ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#0047FF] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              🌟 Simple Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Admission Process
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">4 easy steps to get your child started</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-1 w-8 rounded-full bg-[#FFCC00]" />
              <div className="h-1 w-20 rounded-full bg-[#0047FF]" />
              <div className="h-1 w-8 rounded-full bg-[#FFCC00]" />
            </div>
          </div>

          {/* Steps row with connecting arrows */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
              {/* Desktop dotted connector line */}
              <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px z-0"
                style={{ borderTop: "2.5px dashed #CBD5E1" }}
              />
              {admissionSteps.map((step, index) => {
                const StepIcon = step.icon;
                const active = hoveredStep === index;
                return (
                  <div
                    key={index}
                    className="relative z-10 flex flex-col items-center px-3 pb-6"
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Card */}
                    <div
                      className={`w-full border-2 ${step.stepBorder} ${step.stepBg} rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300`}
                      style={{
                        boxShadow: active
                          ? `0 8px 32px ${step.shadowColor}, 0 0 0 2px ${step.glowColor}55`
                          : "0 2px 10px rgba(0,0,0,0.07)",
                        transform: active ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)",
                      }}
                    >
                      {/* Step number circle */}
                      <div className={`${step.numBg} text-white w-10 h-10 rounded-full flex items-center justify-center mb-3 font-bold text-lg shadow-md`}>
                        {index + 1}
                      </div>
                      {/* Icon */}
                      <StepIcon className={`${step.iconColor} mb-3`} size={44} />
                      {/* Emoji accent */}
                      <span className="text-2xl mb-2">{step.emoji}</span>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>

                    {/* Mobile arrow between cards */}
                    {index < admissionSteps.length - 1 && (
                      <div className="lg:hidden text-gray-300 text-3xl mt-2 mb-0 leading-none select-none">↓</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Book a Tour ── */}
      <section
        id="tour"
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 40%, #a1c4fd 100%)" }}
      >
        {/* star pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='8' y='28' font-size='18' fill='%23ffffff'%3E%E2%98%85%3C/text%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
              <div className="text-center mb-8">
                <span className="text-3xl">🏫</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">Book a School Tour</h2>
                <p className="text-gray-500">Visit our campus, meet our teachers, and see our facilities in action</p>
              </div>
              <form onSubmit={handleTourSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Parent/Guardian Name *</label>
                    <input type="text" required value={tourFormData.parentName}
                      onChange={(e) => setTourFormData({ ...tourFormData, parentName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input type="email" required value={tourFormData.email}
                      onChange={(e) => setTourFormData({ ...tourFormData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input type="tel" required value={tourFormData.phone}
                      onChange={(e) => setTourFormData({ ...tourFormData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Child's Name *</label>
                    <input type="text" required value={tourFormData.childName}
                      onChange={(e) => setTourFormData({ ...tourFormData, childName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Child's name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Child's Age *</label>
                    <input type="text" required value={tourFormData.childAge}
                      onChange={(e) => setTourFormData({ ...tourFormData, childAge: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="e.g., 2.5 years" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                    <input type="date" required value={tourFormData.preferredDate}
                      onChange={(e) => setTourFormData({ ...tourFormData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Time *</label>
                  <select required value={tourFormData.preferredTime}
                    onChange={(e) => setTourFormData({ ...tourFormData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent">
                    <option value="">Select a time slot</option>
                    <option>9:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>2:00 PM - 3:00 PM</option>
                    <option>3:00 PM - 4:00 PM</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg"
                  style={{ background: "linear-gradient(90deg,#FFCC00,#FFB300)" }}>
                  🗓️ Schedule Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admission Application ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff9c4 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <span className="text-3xl">🎒</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">Admission Application</h2>
                <p className="text-gray-500">Fill in the details to apply for admission</p>
              </div>
              <form onSubmit={handleAdmissionSubmit} className="space-y-8">

                {/* Parent Information */}
                <div className="bg-red-50 border-l-4 border-red-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User size={22} className="text-red-500" />
                    <span>👨‍👩‍👧 Parent / Guardian Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Father's Name *</label>
                      <input type="text" required value={admissionFormData.fatherName}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, fatherName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                      <input type="text" value={admissionFormData.fatherOccupation}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, fatherOccupation: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Father's Phone *</label>
                      <input type="tel" required value={admissionFormData.fatherPhone}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, fatherPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Mother's Name *</label>
                      <input type="text" required value={admissionFormData.motherName}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, motherName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                      <input type="text" value={admissionFormData.motherOccupation}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, motherOccupation: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Mother's Phone *</label>
                      <input type="tel" required value={admissionFormData.motherPhone}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, motherPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input type="email" required value={admissionFormData.email}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Residential Address *</label>
                      <textarea required rows={3} value={admissionFormData.address}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, address: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent"></textarea>
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Baby size={22} className="text-blue-500" />
                    <span>🎨 Child Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Child's Full Name *</label>
                      <input type="text" required value={admissionFormData.childName}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, childName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                      <input type="date" required value={admissionFormData.dateOfBirth}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, dateOfBirth: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                      <select required value={admissionFormData.gender}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, gender: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Program *</label>
                      <select required value={admissionFormData.program}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, program: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                        <option value="">Select program</option>
                        <option value="playgroup">Playgroup (2 - 3 years)</option>
                        <option value="nursery">Nursery (3 - 4 years)</option>
                        <option value="junior-kg">Junior KG (4 - 5 years)</option>
                        <option value="senior-kg">Senior KG (5 - 6 years)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Previous School (if any)</label>
                      <input type="text" value={admissionFormData.previousSchool}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, previousSchool: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Medical Conditions / Allergies (if any)</label>
                      <textarea rows={2} value={admissionFormData.medicalConditions}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, medicalConditions: e.target.value })}
                        placeholder="Please specify any medical conditions or allergies"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-green-50 border-l-4 border-green-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone size={22} className="text-green-500" />
                    <span>🚨 Emergency Contact</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Contact Name *</label>
                      <input type="text" required value={admissionFormData.emergencyContact}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, emergencyContact: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input type="tel" required value={admissionFormData.emergencyPhone}
                        onChange={(e) => setAdmissionFormData({ ...admissionFormData, emergencyPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit"
                    className="flex-1 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg"
                    style={{ background: "linear-gradient(90deg,#0047FF,#7C3AED)" }}>
                    🖍️ Submit Application
                  </button>
                  <Link to="/payment"
                    className="flex-1 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg text-center"
                    style={{ background: "linear-gradient(90deg,#FFCC00,#FFB300)" }}>
                    💳 Proceed to Payment
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
