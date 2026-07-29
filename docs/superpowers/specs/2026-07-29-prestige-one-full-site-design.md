# Prestige One — Full Website Build (Design Spec)

**Date:** 2026-07-29
**Author:** Continuing Sumith's Nuxt redesign
**Status:** Approved direction; building autonomously per user instruction ("build it all, I'll review")

## 1. Goal

Complete the Prestige One Developments website by building out **every page** in the same dark,
cinematic, scroll-animated design language Sumith established on the homepage. Reuse his
`prestige-*` components, SCSS, and GSAP utilities. Replace the leftover multi-purpose template
pages with a coherent, brand-specific site.

Reference: live site https://prestigeone.ae (WordPress) — we match its information architecture
and real content, in the new design.

## 2. Design language (fixed — do not redesign)

- Permanent dark theme (`agntix-dark`, black body). Gold/amber accent (`#ffcf8a`-ish), white text.
- Serif display headings + the theme's sans body. "Text-paint" headline reveals on scroll
  (`prestige-text-paint` + `prestigeDevelopmentsReveal`).
- GSAP ScrollTrigger + ScrollSmooth, Swiper coverflow, WebGL/hover-effect distortion, hero video.
- Glass surfaces (backdrop-blur) for header pill, off-canvas, cards.
- Magic cursor, back-to-top, footer already exist and are reused site-wide via `layout-one`.

## 3. Navigation — "Split Reveal" off-canvas (Option B, chosen)

The single nav used on every page. Replaces the current small dropdown header + basic mobile
off-canvas with one immersive full-screen off-canvas.

- **Trigger:** header stays the fixed glass pill (logo left, hamburger + "Get in touch"/WhatsApp
  right). Clicking the hamburger opens the full-screen off-canvas.
- **Layout (desktop):** two columns.
  - **Left:** large serif nav list — Home, Projects, Destinations, About, Media, Contact.
    Secondary links (Broker Registration, Invest, Virtual Tour) below in smaller type. Contact
    block (phone/email/address) + socials at the bottom.
  - **Right (~45%):** a media panel. Each top-level item has an associated image/video; hovering
    an item cross-fades the panel to that media. Default shows a featured project. Caption in the
    corner (e.g. "Projects ▸").
- **Motion:** panel slides/fades in; nav items stagger up (GSAP). Media cross-fade on hover.
  Page behind is hidden/dimmed. Close button top-right + Esc + overlay click.
- **Mobile:** collapses to a single full-screen column (nav list + contact/social); the media
  panel is hidden or becomes a slim featured strip.
- **Implementation:** new `prestige-offcanvas-nav.vue` (replaces `offcanvas-mobile-area-prestige`
  usage in the header). Nav items + their media come from `menu-data-prestige.ts` (extended with
  real routes + a `media` field). State + Esc handling in the component; opened from
  `prestige-header-ten.vue`.

## 4. Routing & page inventory

All routes are real Nuxt pages under `app/pages/`. Detail pages use **one template + a data file**.
Placeholder `#` links across header, footer, data files, and offcanvas get wired to these routes.

| Route | Page | Source |
|---|---|---|
| `/` | Home | exists (Sumith) — keep |
| `/about-us` | About Us | new |
| `/contact-us` | Contact Us | new (reuse `prestige-contact-form`) |
| `/virtual-tour` | Virtual Tour | new |
| `/projects` | Projects listing (filterable grid) | new, from residential+commercial+upcoming data |
| `/projects/[slug]` | Project detail (template) | new template, per data record |
| `/destinations` | Destinations index | new |
| `/destinations/[slug]` | Destination detail (template) | new template + destinations data |
| `/media` | Media Center hub | new |
| `/blog` | Blog listing | new |
| `/blog/[slug]` | Article detail (template) | new template + blog data |
| `/construction-updates` | Construction Updates | new (blog-style, tagged) |
| `/press-release` | Press Release | new (blog-style, tagged) |
| `/industry-news` | Industry News | new (blog-style, tagged) |
| `/broker-registration` | Broker Registration (form) | new |
| `/invest` | Invest in Prestige One | new |
| `/project-documents` | Project Documents (gated list) | new |
| `/csr` | Corporate Social Responsibility | new |
| `/privacy-policy` | Privacy Policy | new (legal template) |
| `/terms-conditions` | Terms & Conditions | new (legal template) |
| `/marketing-terms` | Marketing Terms & Conditions | new (legal template) |

Media Center sub-pages (construction/press/industry) and legal pages share templates driven by a
`kind`/`tag` prop to avoid duplication.

## 5. Data model

Extend existing `app/data/` files (keep the `DevelopmentSlide` shape, add fields):

