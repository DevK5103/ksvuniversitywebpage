# KSV Website — Complete Implementation Plan
## Kadi Sarva Vishwavidyalaya (ksv.ac.in) — Redesign & Build

---

## OVERVIEW

This document outlines the end-to-end implementation plan for the Kadi Sarva Vishwavidyalaya (KSV) website — a fully responsive, interactive, and professional university portal. The site serves 50,000+ students, 5,000+ teachers, and the general public across India and globally.

---

## SECTION 1 — DESIGN SYSTEM & BRAND IDENTITY

### 1.1 Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--ksv-primary` | `#1A3A6B` (Deep Navy Blue) | Primary headings, header, footer |
| `--ksv-secondary` | `#C8973A` (Gold / Saffron) | CTAs, accents, highlights |
| `--ksv-accent` | `#E8F0FE` (Light Blue tint) | Section backgrounds |
| `--ksv-green` | `#2E7D32` (Forest Green) | SDG/sustainability badges |
| `--ksv-dark` | `#0D1B2A` | Body text, dark sections |
| `--ksv-light` | `#F8F9FC` | Page backgrounds |
| `--ksv-white` | `#FFFFFF` | Cards, modals |
| `--ksv-border` | `#DDE3EE` | Card borders, dividers |

### 1.2 Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display / Hero | `Playfair Display` (serif) | 700–900 | H1, hero titles, section banners |
| Headings | `Poppins` (sans-serif) | 600–700 | H2–H4, nav, card titles |
| Body | `Inter` (sans-serif) | 400–500 | Paragraphs, descriptions |
| Data / Stat | `Space Grotesk` | 700 | Numbers, counters, stat blocks |
| Hindi/Motto | `Noto Serif Devanagari` | 400 | Motto: *Kar Bhala Hoga Bhala* |

Load via Google Fonts CDN. Implement `font-display: swap` for performance.

### 1.3 Spacing & Layout

- Base unit: `8px`
- Container max-width: `1280px` (fluid below)
- Grid: 12-column CSS Grid with `gap: 24px`
- Breakpoints:
  - Mobile: `< 640px`
  - Tablet: `640px – 1023px`
  - Desktop: `≥ 1024px`
  - Wide: `≥ 1280px`

### 1.4 Component Tokens

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
--shadow-card: 0 2px 16px rgba(0,0,0,0.08);
--shadow-hover: 0 8px 32px rgba(26,58,107,0.15);
--transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## SECTION 2 — TECHNOLOGY STACK

### 2.1 Recommended Stack (Production)

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14** (App Router) + TypeScript |
| Styling | **Tailwind CSS** + custom CSS variables |
| Animations | **Framer Motion** (page transitions, scroll triggers) |
| UI Components | **shadcn/ui** (base) + custom KSV components |
| Icons | **Lucide React** + custom SVG assets |
| CMS | **Sanity.io** or **Strapi** (headless, for news/events/notices) |
| Forms | **React Hook Form** + **Zod** validation |
| Deployment | **Vercel** or **cPanel** (university hosting) |
| SEO | Next.js metadata API + `next-sitemap` |
| Analytics | Google Analytics 4 |
| PDF Viewer | `react-pdf` or direct link to `/docs/` |

### 2.2 Alternate Stack (Simpler)

For institutions preferring traditional hosting:
- **HTML5 + CSS3 + Vanilla JS** (multi-page)
- **Bootstrap 5** or custom grid
- **Swiper.js** for sliders
- **AOS.js** for scroll animations
- **PHP** backend for contact forms

---

## SECTION 3 — SITE ARCHITECTURE & PAGES

### 3.1 Complete Sitemap

```
/ (Home)
├── /about
│   ├── /about#svkm-trust
│   ├── /about#university
│   ├── /about#president-desk
│   ├── /about#management
│   └── /about/acts (University Acts 2007 & 2012)
│
├── /academics
│   ├── /academics/research
│   │   ├── /academics/phd
│   │   └── /academics/mphil
│   ├── /academics/postgraduate
│   │   ├── /academics/pg/me (Master of Engineering)
│   │   ├── /academics/pg/msc
│   │   ├── /academics/pg/mba
│   │   ├── /academics/pg/mca
│   │   ├── /academics/pg/mcom
│   │   ├── /academics/pg/msc-nursing
│   │   ├── /academics/pg/msw
│   │   ├── /academics/pg/mpharm
│   │   ├── /academics/pg/pharmd
│   │   ├── /academics/pg/pharmd-pb
│   │   └── /academics/pg/pgdjmc
│   ├── /academics/undergraduate
│   │   ├── /academics/ug/be
│   │   ├── /academics/ug/bsc
│   │   ├── /academics/ug/bpt
│   │   ├── /academics/ug/bsc-nursing
│   │   ├── /academics/ug/bpharm
│   │   ├── /academics/ug/bba
│   │   ├── /academics/ug/bca
│   │   ├── /academics/ug/bed
│   │   └── /academics/ug/bcom
│   ├── /academics/certificate
│   ├── /academics/syllabus
│   ├── /academics/admission
│   ├── /academics/fees
│   └── /academics/nep
│
├── /campuses
│   ├── /campuses/gandhinagar
│   └── /campuses/kadi
│
├── /sister-concerns
│
├── /cells-centers
│   ├── /cells/dir (International Relations)
│   ├── /cells/wec
│   ├── /cells/wdc
│   ├── /cells/iqac
│   ├── /cells/mmpsrpc
│   ├── /cells/anti-ragging
│   ├── /cells/iii-cell
│   ├── /cells/sports
│   ├── /cells/laksh
│   ├── /cells/social-responsibility
│   └── /cells/vijaya-arts
│
├── /research
│   ├── /research/supercomputer
│   ├── /research/funded-projects
│   ├── /research/repository
│   ├── /research/papers-published
│   ├── /research/books-published
│   ├── /research/patents
│   └── /research/phd-updates
│
├── /examination
│   ├── /examination/schedule
│   ├── /examination/results
│   ├── /examination/papers
│   └── /examination/degree-certificate
│
├── /sustainability (SDG)
│
├── /journals
│
├── /conferences
│
├── /campus-tour
│
├── /news-events
│
├── /contact
│
└── /recruitment
```

