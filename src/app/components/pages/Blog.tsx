import { Calendar, User, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Tips for Preparing Your Child for Preschool",
    excerpt:
      "Starting preschool is a big milestone. Here are expert tips to make the transition smooth and stress-free for both you and your child.",
    author: "Mrs. Sharma",
    date: "March 10, 2026",
    category: "Parenting Tips",
    image:
      "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjByZWFkaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "The Importance of Play-Based Learning",
    excerpt:
      "Discover why play is essential for early childhood development and how it builds critical skills for future success.",
    author: "Dr. Patel",
    date: "March 8, 2026",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzUwMzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Nurturing Creativity in Young Children",
    excerpt:
      "Art, music, and creative expression play a vital role in developing imagination and problem-solving skills.",
    author: "Mrs. Mehta",
    date: "March 5, 2026",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzczNDMyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Building Social Skills in Preschool",
    excerpt:
      "How group activities and peer interaction help children develop empathy, cooperation, and communication skills.",
    author: "Mrs. Desai",
    date: "March 1, 2026",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1587706419216-8845bd1fefd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNpcmNsZSUyMHRpbWV8ZW58MXx8fHwxNzczNTAzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Healthy Eating Habits for Toddlers",
    excerpt:
      "Nutrition tips and meal planning ideas to ensure your child gets the nutrients they need for growth and development.",
    author: "Nutritionist Rao",
    date: "February 28, 2026",
    category: "Health & Nutrition",
    image:
      "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzUwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Managing Separation Anxiety in Young Children",
    excerpt:
      "Practical strategies to help your child feel comfortable and confident when starting preschool.",
    author: "Child Psychologist Kumar",
    date: "February 25, 2026",
    category: "Parenting Tips",
    image:
      "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXlncm91bmQlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3MzUwMzcwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning Resources & Blog
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Expert advice, parenting tips, and educational insights for your child's development
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-[#FFCC00] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    Featured
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-[#0047FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all w-fit">
                    Read More <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-[#0047FF] px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[#0047FF] font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Get the latest parenting tips, educational resources, and school updates delivered to
              your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
