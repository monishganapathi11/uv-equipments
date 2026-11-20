# UV Equipments: Google Antigravity Master Prompt

Premium dark industrial website (Next.js, TypeScript, Tailwind). Copy everything below into PROMPT.md in your Antigravity workspace root.

## Before you run this
- Process the six product images first (Photoshop, Photopea or an AI-edit tool) and save them as WebP in /public/assets/products/.
- Supply the logo as a vector or transparent PNG; a reversed (white letters, green X) version is needed for navy backgrounds.
- Approve the optional green tint #3FAE6A (used only for small green text on navy, because #016534 on #0F2438 is about 2.2:1 contrast).
- Confirm which logo is official: UVX (supplied) or the shield mark printed in the brochure.
- Antigravity should stop after Phase 0 so you can review its notes before it builds.

## 1. Role and hard rules
You are a senior industrial-brand designer, UI/UX architect and full-stack engineer. Build, test and prepare for GitHub and Vercel a complete multi-page website for UV Equipments (industrial crushing, screening and material processing equipment, Malur, Karnataka, India). Work in phases; after each phase run the build and fix errors before continuing. Do not claim deployment succeeded unless it actually did.
- Never invent specifications, certifications, history, clients, awards, statistics or testimonials. Missing data shows "Please contact us" or is omitted.
- Never substitute unrelated machinery images. Use only the supplied images.
- Never recolour machinery with CSS filters. Use only the supplied, pre-processed images.
- Never distort, stretch or recolour the logo.
- No fake form submission (see Enquiry form).
- Do not copy Propel Industries' logo, text or images.

## 2. Phase 0: inspect inputs
- Use the browser to study https://www.propelind.com/ (home, navigation, product list, one product page, contact). Write /docs/REFERENCE_NOTES.md covering structure, nav pattern, product presentation, typography, animation style and enquiry flow. Use it as a quality benchmark only.
- Read /source/UV_EQUIPMENTS_PRODUCT_BROCHURE.pdf fully. The product data in this prompt was verified against it. If you find any difference, the PDF wins; log it in /docs/DATA_REVIEW.md.
- List everything in /public/assets and report any missing file.
- STOP after Phase 0 and show the owner your notes and any file issues.

## 3. Stack
Next.js (App Router), React, TypeScript (strict), Tailwind CSS, lucide-react, next/image, next/font. Reusable components; data-driven pages with products typed in /data/products.ts. No unused dependencies.

## 4. Brand tokens
| Role | Hex | Use |
| :--- | :--- | :--- |
| Navy (dominant) | #0F2438 | Backgrounds, nav, footer, hero |
| Green (signature) | #016534 | Stripes, buttons, borders, active states, fills |
| Platinum silver | #E5E7EB | Spec panels, cards, form surfaces |
| White | #FFFFFF | Headings and key text on navy |
| Green-light (optional) | #3FAE6A | Small green text/icons on navy only |

Define tokens in tailwind.config and CSS variables.
Text: white headings and platinum body on navy; navy text on platinum; white text on green buttons; green text only on platinum (or green-light on navy).
Use #016534 on navy only for fills, stripes, borders and buttons.
Never a predominantly white page; no full-white sections.
Product images (pure white studio background) sit inside platinum panels with a refined inner border so they read as deliberate photo plates.
Platinum may use a very restrained brushed-metal gradient. No random colours, no heavy gradients, no heavy rounded cards (radius max 4px; prefer sharp or chamfered corners).

### Signature motifs
- Reusable `<DiagonalStripes/>` component: green bands at about -35 degrees (clip-path or repeating-linear-gradient).
- Thin horizontal green bands as section separators.
- Subtle blueprint/geometric grid on navy at very low opacity.
- Chamfered (cut-corner) panels via clip-path.

### Typography
Headings: strong condensed industrial sans (Barlow Condensed or Oswald via next/font), uppercase, tight tracking. Body: Inter or Barlow. One h1 per page with a clean heading hierarchy.