---

## SECTION 4 — PAGE-BY-PAGE IMPLEMENTATION

---

### PAGE 1: HOME (`/`)

**Purpose:** First impression. Showcase KSV's identity, scale, and CTAs.

#### Layout Sections (top to bottom):

**A. Top Utility Bar**
- Left: Quick links — `SDG | Webmail | Examination | NEP | Journals | Conferences | Campus Tour | Recruitment`
- Right: Search icon, Accessibility toggle (A+ / A-)
- Background: `--ksv-primary`
- Font: Small, white, `Poppins 400`

**B. Header / Navbar**
- Sticky on scroll (with shadow and slight background blur `backdrop-filter`)
- Left: KSV Logo (SVG, both horizontal and stacked variants)
- Right: Full desktop mega-menu (see Section 5)
- Mobile: Hamburger → full-screen drawer
- Active link indicator: Gold underline `--ksv-secondary`

**C. Hero Slider (Full-width)**
- Component: Swiper.js / Framer Motion carousel
- 7 slides (matching homepage slider messages):
  1. "KSV – Your Door To The Future" — background: aerial campus photo overlay
  2. "Campus Tour" — with CTA button linking to `/campus-tour`
  3. "Backed and Managed By Nine Decade Old Trust" — SVKM founding 1919
  4. "More than 20 Constituent Colleges" — mosaic of institute logos
  5. "Offering Multidisciplinary Professional Courses since 2007"
  6. "World Class Infrastructure"
  7. "State of the Art Education"
- Each slide: Full-height (90vh), dark overlay, large headline, subtitle, CTA button
- Autoplay: 5s interval, pause on hover
- Indicators: Pill-shaped dots (gold) at bottom

**D. Announcement Ticker**
- Horizontal marquee with icons
- Highlighted items:
  - 🔴 "UNIVERSITY PROVISIONAL DEGREE CERTIFICATE FORM"
  - 🟡 "PHD ADMISSIONS-2025 — Apply Now"
- Pause on hover, clickable links

**E. Stats Counter Section**
- 4 animated counters (count-up on scroll-into-view):
  - 🏛 `100+` Acre Campus
  - 🏫 `30+` Institutes
  - 👩‍🏫 `5,000+` Teachers
  - 🎓 `50,000+` Students
- Layout: 4 columns, gold icons, large numbers in `Space Grotesk 700`
- Background: `--ksv-primary` with subtle geometric pattern overlay

**F. Quick Links / Services Grid**
- 6–8 icon cards in a responsive grid:
  - 📋 Admission
  - 📅 Exam Schedule
  - 📊 Results
  - 📚 Syllabus
  - 🔬 Research
  - 🏅 Sports Cell
  - 🌍 SDG / Sustainability
  - 💼 Recruitment
- Cards: white, rounded, hover lift effect (`box-shadow` + `translateY`)

**G. About KSV Section**
- Two-column layout:
  - Left: Paragraph about KSV (founding, mission, UGC approval)
  - Mention: Established May 2007, Act 21 of 2007, UGC ref F. 9-18/2008
  - Right: Image of campus / president photo
- CTA: "Know More About KSV →"

**H. President's Message (Teaser)**
- Card with photo of Shri Vallabhbhai M. Patel
- Excerpt of message
- "Read Full Message →" link to `/about#president-desk`

**I. Academic Programmes Tabs**
- Tabbed interface: `Research | Postgraduate | Undergraduate | Certificate`
- On tab click: Animated reveal of programme cards
- Each card: Programme name, duration, key highlights, "Learn More" CTA
- Mobile: Accordion instead of tabs

**J. Campuses Section**
- Two cards side by side: `Gandhinagar Campus` and `Kadi Campus`
- Each: Map pin icon, institute count, list of top 3–4 institutes, "Explore →" link
- Hover: subtle gold border glow

**K. Notable Quotes Carousel**
- Three quotes (auto-rotating):
  1. Mahatma Gandhi (27 July 1929)
  2. Astronaut Sunita Williams (21 Sep 2007)
  3. Sir Sayajirao Gaekwad III (04 Jan 1926)
- Design: Large quotation mark glyph, italic serif text, attributed source below
- Background: Off-white `--ksv-accent`

**L. Cells & Centres Highlights**
- Horizontal scrollable cards (on mobile) or 3×3 grid (desktop):
  - WEC, WDC, Sports, LAKSH, III Cell, Anti-Ragging, IQAC, Sarva Netrutva, NSS
