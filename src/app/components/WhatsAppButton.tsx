import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const PHONE = "918866023444";

const quickActions = [
  {
    label: "🏫 Request a Tour",
    message: "Hi Mother Care, I'd like to schedule a tour of the school.",
  },
  {
    label: "📋 Admission Inquiry",
    message: "Hello, I'm interested in enrolling my child for the upcoming term.",
  },
  {
    label: "📞 Callback Request",
    message: "Please call me back at this number regarding school details.",
  },
  {
    label: "📍 Location & Hours",
    message: "Could you please share your school address and operating hours?",
  },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <div
        className={`bg-white rounded-2xl shadow-2xl w-72 overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle size={22} className="text-white" />
            <div>
              <div className="text-white font-semibold text-sm">Chat with Mother Care</div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-green-100 text-xs">Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white hover:text-green-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Greeting bubble */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="bg-white rounded-2xl rounded-tl-none shadow-sm px-3 py-2 text-sm text-gray-700 inline-block max-w-[90%]">
            👋 Hello! How can we help you today?
          </div>
        </div>

        {/* Quick actions */}
        <div className="px-4 pb-4 space-y-2">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => openWhatsApp(action.message)}
              className="w-full text-left text-sm px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#25D366] hover:bg-green-50 transition-all text-gray-700 font-medium"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bf5a] transition-all hover:scale-110 flex items-center justify-center"
      >
        {open ? <X size={26} /> : (
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
            <path d="M16.003 3C9.375 3 4 8.373 4 15c0 2.388.664 4.617 1.813 6.524L4 29l7.695-1.787A12.94 12.94 0 0 0 16.003 28.999C22.63 29 28 23.627 28 17S22.63 3 16.003 3zm0 2C21.529 5 26 9.477 26 15S21.529 25 16.003 25c-1.94 0-3.757-.534-5.306-1.46l-.38-.232-4.573 1.063 1.1-4.428-.247-.396A10.96 10.96 0 0 1 5.999 15C6 9.477 10.477 5 16.003 5zm-4.44 5.5c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.19 3.47 5.38 4.72 2.66 1.05 3.2.84 3.78.79.58-.06 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.3-.21-.63-.37-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.7-1.72-.97-2.35-.25-.6-.51-.52-.71-.53l-.6-.01z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