### Logo
`/public/assets/logo/` contains the supplied UVX logo. Use the reversed/white version on navy in header and footer. If only the navy-on-white original exists, place it unaltered on a small platinum plate. Generate favicon and app icons from it without distortion. Header height about 72px; logo at least 40px high.

## 5. Navigation
HOME | ABOUT US | PRODUCTS (dropdown of the six families) | INDUSTRIES | CONTACT. Sticky, navy, white type, animated green underline on hover, green active indicator, persistent green ENQUIRE button, keyboard-accessible dropdown, full-screen mobile menu with smooth transitions.

## 6. Pages and routes
- `/` Home: Hero: navy background, green diagonal stripes, strong headline from supplied facts ("Advanced Crushing and Screening Solutions", "Innovation Through Engineering"), sub-line "for the mining and construction industries", a large product image on a platinum plate, CTAs "Explore Products" and "Enquire Now". Then: company intro; 3 to 4 featured products; six category tiles; Why Choose UV Equipments; engineering capabilities; industries served; company strengths; enquiry CTA band; footer. Strengths and capabilities copy must come only from brochure features (replaceable wear liners, hydraulic overload protection, modular design, low-maintenance design, water-saving design). No invented numbers.
- `/about`: Overview, engineering capabilities, manufacturing philosophy, quality commitment, mission and vision, values. No history, years, certifications or achievements unless supplied. Where facts are missing, write modest, generic statements of intent, mark each block with a TODO comment and list it in /docs/CONTENT_TODO.md for owner approval.
- `/products`: Grid of six family cards on navy: platinum image plate, product name, series, one-line description, View Details button.
- `/products/[slug]`: Six pages: grizzly-feeder, vertical-wave-jaw-crusher, horizontal-wave-cone-crusher, circular-wave-screen, multi-wave-vertical-shaft-impactor, sand-washer-bucket-classifier. Each has title, image, overview, description, salient features, models list, spec table (platinum panel on navy, navy text, sticky first column, horizontal scroll on mobile), model comparison, applications only where the brochure supports them, an Enquire About This Product button linking to /contact?product=slug, prev/next links, and generateMetadata.
- `/industries`: Mining, Quarrying, Construction, Aggregate Processing, Sand Processing. Neutral descriptions linking relevant product families; no invented projects or statistics.
- `/contact`: Details block and enquiry form. Also: custom 404, /sitemap.xml, /robots.txt.

## 7. Contact details (use exactly)
- Phone: +91 8296 13 8419 | +91 9488 87 7519 (tel: links)
- Email: info@uvequipments.com (mailto:)
- Website: www.uvequipments.com
- Address: Plot No. 118, 3rd Phase, KIADB Industrial Area, Malur, Kolar District, Karnataka, India - 563130.
Footer repeats these. No Google Maps iframe unless the owner provides one; link "Open in Maps" via a plain search URL.

## 8. Enquiry form
Fields: Name, Company, Email, Phone, Product of interest (select of six families plus General enquiry, preselected from ?product=), Message. Client-side validation and accessible labels. No fake submission: on submit, build a mailto: link to info@uvequipments.com with the fields pre-filled in subject and body and open it, with a clear note "This opens your email app." Add a TODO in /docs/CONTENT_TODO.md offering a real backend (Resend or Formspree) later. Never show a fake "message sent" confirmation.

## 9. Animations, responsiveness, SEO
### Animations (subtle)
Smooth scroll, hero text entrance, product image reveal, section fade-up on scroll, green stripe slide-in, nav underline, card hover lift with green border. Respect prefers-reduced-motion. No heavy or looping effects.
### Responsive
Test at 360, 768, 1024 and 1440 px. Tables scroll horizontally inside a container with a visible scroll hint; grids collapse 3, 2, 1; forms stack; no horizontal page overflow.
### SEO and performance
Unique title and meta description per page; product-specific metadata; Open Graph and Twitter tags with an OG image; canonical URLs; sitemap.ts; robots.ts; descriptive alt text; JSON-LD Organization (supplied facts only) and Product (no invented prices or ratings); next/image with width and height, priority only on the hero; WebP; semantic HTML; Lighthouse target 90+ in all four categories. Set metadataBase to https://www.uvequipments.com.

