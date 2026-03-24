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

const CATEGORY_ACTIVE: Record<string, string> = {
  All: "bg-[#3B82F6] text-white shadow-md",
  Educational: "bg-blue-500 text-white shadow-md",
  Parenting: "bg-green-500 text-white shadow-md",
  Social: "bg-purple-500 text-white shadow-md",
  Regulations: "bg-orange-500 text-white shadow-md",
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

  const from = (page - 1) * PER_PAGE + 1;
  const to = Math.min(page * PER_PAGE, filtered.length);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 50%, #FCE7F3 100%)",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-1/4 w-48 h-48 bg-blue-200 rounded-full opacity-25 blur-2xl pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-100 px-4 py-2 rounded-full mb-6 shadow-sm">
            <BookOpen size={16} className="text-[#3B82F6]" />
            <span className="text-sm font-semibold text-[#1E40AF]">Mother Care Blog</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#1E3A5F]">
            Mother Care Pre-School Blogs
          </h1>

          <p className="text-xl font-semibold mb-10 max-w-2xl mx-auto" style={{ color: "#B45309" }}>
            Tips, Activities &amp; Guides for Happy Preschoolers
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles, topics..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-base shadow-lg border border-white/80 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            />
          </div>
        </div>
      </section>

      {/* ── Category Filter ───────────────────────────────────── */}
      <section className="bg-white sticky top-0 z-30 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => handleCategory(c)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === c
                    ? (CATEGORY_ACTIVE[c] ?? "bg-[#3B82F6] text-white shadow-md")
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-400 font-semibold">No articles found.</p>
              <button
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="mt-4 text-[#3B82F6] underline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* Fixed: use real characters, no unicode escapes in JSX strings */}
              <p className="text-sm text-gray-500 mb-6">
                Showing {from}&ndash;{to} of {filtered.length} articles
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
                    style={{
                      boxShadow: undefined,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 16px 40px rgba(59,130,246,0.18), 0 0 0 2px rgba(59,130,246,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                  >
                    <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

                      <h2 className="text-base font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-[#3B82F6] transition-colors">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[#3B82F6] hover:gap-2 transition-all"
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
                <div className="flex justify-center gap-2 mt-12 flex-wrap">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold disabled:opacity-40 hover:bg-gray-100 transition-all"
                  >
                    &larr; Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        page === n
                          ? "bg-[#3B82F6] text-white shadow"
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
                    Next &rarr;
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Give Your Child the Best Start?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join 200+ happy families at Mother Care Pre-School, Jahangir Pura, Surat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions#tour"
              className="bg-[#FFCC00] text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-[#FFD633] transition-all shadow-lg"
            >
              Book a School Tour
            </a>
            <a
              href="tel:+918866023444"
              className="bg-white text-[#1E40AF] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Call +91 8866023444
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