- Each: Icon + name + 1-line description + "Explore"

**M. Research & Journals**
- Split panel:
  - Left: Research summary (Supercomputer PARAM Shavak, Incubation Centre, 17 PhD disciplines)
  - Right: Journal card — JEMS journal, conference links (Gyanotsav, COMCON, NCFN)
- CTA buttons: "View Funded Projects" | "Read JEMS Journal"

**N. News & Events**
- Grid of 3 latest news cards (CMS-driven)
- Each card: Date, category tag, headline, excerpt, "Read More →"
- "View All News →" link

**O. SDG Section**
- Small section with UN SDG logo
- Headline: "Aligned with Sustainable Development Goals"
- Specifically highlight SDG 4 (Quality Education)
- Link: "Explore Our SDG Commitment →"

**P. Recruitment Banner**
- Full-width call-to-action bar
- Text: "Join the KSV Family — Open Positions Available"
- Button: "View Openings" → links to online job portal

**Q. Social Media Strip**
- Icons for Facebook, Twitter/X, Instagram, YouTube, LinkedIn
- Embedded feed (optional)

**R. Footer**
- 4-column layout:
  - Col 1: Logo, motto, brief description, social links
  - Col 2: Quick Links (About, Academics, Research, Examination)
  - Col 3: Campuses & Cells links
  - Col 4: Contact info (address, phone, email, global office)
- Bottom bar: © 2026 Kadi Sarva Vishwavidyalaya | Privacy Policy | Sitemap
- Background: `--ksv-dark`

---

### PAGE 2: ABOUT US (`/about`)

Sections rendered as one long-scroll page with anchor links (`#svkm-trust`, `#university`, `#president-desk`, `#management`):

**A. Page Hero**
- Banner image (campus/trust building) with title "About KSV"
- Breadcrumb: Home > About Us

**B. SVKM Trust Section** (`#svkm-trust`)
- Founded 1919 by Sarva Vidyalaya Kelavani Mandal
- Motto: *Kar Bhala Hoga Bhala*
- Timeline component showing 1919 → 2007 (KSV founded) → Present
- Trust philosophy text

**C. University Section** (`#university`)
- Full "About the University" text
- Key facts in a highlighted info box:
  - Established: May 2007
  - Act: Gujarat State Government Act 21 of 2007
  - UGC Approval: F. 9-18/2008 (cpp-1), March 19, 2009
  - Location: Gandhinagar, Gujarat
- Three founding objectives (numbered card list)

**D. President's Desk** (`#president-desk`)
- Professional photo of Shri Vallabhbhai M. Patel
- Full message text
- Signature image (if available)

**E. Management & Administration** (`#management`)
- Leadership hierarchy (styled cards or org-chart)
- President / Chairman: Shri Vallabhbhai M. Patel

**F. University Acts**
- Two download cards:
  - University Act 2007 (19 pages) — PDF icon + download button
  - University Act 2012 (4 pages) — PDF icon + download button

---

### PAGE 3: ACADEMICS (`/academics`)

**A. Page Hero + Breadcrumb**

**B. Fees Structure Banner**
- Prominent link/download for "KSV Fees Structure 2025–26"

**C. Programmes Filter/Tab Navigation**
- Tabs: Research | Post Graduate | Under Graduate | Certificate | Syllabus

**D. Research Programmes Tab**
- PhD Programme:
  - Eligibility, process, exemptions (NET/SLET/GATE)
  - 17 doctoral disciplines listed
  - Available documents (Research Proposal format, Supervisor list, Exam schedules)
  - CTA: "Apply for PhD Admissions 2025"
- M.Phil. Programme: Overview card

**E. Post Graduate Tab**
- Styled programme cards in a grid:
  - M.E., M.Sc., MBA, MCA, M.Com, M.Sc. Nursing, MSW, M.Pharm, Pharm D, Pharm.D. (PB), PGDJMC
  - Each card: Programme name, duration, disciplines/specializations, link to details

**F. Under Graduate Tab**
- Programme cards:
  - B.E. (4 yr), B.Sc. (3 yr), B.PT., B.Sc. Nursing (4 yr), B.Pharm (4 yr), BBA (3 yr), BCA (3 yr), B.Ed. (2 yr), B.Com. (3 yr)
  - Also: B.Voc., Diploma (7 disciplines)
  - Each card: Duration, system (Semester/Year), CTA

**G. Certificate Programs Tab**
- List of available certificate programmes

**H. Syllabus Section**
- Two sub-sections: UG Syllabus | PG Syllabus
- Highlighted: NEP-aligned B.Com. Syllabus documents (Sem I–VI)
- Downloadable PDF links styled as file cards

**I. NEP Section**
- Dedicated card with explanation of NEP integration
- Documents available, link to `/academics/nep`

**J. Admission Policy Section**
- Collapsible accordion:
  - Objectives
  - Eligibility (UG and PhD)
  - Admission Process (5 steps)
  - Accepted Entrance Exams
  - Reservation Policy
  - Scholarship Schemes (Merit + Means)
  - Policy Review note

---

### PAGE 4: CAMPUSES (`/campuses`)

**A. Campus Map Overview**
- Interactive map (Google Maps embed) showing both campuses
  - Pin 1: Gandhinagar — LDRP Campus, Sector-15
  - Pin 2: Kadi Campus

