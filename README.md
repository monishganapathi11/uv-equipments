# UV Equipments — Industrial Web Platform

Official website for **UV Equipments**, industrial crushing, screening, and material processing equipment manufacturer based in Malur, Kolar District, Karnataka, India.

Built with Next.js (App Router), TypeScript, and Tailwind CSS following strict industrial dark brand guidelines (Navy `#0F2438` dominant, Signature Green `#016534` accent, Platinum Silver `#E5E7EB` surfaces).

---

## Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom industrial brand tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: `Barlow Condensed` / `Oswald` (Headings) & `Inter` (Body & Tables) via `next/font`
- **Images**: `next/image` with WebP and AVIF formats
- **SEO**: Dynamic metadata, OpenGraph, Twitter Cards, Sitemap, Robots, Schema.org Organization & Product JSON-LD

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20.x
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/uv-equipments.git
cd uv-equipments

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build & Type-Checking

```bash
# Type check without emitting files
npx tsc --noEmit

# Lint code
npm run lint

# Production build
npm run build

# Start production server
npm start
```

### Environment Variables

No environment variables are mandatory for default build and operation.
Optional future transactional form endpoints:
- `RESEND_API_KEY`: For backend transactional form emails
- `NEXT_PUBLIC_SITE_URL`: Defaults to `https://www.uvequipments.com`

---

## Project Structure

```
├── app/
│   ├── about/page.tsx             # Company overview & engineering principles
│   ├── contact/page.tsx           # Contact details & interactive enquiry form
│   ├── industries/page.tsx        # 5 sector breakdown linking equipment
│   ├── products/
│   │   ├── page.tsx               # 6-family machinery catalog grid
│   │   └── [slug]/page.tsx        # Dedicated product pages & spec tables
│   ├── globals.css                # Brand tokens, blueprint grids, chamfers
│   ├── layout.tsx                 # Root layout, fonts, JSON-LD Schema
│   ├── not-found.tsx              # Custom 404 page
│   ├── page.tsx                   # High-impact industrial homepage
│   ├── robots.ts                  # Search engine crawl directives
│   └── sitemap.ts                 # XML sitemap generator
├── components/
│   ├── DiagonalStripes.tsx        # Signature -35deg industrial stripes
│   ├── EnquiryForm.tsx            # Validated lead form with mailto trigger
│   ├── Footer.tsx                 # Verified contact details, address & map links
│   ├── Navbar.tsx                 # Sticky 72px header with 6-family dropdown
│   ├── ProductImagePlate.tsx      # Platinum chamfered photo plate & placeholder
│   ├── SectionSeparator.tsx       # Horizontal green separator band
│   └── SpecTable.tsx              # Platinum spec matrix with sticky 1st column
├── data/
│   └── products.ts                # Verified product data from brochure
├── docs/
│   ├── CONTENT_TODO.md            # Content blocks pending client review
│   ├── DATA_REVIEW.md             # Brochure audit and anomalies log
│   ├── DEPLOY.md                  # Complete GitHub & Vercel deployment manual
│   └── REFERENCE_NOTES.md         # Propel Industries UX benchmark analysis
├── public/
│   └── assets/
│       ├── logo/                  # Vector and raster brand marks
│       └── products/              # Studio pre-processed WebP images
└── source/
    └── UV_EQUIPMENTS_PRODUCT_BROCHURE.pdf
```

---

## Deployment Guide

Refer to [docs/DEPLOY.md](docs/DEPLOY.md) for complete step-by-step instructions for publishing to GitHub and deploying to Vercel with custom domain configuration.