## 10. Product data (use exactly as printed; "-" if not printed)

### 1. Grizzly Feeder, UVGF Series F1
Designed for heavy-duty operations, the Grizzly Feeder ensures a consistent flow of materials to the crushing equipment, improving efficiency and reducing wear on the crusher.
Salient features:
- Counter unbalanced electric motor drive.
- Hardened steel replaceable grizzly cartridge sections.
- Modular vibrator with cardan shaft design: easy maintenance, excellent durability and adjustable stroke.
- High manganese steel replaceable grizzly bars and cartridge arrangement for effective scalping and bypassing.
- Impact areas covered with high wear resistant replaceable liners.

| Specification | UVGF 4090 F1 | UVGF 4210 F1 | UVGF 2212 F1 | UVGF 4815 F1 |
| :--- | :--- | :--- | :--- | :--- |
| Dimension (W x L) mm (inch) | 4000 x 900 (158 x 35.4) | 4200 x 1000 (165.3 x 40) | 4400 x 1200 (173.2 x 47.2) | 4800 x 1500 (189 x 59) |
| Feed size (max) mm (inch) | 560 (22) | 650 (25.5) | 700 (27.5) | 1020 (40.2) |
| Capacity (max) TPH | 250 | 350 | 400 | 700 |
| Motor power kW (HP) | 2 x 4.3 (2 x 6) | 2 x 4.3 (2 x 6) | 2 x 6.2 (2 x 8) | 2 x 7.99 (2 x 11) |
| Weight kg (ton) | 3400 (3.4) | 3560 (3.56) | 4650 (4.56) | 6230 (6.23) |

Common: grizzly bar material is replaceable wear-resistant material that prevents clogging and packing; mounting type (optional): skid; drive: AC unbalanced vibro motors.

### 2. Vertical Wave Jaw Crusher, UV-JVW Series
Our Jaw Crushers provide robust performance, efficiently crushing the toughest rocks and materials with high production rates and minimal maintenance.
Salient features:
- Large feed acceptance capability.
- Interchangeable and reversible jaw plates.
- Easy and safe adjustment mechanism.
- Optimized nip angle.
- Enhanced capacity with high reduction ratio.
- Hydraulic wedge / toggle mechanism (optional).

| Specification | UVJVW 3628 | UVJVW 4232 | UVJVW 5034 | UVJVW 6050 |
| :--- | :--- | :--- | :--- | :--- |
| Feed opening (W x L) mm (inch) | 900 x 700 (36 x 28) | 1070 x 816 (42 x 32) | 1275 x 867 (38.5 x 49.2) | 1524 x 1270 (60 x 50) |
| Feed size (max) mm (inch) | 560 (22.0) | 650 (25.6) | 700 (27.6) | 1020 (40.1) |
| Capacity TPH | 120 - 250 | 180 - 350 | 200 - 400 | 400 - 750 |
| CSS range mm (inch) | 70 - 140 (2.75 - 5.5) | 80 - 180 (3.1 - 7.0) | 100 - 200 (3.9 - 7.87) | 150 - 350 (5.9 - 13.5) |
| Crusher speed rpm | 260 | 260 | 260 | 225 |
| Motor power kW (HP) | 75 (100) | 110 (150) | 150 (200) | 250 (350) |

Common: mounting (optional) skid; jaw plates interchangeable and reversible; grease lubrication; single toggle type; high grade carbon alloyed steel with welded structure. Weights are not given in the brochure.

### 3. Horizontal Wave Cone Crusher, UV-CHW Series
With advanced engineering, the Cone Crusher delivers precise crushing capabilities, ensuring high productivity and consistent output quality.
Salient features:
- Dual-dust seal system, user-friendly SMS system.
- Bigger mantle diameter combined with effective speed to enhance productivity.
- Specially defined chambers to crush coarse/fine feed materials, for open/closed circuit.
- Reliable hydraulic overload protection.
- Dynamic hydraulic adjustment of high speed CSS quick extract.
- Hydraulic chamber clearance.
- Zero maintenance, optional anti-spin.
- Leaded bronze sleeves to withstand high radial crushing force.
- Heavy duty thrust bearings.