**B. Gandhinagar Campus Tab**
- 14 institute cards:
  - LDRP Institute of Technology and Research (ldrp.ac.in)
  - Shri Maneklal M. Patel Institute of Science and Research (smpisr.edu.in)
  - Ashvinbhai A. Patel Commerce College (aapcc.in)
  - Bholabhai Patel College of Administration (bpcba.org)
  - Bholabhai Patel Institute of Computer Studies (bpccs.org)
  - S.K. Patel Institute of Management & Computer Studies — MBA (skpatelmba.org)
  - S.K. Patel Institute of Management & Computer Studies — MCA (skpimcs.org)
  - Chanchalben Mafatlal Patel College of Nursing (cmpatelcollegeofnursing.edu.in)
  - C.M. Patel College of Physiotherapy (cmpp.org.in)
  - K.B. Institute of Pharmaceutical Education and Research (kbiper.ac.in)
  - R.H. Patel English Medium B.Ed. College (foeksv.org)
  - S.S. Patel College of Education — Gujarati Medium (foeksv.org)
  - Vakil D.H. Patel Department of Education — M.Ed. (foeksv.org)
  - Smt. Manguben Iswarbhai Patel & Smt. Latikaben Vithalbhai Patel Institute of Social Work (miplvp.ksv.ac.in)
- Each card: Institute name, website link button, discipline badge (Engineering / Commerce / Education etc.)

**C. Kadi Campus Tab**
- 10 institute cards:
  - Vidush Somany Institute of Technology and Research (vsitr.ac.in)
  - S.V. Institute of Management (svim.ac.in)
  - Narsinhbhai Institute of Computer Studies (nicsm.ac.in)
  - Acharya Shree Manubhai J. Patel M.Ed. College
  - Narsinhbhai Patel College of Computer Studies and Management (npccsm.in)
  - HVHP Institute of Post Graduate Studies and Research (hvpgrkadi.ac.in)
  - M.P. Patel College of Commerce Center for Professional Studies
  - S.V. College of Education (svbed.org)
  - Shardaben Bhagubhai Mangaldas Patel Nursing and Paramedical College (sbmpnursing.in)
  - Soorajba College of Education for Women — B.Ed. (soorajbabed.org)

---

### PAGE 5: SISTER CONCERNS (`/sister-concerns`)

- Introductory paragraph explaining association with SVKM Trust
- Three cards:
  1. VPMP Polytechnic — vpmp.ac.in
  2. Uma Arts and Nathiba Mahila Arts College — uancmahilacollege.org
  3. Pramukh Swami Science and H.D. Patel Arts College — psshda.ac.in
- Each card: Logo placeholder, name, website link

---

### PAGE 6: CELLS & CENTERS (Hub page at `/cells-centers`)

Hub page with a grid of all cells linking to individual pages:

#### Individual Cell Pages:

**6.1 — Department of International Relations** (`/cells/dir`)
- External link redirect to dirsvkm.com

**6.2 — Women Entrepreneurship Cell (WEC)** (`/cells/wec`)
- About WEC
- Objectives (4)
- Entrepreneurship Awareness Camp (EAC) — August 2016
- Committee
- Photo Gallery section

**6.3 — Women Development Cell (WDC)** (`/cells/wdc`)
- About WDC (UGC/MHRD directive)
- Objectives
- Role and Functions
- Committee
- Photo Gallery

**6.4 — Internal Quality Assurance Cell — IQAC** (`/cells/iqac`)
- Placeholder page (data to be added by university)

**6.5 — M.M. Patel Students Research Project Cell** (`/cells/mmpsrpc`)
- External link to mmpsrpc.in

**6.6 — Anti-Ragging Cell** (`/cells/anti-ragging`)
- Legal definition of ragging
- Forms of ragging
- Types of ragging activities (not permitted)
- Positive Interaction Policy
- Key legal points (Supreme Court, police reporting obligation)
- Helpline numbers (national anti-ragging helpline)

**6.7 — Industry Institute Interaction Cell (III Cell)** (`/cells/iii-cell`)
- About III Cell — objective (reduce gap between industry and academia)
- Mission & Scope
- Benefits table: To Institute | To Industry | To Faculty | To Students | To Society
- Committee members
- Sections: Objectives, Benefits, Activities

**6.8 — Sports Cell** (`/cells/sports`)
- Sports offered (18 sports, listed with icons)
- Staff directory table
- Tournaments participated (13+ listed)
- Achievements 2022–23 & 2023–24:
  - Cricket Champions (IIT, IIM, GNLU)
  - Kabaddi Runners-up
  - Volleyball Winners
  - Football Women Runners-up
  - Khel Mahakumbh (Hockey, Kho-Kho, Handball — all Winners)
- Para Athlete spotlight: Pranav Desai — Gold medals at World Para Athletics Grand Prix 2021 & 2022, Dubai
- Annual Institutional Sports Day mention

**6.9 — LAKSH — University Fitness Cell** (`/cells/laksh`)
- Started 2018–19 by Chairman Shri Vallabhbhai M. Patel
- Motto: "IT DOESN'T GET EASIER, YOU GET STRONGER"
- 4 pillars of fitness
- Fitness components (Speed, Endurance, Flexibility, Agility, Strength, Stamina, Power, Coordination, Balance)
- Programme Structure (3 rounds: Gandhinagar → Bayad → Ranichauri, Uttarakhand)
- Prize: ₹10,000 cash + Trophy
- Committee table
- Objective statement

