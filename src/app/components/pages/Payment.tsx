import { useState } from "react";
import { CreditCard, Building, Smartphone, Shield, CheckCircle, Lock } from "lucide-react";

export function Payment() {
  const [paymentType, setPaymentType] = useState<"admission" | "fees">("admission");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking">("card");
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    amount: "",
    // Card details
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    // UPI
    upiId: "",
    // Net Banking
    bankName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment processing... This is a demo. In production, this will connect to a payment gateway.");
  };

  const admissionFees = [
    { name: "Registration Fee", amount: "₹1,000" },
    { name: "Admission Fee", amount: "₹5,000" },
    { name: "Security Deposit", amount: "₹3,000" },
    { name: "Total", amount: "₹9,000", highlight: true },
  ];

  const schoolFees = [
    { name: "Tuition Fee (Monthly)", amount: "₹4,000" },
    { name: "Activity Fee", amount: "₹1,000" },
    { name: "Transport Fee (Optional)", amount: "₹1,500" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Secure Payment</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Make your admission or school fee payments securely online
            </p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Details</h2>

                  {/* Payment Type Selection */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Payment Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setPaymentType("admission")}
                        className={`p-4 rounded-xl font-semibold transition-all ${
                          paymentType === "admission"
                            ? "bg-[#0047FF] text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Admission Fee
                      </button>
                      <button
                        onClick={() => setPaymentType("fees")}
                        className={`p-4 rounded-xl font-semibold transition-all ${
                          paymentType === "fees"
                            ? "bg-[#0047FF] text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        School Fee
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Student Information */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Student Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Student Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.studentName}
                            onChange={(e) =>
                              setFormData({ ...formData, studentName: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Parent Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.parentName}
                            onChange={(e) =>
                              setFormData({ ...formData, parentName: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                            paymentMethod === "card"
                              ? "bg-[#0047FF] text-white shadow-lg"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <CreditCard size={24} />
                          Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("upi")}
                          className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                            paymentMethod === "upi"
                              ? "bg-[#0047FF] text-white shadow-lg"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Smartphone size={24} />
                          UPI
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("netbanking")}
                          className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                            paymentMethod === "netbanking"
                              ? "bg-[#0047FF] text-white shadow-lg"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Building size={24} />
                          Net Banking
                        </button>
                      </div>

                      {/* Card Payment Form */}
                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Card Number *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={(e) =>
                                setFormData({ ...formData, cardNumber: e.target.value })
                              }
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Cardholder Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Name on card"
                              value={formData.cardName}
                              onChange={(e) =>
                                setFormData({ ...formData, cardName: e.target.value })
                              }
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Expiry Date *
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={(e) =>
                                  setFormData({ ...formData, expiryDate: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">CVV *</label>
                              <input
                                type="text"
                                required
                                placeholder="123"
                                maxLength={3}
                                value={formData.cvv}
                                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* UPI Payment Form */}
                      {paymentMethod === "upi" && (
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">UPI ID *</label>
                          <input
                            type="text"
                            required
                            placeholder="yourname@upi"
                            value={formData.upiId}
                            onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          />
                        </div>
                      )}

                      {/* Net Banking Form */}
                      {paymentMethod === "netbanking" && (
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Select Your Bank *
                          </label>
                          <select
                            required
                            value={formData.bankName}
                            onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0047FF] focus:border-transparent"
                          >
                            <option value="">Choose your bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                            <option value="pnb">Punjab National Bank</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl">
                      <Lock className="text-[#0047FF]" size={20} />
                      <p className="text-sm text-gray-700">
                        Your payment information is secure and encrypted
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0047FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Lock size={20} />
                      Pay Securely
                    </button>
                  </form>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Summary</h3>
                  <div className="space-y-4">
                    {paymentType === "admission" ? (
                      <>
                        {admissionFees.map((fee, index) => (
                          <div
                            key={index}
                            className={`flex justify-between ${
                              fee.highlight
                                ? "border-t-2 border-gray-200 pt-4 font-bold text-lg"
                                : ""
                            }`}
                          >
                            <span className={fee.highlight ? "text-gray-900" : "text-gray-600"}>
                              {fee.name}
                            </span>
                            <span className={fee.highlight ? "text-[#0047FF]" : "text-gray-900"}>
                              {fee.amount}
                            </span>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {schoolFees.map((fee, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-600">{fee.name}</span>
                            <span className="text-gray-900">{fee.amount}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="font-semibold text-gray-900">Secure Payment</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• SSL Encrypted Connection</li>
                      <li>• PCI DSS Compliant</li>
                      <li>• Instant Receipt via Email</li>
                      <li>• 24/7 Support Available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
