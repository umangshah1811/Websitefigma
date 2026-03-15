import { useState } from "react";
import {
  User,
  Lock,
  LogIn,
  UserPlus,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  TrendingUp,
  Home,
  LogOut,
} from "lucide-react";

export function ParentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    parentName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    childName: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setIsLoggedIn(true);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock signup
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
  };

  // Dashboard Mock Data
  const studentInfo = {
    name: "Aarav Sharma",
    class: "Junior KG",
    rollNumber: "JKG-2026-042",
    attendance: "95%",
    photo: "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const announcements = [
    { title: "Parent-Teacher Meeting", date: "March 20, 2026", type: "Event" },
    { title: "Annual Day Celebration", date: "March 25, 2026", type: "Event" },
    { title: "School Closed - Holi", date: "March 17, 2026", type: "Holiday" },
  ];

  const homework = [
    { subject: "English", task: "Practice letter 'A' writing", due: "Tomorrow" },
    { subject: "Math", task: "Count and color numbers 1-10", due: "March 16" },
    { subject: "Art", task: "Draw your favorite fruit", due: "March 17" },
  ];

  if (!isLoggedIn) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Parent Portal</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Access your child's progress, homework, and school updates
              </p>
            </div>
          </div>
        </section>

        {/* Login/Signup Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8">
                {!isSignup ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="bg-[#0047FF] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <LogIn size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Login</h2>
                      <p className="text-gray-600 mt-2">Access your parent account</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={20}
                          />
                          <input
                            type="email"
                            required
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className="relative">
                          <Lock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={20}
                          />
                          <input
                            type="password"
                            required
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({ ...loginData, password: e.target.value })
                            }
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                            placeholder="Enter your password"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                      >
                        Login
                      </button>
                    </form>
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setIsSignup(true)}
                        className="text-[#0047FF] hover:underline"
                      >
                        Don't have an account? Sign Up
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="bg-[#0047FF] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserPlus size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                      <p className="text-gray-600 mt-2">Register for parent portal access</p>
                    </div>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Parent/Guardian Name
                        </label>
                        <input
                          type="text"
                          required
                          value={signupData.parentName}
                          onChange={(e) =>
                            setSignupData({ ...signupData, parentName: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={signupData.email}
                          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={signupData.phone}
                          onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Child's Name</label>
                        <input
                          type="text"
                          required
                          value={signupData.childName}
                          onChange={(e) =>
                            setSignupData({ ...signupData, childName: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                          type="password"
                          required
                          value={signupData.password}
                          onChange={(e) =>
                            setSignupData({ ...signupData, password: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          required
                          value={signupData.confirmPassword}
                          onChange={(e) =>
                            setSignupData({ ...signupData, confirmPassword: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                      >
                        Create Account
                      </button>
                    </form>
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setIsSignup(false)}
                        className="text-[#0047FF] hover:underline"
                      >
                        Already have an account? Login
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dashboard View
  return (
    <div>
      {/* Dashboard Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
              <p className="text-gray-600">Welcome back!</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Student Profile */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-white">
                  <img
                    src={studentInfo.photo}
                    alt={studentInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{studentInfo.name}</h2>
                <p className="text-gray-600 mb-4">{studentInfo.class}</p>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Roll Number:</span>
                    <span className="font-semibold">{studentInfo.rollNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attendance:</span>
                    <span className="font-semibold text-green-600">{studentInfo.attendance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Announcements */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Bell className="text-[#0047FF]" size={24} />
                  Announcements
                </h3>
                <div className="space-y-3">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                        <p className="text-sm text-gray-600">{announcement.date}</p>
                      </div>
                      <span className="bg-[#FFCC00] text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {announcement.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homework */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="text-[#0047FF]" size={24} />
                  Homework
                </h3>
                <div className="space-y-3">
                  {homework.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.subject}</h4>
                        <p className="text-sm text-gray-600">{item.task}</p>
                      </div>
                      <span className="text-sm text-gray-500">Due: {item.due}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Report */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-[#0047FF]" size={24} />
                  Recent Progress
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { skill: "Language", progress: "85%" },
                    { skill: "Mathematics", progress: "90%" },
                    { skill: "Social Skills", progress: "95%" },
                    { skill: "Motor Skills", progress: "88%" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="font-semibold text-gray-900 mb-2">{item.skill}</div>
                      <div className="text-2xl font-bold text-[#0047FF]">{item.progress}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