| Specification | UVCHW 120 | UVCHW 220 | UVCHW 310 |
| :--- | :--- | :--- | :--- |
| Feed opening mm (inch) | 180 (7.0) | 220 (8.7) | EC 250 \| C 200 (9.8 \| 7.8) |
| Feed size (max) mm (inch) | 150 (5.9) | 176 (6.9) | EC 220 \| C 180 (8.6 \| 7.0) |
| Capacity TPH | 80 - 120 | 180 - 340 | 300 - 400 |
| CSS range mm (inch) | 24 - 34 (0.9 - 1.33) | 24 - 35 (0.9 - 1.3) | 20 - 45 (0.7 - 1.7) |
| Motor power kW (HP) | 90 (120) | 200 (270) | 220 - 315 (295 - 422) |
| Weight kg (ton) | 7300 (7.3) | 11500 (11.5) | 17000 (17.0) |

Common: mounting skid; multi bush type design; pressurized oil and grease lubrication; high carbon alloyed steel.

### 4. Circular Wave Screen, UV-SCW Series
Our screening solutions offer reliable and versatile sorting of materials, enhancing the quality and efficiency of your production process.
Salient features:
- Circular motion modular vibrators with two bearings per vibrator, interconnected by cardan shaft.
- Unique angle of the circular motion MVS screens achieves higher productivity.
- Modular design available as 1, 2, 3 or 4 deck with excellent segregation to suit aggregate and mining requirements.
- Stroke adjustment through counter weight.
- Grease lubrication system ensures easy and low maintenance.

| Specification | UV-SCW 1850 | UV-SCW 2060 | UV-SCW 2562 |
| :--- | :--- | :--- | :--- |
| Screen size (W x L) mm (inch) | 1800X500 (70.8X196.85) | 2000 x 6000 (78.7 x 236.2) | 2500 X 6200 (98.4 X 244) |
| Screening area (as printed) | 228.6 (9.0) | 304.8 (12.0) | 393.7 (15.5) |
| Capacity TPH | 400 | 650 | 800 |
| Number of decks | 3/4 | 2 / 3 / 4 | 3 / 4 |
| Motor power kW (HP) | 11X2 (15X2) | 15X2 (20X2) | 20X2 (30X2) |
| Weight (as printed) kg (ton) | 5400 X 6300 (5.4X6.3) | 7000 X 8600 (7.4X8.6) | 12900 X 14500 (12.9X14.5) |

Common: mounting (optional) skid; inclined screen position; circular type of motion. Several printed values here look suspect; see Data review.

### 5. Multi Wave Vertical Shaft Impactor, UV-VMW Series
Perfect for creating high-quality cubicle shape aggregates, the VSI offers superior shaping and finishing capabilities for non-breakable concrete and asphalt applications.
Salient features:
- Steel structure for smooth operation.
- Simple inter-changeable cartridge type rock box for rock-on-rock applications.
- Crusher impact combined with speed gives a unique shape, producing high-quality manufactured sand conforming to C 144 standards.
- Hydraulic feed control in-built device.
- Parallel flow system provides increased capacity and less micro fines content.
- Optional setup for wet application / roof lifting mechanism for easy maintenance.
- High production and crushing ratio; automatic lubricated system (optional).
- Excellent cubical shape; improved version of rock-on-rock configuration.
- Material moisture content can reach up to 8 percent.
- Fine particles easily controlled by changing rotor speed.
- Rotor finished with special carbide tips to enhance wear resistance.

| Specification | UV-VMW 100 | UV-VMW 150 | UV-VMW 250 | UV-VMW 300 |
| :--- | :--- | :--- | :--- | :--- |
| Feed size (max recom.) as printed | 24 | 32 | 42 | 42 |
| Capacity TPH | 50 - 110 | 75 - 100 | 180 - 320 | 350 - 550 |
| Rotor diameter mm (inch) | 680 (26.7) | 760 (29.9) | 840 (33.0) | 1070 (42.0) |
| Rotor speed m/second | 45 - 80 | 45 - 80 | 45 - 80 | 45 - 80 |
| Motor power kW (HP) | 75 (100) | 100 (150) | 160 (215) | 220 (300) |
| Weight kg (ton) | 4600 (4.6) | 6600 (6.6) | 8700 (8.7) | 9250 (9.2) |

