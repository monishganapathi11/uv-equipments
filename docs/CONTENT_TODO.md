# UV Equipments: Content TODO & Decisions for Owner Approval

This document tracks all content blocks, technical configurations, brand approvals, and missing assets that require explicit owner confirmation prior to and during the production build.

---

## 1. Brand & Design Approvals

- [ ] **Official Logo Selection**:
  - The brochure uses the **Shield / Monogram mark** with "UV EQUIPMENTS - INNOVATION THROUGH ENGINEERING".
  - The vector package provides the shield mark in black/red (`UV_Artboard 1`) and green (`UV LOGO.webp`).
  - The prompt mentions a "UVX" logo.
  - *Action needed:* Confirm whether the official brand mark is the **Shield Monogram** or a **UVX** mark.
- [ ] **Navy Background Logo Variant**:
  - A reversed (white letters/contours with green accent) version is required for header and footer on dominant Navy `#0F2438`.
  - *Fallback:* If not supplied as a reversed vector, the existing green shield logo will be displayed on a dedicated platinum silver plate (`#E5E7EB`).
- [ ] **Contrast Green Tint Approval (`#3FAE6A`)**:
  - Primary brand green `#016534` against Navy `#0F2438` provides ~2.2:1 contrast ratio, failing WCAG AA (requires 4.5:1 for body, 3.0:1 for large text).
  - *Proposal:* Approve using `#3FAE6A` exclusively for small green text/icons on navy backgrounds, keeping `#016534` for solid button fills, borders, stripes, and badges.

---

## 2. Product Asset Status (`/public/assets/products/`)

The prompt strictly mandates using pre-processed WebP images (charcoal machine body, green accents, pure white background `#FFFFFF`, sitting inside platinum panels).

Current status in workspace `/public/assets/products/`:
- [x] `grizzly-feeder.webp` — **SUPPLIED & CONVERTED** (Feeder model UVGF 4210 F1)
- [x] `jaw-crusher.webp` — **SUPPLIED & CONVERTED** (Jaw Crusher model UVJVW 4232)
- [x] `cone-crusher.webp` — **SUPPLIED & CONVERTED** (Cone Crusher model UV-HW 220)
- [x] `circular-screen.webp` — **SUPPLIED & CONVERTED** (Screen model CW 2060 with electrical panel)
- [x] `vsi.webp` — **SUPPLIED & CONVERTED** (VSI model UV-VMW 300)
- [x] `bucket-classifier.webp` — **SUPPLIED & CONVERTED** (Bucket Classifier model UVBC 150)

All 6 official WebP assets are installed in `/public/assets/products/` and live on the respective product pages.

---

## 3. About Page Statements of Intent (No Invented History/Stats)

Per Section 6 of the master prompt, no founding year, client counts, square footage, or certifications can be invented. The following generic statements of intent will be used, marked with `TODO: Owner Review`:
- [ ] **Company Overview**: Fact-based description of UV Equipments as an engineering and equipment manufacturer based in Malur, Karnataka, providing crushing, screening, and material handling systems for mining, quarrying, and construction.
- [ ] **Manufacturing & Engineering Philosophy**: Based strictly on brochure-stated features (modular vibrators, high-wear replaceable manganese steel liners, hydraulic overload protection, optimized nip angles, and water-recirculating dewatering design).
- [ ] **Quality Commitment**: Statement of adherence to precision tolerances and robust structural fabrication standards.
- [ ] **Mission & Vision**: Standard engineering excellence and sustainable mineral processing focus.

---

## 4. Enquiry Form Backend Integration

- [ ] **Phase 1 Implementation**: Client-side validation with direct formatted `mailto:info@uvequipments.com` trigger and clear user notification (*"This opens your email application"*). Zero simulated success screens.
- [ ] **Future Backend Service**: Option to integrate **Resend**, **Formspree**, or internal CRM webhooks for transactional form delivery.