**6.10 — Sarva Netrutva** (`/cells/sarva-netrutva`)
- Full name and description
- Started December 2009
- 41 programmes conducted
- 2,665 students benefited
- Free 5-day residential programme
- Methodology: Meditation, Yoga, Games, Role Plays, Social Visits, etc.
- Skills developed (7 skills)
- 8 objectives
- Who can participate
- Follow-up sessions mention

**6.11 — Social Responsibility Activities** (`/cells/social-responsibility`)
- Overview
- Sub-activities hub:
  - Scholarship (Merit + Means)
  - Sarva Netrutva
  - NCC
  - NSS — description, government scheme details
  - Community Adoption programme
  - Physiotherapy on Wheels
  - LAKSH

**6.12 — Vijaya Performing Arts** (`/cells/vijaya-arts`)
- Placeholder page (content to be added)

---

### PAGE 7: RESEARCH (`/research`)

**A. Overview / Introduction**
- 10 faculties, 18,000+ students, 17 PhD disciplines
- Pioneer in doctoral registrations

**B. Research Resources Grid**
- 8 cards linking to sub-pages:
  - Supercomputer Facility
  - Funded Projects / Research Grants
  - Institutional Repository
  - Papers Published
  - Books Published
  - Patents Filed
  - PhD Updates
  - Incubation Centre

**C. Supercomputer Facility** (`/research/supercomputer`)
- Established by GUJCOST
- Location: LDRP, Gandhinagar
- Machine: PARAM Shavak — 2 multicore CPUs (12+ cores each) + 2 accelerator cards
- Features: GPU accelerated, Job schedulers, MPI, HPC applications
- 6 objectives
- Benefits for students
- Networking requirement

**D. Funded Projects** (`/research/funded-projects`)
- Link to funded projects list page
- Application info for faculty and researchers

**E. Institutional Repository** (`/research/repository`)
- Description and contents
- External link: http://160.160.17.54/library
- Contents: Digital theses, dissertations, exam papers, e-books

**F. Incubation Centre**
- Tie-ups with 5 Management Consultants of Ahmedabad
- Industry Defined Problems (IDP)
- Simulation Centre (20 real-life processes per discipline)

---

### PAGE 8: EXAMINATION (`/examination`)

**A. Quick Links Panel**
- 4 large action cards:
  1. 📅 Exam Schedule — `/examination/schedule`
  2. 📋 New Exam Schedule — `/examination/schedule-new`
  3. 📊 Examination Results — `/examination/results`
  4. 📄 Old Results — `/examination/old-results`

**B. Exam Papers** (`/examination/papers`)
- Searchable list of past papers
- Filter by: Programme, Year, Subject

**C. Degree Certificate**
- Prominent card: "University Provisional Degree Certificate Form"
- Download form link

**D. PhD Exam Schedules**
- October 2024 schedule for Old Students
- October 2024 schedule for New Students
- Research Methodology paper details

---

### PAGE 9: SUSTAINABILITY / SDG (`/sustainability`)

- UN SDG branding and goals listed
- SDG 4 (Quality Education) focus:
  - 19 constituent institutions
  - CBCS-based electives
  - Free library access, computer facilities, online learning
  - Teacher training, public lectures, executive education
  - School outreach initiatives
- Other SDG alignments (add as available)
- Policies for equal opportunity (gender, disability, etc.)

---

### PAGE 10: JOURNALS & CONFERENCES (`/journals`)

**Journals Tab**
- JEMS — KSV Online E-Journal of Engineering, Management, Science and Humanities
  - Link: jems.ksv.ac.in

**Conferences Tab**
- KSV Gyanotsav 2024 — ncmata.ksv.ac.in
- COMCON-2024 — comcon.ksv.ac.in
- NCFN-2024 — ncfn.ksv.ac.in
- TranscendenceXenz — PDF link

---

### PAGE 11: CAMPUS TOUR (`/campus-tour`)

- Embedded 360° virtual tour (if available)
- YouTube embed (campus tour video)
- Photo gallery in masonry layout
- Map with campus highlights

---

### PAGE 12: NEWS & EVENTS (`/news-events`)

- CMS-driven (Sanity/Strapi)
- Card grid with filters: All | News | Events | Announcements
- Each card: Thumbnail, date, category tag, headline, excerpt
- Search bar

---

### PAGE 13: CONTACT (`/contact`)

**A. Contact Cards**
- Main Campus:
  - 📍 LDRP Campus, Sector-15, KH-5, Gandhinagar-382015, Gujarat, India
  - 📞 079 2324 4690 / 09408801690
  - ✉ Email (from website)
- Global Office:
  - 📍 909 Rose Avenue, 5th Floor, RockVille, Maryland, MD-20852
  - 📞 +1 703 585 4448

**B. Contact Form**
- Fields: Name, Email, Phone, Subject (dropdown), Programme Interest, Message
- Validation via React Hook Form + Zod
- Success / Error state feedback

**C. Map**
- Google Maps embed — Gandhinagar campus pin

**D. Quick Links**
- Webmail: webmail.ksv.ac.in
- Job Portal (Recruitment): onlinejobportal link
- Verification email link

