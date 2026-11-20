# Reference Site Quality Benchmark & UX Analysis: Propel Industries (propelind.com)

This document analyzes **Propel Industries Pvt. Ltd.** (https://www.propelind.com/), a premier Indian manufacturer of heavy crushing, screening, washing, and material processing equipment headquartered in Coimbatore, Tamil Nadu. It serves as a structural and quality benchmark for designing and architecting the new digital web platform for **UV Equipments**.

---

## 1. Information Architecture & Structural Layout

### Propel Industries Structure
- **Utility Bar:** A compact top bar featuring global language selectors, direct links to company utilities (Blog, Careers, 3D Product Tour), and quick access phone/email touchpoints.
- **Main Header & Sticky Navigation:** Clean, modern header that sticks to the viewport top on scroll, ensuring persistent accessibility to product lines and enquiry actions.
- **Hero Sections:** High-impact, heavy-industrial aesthetic featuring full-width photography/3D equipment renders, strong primary headlines emphasizing engineering excellence and reliability, accompanied by dual CTAs ("Explore Products" / "Enquire Now").
- **Product Hierarchy:** Categorized logically into primary machinery divisions:
  - Crushing (Jaw, Cone, Impactor / VSI, Roll)
  - Screening & Scalping (Multi-deck, Inclined)
  - Sand Washing & Material Beneficiation (Eco Wash, Pro Wash, Bucket Classifiers)
  - Mobile & Track-Mounted Series
- **Key Trust Factors:** Visual proof of manufacturing plant scale, engineering capabilities, global dealer networks, and sustainability initiatives.
- **Footer:** Deep industrial footer containing categorized site map links, physical facility addresses, direct phone/email channels, and statutory copyright.

### Takeaway for UV Equipments
- UV Equipments' site must match this level of engineering gravitas while strictly following the **Navy Dominant (#0F2438)**, **Green Accent (#016534)**, and **Platinum Surface (#E5E7EB)** brand palette.
- No light/white-dominant sections; all product plates sit within sculpted platinum panels (`#E5E7EB`) with chamfered cut corners and refined metallic borders.

---

## 2. Navigation Pattern

### Desktop Pattern
- **Hierarchy:** Primary links: `HOME | ABOUT US | PRODUCTS | INDUSTRIES | CONTACT`.
- **Products Dropdown:** Comprehensive dropdown grouping the six core equipment families:
  1. Grizzly Feeder (UVGF Series F1)
  2. Vertical Wave Jaw Crusher (UV-JVW Series)
  3. Horizontal Wave Cone Crusher (UV-CHW Series)
  4. Circular Wave Screen (UV-SCW Series)
  5. Multi Wave Vertical Shaft Impactor (UV-VMW Series)
  6. Sand Washer Bucket Classifier (UVBC Series)
- **Interactive Micro-Interactions:** Hover states featuring an animated green underline (`#016534`), clear active link indicators, and a persistent, high-contrast green "ENQUIRE" button in the right header rail.

### Mobile & Tablet Pattern
- **Slide-out / Full-screen Drawer:** Clean full-screen navigation modal with smooth CSS transitions.
- **Collapsible Accordions:** Sub-menus expand smoothly with `+` / `-` indicators, preventing excessive scrolling while offering deep linking to specific equipment pages.
- **Accessible Touch Targets:** Minimum 48px tap targets with high-contrast text.

---

## 3. Product Presentation & Technical Specification Tables

### Presentation Patterns on Benchmark
- **Product Hero:** Clean studio cutouts of heavy machinery against neutral surfaces, accompanied by high-level engineering highlights and series badges.
- **Salient Features:** Distinct bulleted or icon-supported grid highlighting operational advantages (e.g., modular vibrator, hydraulic clearance, low maintenance).
- **Technical Specification Matrix:** 
  - Comprehensive model comparison tables comparing feed opening, feed size, capacity (TPH), drive motor power, rotor speed, and operational weight across all models within a series.
  - Sticky first column ("Specification" / "Model Parameter") ensuring legibility when scrolling wide tables horizontally on mobile and tablet viewports.
  - Explicit engineering disclaimers ("Details may vary based on application...").

### UV Equipments Implementation Standard
- Spec tables will be rendered on **Platinum Silver (#E5E7EB)** surfaces with dark navy text (`#0F2438`), encased in precision-bordered industrial panels.
- Tables feature sticky parameter headers, mobile horizontal scroll hints, and exact brochure specifications preserved without rounding or guessing.
- Each product page includes a direct, pre-filled CTA button ("Enquire About This Product") passing the specific product slug to the enquiry form.

---

## 4. Typography & Brand Tone

### Benchmark Tone
- Confident, authoritative, heavy-industrial, engineering-first terminology.
- Clean grotesque / condensed sans-serif headlines paired with highly legible humanist body text.

### UV Equipments Typography Specification
- **Headings (`h1` - `h6`):** Condensed industrial sans (`Barlow Condensed` / `Oswald`), uppercase, tight tracking (`tracking-tight` / `tracking-wider` on subheaders).
- **Body & Data:** Precision technical sans (`Inter` / `Barlow`), ensuring crisp legibility on high-density technical matrices.
- **Brand Voice:** Fact-based, restrained, engineering-focused. Never inventing claims, certifications, or statistics.

---

## 5. Animation & Interaction Style

### Benchmark Style
- Subtle, high-performance micro-interactions that communicate precision engineering rather than playful consumer aesthetics.

### UV Equipments Animation Rules
- **Entrance Effects:** Subtle fade-up on scroll (`y: 20px -> 0`, `opacity: 0 -> 1`) with staggered children.
- **Industrial Motifs:** 
  - Signature green diagonal stripe slide-in at -35 degrees.
  - Fine geometric blueprint grid overlaid on deep navy at 3–5% opacity.
  - Refined card hover states: slight 3D elevation (`-2px` lift) and crisp green border glow (`box-shadow: 0 0 12px rgba(1, 101, 52, 0.25)`).
- **Accessibility:** Full compliance with `prefers-reduced-motion: reduce`.

---

## 6. Enquiry Flow & Lead Capture

### Benchmark Flow
- Low-friction contact and quote generation forms tailored for industrial procurement officers, project engineers, and quarry operators.
- Fields capturing specific equipment interest, feed material requirements, and contact channels.

### UV Equipments Enquiry Design
- **Accessible, Validated Fields:** Name, Company, Email, Phone, Product Family (dropdown pre-populated via URL query parameter `?product=<slug>`), and Message.
- **Transparent Form Submission:** As specified in the hard rules, zero fake success screens. Form submission builds and launches a pre-filled `mailto:` link to `info@uvequipments.com` with formatted parameters, clearly notifying the user: *"This will open your default email application to transmit your enquiry directly to UV Equipments."*
- Structured to allow seamless future API integration (e.g., Resend, Formspree, or CRM webhooks).
