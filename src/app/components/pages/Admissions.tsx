import { useState } from "react";
import { Link } from "react-router";
import { Calendar, FileText, DollarSign, CheckCircle, Clock, User, Mail, Phone, Baby } from "lucide-react";

export function Admissions() {
  const [tourFormData, setTourFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [admissionFormData, setAdmissionFormData] = useState({
    // Parent Information
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    email: "",
    address: "",
    
    // Child Information
    childName: "",
    dateOfBirth: "",
    gender: "",
    program: "",
    
    // Additional Information
    previousSchool: "",
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon to confirm your school tour.");
    setTourFormData({
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      childAge: "",
      preferredDate: "",
      preferredTime: "",
    });
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your admission application has been submitted successfully! We will contact you soon.");
    // Reset form or redirect to payment page
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the online admission form with your child's details",
    },
    {
      icon: Calendar,
      title: "Schedule Tour",
      description: "Visit our campus and meet our teachers",
    },
    {
      icon: DollarSign,
      title: "Pay Fees",
      description: "Complete the admission fee payment online",
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive confirmation and welcome kit",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join the Mother Care family and give your child the best start in their educational
              journey
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple and transparent admission process in 4 easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#0047FF] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <step.icon className="w-12 h-12 mx-auto mb-4 text-[#0047FF]" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Tour Section */}
      <section id="tour" className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a School Tour</h2>
                <p className="text-gray-600">
                  Visit our campus, meet our teachers, and see our facilities in action
                </p>
              </div>
              <form onSubmit={handleTourSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={tourFormData.parentName}
                      onChange={(e) =>
                        setTourFormData({ ...tourFormData, parentName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={tourFormData.email}
                      onChange={(e) => setTourFormData({ ...tourFormData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={tourFormData.phone}
                      onChange={(e) => setTourFormData({ ...tourFormData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Child's Name *</label>
                    <input
                      type="text"
                      required
                      value={tourFormData.childName}
                      onChange={(e) =>
                        setTourFormData({ ...tourFormData, childName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="Child's name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Child's Age *</label>
                    <input
                      type="text"
                      required
                      value={tourFormData.childAge}
                      onChange={(e) =>
                        setTourFormData({ ...tourFormData, childAge: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      placeholder="e.g., 2.5 years"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={tourFormData.preferredDate}
                      onChange={(e) =>
                        setTourFormData({ ...tourFormData, preferredDate: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Time *</label>
                  <select
                    required
                    value={tourFormData.preferredTime}
                    onChange={(e) =>
                      setTourFormData({ ...tourFormData, preferredTime: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                  >
                    <option value="">Select a time slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Application</h2>
                <p className="text-gray-600">Fill in the details to apply for admission</p>
              </div>
              <form onSubmit={handleAdmissionSubmit} className="space-y-8">
                {/* Parent Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User size={24} className="text-[#0047FF]" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Father's Name *</label>
                      <input
                        type="text"
                        required
                        value={admissionFormData.fatherName}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, fatherName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                      <input
                        type="text"
                        value={admissionFormData.fatherOccupation}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            fatherOccupation: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Father's Phone *</label>
                      <input
                        type="tel"
                        required
                        value={admissionFormData.fatherPhone}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, fatherPhone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Mother's Name *</label>
                      <input
                        type="text"
                        required
                        value={admissionFormData.motherName}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, motherName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                      <input
                        type="text"
                        value={admissionFormData.motherOccupation}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            motherOccupation: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Mother's Phone *</label>
                      <input
                        type="tel"
                        required
                        value={admissionFormData.motherPhone}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, motherPhone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={admissionFormData.email}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Residential Address *</label>
                      <textarea
                        required
                        rows={3}
                        value={admissionFormData.address}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, address: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Baby size={24} className="text-[#0047FF]" />
                    Child Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Child's Full Name *</label>
                      <input
                        type="text"
                        required
                        value={admissionFormData.childName}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, childName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={admissionFormData.dateOfBirth}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, dateOfBirth: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                      <select
                        required
                        value={admissionFormData.gender}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, gender: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Program *</label>
                      <select
                        required
                        value={admissionFormData.program}
                        onChange={(e) =>
                          setAdmissionFormData({ ...admissionFormData, program: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      >
                        <option value="">Select program</option>
                        <option value="playgroup">Playgroup (2 - 3 years)</option>
                        <option value="nursery">Nursery (3 - 4 years)</option>
                        <option value="junior-kg">Junior KG (4 - 5 years)</option>
                        <option value="senior-kg">Senior KG (5 - 6 years)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Previous School (if any)</label>
                      <input
                        type="text"
                        value={admissionFormData.previousSchool}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            previousSchool: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        Medical Conditions / Allergies (if any)
                      </label>
                      <textarea
                        rows={2}
                        value={admissionFormData.medicalConditions}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            medicalConditions: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        placeholder="Please specify any medical conditions or allergies"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone size={24} className="text-[#0047FF]" />
                    Emergency Contact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={admissionFormData.emergencyContact}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            emergencyContact: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={admissionFormData.emergencyPhone}
                        onChange={(e) =>
                          setAdmissionFormData({
                            ...admissionFormData,
                            emergencyPhone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                  <Link
                    to="/payment"
                    className="flex-1 bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg hover:shadow-xl text-center"
                  >
                    Proceed to Payment
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