---

### PAGE 14: RECRUITMENT (`/recruitment`)

- Brief intro about KSV as employer
- Redirect / iframe to: http://14.139.122.102/onlinejobportal/
- Contact for HR queries

---

## SECTION 5 — NAVIGATION SYSTEM

### 5.1 Desktop Mega-Menu Structure

```
About Us ▾
  SVKM Trust | University | President's Desk
  Management & Administration
  University Act 2007 | University Act 2012

Academics ▾
  [Fees Structure 2025-26]
  Research: PhD | M.Phil.
  Post Graduate: M.E | M.Sc | MBA | MCA | M.Com | M.Sc Nursing | MSW | M.Pharm | Pharm.D | PGDJMC
  Under Graduate: B.E | B.Sc | B.PT | B.Sc Nursing | B.Pharm | BBA | BCA | B.Ed | B.Com
  Syllabus: UG | PG
  Certificate Programs | Centers & Cells

Campuses ▾
  Gandhinagar Campus [14 institutes]
  Kadi Campus [10 institutes]

Sister Concerns ▾
  VPMP Polytechnic
  Uma Arts and Nathiba Mahila Arts College
  Pramukh Swami Science and H.D. Patel Arts College

Cells & Center ▾
  DIR | WEC | WDC | IQAC | MMPSRPC
  Anti-Ragging | III Cell | Sports | LAKSH
  Social Responsibility | Vijaya Performing Arts
```

### 5.2 Top Bar Links
`SDG | Webmail | Examination (dropdown) | NEP | Journals | Conferences | Campus Tour | Funded Projects | Research Projects | Recruitment`

### 5.3 Mobile Navigation
- Hamburger button (top-right)
- Full-screen slide-in drawer
- Accordion-style nested menus
- Close button + swipe-to-close gesture support

---

## SECTION 6 — INTERACTIVE COMPONENTS

### 6.1 Animated Statistics Counter
```javascript
// Trigger: IntersectionObserver when section enters viewport
// Count from 0 to target value over 2000ms
// Easing: easeOutExpo
// Display "+" suffix after count
```

### 6.2 Hero Slider
- Auto-advance: 5 seconds
- Pause on hover / touch
- Keyboard navigable (←/→ arrows)
- Touch/swipe support (mobile)
- Progress bar indicator per slide

### 6.3 Announcement Ticker
- Horizontal marquee
- Pause on hover
- Clickable items navigate to relevant pages
- 🔴 dot for urgent items, 🟡 for notices

### 6.4 Programme Tabs
- Tab switching with smooth fade/slide animation
- URL hash update on tab change (e.g., `/academics#postgraduate`)
- Keyboard accessible (tab + enter/space)

### 6.5 Campus Map Integration
- Google Maps JS API
- Custom styled map (navy/gold scheme)
- Click on campus pins → info window popup with institute list

### 6.6 Scroll Animations
- AOS.js or Framer Motion `useInView`
- Stagger delay on card grids
- Fade-up on section headings
- Parallax subtle on hero section

### 6.7 Search
- Global search bar (header)
- Searches across: programmes, institutes, cells, pages
- Results grouped by category

### 6.8 Notification/Toast System
- For form submissions (success/error)
- For exam result announcements (dismissable banner)

### 6.9 PDF Viewer
- Inline preview for documents using `react-pdf`
- Or open in new tab for direct PDF links

### 6.10 Dark Mode Toggle (Optional)
- Toggle in header utility bar
- Persisted in `localStorage`
- Respects `prefers-color-scheme` initially

---

## SECTION 7 — RESPONSIVENESS SPECIFICATIONS

### 7.1 Breakpoint Behaviour

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Hero | Single column, 80vh | Same, 90vh | 100vh |
| Stats | 2×2 grid | 4 columns | 4 columns |
| Nav | Hamburger drawer | Hamburger drawer | Full mega-menu |
| Programme cards | 1 column | 2 columns | 3–4 columns |
| Campus institutes | 1 column | 2 columns | 3 columns |
| Footer | Stacked 1 column | 2 columns | 4 columns |
| Quotes carousel | 1 visible | 1 visible | 1 visible (3 on wide) |

### 7.2 Touch Considerations
- Minimum tap target: 44×44px
- No hover-only interactions on mobile
- Swipe gestures on sliders and carousels
- Sticky header collapses to compact form on scroll

### 7.3 Image Optimization
- Use `<picture>` with `srcset` for responsive images
- WebP format with JPEG fallback
- Lazy loading (`loading="lazy"`) on below-fold images
- Provide `width` and `height` to prevent layout shift (CLS)

---

## SECTION 8 — PERFORMANCE & SEO

### 8.1 Performance Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Score: 90+ across all categories

### 8.2 Performance Implementation
- Preconnect: Google Fonts, Maps API, CDN
- Critical CSS inlined in `<head>`
- JS deferred (`defer` attribute)
- Font subsetting for Devanagari (motto only)
- Minified assets in production
- CDN for static assets (Cloudflare / AWS CloudFront)
- Browser caching headers (1-year for versioned assets)
- Gzip/Brotli compression on server