- `residential-developments-data.ts` / `commercial-developments-data.ts` /
  `upcoming-developments-data.ts`: add `slug`, `category`, `status`, and detail fields
  (`hero`, `gallery[]`, `overview`, `highlights[]`, `location{lat,lng,area}`, `specs{}`,
  `brochureUrl`). A unified `getAllProjects()` / `getProjectBySlug()` helper in
  `app/data/projects.ts`.
- `destinations-data.ts` (new): the 9 areas (Dubai Islands, MBR City, Dubai Sports City, JVC,
  Palm Jumeirah, Barsha Heights, DLRC, Dubai Maritime City, Jumeirah Garden City) with
  `slug`, `name`, `hero`, `intro`, `projects[]` (linked by project slug), `highlights[]`.
- `blog-data.ts` (new): articles with `slug`, `title`, `excerpt`, `cover`, `date`, `category`
  (blog | construction | press | industry), `body` (markdown/HTML), `project?`.
- `menu-data-prestige.ts`: real routes + `media` field for the Split Reveal panel.
- `countries-data.ts`: reused as-is for phone inputs.

Content is pulled from prestigeone.ae (real project names, locations, copy, contact details).
Images: reuse existing `public/assets` where present; where a real asset is missing, use an
existing project image as a tasteful stand-in and flag it in `// TODO(content)` comments — never
invent fake data presented as real.

## 6. Immersive treatments (site-wide)

- **Page transitions:** Nuxt `pageTransition` — a dark cinematic fade/curtain between routes
  (respect `prefers-reduced-motion`).
- **Scroll:** ScrollSmooth + `prestigeDevelopmentsReveal`/`fade`/`reveal`/`zoom` reused on every
  page. Each page composes an `onMounted` GSAP init like the homepage (extract shared init into a
  `usePrestigePage()` composable to avoid copy-paste across pages).
- **Hero per page:** every top page gets a short hero (image or video) with the text-paint reveal.
- **Project/destination cards:** WebGL hover distortion (existing `useHoverEffect`).
- **Mobile:** add the missing mobile hero animation path (current hero anim is desktop-only).

## 7. Forms & backend

Contact, newsletter, and broker-registration forms become functional:

- Client-side validation (required fields, email/phone format), success/error states in the
  existing `.ajax-response` slot.
- A Nuxt server route `server/api/contact.post.ts` (+ `broker.post.ts`, `newsletter.post.ts`)
  that validates server-side and is structured to send email via an SMTP/provider adapter. For
  now it logs + returns success; actual delivery needs credentials (documented as a follow-up).
  No secrets committed.

## 8. Cleanup

- Remove the leftover template demo pages/components not used by Prestige One (the `(homes)`
  demos, unrelated `(pages)`, shop/portfolio/team demos, etc.) once the real pages exist and no
  imports depend on them. Keep shared primitives (svg icons, layout-one, magic cursor, back-to-top,
  footer, buttons) that our pages use.
- Fix data contradictions (Vista/Waterway location vs description) and reused placeholder images.
- Remove dead `prestige-residential-marquee.vue` if still unused after the projects page is built.

## 9. Build order (phases)

1. **Foundation:** extend `menu-data-prestige`, build `prestige-offcanvas-nav` (Split Reveal),
   wire header to it, add `usePrestigePage()` composable + page transition config, wire footer/
   header/offcanvas `#` links to real routes.
2. **Projects:** `projects.ts` data + helpers, `/projects` listing (filter by category/status),
   `/projects/[slug]` detail template.
3. **Destinations:** `destinations-data.ts`, `/destinations` + `/destinations/[slug]`.
4. **Company pages:** About, Contact, Virtual Tour, Invest, Broker Registration, CSR,
   Project Documents.
5. **Media Center:** `blog-data.ts`, `/media`, `/blog` + `/blog/[slug]`, construction/press/industry.
6. **Legal:** privacy/terms/marketing (shared template).
7. **Forms backend:** server API routes + validation.
8. **Cleanup + polish:** remove demo pages, fix content/images, mobile hero anim, responsive pass,
   `npm run build` + lint green.

## 10. Success criteria

- Every route above renders in the dark cinematic style with the Split Reveal nav.
- No `#` placeholder links remain in header/footer/offcanvas/data for in-scope pages.
- Forms validate and submit (to the stubbed API) with visible success/error states.
- `npm run build` succeeds; `npx eslint .` clean; no leftover template demo routes.
- Responsive (desktop/tablet/mobile) and reduced-motion respected.

## Open assumptions (chosen without blocking)

- Email delivery provider not specified → API routes stubbed, ready to wire; flagged as follow-up.
- Real high-res project imagery not all present → reuse existing assets as stand-ins with TODOs.
- Blog article bodies not fully scraped → seed with real titles/excerpts from the live site + a
  representative body; expand later.
