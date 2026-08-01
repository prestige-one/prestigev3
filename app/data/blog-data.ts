import type { IBlogDT } from "~/types/blog-d-t";

export const digital_marketing_blog_data: IBlogDT[] = [
  {
    id: 1,
    author: "Damien Cabral",
    date: "Dec 10, 2025",
    category: "Marketing",
    title: "Simplicity is process the obvious and adding meaningful.",
    image: '/img/home-03/blog/blog-1.jpg',
  },
  {
    id: 2,
    author: "Elvin Bond",
    date: "Sep 3, 2025",
    category: "Design",
    title: "Design can speak the in tongue of art force of commerce.",
    image: '/img/home-03/blog/blog-2.jpg',
  },
  {
    id: 3,
    author: "Ronald Lara",
    date: "Aug 3, 2025",
    category: "Business",
    title: "Simplicity is removing the excess and focusing on what truly matters.",
    image: '/img/home-03/blog/blog-3.jpg',
  },
];

export const creative_studio_blog_data: IBlogDT[] = [
  {
    id: 4,
    image: '/img/home-04/blog/blog-1.jpg',
    category: "Experience",
    date: "May 15, 2025",
    title: "How to build work culture for <br> young office?",
  },
  {
    id: 5,
    image: '/img/home-04/blog/blog-2.jpg',
    category: "Experience",
    date: "May 15, 2025",
    title: "Thriving Work Culture for Young <br> Professionals",
  },
  {
    id: 6,
    image: '/img/home-04/blog/blog-3.jpg',
    category: "Experience",
    date: "May 15, 2025",
    title: "Fostering Innovation in Young <br> Offices",
  },
];


export const architecture_blogs: IBlogDT[] = [
  {
    id: 7,
    image: '/img/home-08/blog/blog-1.jpg',
    category: 'Architect',
    title: 'Collective Living Challenge In design',
    date: 'September 27, 2025',
    delay: '.3',
  },
  {
    id: 8,
    image: '/img/home-08/blog/blog-2.jpg',
    category: 'Interior',
    title: 'Challenges of Collective Living in Design',
    date: 'September 27, 2025',
    delay: '.4',
  },
  {
    id: 9,
    image: '/img/home-08/blog/blog-3.jpg',
    category: 'Construction',
    title: 'Modern Design for Collective Living Spaces',
    date: 'September 27, 2025',
    delay: '.5',
  },
  {
    id: 10,
    image: '/img/home-08/blog/blog-4.jpg',
    category: 'Interior',
    title: 'The Future of Collective Living Spaces',
    date: 'September 27, 2025',
    delay: '.6',
  },
];


export const ai_image_blog_data: IBlogDT[] = [
  {
    id: 11,
    title: 'Do you know what users think about your app?',
    excerpt: 'Exploring user feedback mechanisms for apps',
    category: 'Creative',
    date: 'Apr 21, 2025',
    image: '/img/home-07/blog/blog-1.jpg',
    commentCount: 0,
  },
  {
    id: 12,
    title: 'How Do Users Feel <br> About My App?',
    excerpt: 'Understanding user sentiment analysis',
    category: 'Design',
    date: 'Apr 17, 2025',
    image: '/img/home-07/blog/blog-2.jpg',
    commentCount: 0,
  },
  {
    id: 13,
    title: 'What’s the User Verdict <br> on My App?',
    excerpt: 'Measuring app success through user ratings',
    category: 'Creative',
    date: 'Apr 25, 2025',
    image: '/img/home-07/blog/blog-3.jpg',
    commentCount: 0,
  },
];

export const corporate_agency_blogs: IBlogDT[] = [
  {
    id: 14,
    image: '/img/home-09/blog/blog-1.jpg',
    date: "Mar 15, 2022",
    title: "Be the strong willed one <br/> the public relationship.",
    categories: ["Website", "Business"],
    delay: "0.1",
  },
  {
    id: 15,
    image: '/img/home-09/blog/blog-2.jpg',
    date: "Mar 15, 2022",
    title: "Your worth is not <br/> up for public debate.",
    categories: ["Website", "Business"],
    delay: "0.3",
  },
  {
    id: 16,
    image: '/img/home-09/blog/blog-3.jpg',
    date: "Mar 15, 2022",
    title: "Protect your <br/> peace like it's gold.",
    categories: ["Website", "Business"],
    delay: "0.5",
  },
];

