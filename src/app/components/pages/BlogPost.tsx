import { useParams, Link, Navigate } from "react-router";
import { Clock, User, Calendar, Share2, ArrowLeft, Phone } from "lucide-react";
import { BLOG_POSTS } from "../../data/blogPosts";

const CATEGORY_COLORS: Record<string, string> = {
  Educational: "bg-blue-100 text-blue-700",
  Parenting: "bg-green-100 text-green-700",
  Social: "bg-purple-100 text-purple-700",
  Regulations: "bg-orange-100 text-orange-700",
};

// Full article content keyed by slug
const CONTENT: Record<string, React.ReactNode> = {
  "surat-math-activities-preschool": (
    <div className="prose-content">
      <p>Hey Surat parents! Ever watched your little one count mangoes at the market and wondered, \u201cIs this math genius in the making?\u201d At Mother Care Pre-School (108 Green Aristo Road, Jahangir Pura), we turn everyday Gujarat fun into number adventures. Early math builds confidence per NEP 2020. Here are 5 Surat-inspired games designed for children aged 2\u20136 years.</p>

      <h2>1. \ud83e\udd6d Mango Market Matching (Playgroup, Ages 2\u20133)</h2>
      <p>Sort plastic fruits by colour and size. <em>\u201cBeta, 3 red ones just like our Kesar mangoes!\u201d</em> This activity directly builds one-to-one correspondence, the foundational skill underpinning all future arithmetic.</p>
      <ul>
        <li><strong>Time required:</strong> 10 minutes</li>
        <li><strong>Key benefit:</strong> Visual discrimination and colour recognition</li>
        <li><strong>Materials:</strong> Plastic fruit set, sorting bowls</li>
      </ul>

      <h2>2. \ud83e\uded3 Thepla Patterns (Nursery, Ages 3\u20134)</h2>
      <p>Stack theplas in ABAB patterns using wheat and bajra flatbreads. <em>\u201cJust like the steps in Navratri garba, beta!\u201d</em> Pattern recognition is a core pre-algebra skill, and using familiar food makes it immediately meaningful.</p>
      <p><strong>Pro Tip:</strong> Use edible counters for an incredible snack-math combination your child will beg to repeat.</p>

      <h2>3. \ud83d\ude9c Auto Rickshaw Counting Races (Jr KG, Ages 4\u20135)</h2>
      <p>Line up toy autos in a row: <em>\u201cHow many rickshaws to reach Surat railway station?\u201d</em> Roll a dice, count the hops along the track. This introduces number sequencing, addition, and friendly competition.</p>
      <p><strong>Local Twist:</strong> Mimic the famous Jahangir Pura traffic jam to make counting feel like a real adventure!</p>

      <h2>4. \ud83d\udc8e Diamond Sorting Shapes (Sr KG, Ages 5\u20136)</h2>
      <p>Sort Diwali rangoli shapes by type: <em>\u201cCircle like chakli, square like fafda, triangle like samosa!\u201d</em> Geometry intuition built through cultural objects creates lasting neural connections per cognitive development research.</p>

      <h2>5. \ud83d\uded2 Surat Bazaar Bargain Game (All Ages)</h2>
      <p>Play shopkeeper and customer: <em>\u201c5 rupees for 2 bananas?\u201d</em> This introduces simple addition, subtraction, and the concept of exchange. Use real coins for authentic tactile learning.</p>
      <p><strong>Parent Duty:</strong> Practise daily for 15 minutes. Consistency is the key to mathematical confidence.</p>

      <h2>\ud83d\udcda Research Behind the Play</h2>
      <p>According to NEP 2020 and NCERT Early Childhood Care and Education (ECCE) guidelines, children who engage in number-play before age 5 show significantly stronger mathematical reasoning by Grade 3. At Mother Care, every activity is aligned to these national developmental milestones.</p>

      <div className="cta-box">
        <p>\ud83c\udfeb Ready to give your child a mathematical head start? <strong>Book a tour of Mother Care Pre-School:</strong></p>
        <a href="tel:+918866023444" className="cta-link">\ud83d\udcde Call +91 8866023444</a>
        <span> \u2022 </span>
        <a href="/admissions" className="cta-link">Enroll Now</a>
      </div>
    </div>
  ),
  "gujarat-storytelling-preschool": (
    <div className="prose-content">
      <p>Imagine your tot reciting \u201cRaja Vikram aur Betal\u201d with sparkling eyes! At Mother Care Pre-School, our 8:30 AM circle time weaves language magic that lasts a lifetime. Language accounts for 50% of preschool learning according to NEP 2020 guidelines, making storytelling one of the most powerful tools in early education.</p>

      <h2>\ud83e\uddf8 1. Puppet Panchatantra Tales</h2>
      <p>Use simple sock puppets to bring \u201cThe Clever Rabbit\u201d to life. Children act out the moral, then retell the story in their own words. This builds narrative structure, vocabulary, and moral reasoning simultaneously.</p>

      <h2>\ud83c\udfb6 2. Garba Rhythm Rhymes</h2>
      <p><em>\u201cChogada tara zala, re bava...\u201d</em> Clap along to Gujarati folk songs for natural phonics development. The rhythm patterns in Garba music are scientifically aligned with phonological awareness development \u2014 the same skill that predicts reading success.</p>

      <h2>\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 3. Family Story Chain</h2>
      <p>Each child adds one sentence to a growing story. <em>\u201cThe elephant went to the market... and bought jalebis... then met a friendly parrot!\u201d</em> This builds sequencing ability, listening skills, and creative confidence.</p>

      <h2>\ud83c\udf9f\ufe0f 4. Sensory Story Bags</h2>
      <p>While hearing a tale about a forest, children feel rough bark, smooth leaves, and soft moss in a bag. Multi-sensory storytelling enhances comprehension and vocabulary retention dramatically.</p>

      <h2>\ud83d\udcda The Language Research</h2>
      <p>Children exposed to bilingual storytelling in their preschool years (in this case Gujarati + English) develop stronger metalinguistic awareness, better academic outcomes, and greater cultural confidence. Our circle time is designed specifically around this research.</p>

      <div className="cta-box">
        <p>\ud83c\udf1f Join our storytelling sessions at Mother Care Pre-School, Jahangir Pura, Surat.</p>
        <a href="mailto:mothercare79ps@gmail.com" className="cta-link">\u2709\ufe0f Email us</a>
        <span> \u2022 </span>
        <a href="tel:+918866023444" className="cta-link">\ud83d\udcde +91 8866023444</a>
      </div>
    </div>
  ),
  "surat-stem-preschool-fun": (
    <div className="prose-content">
      <p>Boom! Baking soda volcanoes erupting in Jahangir Pura kitchens? Yes, please! STEM education sparks curiosity and critical thinking from the very earliest years. Research consistently shows that children who explore science, technology, engineering, and math concepts before age 6 develop stronger problem-solving skills throughout their schooling years.</p>

      <h2>\ud83c\udf0a 1. Sink or Float: Canal Road Challenge</h2>
      <p>Fill a bowl with water and test household objects \u2014 leaves, stones, a plastic bottle cap, a feather. Ask: <em>\u201cDo you think this will sink or float?\u201d</em> Then test the prediction. This introduces hypothesis, observation, and conclusion \u2014 the entire scientific method \u2014 at age 3.</p>

      <h2>\ud83c\udfa8 2. Colour Mixing Magic</h2>
      <p>Mix turmeric with lime juice for a surprise yellow-to-green colour change. Use food colouring in water to explore primary and secondary colours. Gujarati kitchen chemistry at its most magical!</p>

      <h2>\ud83d\udc65 3. Shadow Puppets at Dumas Beach</h2>
      <p>During the golden hour, trace your child\u2019s shadow on the ground. Come back an hour later \u2014 it moved! This introduces the concept of Earth\u2019s rotation in the most tangible way possible for a preschooler.</p>

      <h2>\ud83e\udde0 Why STEM Before Age 6?</h2>
      <p>Per CBSE preschool norms and NEP 2020, STEM exploration in early years builds critical thinking that textbook learning alone cannot develop. At Mother Care, our Jr KG curriculum integrates a STEM discovery session every week.</p>

      <div className="cta-box">
        <p>\ud83d\udd2c Enroll your child in our Jr KG STEM programme:</p>
        <a href="tel:+918866023444" className="cta-link">\ud83d\udcde +91 8866023444</a>
      </div>
    </div>
  ),
  "surat-after-school-routine": (
    <div className="prose-content">
      <p>1:30 PM pickup chaos \u2014 every Surat parent knows the feeling! The transition from school to home can be hectic, but the right after-school routine makes all the difference for your preschooler\u2019s wellbeing and development.</p>

      <h2>\ud83c\udf5e The Golden Hour Routine</h2>
      <p>Our recommended after-school flow: a Gujarati farsan snack, 20 minutes of free outdoor play, then a gentle 15-minute review of the day. Structure meets freedom \u2014 the balance every preschooler needs.</p>

      <h2>\ud83d\udd52 Step-by-Step Schedule</h2>
      <ul>
        <li><strong>2:00 PM:</strong> Outdoor zoom \u2014 park run, bicycle, or open play. Burns the school-day energy and resets focus.</li>
        <li><strong>3:00 PM:</strong> Quiet reading or colouring. Wind-down before snack.</li>
        <li><strong>3:30 PM:</strong> Healthy Gujarati snack \u2014 dhokla, chikki, or seasonal fruit.</li>
        <li><strong>4:00 PM:</strong> Free play, creative activity, or sibling time.</li>
        <li><strong>5:30 PM:</strong> Bath and dinner preparation together.</li>
      </ul>

      <h2>\ud83d\udca1 Parent Hack: The Garba Timer</h2>
      <p>Use a Garba song as a timer! One full song (\u22484 minutes) of outdoor play, then another signals transition to reading. Children respond to musical cues far better than verbal \u201ctime\u2019s up\u201d reminders.</p>

      <div className="cta-box">
        <p>\ud83c\udf1f Discover our full-day and half-day programmes for children aged 2\u20136 years.</p>
        <a href="/programs" className="cta-link">View Our Programmes</a>
        <span> \u2022 </span>
        <a href="tel:+918866023444" className="cta-link">Call +91 8866023444</a>
      </div>
    </div>
  ),
  "screen-time-preschool-india": (
    <div className="prose-content">
      <p>The Indian Academy of Pediatrics recommends a maximum of 1 hour per day of screen time for children aged 2\u20135 years. Yet in most Surat homes, that boundary quietly stretches. The good news? Swapping cartoon hours for active alternatives doesn\u2019t have to be a battle.</p>

      <h2>\ud83d\udcf1 Age-by-Age Screen Guidelines</h2>
      <ul>
        <li><strong>Under 2 years:</strong> No screen time except video calls with family.</li>
        <li><strong>2\u20133 years:</strong> Maximum 30 minutes of high-quality educational content, with a parent watching together.</li>
        <li><strong>4\u20135 years:</strong> Up to 1 hour. Prioritise interactive apps over passive viewing.</li>
      </ul>

      <h2>\ud83c\udf93 Better Alternatives for Surat Kids</h2>
      <ul>
        <li>\ud83d\udd0d Surat Scavenger Hunt \u2014 find 5 things that are round in the house</li>
        <li>\ud83c\udfa8 Rangoli design with chalk on the balcony floor</li>
        <li>\ud83e\udd19 Chhota Bheem dance routine (physical + fun)</li>
        <li>\ud83d\udcda 15-minute read-aloud with a picture book</li>
        <li>\ud83c\udf3b Planting a small tulsi or coriander in a pot</li>
      </ul>

      <h2>\ud83e\udde0 The Science</h2>
      <p>Excessive screen time before age 5 is linked to delayed language development, reduced attention span, and disrupted sleep patterns. Conversely, children with limited screens and rich play environments show 23% better school-readiness scores (Journal of Developmental Pediatrics, 2023).</p>

      <div className="cta-box">
        <p>\u2696\ufe0f At Mother Care Pre-School, screens are used purposefully and sparingly. Our curriculum prioritises hands-on, child-led exploration.</p>
        <a href="/about" className="cta-link">Learn About Our Approach</a>
        <span> \u2022 </span>
        <a href="tel:+918866023444" className="cta-link">Call +91 8866023444</a>
      </div>
    </div>
  ),
};

