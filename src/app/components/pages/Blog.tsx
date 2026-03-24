import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Search, Clock, ChevronRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "../../data/blogPosts";

const CATEGORIES = ["All", "Educational", "Parenting", "Social", "Regulations"] as const;
const PER_PAGE = 9;

const CATEGORY_COLORS: Record<string, string> = {
  Educational: "bg-blue-100 text-blue-700",
  Parenting: "bg-green-100 text-green-700",
  Social: "bg-purple-100 text-purple-700",
  Regulations: "bg-orange-100 text-orange-700",
};

export function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (v: string) => { setSearch(v); setPage(1); };
  const handleCategory = (c: string) => { setCategory(c); setPage(1); };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0047FF 0%, #7C3AED 60%, #F59E0B 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <BookOpen size={16} />
            <span className="text-sm font-semibold">Mother Care Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Insights for Surat Parents
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Tips, Activities &amp; Guides for Raising Happy Preschoolers
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles, topics..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-base shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => handleCategory(c)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === c
                    ? "bg-[#0047FF] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-400 font-semibold">No articles found.</p>
              <button
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="mt-4 text-[#0047FF] underline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Showing {(page - 1) * PER_PAGE + 1}\u2013{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} articles
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-[#0047FF] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[#0047FF] hover:gap-2 transition-all"
                        >
                          Read More <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold disabled:opacity-40 hover:bg-gray-100 transition-all"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        page === n
                          ? "bg-[#0047FF] text-white shadow"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold disabled:opacity-40 hover:bg-gray-100 transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-[#0047FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Give Your Child the Best Start?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join 200+ happy families at Mother Care Pre-School, Jahangir Pura, Surat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </a>
            <a
              href="tel:+918866023444"
              className="bg-white text-[#0047FF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Call +91 8866023444
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