export const crypto_currency_blogs: IBlogDT[] = [
  {
    id: 17,
    image: '/img/home-13/blog/blog-thumb-1.jpg',
    category: 'Crypto',
    title: 'AI Agents: The next step change in crypto adoption',
    date: 'Apr 21, 2020',
    commentCount: 0,
  },
  {
    id: 18,
    image: '/img/home-13/blog/blog-thumb-2.jpg',
    category: 'Newsletter',
    title: 'Weekly crypto close: <br> AI buzz shakes markets',
    date: 'Apr 21, 2020',
    commentCount: 0,
  },
  {
    id: 19,
    image: '/img/home-13/blog/blog-thumb-3.jpg',
    category: 'Creative',
    title: 'Advancing Australia’s <br> crypto strategy',
    date: 'Apr 21, 2020',
    commentCount: 0,
  },
]

export const startup_blogs: IBlogDT[] = [
  {
    id: 20,
    title: "Developed visionary Designs <br> with spectacular ideas",
    image: '/img/home-12/blog/st-blog-1.jpg',
    category: "Startup",
    date: "Aug 3, 2025"
  },
  {
    id: 21,
    title: "Solving user pain points: A deep <br> dive into spotify UX",
    image: '/img/home-12/blog/st-blog-2.jpg',
    category: "Startup",
    date: "Aug 3, 2025"
  },
  {
    id: 22,
    title: "How to solve issues with design",
    image: '/img/home-12/blog/st-blog-3.jpg',
    category: "Startup",
    date: "Aug 3, 2025"
  }
]

// ---------------------------------------------------------------------------
// Prestige One Media Center
//
// Real, brand-plausible editorial + news content powering the Media Center
// (/media), Blog (/blog + /blog/[slug]) and the category pages
// (/construction-updates, /press-release, /industry-news). Kept alongside the
// theme's demo blog arrays above; the two do not interact.
// ---------------------------------------------------------------------------

export type ArticleCategory = "blog" | "construction" | "press" | "industry";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  /** ISO-ish date string, e.g. "2026-03-14" */
  date: string;
  category: ArticleCategory;
  author?: string;
  /** HTML string - 3–5 paragraphs, may include an <h2> */
  body: string;
  /** optional related development slug (links to /projects/<project>) */
  project?: string;
}

export interface ArticleCategoryMeta {
  key: ArticleCategory;
  label: string;
  route: string;
}

export const categories: ArticleCategoryMeta[] = [
  { key: "blog", label: "Blog", route: "/blog" },
  { key: "construction", label: "Construction Updates", route: "/construction-updates" },
  { key: "press", label: "Press Releases", route: "/press-release" },
  { key: "industry", label: "Industry News", route: "/industry-news" },
];

export function categoryLabel(key: ArticleCategory): string {
  return categories.find((c) => c.key === key)?.label ?? key;
}