### 8.3 SEO Implementation
- Unique `<title>` and `<meta description>` for every page
- Open Graph tags (og:title, og:image, og:description)
- Twitter Card meta tags
- Canonical URLs
- Structured Data (Schema.org):
  - `Organization` — KSV entity with logo, contact, sameAs
  - `EducationalOrganization` — accreditation, offers
  - `Course` — for each academic programme
  - `BreadcrumbList` — for all inner pages
- XML Sitemap auto-generated
- `robots.txt` with sitemap reference
- Image `alt` text on all images
- Semantic HTML5 landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`)

### 8.4 Multilingual (Future)
- i18n-ready structure
- Consider Gujarati language toggle
- `lang="en"` attribute on `<html>` (with `lang="gu"` version)

---

## SECTION 9 — ACCESSIBILITY (WCAG 2.1 AA)

- Colour contrast ratio: minimum 4.5:1 (text) / 3:1 (UI elements)
- All images have descriptive `alt` text
- All form inputs have associated `<label>` elements
- Focus states visible (custom focus ring: `2px solid --ksv-secondary`)
- Skip navigation link at top of page: `<a href="#main-content">Skip to content</a>`
- ARIA labels on icon-only buttons
- Keyboard-navigable slider and tabs
- No content conveyed by colour alone
- PDF documents linked with file size and format indicated
- Screen reader tested (NVDA / VoiceOver)

---

## SECTION 10 — CONTENT MANAGEMENT

### 10.1 Static Content (Hardcoded)
- About Us text
- Founding objectives
- Campus and institute directory
- Cell and centre descriptions
- President's message
- Contact information

### 10.2 CMS-Managed Content (Dynamic)
- News & Events
- Announcement ticker items
- Exam schedules and results
- Slider images and captions
- Homepage highlights / notices
- Photo gallery

### 10.3 Document Library
- Store PDFs in `/public/docs/`:
  - `KSV-ACT-19PAGES-2007.pdf`
  - `KSV-ACT-4-PAGES-2012.pdf`
  - `KSV-Fees-Structure-2025-26.pdf`
  - PhD course work schedules
  - NEP B.Com. Syllabus (Sem I–VI)
  - Research Methodology papers
  - Degree Certificate form

---

## SECTION 11 — MISSING CONTENT (TO OBTAIN FROM UNIVERSITY)

The following items are referenced on the official website but lack full detail — university should provide:

1. **President's full message text** — Shri Vallabhbhai M. Patel
2. **All faculty photos** — Admin/management directory images
3. **Management & Administration full list** — Board members, Registrar, Controller of Examinations
4. **IQAC details** — Committee and activities
5. **Vijaya Performing Arts** — Description, activities, committee
6. **NCC details** — Units, CO, activities
7. **News and Events feed** — Historical and current posts
8. **Photo Gallery content** — Campus, events, convocation, sports
9. **Green KSV initiative** — Description and activities
10. **Smart Lab / IoT Lab** — Details and specifications
11. **Skill Development Centre** — Programmes offered
12. **Papers Published, Books Published, Patents Filed** — Lists for research section
13. **PhD Supervisor/Guide list** — Full faculty list
14. **Recruitment listings** — Current open positions
15. **Campus tour video or 360° content** — For `/campus-tour` page
16. **Institute logos** — For Campuses section cards
17. **Social media handles** — Official Facebook, Instagram, Twitter/X, LinkedIn, YouTube URLs
18. **Admission contact email** — For enquiry form routing
19. **Verification email** — Currently encoded on official site
20. **ACPC/Admission portal link** — For UG admission guidance

---

## SECTION 12 — DEVELOPMENT PHASES

### Phase 1 — Foundation (Week 1–2)
- [ ] Set up Next.js project with TypeScript and Tailwind CSS
- [ ] Configure design tokens (CSS variables)
- [ ] Import Google Fonts (Playfair Display, Poppins, Inter, Space Grotesk)
- [ ] Build Header component (sticky, with logo and placeholder nav)
- [ ] Build Footer component
- [ ] Set up routing for all 14 main pages
- [ ] Set up CMS (Sanity.io or Strapi)

### Phase 2 — Homepage (Week 2–3)
- [ ] Utility top bar
- [ ] Hero slider (7 slides, autoplay, indicators)
- [ ] Announcement ticker
- [ ] Animated stats counters (100+, 30+, 5000+, 50000+)
- [ ] Quick links grid
- [ ] About KSV section
- [ ] President's message teaser
- [ ] Academic programmes tabs
- [ ] Campuses section
- [ ] Notable quotes carousel (3 quotes)
- [ ] Cells & Centres highlights
- [ ] Research & Journals section
- [ ] News & Events grid (CMS)
- [ ] SDG section
- [ ] Recruitment banner

### Phase 3 — About & Academics (Week 3–4)
- [ ] About page (SVKM Trust, University, President's Desk, Management, Acts)
- [ ] Academics hub page (programme tabs, admission, syllabus)
- [ ] Individual programme detail pages (PhD, M.Phil., all PG and UG)
- [ ] NEP page
- [ ] Fees Structure download page

### Phase 4 — Campuses & Cells (Week 4–5)
- [ ] Campuses page (Gandhinagar + Kadi tabs, map)
- [ ] Sister Concerns page
- [ ] Cells & Centers hub
- [ ] All 12 individual cell pages

### Phase 5 — Research & Examination (Week 5–6)
- [ ] Research hub page
- [ ] Supercomputer Facility page
- [ ] Funded Projects page
- [ ] Institutional Repository page
- [ ] Examination hub page (schedule, results, papers)
- [ ] Degree Certificate section

### Phase 6 — Remaining Pages & Polish (Week 6–7)
- [ ] Sustainability / SDG page
- [ ] Journals & Conferences page
- [ ] Campus Tour page (gallery, map, video)
- [ ] News & Events listing
- [ ] Contact page (form + maps)
- [ ] Recruitment page
- [ ] 404 Not Found page
- [ ] Global search implementation

### Phase 7 — QA & Launch (Week 7–8)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Responsive testing on real devices (iPhone, Android, iPad)
- [ ] Accessibility audit (Axe DevTools, WAVE)
- [ ] Lighthouse performance audit (target 90+)
- [ ] SEO review (meta tags, structured data, sitemap)
- [ ] Content review with university team
- [ ] Form submission testing
- [ ] PDF/document link validation
- [ ] Analytics setup (GA4)
- [ ] DNS setup and deployment
- [ ] SSL certificate verification

---

## SECTION 13 — FILE / FOLDER STRUCTURE

```
/ksv-website
├── /public
│   ├── /docs              ← All PDFs
│   ├── /images
│   │   ├── /hero          ← Slider images
│   │   ├── /campus        ← Campus photos
│   │   ├── /institutes    ← Institute logos
│   │   └── /people        ← Faculty photos
│   ├── logo.svg
│   └── favicon.ico
│
├── /src
│   ├── /app               ← Next.js App Router pages
│   │   ├── page.tsx       ← Home
│   │   ├── /about
│   │   ├── /academics
│   │   ├── /campuses
│   │   ├── /cells-centers
│   │   ├── /research
│   │   ├── /examination
│   │   ├── /sustainability
│   │   ├── /journals
│   │   ├── /contact
│   │   └── /news-events
│   │
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   └── TopBar.tsx
│   │   ├── /home
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── AnnouncementTicker.tsx
│   │   │   ├── StatsCounter.tsx
│   │   │   ├── QuickLinks.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProgrammesTabs.tsx
│   │   │   ├── CampusesSection.tsx
│   │   │   ├── QuotesCarousel.tsx
│   │   │   ├── CellsHighlights.tsx
│   │   │   ├── ResearchSection.tsx
│   │   │   ├── NewsGrid.tsx
│   │   │   └── SDGSection.tsx
│   │   ├── /ui
│   │   │   ├── ProgrammeCard.tsx
│   │   │   ├── InstituteCard.tsx
│   │   │   ├── CellCard.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   ├── PDFDownloadCard.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── PageHero.tsx
│   │   │   └── SearchBar.tsx
│   │   └── /shared
│   │       ├── ContactForm.tsx
│   │       └── GoogleMap.tsx
│   │
│   ├── /data              ← Static JSON/TS data files
│   │   ├── programmes.ts
│   │   ├── campuses.ts
│   │   ├── cells.ts
│   │   ├── quotes.ts
│   │   └── navigation.ts
│   │
│   ├── /styles
│   │   ├── globals.css    ← CSS variables, resets
│   │   └── animations.css ← Keyframes
│   │
│   └── /lib
│       ├── cms.ts         ← Sanity client
│       └── utils.ts
│
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## SECTION 14 — KEY DESIGN DECISIONS

