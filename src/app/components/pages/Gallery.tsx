import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Happy Classroom",
    category: "Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Playtime Learning",
    category: "Activities",
  },
  {
    url: "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Story Time",
    category: "Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Art Class",
    category: "Activities",
  },
  {
    url: "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Outdoor Fun",
    category: "Outdoor",
  },
  {
    url: "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Circle Time",
    category: "Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1625999874116-dba9a603fa24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzczNTAzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Graduation Day",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBtdXNpYyUyMGNsYXNzJTIwY2hpbGRyZW58ZW58MXx8fHwxNzczNDQ5MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Music Class",
    category: "Activities",
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Activities", "Outdoor", "Events"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Glimpses of joyful moments, learning experiences, and memorable events at Mother Care
              Pre-School
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#0047FF] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-blue-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && currentImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/40 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image container – stop clicks bubbling to overlay */}
          <div
            className="max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-xl">{currentImage.title}</p>
              <p className="text-blue-300 text-sm mt-1">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/40 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Campus in Person</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a tour to experience the warmth and energy of our preschool
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </a>
            <a
              href="/contact"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