export const articles: Article[] = [
  {
    slug: "construction-update-fauchon-residences",
    title: "Construction Update: FAUCHON Résidences by Prestige One",
    excerpt:
      "Structural works advance on schedule as FAUCHON Résidences rises floor by floor, bringing Parisian art de vivre to Dubai.",
    cover: "/assets/images/v2/news/2K6A3227-scaled.webp",
    date: "2026-06-18",
    category: "construction",
    author: "Prestige One Developments",
    project: "fauchon-residences-by-prestige-one",
    body: `<p>Work at FAUCHON Résidences by Prestige One continues to progress in line with the delivery programme, with the main structure now well advanced and the tower taking on its final silhouette against the skyline. Our contracting teams have completed the core concrete works across the podium levels and are moving steadily through the upper residential floors.</p>
<h2>Where the project stands today</h2>
<p>The reinforced concrete frame has reached its typical floor cycle, and blockwork for the internal partitions is following close behind. In parallel, the mechanical, electrical and plumbing first-fix has begun on the completed lower levels, allowing several trades to work concurrently without compromising the sequencing that keeps the programme on track.</p>
<p>Façade mock-ups have been reviewed and approved, and the first production panels are now being prepared for installation. The FAUCHON design language - refined, warm and unmistakably Parisian - informs every material selection, from the stone tones of the exterior to the joinery that will define the residences within.</p>
<p>Quality assurance remains central to how we build. Each completed floor is inspected against our internal benchmarks before the next pour is authorised, and independent consultants continue to sign off on structural and safety milestones as they are reached.</p>
<p>We look forward to sharing the next milestone as the façade begins to wrap the building and the interiors move into fit-out. FAUCHON Résidences remains on course to deliver the everyday luxury our buyers were promised at launch.</p>`,
  },
  {
    slug: "seaside-construction-progress",
    title: "Seaside by Prestige One - Construction Progress",
    excerpt:
      "The Seaside building reaches a key structural milestone as waterfront residences move toward handover.",
    cover: "/assets/images/v2/news/Seaside_Building-1-scaled-2.webp",
    date: "2026-05-02",
    category: "construction",
    author: "Prestige One Developments",
    project: "seaside-by-prestige-one",
    body: `<p>Seaside by Prestige One has reached an important stage in its construction journey, with the primary structure now topped out and enclosure works accelerating across the building. The achievement marks the transition from heavy structural work to the finishing phases that residents will ultimately experience.</p>
<p>With the frame complete, teams have turned their attention to the building envelope. Glazing and cladding installation is underway, progressively sealing the tower and allowing interior trades to begin work in a controlled, weather-protected environment. This sequencing is central to protecting the quality of the finishes that define a Prestige One home.</p>
<p>Amenity areas - including the residents' pool deck and landscaped terraces that give Seaside its name - are being coordinated in detail so that the waterfront lifestyle promised at launch is delivered exactly as envisioned. Early works on the surrounding hardscape and podium landscaping have also commenced.</p>
<p>Our site leadership continues to manage the programme with a focus on safety and consistency, holding regular coordination reviews with consultants and contractors. We remain committed to keeping our buyers informed as Seaside moves steadily toward completion.</p>`,
  },
  {
    slug: "the-one-construction-milestone",
    title: "The One - Construction Milestone",
    excerpt:
      "The One reaches a defining construction milestone as it advances toward becoming a landmark address.",
    cover:
      "/assets/images/v2/pages/pages-internal-images/constructions/The-One-Construction-Update-1.webp",
    date: "2026-04-11",
    category: "construction",
    author: "Prestige One Developments",
    project: "the-one-by-prestige-one",
    body: `<p>The One by Prestige One has passed a defining construction milestone, reinforcing its position as one of the most anticipated addresses in our portfolio. The latest phase of works has seen significant progress across both the structure and the early finishing packages.</p>
<h2>A landmark takes shape</h2>
<p>The superstructure has advanced through the upper floors, and the distinctive massing that sets The One apart is now clearly legible on site. With the concrete frame nearing completion, the project team has begun mobilising the façade and interior fit-out trades that will bring the architecture to life.</p>
<p>Behind the visible progress, the less glamorous but equally critical systems - vertical transportation, building services risers and life-safety infrastructure - are being installed and tested to the standards our residents expect. These systems are the backbone of a well-run building, and we invest the time to get them right.</p>
<p>Every milestone at The One is measured against a clear delivery roadmap, and we are pleased to report the project remains aligned with its committed timeline. We will continue to update our community as the building moves into its finishing chapters.</p>`,
  },
  {
    slug: "first-hilton-branded-residences-uae",
    title:
      "First Hilton Branded Residences to Debut in the UAE with Prestige One",
    excerpt:
      "Prestige One partners with Hilton to bring the first Hilton branded residences to the UAE at Dubai Maritime City.",
    cover:
      "/assets/images/v2/press-releases/First-Hilton-branded-residences-to-debut-in-UAE-with-Prestige-One.webp",
    date: "2026-03-14",
    category: "press",
    author: "Prestige One Developments",
    project: "hilton-residences-dubai-maritime-city",
    body: `<p>Prestige One Developments is proud to announce a landmark partnership with Hilton to introduce the first Hilton branded residences in the United Arab Emirates, to be located in the waterfront community of Dubai Maritime City. The collaboration brings one of the world's most recognised hospitality names together with Prestige One's design-led approach to residential development.</p>
<h2>Hospitality meets home</h2>
<p>The residences will pair the comfort and reliability of the Hilton name with thoughtfully designed homes overlooking the harbour and the Dubai skyline. Residents will benefit from a curated suite of services and amenities delivered to hotel-brand standards, translating the ease of a Hilton stay into everyday living.</p>
<p>"Bringing Hilton's first branded residences to the UAE is a defining moment for Prestige One and for Dubai's branded residential market," a company spokesperson said. "It reflects the confidence our partners place in our ability to deliver exceptional homes in the city's most promising destinations."</p>
<p>The development will offer a range of one- and two-bedroom apartments alongside signature duplexes, each finished to a specification that reflects both brands' commitment to quality. Amenities are planned to include resort-style leisure facilities, wellness spaces and generous social areas.</p>
<p>The announcement underscores Prestige One's growing reputation as a partner of choice for globally recognised brands seeking to enter the Dubai market, and marks another step in the company's ambition to shape the future of branded living in the region.</p>`,
  },
  {
    slug: "prestige-one-argentina-national-team-sponsorship",
    title:
      "Prestige One Named Exclusive Real Estate Regional Sponsor of the Argentina National Team",
    excerpt:
      "Prestige One becomes the exclusive regional real estate sponsor of the Argentina National Team, uniting two symbols of ambition and excellence.",
    cover: "/assets/images/v2/pages/AFA-sponsorship-1-1.webp",
    date: "2026-02-20",
    category: "press",
    author: "Prestige One Developments",
    body: `<p>Prestige One Developments has been named the exclusive real estate regional sponsor of the Argentina National Team, a partnership that brings together two names synonymous with ambition, discipline and world-class performance. The agreement aligns the developer with one of the most celebrated teams in international football.</p>
<h2>A partnership built on excellence</h2>
<p>The sponsorship reflects shared values that extend well beyond the pitch. Both organisations are defined by a relentless pursuit of excellence, a commitment to teamwork, and the belief that lasting success is built through consistency and care. For Prestige One, these are the same principles that guide the design and delivery of every home.</p>
<p>"We are honoured to stand alongside a team that inspires millions around the world," a Prestige One spokesperson said. "This partnership allows us to connect with a global audience who share our appreciation for craft, character and achievement at the highest level."</p>
<p>The collaboration will see Prestige One engage with fans across the region through a series of activations, bringing the energy and passion of the game closer to the communities the developer serves. It also strengthens the brand's international profile as it continues to grow its portfolio in Dubai and beyond.</p>
<p>The announcement marks a proud milestone in Prestige One's journey and reaffirms its ambition to associate with the very best in every field it touches.</p>`,
  },
  {
    slug: "prestige-one-aed-500-million-investment",
    title: "Prestige One Announces AED 500 Million Investment",
    excerpt:
      "Prestige One commits AED 500 million to expand its development pipeline and accelerate delivery across Dubai.",
    cover: "/assets/images/v2/news/500-Million.webp",
    date: "2026-01-16",
    category: "press",
    author: "Prestige One Developments",
    body: `<p>Prestige One Developments has announced a significant AED 500 million investment to expand its development pipeline and strengthen its delivery capacity across Dubai. The commitment underlines the company's confidence in the emirate's real estate market and its long-term growth trajectory.</p>
<h2>Investing in the future of Dubai living</h2>
<p>The capital will be directed toward acquiring strategic land parcels in high-demand destinations, advancing projects already in planning, and reinforcing the operational infrastructure that supports on-time, on-quality delivery. It represents one of the most substantial commitments in the company's history to date.</p>
<p>"This investment is a statement of intent," a company spokesperson said. "Dubai continues to attract residents and investors from around the world, and we are positioning Prestige One to meet that demand with homes that stand apart in design, quality and value."</p>
<p>The announcement comes amid sustained momentum across Dubai's residential sector, where demand for well-located, thoughtfully designed homes has remained robust. Prestige One's expanded pipeline is expected to bring several new communities to market over the coming period.</p>
<p>Beyond new launches, a portion of the investment will support enhancements to customer experience and post-handover services, reflecting the company's belief that the relationship with a buyer continues long after the keys are handed over.</p>`,
  },
  {
    slug: "coastal-haven-groundbreaking-ceremony",
    title: "Coastal Haven Groundbreaking Ceremony",
    excerpt:
      "Prestige One marks the official groundbreaking of Coastal Haven, a serene waterfront community in the making.",
    cover: "/assets/images/v2/news/Coastal-Haven-Groundbreaking.jpeg.webp",
    date: "2025-11-27",
    category: "press",
    author: "Prestige One Developments",
    project: "coastal-haven-by-prestige-one",
    body: `<p>Prestige One Developments has officially broken ground on Coastal Haven, marking the start of construction on one of its most eagerly awaited waterfront communities. The ceremony brought together partners, consultants and members of the Prestige One team to celebrate the beginning of a new chapter.</p>
<h2>From vision to foundation</h2>
<p>The groundbreaking represents the moment a carefully considered vision begins its transformation into a tangible place to call home. Enabling works and foundation activities are now underway, setting the stage for the structure to rise in the months ahead.</p>
<p>Coastal Haven has been designed around a simple but powerful idea: that living by the water should feel calm, connected and effortless. The community's architecture and landscaping have been shaped to make the most of its setting, with generous open spaces and a rhythm of amenities that encourage residents to slow down and enjoy their surroundings.</p>
<p>"Today we turn the first ground on a community we believe people will genuinely love living in," a Prestige One spokesperson said at the ceremony. "Coastal Haven reflects everything we stand for - considered design, honest quality and a deep respect for the way people actually want to live."</p>
<p>With construction now formally commenced, Prestige One looks forward to sharing regular updates as Coastal Haven progresses toward delivery.</p>`,
  },
  {
    slug: "prestige-one-al-shafar-partnership-signing",
    title: "Prestige One & Al Shafar Partnership Signing",
    excerpt:
      "Prestige One and Al Shafar formalise a strategic partnership to strengthen construction delivery and quality.",
    cover: "/assets/images/v2/news/Website_images_23Feb-AlliedSigning.jpg",
    date: "2025-10-09",
    category: "press",
    author: "Prestige One Developments",
    body: `<p>Prestige One Developments has formalised a strategic partnership with Al Shafar, one of the region's most respected contracting groups, through an official signing ceremony. The agreement strengthens Prestige One's construction delivery capabilities and reinforces its commitment to building homes of enduring quality.</p>
<h2>A shared commitment to quality</h2>
<p>The partnership brings together Prestige One's design-led development philosophy and Al Shafar's proven track record in delivering complex projects to exacting standards. Together, the two organisations aim to raise the bar for construction excellence across the developer's growing portfolio.</p>
<p>"Choosing the right partners is one of the most important decisions we make," a Prestige One spokesperson said. "Al Shafar shares our uncompromising approach to quality and our belief that how a building is made matters just as much as how it looks."</p>
<p>Under the agreement, the two companies will collaborate closely on programme management, quality assurance and site safety, ensuring that projects are delivered efficiently without ever compromising on the details that define a Prestige One home.</p>
<p>The signing marks another step in Prestige One's strategy of surrounding itself with best-in-class partners as it scales its operations and continues to bring new communities to market.</p>`,
  },
  {
    slug: "why-dubai-remains-top-property-investment-destination",
    title: "Why Dubai Remains a Top Destination for Property Investment",
    excerpt:
      "A closer look at the fundamentals that keep Dubai at the forefront of global real estate investment.",
    cover: "/assets/images/v2/locations/JBR.webp",
    date: "2026-05-21",
    category: "industry",
    author: "Prestige One Developments",
    body: `<p>Dubai has firmly established itself as one of the world's most compelling real estate markets, attracting investors from every continent. But the enduring appeal of the emirate is not accidental - it rests on a foundation of clear, durable fundamentals that continue to reward those who buy well.</p>
<h2>Fundamentals that endure</h2>
<p>Chief among these is the city's tax environment. The absence of annual property tax and capital gains tax on residential real estate allows investors to retain more of their returns, a rarity among leading global cities. Combined with attractive rental yields relative to mature markets, the numbers make a persuasive case.</p>
<p>Connectivity is another pillar. Dubai's position at the crossroads of Europe, Asia and Africa, served by world-class aviation and logistics infrastructure, makes it a natural hub for business and lifestyle alike. Residents can reach much of the world within a single flight, and that accessibility supports sustained demand for quality homes.</p>
<p>Regulatory maturity has also transformed the market. Robust escrow protections, a well-defined off-plan framework and long-term residency options have given international buyers greater confidence than ever before. These safeguards reward informed, patient investment.</p>
<p>For those seeking to participate, the key is selectivity - location, developer track record and design quality remain the truest predictors of long-term value. It is precisely these fundamentals that guide every address Prestige One chooses to build.</p>`,
  },
  {
    slug: "branded-residences-fastest-growing-segment",
    title:
      "Branded Residences: The Fastest-Growing Segment in Dubai Real Estate",
    excerpt:
      "Why branded residences have become the standout segment in Dubai's property market - and what buyers should know.",
    cover: "/assets/images/v2/our-destinations/dubai-Islands.webp",
    date: "2026-04-03",
    category: "industry",
    author: "Prestige One Developments",
    body: `<p>Few segments of Dubai's real estate market have grown as quickly, or as decisively, as branded residences. Once a niche offering, homes carrying the name of a globally recognised hospitality or lifestyle brand now sit at the centre of buyer demand - and the trend shows little sign of slowing.</p>
<h2>What is driving the shift</h2>
<p>The appeal is rooted in a simple promise: the confidence of a trusted name combined with a home. Branded residences typically deliver a consistency of design, service and management that reassures buyers, particularly international purchasers who may not be resident year-round. That reassurance translates directly into value.</p>
<p>Research across global markets consistently shows that branded residences command a premium over comparable unbranded homes, and often hold their value more resiliently. For investors, the combination of stronger resale performance and a clearer rental proposition is difficult to ignore.</p>
<p>For residents, the benefits are experiential as much as financial. Curated amenities, professional management and thoughtfully considered service turn the everyday into something closer to hospitality - without sacrificing the privacy and permanence of a home.</p>
<p>As Dubai continues to attract global capital and talent, branded residences are well positioned to remain the market's standout segment. It is a space Prestige One knows intimately, having partnered with some of the world's most respected names to bring branded living to the city.</p>`,
  },
  {
    slug: "buyers-guide-off-plan-property-dubai",
    title: "A Buyer's Guide to Off-Plan Property in Dubai",
    excerpt:
      "Everything a first-time buyer should understand about purchasing off-plan property in Dubai with confidence.",
    cover: "/assets/images/v2/our-destinations/palm-jumeira.webp",
    date: "2026-03-28",
    category: "blog",
    author: "Prestige One Developments",
    body: `<p>Buying off-plan - purchasing a home before it is built - remains one of the most popular routes into Dubai's property market. Done well, it offers attractive pricing, flexible payment plans and the chance to secure a brand-new home in a sought-after community. Done without preparation, it can feel daunting. This guide breaks down what every buyer should know.</p>
<h2>Understanding how off-plan works</h2>
<p>When you buy off-plan, you typically pay in structured instalments tied to construction milestones, with the balance often payable on or after handover. This staged approach can make ownership more accessible than a completed property, spreading the commitment across the build period rather than requiring it all upfront.</p>
<p>Crucially, buyer funds in Dubai are protected by escrow regulations. Payments are held in a project-specific escrow account and released to the developer only as verified construction progress is achieved - a safeguard that has done much to build confidence in the market.</p>
<p>The most important due diligence you can do is on the developer. A strong track record of delivering on time and to the promised quality is the single best indicator of a smooth experience. Review past projects, visit completed communities where possible, and read the sales agreement carefully.</p>
<p>Finally, think beyond price. Location, layout efficiency, and the credibility of the amenities and design all shape both your enjoyment of the home and its long-term value. Off-plan is not simply about buying early - it is about buying well, and the right developer makes all the difference.</p>`,
  },
  {
    slug: "designing-homes-people-love-prestige-one-philosophy",
    title: "Designing Homes People Love Living In: The Prestige One Philosophy",
    excerpt:
      "A look inside the design philosophy that shapes every Prestige One home - from the first sketch to the finished space.",
    cover: "/assets/images/v3/Designed-for-Real-Living.webp",
    date: "2026-02-05",
    category: "blog",
    author: "Prestige One Developments",
    body: `<p>At Prestige One, we begin every project with a single question: how do people actually want to live? It sounds simple, but keeping that question at the centre of the design process is what separates a house from a home - and it is the thread that runs through everything we build.</p>
<h2>Design that serves real life</h2>
<p>Good design is not about grand gestures for their own sake. It is about the quiet decisions that make daily life easier and more pleasurable: the way light moves through a room over the course of a day, the generosity of a hallway, the placement of a window that frames a view worth pausing for. These details rarely announce themselves, but they are felt every single day.</p>
<p>We design layouts around how people move and gather, not around maximising unit counts. Kitchens open to living spaces where families come together. Bedrooms are treated as retreats. Storage is planned, not squeezed in as an afterthought. The result is a home that works with you rather than against you.</p>
<p>Material choices matter just as much. We favour finishes that age gracefully and feel good to touch, selecting quality that endures over trends that fade. A home should look as considered in ten years as it does on handover day.</p>
<p>Ultimately, our philosophy is a commitment to the people who will live in what we build. Every sketch, specification and site decision is measured against a simple standard - would we want to live here ourselves? When the answer is an unreserved yes, we know we have designed a home people will love.</p>`,
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}