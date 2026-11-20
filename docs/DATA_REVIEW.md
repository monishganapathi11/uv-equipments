# UV Equipments: Product Brochure Data Review & Audit

This document logs all anomalies, discrepancies, typographical errors, and units identified during the exhaustive audit of `/source/UV_EQUIPMENTS_PRODUCT_BROCHURE.pdf` against the master prompt specification.

**Rule Applied:** As stipulated in the master prompt, all printed values are rendered **EXACTLY** as they appear in the official brochure on the website. No values have been arbitrarily altered or guessed. The items below are logged for client confirmation and future brochure/website revisions.

---

## 1. Grizzly Feeder (UVGF Series F1) — Brochure Page 2

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **Model Code vs Dimensions** | `UVGF 2212 F1`: Dimension `4400 x 1200 mm` | In standard industrial nomenclature, model codes reflect dimensions (e.g., UVGF 4090 = 4000x900, UVGF 4210 = 4200x1000). Model 2212 with 4400x1200 suggests the model code was intended to be `UVGF 4412 F1` or `UVGF 4212 F1`. | Confirm if model name should remain `UVGF 2212 F1` or be corrected to `UVGF 4412 F1`. |
| **Dimension Label Order** | `Dimension (W x L) MM (inch)` | Values are listed as `4000 x 900`, `4200 x 1000`, `4400 x 1200`, `4800 x 1500`. These represent Length × Width rather than Width × Length. | Maintain printed values; consider updating table label to `Dimension (L x W)` in future revisions. |
| **Weight Metric Conversion** | `UVGF 2212 F1`: `4650 (4.56)` kg (ton) | 4650 kg mathematically converts to 4.65 metric tons, not 4.56. | Clarify if actual weight is 4560 kg or 4650 kg. |
| **Salient Feature Wording** | "High manganese steel with replaceable grizzly bars..." | Brochure includes the word "with", prompt omitted it. PDF text takes precedence. | Preserved exact brochure wording. |

---

## 2. Vertical Wave Jaw Crusher (UV-JVW Series) — Brochure Page 3

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **UVJVW 5034 Feed Opening** | `1275 x 867 (38.5 x 49.2)` mm (inch) | `1275 x 867 mm` equates to `50.2 x 34.1 inches`. The printed `(38.5 x 49.2)` corresponds to `980 x 1250 mm` (an industry benchmark specification from Propel AVJ 912) mistakenly inserted. | Confirm whether feed opening is 1275 x 867 mm (50.2 x 34.1 in) or 980 x 1250 mm (38.5 x 49.2 in). |
| **Machine Weight** | *(Omitted)* | Weight row is completely omitted in the Jaw Crusher technical table in the brochure. | Display "Please contact us" or "-" as required by prompt rules; request confirmed weight data for 3628, 4232, 5034, 6050. |
| **Machine Visual Label** | `VERTICAL WAVE UV-VW 4232` | 3D render label omits the "J" from series code (`UV-JVW`). | Retain image unaltered, caption as "Representative image". |

---

## 3. Horizontal Wave Cone Crusher (UV-CHW Series) — Brochure Page 4

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **UVCHW 310 Cavity Options** | `EC 250 \| C 200 (9.8) \| (7.8)` | Feed opening and feed size are divided into Extra Coarse (EC) and Coarse (C) cavities. Formatting needs clean visual representation in tables. | Rendered with clear sub-labels for EC and C chambers. |
| **Machine Visual Label** | `HORIZONTAL WAVE UV-HW 220` | Render label omits the "C" from series code (`UV-CHW`). | Retain image unaltered, caption as "Representative image". |

---

## 4. Circular Wave Screen (UV-SCW Series) — Brochure Page 5

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **UV-SCW 1850 Screen Size** | `1800X500 (70.8X196.85)` mm (inch) | `70.8 x 196.85 inches` equals `1800 x 5000 mm`. The printed `1800X500` has dropped a zero (5000 mm). | Rendered as printed (`1800X500`); client should confirm 5000 mm length. |
| **Screening Area Units** | `Screening Area: MM (inch)` | Values `228.6 (9.0)`, `304.8 (12.0)`, `393.7 (15.5)` are labeled with unit `MM (inch)`. Standard screening area is measured in m² or sq ft. (Note: 228.6 mm = 9.0 in, 304.8 mm = 12.0 in, 393.7 mm = 15.5 in). | Clarify whether values represent deck area (e.g. sq ft / m²) or effective screening width. |
| **Weight Row Values** | `5400 X 6300 (5.4X6.3)`, `7000 X 8600 (7.4X8.6)`, `12900 X 14500 (12.9X14.5)` | Pairs represent weights for multi-deck variants (3-deck vs 4-deck). In model 2060, `7000 kg` is printed as `(7.4)` ton instead of `7.0`. | Confirm multi-deck weight breakdown (e.g., 2-deck / 3-deck / 4-deck). |
| **Machine Visual Label** | `CIRCULAR WAVE UV-CW 2060` | Render label uses `UV-CW` instead of `UV-SCW`. | Retain image unaltered, caption as "Representative image". |

---

## 5. Multi Wave Vertical Shaft Impactor (UV-VMW Series) — Brochure Page 6

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **UV-VMW 150 Capacity** | `75 - 100` TPH | Model 100 has `50 - 110` TPH, so `75 - 100` for Model 150 is unusually narrow compared to Model 250 (`180 - 320`). | Client to verify if Model 150 capacity should be higher (e.g., 75 - 150 TPH). |
| **Feed Size Units** | `24`, `32`, `42`, `42` under `MM (inch)` | Printed as bare integers without inch conversions. | Rendered as bare numbers as printed; confirm if unit is strictly mm. |
| **Motor Power Conversion** | `UV-VMW 150`: `100 (150)` KW (HP) | 100 kW converts to ~134 HP, while 150 HP converts to ~110 kW. | Confirm exact motor rating: 110 kW (150 HP) or 100 kW (135 HP). |
| **Typo in Brochure Copy** | "confirming to C 144 standards" | Grammatical typo in brochure for "conforming to ASTM C144 standards". | Displayed as printed in brochure quote; recommend correcting in brochure reprint. |

---

## 6. Sand Washer Bucket Classifier (UVBC Series) — Brochure Page 7

| Field / Model | Printed Value in Brochure | Identified Anomaly / Note | Recommended Client Action |
| :--- | :--- | :--- | :--- |
| **Dewatering Area Units** | `900 x 1800`, `1200 x 2100`, `1200 x 2400`, `1200 x 2700` | Dimension header indicates `MM (inch)`, but inch conversions are omitted in all 4 columns. | Rendered as printed without guessing inch equivalents. |

---

## 7. Mandatory Engineering Footnote (Brochure Pages 2–7)
All product specification tables will feature the exact printed disclaimer:
> *"Details may vary based on application. Weight inclusive of motor & accessories. All the above technical details may vary at any time during engineering process & design development."*