1. **Serif + Sans hybrid typography** — Playfair Display for prestige/heritage feel (100+ years of SVKM trust), Poppins for modern clarity
2. **Navy + Gold colour scheme** — Authoritative, academic, matches Indian university prestige aesthetics
3. **Mega-menu** — Required due to large number of pages; hover desktop / tap mobile
4. **Announcement ticker** — Critical for university: exam schedules, admissions, notices change frequently
5. **Sticky header** — Collapses on mobile scroll to save space; restores on scroll-up
6. **Campus tabs over separate pages** — Reduces navigation depth; faster access
7. **Accordion for admission policy** — Long content; collapsible keeps pages scannable
8. **PDF downloads as styled cards** — Avoids plain links; shows format, size, and year clearly
9. **Stats with count-up animation** — High-impact numbers (50,000+ students) deserve attention
10. **Quotes section** — Mahatma Gandhi and Sunita Williams quotes are powerful brand differentiators

---

## APPENDIX A — EXTERNAL LINKS REFERENCE

| Destination | URL |
|-------------|-----|
| KSV Webmail | https://webmail.ksv.ac.in |
| JEMS Journal | https://jems.ksv.ac.in |
| Gyanotsav 2024 | https://ncmata.ksv.ac.in |
| COMCON-2024 | http://comcon.ksv.ac.in |
| NCFN-2024 | https://ncfn.ksv.ac.in |
| Recruitment Portal | http://14.139.122.102/onlinejobportal/ |
| MMPSRPC | https://www.mmpsrpc.in |
| DIR SVKM | http://www.dirsvkm.com |
| Repository | http://160.160.17.54/library |
| LDRP | http://ldrp.ac.in |
| VSITR | http://vsitr.ac.in |
| SVIM | https://svim.ac.in |
| KBIPER | http://kbiper.ac.in |

---

*Implementation Plan compiled for Kadi Sarva Vishwavidyalaya (KSV) website redesign — March 2026*
*Based on content from ksv.ac.in and the complete KSV Website Content document.*
