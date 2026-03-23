# KSV Website — Missing Assets & Content Checklist

**Total Missing: 48 — 10 Critical, 30 High, 8 Low**

This document serves as a comprehensive handover checklist for the Kadi Sarva Vishwavidyalaya (KSV) administration team. Every item listed below must be provided, replaced, or verified before the website can be deployed to the production environment `ksv.ac.in`.

---

## ⚠️ PLACEHOLDERS CURRENTLY IN USE

The following sections were built using high-quality stock imagery (Unsplash) or Lorem Ipsum during development. They **must** be replaced with genuine KSV assets.

- [ ] **[PLACEHOLDER IN USE] — Home Page, Hero Slider (Slide 1-7)**
      Currently: Generic university stock photos
      Must Replace With: Professional, high-resolution photographs of KSV Gandhinagar & Kadi campuses, laboratories, and students.
      Format: JPG/WebP, min 1920×1080px (Landscape)
      Priority: CRITICAL

- [ ] **[PLACEHOLDER IN USE] — Home Page, Campuses Section**
      Currently: Generic building silhouettes/photos
      Must Replace With: Actual exterior photos of the Gandhinagar and Kadi main campus gates/buildings.
      Format: JPG/WebP, 800×600px
      Priority: HIGH

- [ ] **[PLACEHOLDER IN USE] — About Page, President's Desk**
      Currently: Stock executive portrait
      Must Replace With: Official high-resolution portrait of Shri Vallabhbhai M. Patel.
      Format: JPG/PNG, 600×800px (Portrait)
      Priority: CRITICAL

- [ ] **[PLACEHOLDER IN USE] — News & Events Page, News Grid**
      Currently: Stock photos of generic hackathons and exams
      Must Replace With: Actual PR photos from KSV events (Gyanotsav, Sports Meet, etc.)
      Format: JPG/WebP, 800×600px
      Priority: HIGH

- [ ] **[PLACEHOLDER IN USE] — Campus Tour Page, Video Player**
      Currently: Embedded stock YouTube placeholder video
      Must Replace With: Official KSV Campus Tour Video 
      Format: YouTube/Vimeo Embed URL or MP4
      Priority: HIGH

- [ ] **[PLACEHOLDER IN USE] — Campus Tour Page, Photo Gallery**
      Currently: 6 Generic Unsplash images
      Must Replace With: Curated gallery of KSV infrastructure (Labs, Library, Supercomputer, Sports Ground).
      Format: JPG/WebP, varied high-res
      Priority: HIGH

- [ ] **[PLACEHOLDER IN USE] — Recruitment Page, Job Portal iFrame**
      Currently: A styled mock alert indicating the jobs page
      Must Replace With: The actual URL/iFrame path for the official KSV online recruitment portal (`recruitment.ksv.ac.in`).
      Format: URL string
      Priority: CRITICAL

---

## 📄 OFFICIAL DOCUMENTS (PDFs)
*To be placed in the `/public/docs/` directory. Currently returning 404s.*

- [ ] **KSV-ACT-19PAGES-2007.pdf** (About Page > University Acts) — Priority: CRITICAL
- [ ] **KSV-ACT-4-PAGES-2012.pdf** (About Page > University Acts) — Priority: CRITICAL
- [ ] **KSV-Fees-Structure-2025-26.pdf** (Academics Page) — Priority: HIGH
- [ ] **PhD course work schedules** (Research > PhD) — Priority: HIGH
- [ ] **NEP B.Com. Syllabus Sem I–VI** (Academics > Syllabus) — Priority: HIGH
- [ ] **Research Methodology guidelines** (Research Page) — Priority: LOW
- [ ] **University Provisional Degree Certificate Form** (Examination Page) — Priority: CRITICAL

---

## 📝 TEXT CONTENT & DATA

### Global & Layout
- [ ] **Social Media URLs:** Links for Facebook, Twitter/X, Instagram, LinkedIn, YouTube are currently hashed (`#`). — Priority: HIGH
- [ ] **Google Maps API Key:** Required to render the interactive map on the Contact Us page. — Priority: CRITICAL
- [ ] **Admission Contact Email:** Needed for the Contact Form routing. — Priority: HIGH

### Home Page
- [ ] **Announcement Ticker Items:** Provide Current urgent notices/links for the marquee. — Priority: HIGH
- [ ] **Quotes Carousel:** Confirm if Mahatma Gandhi and Sunita Williams quotes are official, or provide preferred KSV-centric quotes. — Priority: LOW

### About Page
- [ ] **President's Full Message:** The text currently used is an excerpt/stub. The full official text is required. — Priority: CRITICAL
- [ ] **Management & Administration List:** Names, titles, and photos of the Board members, Registrar, and Controller of Examinations. — Priority: CRITICAL
- [ ] **Founding Objectives List:** Verify the 3 main objectives used in the "University Section" are the exact official translations. — Priority: HIGH

### Academics & Campuses Pages
- [ ] **Institute Logos:** Vector or high-res transparent PNG logos for the 14 Gandhinagar institutes and 10 Kadi institutes. — Priority: HIGH
- [ ] **Skill Development Centre details:** List of courses and programmes offered. — Priority: LOW

### Cells & Centers Page
- [ ] **IQAC Details:** Provide committee members and recent activities. — Priority: HIGH
- [ ] **Vijaya Performing Arts:** Description, activities, and faculty list. — Priority: LOW
- [ ] **NCC Details:** Units, Commanding Officer, and recent camps. — Priority: LOW
- [ ] **Green KSV Initiative:** Official text outlining campus sustainability/SDG steps. — Priority: HIGH

### Research & Examination Pages
- [ ] **Smart Lab / IoT Lab specs:** Equipment lists and photos for the facilities section. — Priority: LOW
- [ ] **Research Metrics:** Accurate lists or counts for "Papers Published, Books Published, Patents Filed" to link to the grid. — Priority: HIGH
- [ ] **PhD Supervisor/Guide list:** Full list of approved faculty for doctoral candidates. — Priority: HIGH

---

## 🔗 CROSS-REFERENCE: SECTION 11 MASTER LIST
*The following items from Section 11 of the original Implementation Plan have been absorbed into the checklist above, but remain outstanding as verified by the development team:*

- [ ] 1. President's full message text
- [ ] 2. All faculty photos
- [ ] 3. Management & Administration full list
- [ ] 4. IQAC details
- [ ] 5. Vijaya Performing Arts details
- [ ] 6. NCC details
- [ ] 7. News and Events CMS feed connection
- [ ] 8. Photo Gallery content
- [ ] 9. Green KSV initiative
- [ ] 10. Smart Lab / IoT Lab specs
- [ ] 11. Skill Development Centre
- [ ] 12. Papers Published, Books Published, Patents Filed
- [ ] 13. PhD Supervisor/Guide list
- [ ] 14. Recruitment listings (URL)
- [ ] 15. Campus tour video or 360° content
- [ ] 16. Institute logos
- [ ] 17. Social media handles
- [ ] 18. Admission contact email
- [ ] 19. Verification email target
- [ ] 20. ACPC/Admission portal link