// For posts without full content yet, show a placeholder
function PlaceholderContent({ post }: { post: (typeof BLOG_POSTS)[0] }) {
  return (
    <div className="prose-content">
      <p className="text-lg leading-relaxed">{post.excerpt}</p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
        <p className="text-yellow-800 font-semibold">
          \ud83d\udcdd Full article coming soon! In the meantime, get in touch with our team directly.
        </p>
      </div>
      <div className="cta-box">
        <a href="tel:+918866023444" className="cta-link">\ud83d\udcde Call +91 8866023444</a>
        <span> \u2022 </span>
        <a href="mailto:mothercare79ps@gmail.com" className="cta-link">\u2709\ufe0f Email Us</a>
      </div>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const content = CONTENT[slug!] ?? <PlaceholderContent post={post} />;

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && (p.category === post.category)
  ).slice(0, 3);

  const waText = encodeURIComponent(
    `I read "${post.title}" on the Mother Care Pre-School website. I\u2019d like more information about admissions.`
  );
  const waUrl = `https://wa.me/918866023444?text=${waText}`;
  const mailUrl = `mailto:mothercare79ps@gmail.com?subject=Enquiry after reading: ${encodeURIComponent(post.title)}`;

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${CATEGORY_COLORS[post.category]}`}>
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4 py-3 text-sm text-gray-500">
            <Link to="/blog" className="flex items-center gap-1 text-[#0047FF] font-medium hover:underline">
              <ArrowLeft size={16} /> All Posts
            </Link>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {content}

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <Share2 size={16} /> Share this article
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Share on WhatsApp
                </a>
                <a
                  href={mailUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  \u2709\ufe0f Share via Email
                </a>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-10 bg-gradient-to-r from-[#0047FF] to-purple-600 rounded-3xl p-8 text-white text-center">
              <Phone size={28} className="mx-auto mb-3 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Ready to Join Mother Care Pre-School?</h3>
              <p className="text-blue-100 mb-5 text-sm">
                Book a free campus tour at 108 Green Aristo Road, Jahangir Pura, Surat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+918866023444"
                  className="bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-[#FFD633] transition-all"
                >
                  \ud83d\udcde Call +91 8866023444
                </a>
                <a
                  href="/admissions"
                  className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all hover:-translate-y-0.5 flex flex-col"
                >
                  <img src={r.image} alt={r.imageAlt} className="w-full h-40 object-cover" loading="lazy" />
                  <div className="p-4 flex-1 flex flex-col">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full self-start mb-2 ${CATEGORY_COLORS[r.category]}`}>
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 leading-snug flex-1">{r.title}</h3>
                    <span className="text-xs text-[#0047FF] font-semibold">Read More \u2192</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
