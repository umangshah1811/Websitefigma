export type BlogPost = {
  slug: string;
  title: string;
  category: "Educational" | "Parenting" | "Social" | "Regulations";
  date: string;
  readTime: string;
  author: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: React.ReactNode; // rendered in BlogPost.tsx via a lookup
};

export const BLOG_POSTS: Omit<BlogPost, "content">[] = [
  {
    slug: "surat-math-activities-preschool",
    title: "5 Fun Surat-Style Activities to Spark Early Math Skills in Preschoolers",
    category: "Educational",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Mother Care Team",
    metaDescription:
      "Discover 5 playful math activities for Surat preschoolers using Gujarati toys. Boost counting skills at home! | Surat preschool math activities",
    excerpt:
      "Hey Surat parents! Ever watched your little one count mangoes at the market and wondered, \u201cIs this math genius in the making?\u201d At Mother Care Pre-School, we turn everyday Gujarat fun into number adventures. Early math builds confidence per NEP 2020. Here are 5 Surat-inspired games designed for children aged 2\u20136 years.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    imageAlt: "Kids learning math with colorful toys and fruits",
  },
  {
    slug: "gujarat-storytelling-preschool",
    title: "Magical Storytelling Circles: Building Language Magic in Gujarat Preschools",
    category: "Educational",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "Fun Gujarati-English storytelling for Surat kids. Boost vocabulary in preschool! | preschool stories Gujarat parents",
    excerpt:
      "Imagine your tot reciting \u201cRaja Vikram aur Betal\u201d with sparkle in their eyes! At Mother Care Pre-School, our 8:30 AM circle time weaves language magic that lasts a lifetime. Language accounts for 50% of preschool learning according to NEP 2020 guidelines, making storytelling one of the most powerful tools in early education.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    imageAlt: "Children sitting in a circle listening to a story with books",
  },
  {
    slug: "surat-stem-preschool-fun",
    title: "STEM Adventures for Tiny Explorers: Simple Science Experiments Surat Parents Love",
    category: "Educational",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "Easy STEM experiments for preschoolers in Surat. Fun science at home! | STEM activities preschool Surat",
    excerpt:
      "Boom! Baking soda volcanoes erupting in Jahangir Pura kitchens? Yes, please! STEM education sparks curiosity and critical thinking from the very earliest years. Research consistently shows that children who explore science, technology, engineering, and math concepts before age 6 develop stronger problem-solving skills throughout their schooling years.",
    image: "https://images.unsplash.com/photo-1532094349884-543559c5e4f9?w=800&q=80",
    imageAlt: "Child doing a colorful science volcano experiment",
  },
  {
    slug: "surat-after-school-routine",
    title: "After-School Routines Surat Moms Swear By: Balancing Homework and Playtime",
    category: "Parenting",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Mother Care Team",
    metaDescription:
      "Perfect after-school schedule for Surat working parents. Preschool tips! | after school routine Surat parents",
    excerpt:
      "1:30 PM pickup chaos \u2014 every Surat parent knows the feeling! The transition from school to home can be hectic, but the right after-school routine makes all the difference. Our recommended approach: a Gujarati farsan snack, 20 minutes of free outdoor play, then a gentle 15-minute review of the day. Structure meets freedom.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    imageAlt: "Child reading book and then playing outdoors in afternoon",
  },
  {
    slug: "screen-time-preschool-india",
    title: "Screen Time Survival Guide: Healthy Digital Habits for Indian Preschool Families",
    category: "Parenting",
    date: "March 23, 2026",
    readTime: "7 min read",
    author: "Mother Care Team",
    metaDescription:
      "Safe screen limits for preschoolers per Indian guidelines. Surat parent guide. | screen time limits preschool India",
    excerpt:
      "The Indian Academy of Pediatrics recommends a maximum of 1 hour per day of screen time for children aged 2\u20135 years. Yet in most Surat homes, that boundary quietly stretches. Swapping cartoon hours for Chhota Bheem dances, outdoor play, and hands-on activities doesn\u2019t have to be a battle. Here\u2019s the practical guide Surat parents actually use.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
    imageAlt: "Family spending quality time together without screens",
  },
  {
    slug: "gujarati-preschool-snacks",
    title: "Nutritious Gujarati Snacks for Preschool Lunchboxes: A Surat Parent\u2019s Guide",
    category: "Parenting",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "Healthy Gujarati lunchbox ideas for preschoolers in Surat. Easy recipes for busy parents! | preschool snacks Gujarat",
    excerpt:
      "Packing a nutritious lunchbox for your preschooler doesn\u2019t have to be stressful. Gujarat\u2019s rich food culture gives Surat parents a wonderful advantage \u2014 from methi thepla and dhokla to chikki and fresh seasonal fruits, the options are both delicious and developmentally appropriate for young children aged 2\u20136.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    imageAlt: "Colorful healthy Gujarati snacks for children's lunchbox",
  },
  {
    slug: "sharing-games-surat-playgroup",
    title: "Teaching Sharing and Kindness: Fun Games for Surat Playgroup Children",
    category: "Social",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "Games to teach sharing and kindness for Surat preschoolers. Build social skills early! | sharing games Surat playgroup",
    excerpt:
      "\u201cMine!\u201d \u2014 every parent of a 2\u20133 year old has heard this word hundreds of times. But sharing and kindness are skills, not personality traits, and they absolutely can be taught through play. At Mother Care Pre-School\u2019s Playgroup, we use simple, joyful games rooted in Gujarati community values to build genuine social generosity from the very start.",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ac6e0d4?w=800&q=80",
    imageAlt: "Children playing together and sharing toys in a playgroup",
  },
  {
    slug: "emotions-preschool-gujarat",
    title: "Helping Preschoolers Understand Emotions: A Gujarat Parent\u2019s Toolkit",
    category: "Social",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Mother Care Team",
    metaDescription:
      "Help your Surat preschooler identify and manage emotions. Practical toolkit for Gujarat parents. | emotions preschool Gujarat",
    excerpt:
      "When your 4-year-old melts down at Lal Darwaja because you bought the wrong colour balloon, it can feel overwhelming. But emotional outbursts are completely normal \u2014 preschoolers\u2019 brains are still developing the frontal cortex needed for emotional regulation. Understanding this changes everything about how Surat parents can respond and support their children.",
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&q=80",
    imageAlt: "Child expressing emotions with a caring adult nearby",
  },
  {
    slug: "teamwork-preschool-surat",
    title: "Building Teamwork Skills Early: Group Activities at Mother Care Pre-School Surat",
    category: "Social",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "How Mother Care Surat builds teamwork in preschoolers through group activities. | teamwork preschool Surat",
    excerpt:
      "Teamwork isn\u2019t just a corporate skill \u2014 it\u2019s a foundational life competency that begins forming in the preschool years. At Mother Care Pre-School in Jahangir Pura, Surat, our structured group activities help children aged 2\u20136 learn to collaborate, communicate, and celebrate together, laying the groundwork for academic and social success.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    imageAlt: "Preschool children working together on a group activity",
  },
  {
    slug: "surat-preschool-admission-2026",
    title: "Surat Preschool Admissions 2026\u201327: Complete Guide for Gujarat Parents",
    category: "Regulations",
    date: "March 23, 2026",
    readTime: "8 min read",
    author: "Mother Care Team",
    metaDescription:
      "Complete guide to Surat preschool admissions 2026-27. Dates, documents, and tips for Gujarat parents. | Surat preschool admission 2026",
    excerpt:
      "Planning your child\u2019s first school admission in Surat can feel like navigating a maze. Between gathering documents, understanding age cutoffs, comparing school philosophies, and meeting deadlines, it\u2019s a lot to manage. This comprehensive guide walks Gujarat parents through every step of the 2026\u201327 preschool admission process \u2014 simplified and stress-free.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    imageAlt: "Parent and child at school admission desk with documents",
  },
  {
    slug: "nep-2020-preschool-safety-surat",
    title: "NEP 2020 and Preschool Safety Standards: What Surat Parents Must Know",
    category: "Regulations",
    date: "March 23, 2026",
    readTime: "7 min read",
    author: "Mother Care Team",
    metaDescription:
      "NEP 2020 preschool safety norms explained for Surat parents. What to check before enrolling. | NEP 2020 preschool safety Surat",
    excerpt:
      "India\u2019s National Education Policy 2020 brought sweeping changes to early childhood education, including specific safety, infrastructure, and curriculum standards for preschools. For Surat parents choosing a school for their 2\u20136 year old, understanding what NEP 2020 actually requires \u2014 and how to verify compliance \u2014 is now an essential part of the admission decision.",
    image: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?w=800&q=80",
    imageAlt: "Safe and well-equipped preschool classroom",
  },
  {
    slug: "preschool-fee-laws-india",
    title: "Preschool Fee Regulations in India: Know Your Rights as a Surat Parent",
    category: "Regulations",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Mother Care Team",
    metaDescription:
      "Understand preschool fee laws in India and Gujarat. Know your rights as a Surat parent. | preschool fee laws India",
    excerpt:
      "Receiving a hefty fee structure from a preschool and wondering what\u2019s legally allowed? You\u2019re not alone. Gujarat has specific fee-regulation frameworks that apply to private preschools, and as a parent, knowing these rules protects you from arbitrary fee hikes, forced purchase of school materials, and unlawful refund denials.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    imageAlt: "Parent reviewing school fee documents",
  },
  {
    slug: "play-based-learning-surat",
    title: "Why Play-Based Learning Works: The Science Behind Mother Care\u2019s Approach",
    category: "Educational",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Mother Care Team",
    metaDescription:
      "Discover why play-based learning is scientifically proven for preschoolers. Mother Care Surat\u2019s approach explained. | play-based learning Surat",
    excerpt:
      "Why do Surat\u2019s top developmental pediatricians consistently recommend play-based preschools over rote-learning institutions for children under 6? The answer lies in neuroscience. When children play, their brains form neural connections at a rate never again matched in life. At Mother Care Pre-School, every activity is deliberately designed around this science.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    imageAlt: "Children engaged in joyful play-based learning activities",
  },
  {
    slug: "jr-kg-preparation-gujarat",
    title: "Is Your Child Ready for Jr KG? A Practical Checklist for Gujarat Parents",
    category: "Educational",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "Jr KG readiness checklist for Gujarat parents. Know the signs your 4-year-old is ready! | Jr KG preparation Gujarat",
    excerpt:
      "The question every Surat parent asks around the time their child turns 4: \u201cAre they ready for Junior KG?\u201d The answer isn\u2019t just about knowing ABCs and 123s. True school readiness encompasses emotional maturity, social skills, fine motor abilities, and communication \u2014 and our practical checklist helps Gujarat parents assess all of these clearly.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    imageAlt: "Four-year-old child ready for Junior KG with backpack",
  },
  {
    slug: "surat-preschool-festivals",
    title: "Celebrating Festivals at Preschool: How Mother Care Surat Builds Cultural Roots",
    category: "Social",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Mother Care Team",
    metaDescription:
      "How Mother Care Surat celebrates Navratri, Diwali and festivals with preschoolers. Cultural learning for kids! | Surat preschool festivals",
    excerpt:
      "From Navratri garba in the classroom to Diwali rangoli-making and Uttarayan kite craft, Mother Care Pre-School in Jahangir Pura, Surat, weaves Gujarat\u2019s rich festival calendar into everyday learning. Cultural celebrations aren\u2019t extracurricular \u2014 they\u2019re core curriculum. Here\u2019s how festivals become the most powerful teachers in our preschool year.",
    image: "https://images.unsplash.com/photo-1605016763844-faa3ca6af54e?w=800&q=80",
    imageAlt: "Children celebrating Diwali with rangoli at preschool",
  },
];