Common: impact cartridge option rock on rock; port 3; lubrication grease.

### 6. Sand Washer Bucket Classifier, UVBC Series
Sand Washer Bucket Classifier is a high-efficiency machine designed to clean and classify sand, removing impurities for superior quality.
Salient features:
- Rapid and thorough sand cleaning for optimal productivity.
- Built to withstand tough working conditions and ensure longevity.
- Low maintenance design reduces operational costs.
- Minimizes water waste, promoting sustainable practices.

| Specification | UVBC 60 | UVBC 100 | UVBC 120 | UVBC 150 |
| :--- | :--- | :--- | :--- | :--- |
| Capacity TPH | 80 | 100 | 120 | 160 |
| Drive power KW/HP | 3.7/5 | 5.5/7.5 | 7.5/10 | 11/15 |
| Rotation speed RPM | 3.5 | 3.5 | 4 | 4 |
| No. of buckets | 8 | 10 | 12 | 16 |
| Vibro motor power HP | 2 x 1.5 = 3HP | 2 x 2 = 4HP | 2 x 2.5 = 5HP | 2 x 3 = 6HP |
| Dewatering area mm | 900 x 1800 | 1200 x 2100 | 1200 x 2400 | 1200 x 2700 |
| Total power KW/HP | 5/8 | 8.5/11.5 | 11/15 | 15.6/21 |

Footnote to show under every spec table (printed in the brochure): "Details may vary based on application. Weight inclusive of motor & accessories. All the above technical details may vary at any time during engineering process & design development."

### Data review: log, do not correct
Display printed values exactly. Log each of these in /docs/DATA_REVIEW.md for the owner to confirm:
- UVGF 2212 F1: 4400 x 1200 mm does not match its model code; weight reads 4650 kg but (4.56) ton.
- UVGF dimension label is W x L but values look like L x W.
- UVJVW 5034 feed opening inch values (38.5 x 49.2) look wrong.
- UV-SCW 1850 screen size 1800 x 500 (probably 6000); Screening Area values have unit "MM"; Weight row shows dimension-like pairs.
- UV-VMW 150 capacity 75 - 100 is odd next to the 100 model; feed size shown without clear units; 100 kW vs 150 HP does not convert.
- Machine labels in the images (UV-VW 4232, UV-HW 220, CW 2060) differ from the series codes. Caption images "Representative image" and do not alter labels.

## 11. Image assets
Use only /public/assets/products/*.webp, pre-processed by the owner: charcoal body, green accents, pure white background. Expected names: grizzly-feeder.webp, jaw-crusher.webp, cone-crusher.webp, circular-screen.webp, vsi.webp, bucket-classifier.webp. Do not edit images yourself and do not apply CSS filters. If a file is missing, show a neutral placeholder with the product name and report it.

## 12. Deployment
README.md: install, dev, build, lint, env vars.
.gitignore, package.json scripts, next.config with image formats.
Run npm run lint, npx tsc --noEmit and npm run build; fix all errors.
Initialise git and make a clean first commit. Do not push without explicit owner approval.
Write /docs/DEPLOY.md: create a GitHub repo, git remote add origin, git push -u origin main, import into Vercel (Next.js preset, no env vars), add custom domain (uvequipments.com and www), set DNS records as Vercel shows, verify SSL.
Final report: pages built, tests run, known issues, content TODO list. State clearly that the site is NOT live until the owner completes the Vercel deployment.

## 13. Deliverables checklist
All 6 product pages and the 6 other pages render; no white-dominant sections; contrast passes WCAG AA; build passes; sitemap includes all routes; DATA_REVIEW.md and CONTENT_TODO.md written.
