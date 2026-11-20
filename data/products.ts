export interface ProductSpec {
  parameter: string;
  unit?: string;
  values: Record<string, string>;
  isCommon?: boolean;
  commonValue?: string;
}

export interface Product {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  overview: string;
  description: string;
  image: string;
  salientFeatures: string[];
  models: string[];
  specs: ProductSpec[];
  commonFeatures?: { label: string; value: string }[];
  applications: string[];
  imageCaption: string;
}

export const SPEC_FOOTNOTE =
  "Details may vary based on application. Weight inclusive of motor & accessories. All the above technical details may vary at any time during engineering process & design development.";

export const PRODUCTS: Product[] = [
  {
    slug: "grizzly-feeder",
    name: "Grizzly Feeder",
    series: "UVGF Series F1",
    tagline: "Heavy-duty continuous material feeding and scalping",
    overview:
      "Designed for heavy-duty operations, the Grizzly Feeder ensures a consistent flow of materials to the crushing equipment, improving efficiency and reducing wear on the crusher.",
    description:
      "The UVGF Series F1 Grizzly Feeder delivers reliable primary feed regulation for mining and aggregate crushing circuits. Engineered with a counter-unbalanced electric motor drive and replaceable manganese grizzly cartridge sections, it scalps fine quarry material ahead of the primary crusher while withstanding continuous high-impact loading.",
    image: "/assets/products/grizzly-feeder.webp",
    imageCaption: "Representative image: Grizzly Feeder UVGF Series F1",
    salientFeatures: [
      "Counter unbalanced electric motor drive.",
      "Hardened steel replaceable grizzly cartridge sections.",
      "Modular vibrator with cardan shaft design: easy maintenance, excellent durability and adjustable stroke.",
      "High manganese steel with replaceable grizzly bars and cartridge arrangement for effective scalping and bypassing.",
      "Impact areas covered with high wear resistant replaceable liners.",
    ],
    models: ["UVGF 4090 F1", "UVGF 4210 F1", "UVGF 2212 F1", "UVGF 4815 F1"],
    specs: [
      {
        parameter: "Dimension (W x L)",
        unit: "mm (inch)",
        values: {
          "UVGF 4090 F1": "4000 x 900 (158 x 35.4)",
          "UVGF 4210 F1": "4200 x 1000 (165.3 x 40)",
          "UVGF 2212 F1": "4400 x 1200 (173.2 x 47.2)",
          "UVGF 4815 F1": "4800 x 1500 (189 x 59)",
        },
      },
      {
        parameter: "Feed size (max)",
        unit: "mm (inch)",
        values: {
          "UVGF 4090 F1": "560 (22)",
          "UVGF 4210 F1": "650 (25.5)",
          "UVGF 2212 F1": "700 (27.5)",
          "UVGF 4815 F1": "1020 (40.2)",
        },
      },
      {
        parameter: "Capacity (max)",
        unit: "TPH",
        values: {
          "UVGF 4090 F1": "250",
          "UVGF 4210 F1": "350",
          "UVGF 2212 F1": "400",
          "UVGF 4815 F1": "700",
        },
      },
      {
        parameter: "Motor power",
        unit: "kW (HP)",
        values: {
          "UVGF 4090 F1": "2 x 4.3 (2 x 6)",
          "UVGF 4210 F1": "2 x 4.3 (2 x 6)",
          "UVGF 2212 F1": "2 x 6.2 (2 x 8)",
          "UVGF 4815 F1": "2 x 7.99 (2 x 11)",
        },
      },
      {
        parameter: "Weight",
        unit: "kg (ton)",
        values: {
          "UVGF 4090 F1": "3400 (3.4)",
          "UVGF 4210 F1": "3560 (3.56)",
          "UVGF 2212 F1": "4650 (4.56)",
          "UVGF 4815 F1": "6230 (6.23)",
        },
      },
    ],
    commonFeatures: [
      {
        label: "Grizzly Bar Material",
        value: "Replaceable wear-resistant material that prevents clogging and packing",
      },
      { label: "Mounting Type", value: "Skid (Optional)" },
      { label: "Drive Mechanism", value: "AC unbalanced vibro motors" },
    ],
    applications: [
      "Quarry primary feed stations",
      "Mining scalping and material bypass circuits",
      "Heavy aggregate processing plants",
    ],
  },
  {
    slug: "vertical-wave-jaw-crusher",
    name: "Vertical Wave Jaw Crusher",
    series: "UV-JVW Series",
    tagline: "Robust primary rock crushing with high reduction ratios",
    overview:
      "Our Jaw Crushers provide robust performance, efficiently crushing the toughest rocks and materials with high production rates and minimal maintenance.",
    description:
      "The UV-JVW Series Vertical Wave Jaw Crusher is built for aggressive primary reduction of hard, abrasive rock and ore. Featuring a heavy-duty single toggle mechanism, reversible high-grade manganese jaw plates, and optimized nip angle geometry, it delivers maximum throughput with minimal operating fatigue.",
    image: "/assets/products/jaw-crusher.webp",
    imageCaption: "Representative image: Vertical Wave Jaw Crusher UV-JVW Series",
    salientFeatures: [
      "Large feed acceptance capability.",
      "Interchangeable and reversible jaw plates.",
      "Easy and safe adjustment mechanism.",
      "Optimized nip angle.",
      "Enhanced capacity with high reduction ratio.",
      "Hydraulic wedge / toggle mechanism (optional).",
    ],
    models: ["UVJVW 3628", "UVJVW 4232", "UVJVW 5034", "UVJVW 6050"],
    specs: [
      {
        parameter: "Feed opening (W x L)",
        unit: "mm (inch)",
        values: {
          "UVJVW 3628": "900 x 700 (36 x 28)",
          "UVJVW 4232": "1070 x 816 (42 x 32)",
          "UVJVW 5034": "1275 x 867 (38.5 x 49.2)",
          "UVJVW 6050": "1524 x 1270 (60 x 50)",
        },
      },
      {
        parameter: "Feed size (max)",
        unit: "mm (inch)",
        values: {
          "UVJVW 3628": "560 (22.0)",
          "UVJVW 4232": "650 (25.6)",
          "UVJVW 5034": "700 (27.6)",
          "UVJVW 6050": "1020 (40.1)",
        },
      },
      {
        parameter: "Capacity",
        unit: "TPH",
        values: {
          "UVJVW 3628": "120 - 250",
          "UVJVW 4232": "180 - 350",
          "UVJVW 5034": "200 - 400",
          "UVJVW 6050": "400 - 750",
        },
      },
      {
        parameter: "CSS range",
        unit: "mm (inch)",
        values: {
          "UVJVW 3628": "70 - 140 (2.75 - 5.5)",
          "UVJVW 4232": "80 - 180 (3.1 - 7.0)",
          "UVJVW 5034": "100 - 200 (3.9 - 7.87)",
          "UVJVW 6050": "150 - 350 (5.9 - 13.5)",
        },
      },
      {
        parameter: "Crusher speed",
        unit: "rpm",
        values: {
          "UVJVW 3628": "260",
          "UVJVW 4232": "260",
          "UVJVW 5034": "260",
          "UVJVW 6050": "225",
        },
      },
      {
        parameter: "Motor power",
        unit: "kW (HP)",
        values: {
          "UVJVW 3628": "75 (100)",
          "UVJVW 4232": "110 (150)",
          "UVJVW 5034": "150 (200)",
          "UVJVW 6050": "250 (350)",
        },
      },
      {
        parameter: "Weight",
        unit: "kg (ton)",
        values: {
          "UVJVW 3628": "-",
          "UVJVW 4232": "-",
          "UVJVW 5034": "-",
          "UVJVW 6050": "-",
        },
      },
    ],
    commonFeatures: [
      { label: "Mounting Type", value: "Skid (Optional)" },
      { label: "Jaw Plates", value: "Interchangeable and reversible" },
      { label: "Lubrication", value: "Grease" },
      { label: "Toggle Mechanism", value: "Single toggle type" },
      {
        label: "Construction",
        value: "High grade carbon alloyed steel with welded structure",
      },
    ],
    applications: [
      "Primary stage hard rock crushing",
      "Quarry boulder breaking",
      "Mining and metallurgical ore processing",
    ],
  },
  {
    slug: "horizontal-wave-cone-crusher",
    name: "Horizontal Wave Cone Crusher",
    series: "UV-CHW Series",
    tagline: "High-precision secondary & tertiary crushing with hydraulic clearance",
    overview:
      "With advanced engineering, the Cone Crusher delivers precise crushing capabilities, ensuring high productivity and consistent output quality.",
    description:
      "The UV-CHW Series Cone Crusher is designed for consistent cubical shape aggregate production across secondary and tertiary crushing stages. Equipped with hydraulic overload protection, dynamic high-speed CSS adjustment, and heavy-duty leaded bronze sleeves, it ensures seamless operation in demanding applications.",
    image: "/assets/products/cone-crusher.webp",
    imageCaption: "Representative image: Horizontal Wave Cone Crusher UV-CHW Series",
    salientFeatures: [
      "Dual-dust seal system, user-friendly SMS system.",
      "Bigger mantle diameter combined with effective speed to enhance productivity.",
      "Specially defined chambers to crush coarse/fine feed materials, for open/closed circuit.",
      "Reliable hydraulic overload protection.",
      "Dynamic hydraulic adjustment of high speed CSS quick extract.",
      "Hydraulic chamber clearance.",
      "Zero maintenance, optional anti-spin.",
      "Leaded bronze sleeves to withstand high radial crushing force.",
      "Heavy duty thrust bearings.",
    ],
    models: ["UVCHW 120", "UVCHW 220", "UVCHW 310"],
    specs: [
      {
        parameter: "Feed opening",
        unit: "mm (inch)",
        values: {
          "UVCHW 120": "180 (7.0)",
          "UVCHW 220": "220 (8.7)",
          "UVCHW 310": "EC 250 | C 200 (9.8 | 7.8)",
        },
      },
      {
        parameter: "Feed size (max)",
        unit: "mm (inch)",
        values: {
          "UVCHW 120": "150 (5.9)",
          "UVCHW 220": "176 (6.9)",
          "UVCHW 310": "EC 220 | C 180 (8.6 | 7.0)",
        },
      },
      {
        parameter: "Capacity",
        unit: "TPH",
        values: {
          "UVCHW 120": "80 - 120",
          "UVCHW 220": "180 - 340",
          "UVCHW 310": "300 - 400",
        },
      },
      {
        parameter: "CSS range",
        unit: "mm (inch)",
        values: {
          "UVCHW 120": "24 - 34 (0.9 - 1.33)",
          "UVCHW 220": "24 - 35 (0.9 - 1.3)",
          "UVCHW 310": "20 - 45 (0.7 - 1.7)",
        },
      },
      {
        parameter: "Motor power",
        unit: "kW (HP)",
        values: {
          "UVCHW 120": "90 (120)",
          "UVCHW 220": "200 (270)",
          "UVCHW 310": "220 - 315 (295 - 422)",
        },
      },
      {
        parameter: "Weight",
        unit: "kg (ton)",
        values: {
          "UVCHW 120": "7300 (7.3)",
          "UVCHW 220": "11500 (11.5)",
          "UVCHW 310": "17000 (17.0)",
        },
      },
    ],
    commonFeatures: [
      { label: "Mounting Type", value: "Skid" },
      { label: "Design Type", value: "Multi bush type design" },
      { label: "Lubrication", value: "Pressurized oil and grease lubrication" },
      { label: "Construction", value: "High carbon alloyed steel" },
    ],
    applications: [
      "Secondary and tertiary aggregate reduction",
      "High-spec cubical road metal production",
      "Mining ore beneficiation circuits",
    ],
  },
  {
    slug: "circular-wave-screen",
    name: "Circular Wave Screen",
    series: "UV-SCW Series",
    tagline: "Versatile circular-motion multi-deck sizing and segregation",
    overview:
      "Our screening solutions offer reliable and versatile sorting of materials, enhancing the quality and efficiency of your production process.",
    description:
      "The UV-SCW Series Circular Wave Screen delivers multi-fraction sorting for quarries and aggregate installations. Featuring circular-motion modular vibrators interconnected via cardan shafts and an inclined screen deck geometry, it produces sharp material separation across 1 to 4 deck configurations.",
    image: "/assets/products/circular-screen.webp",
    imageCaption: "Representative image: Circular Wave Screen UV-SCW Series",
    salientFeatures: [
      "Circular motion modular vibrators with two bearings per vibrator, interconnected by cardan shaft.",
      "Unique angle of the circular motion MVS screens achieves higher productivity.",
      "Modular design available as 1, 2, 3 or 4 deck with excellent segregation to suit aggregate and mining requirements.",
      "Stroke adjustment through counter weight.",
      "Grease lubrication system ensures easy and low maintenance.",
    ],
    models: ["UV-SCW 1850", "UV-SCW 2060", "UV-SCW 2562"],
    specs: [
      {
        parameter: "Screen size (W x L)",
        unit: "mm (inch)",
        values: {
          "UV-SCW 1850": "1800X500 (70.8X196.85)",
          "UV-SCW 2060": "2000 x 6000 (78.7 x 236.2)",
          "UV-SCW 2562": "2500 X 6200 (98.4 X 244)",
        },
      },
      {
        parameter: "Screening area (as printed)",
        unit: "MM (inch)",
        values: {
          "UV-SCW 1850": "228.6 (9.0)",
          "UV-SCW 2060": "304.8 (12.0)",
          "UV-SCW 2562": "393.7 (15.5)",
        },
      },
      {
        parameter: "Capacity",
        unit: "TPH",
        values: {
          "UV-SCW 1850": "400",
          "UV-SCW 2060": "650",
          "UV-SCW 2562": "800",
        },
      },
      {
        parameter: "Number of decks",
        unit: "",
        values: {
          "UV-SCW 1850": "3/4",
          "UV-SCW 2060": "2 / 3 / 4",
          "UV-SCW 2562": "3 / 4",
        },
      },
      {
        parameter: "Motor power",
        unit: "kW (HP)",
        values: {
          "UV-SCW 1850": "11X2 (15X2)",
          "UV-SCW 2060": "15X2 (20X2)",
          "UV-SCW 2562": "20X2 (30X2)",
        },
      },
      {
        parameter: "Weight (as printed)",
        unit: "kg (ton)",
        values: {
          "UV-SCW 1850": "5400 X 6300 (5.4X6.3)",
          "UV-SCW 2060": "7000 X 8600 (7.4X8.6)",
          "UV-SCW 2562": "12900 X 14500 (12.9X14.5)",
        },
      },
    ],
    commonFeatures: [
      { label: "Mounting Type", value: "Skid (Optional)" },
      { label: "Screen Position", value: "Inclined" },
      { label: "Type of Motion", value: "Circular" },
    ],
    applications: [
      "Multi-size aggregate separation",
      "Quarry dry screening and scalping",
      "Mining classification circuits",
    ],
  },
  {
    slug: "multi-wave-vertical-shaft-impactor",
    name: "Multi Wave Vertical Shaft Impactor",
    series: "UV-VMW Series",
    tagline: "Superior rock-on-rock shaping for manufactured sand and cubical aggregates",
    overview:
      "Perfect for creating high-quality cubicle shape aggregates, the VSI offers superior shaping and finishing capabilities for non-breakable concrete and asphalt applications.",
    description:
      "The UV-VMW Series Multi Wave Vertical Shaft Impactor provides rock-on-rock tertiary and quaternary shaping. Designed to produce high-specification manufactured sand conforming to ASTM C144 standards, it features an in-built hydraulic feed control, carbide-tipped rotor, and parallel flow bypass design.",
    image: "/assets/products/vsi.webp",
    imageCaption: "Representative image: Multi Wave VSI UV-VMW Series",
    salientFeatures: [
      "Steel structure for smooth operation.",
      "Simple inter-changeable cartridge type rock box for rock-on-rock applications.",
      "Crusher impact combined with speed gives a unique shape, producing high-quality manufactured sand conforming to C 144 standards.",
      "Hydraulic feed control in-built device.",
      "Parallel flow system provides increased capacity and less micro fines content.",
      "Optional setup for wet application / roof lifting mechanism for easy maintenance.",
      "High production and crushing ratio; automatic lubricated system (optional).",
      "Excellent cubical shape; improved version of rock-on-rock configuration.",
      "Material moisture content can reach up to 8 percent.",
      "Fine particles easily controlled by changing rotor speed.",
      "Rotor finished with special carbide tips to enhance wear resistance.",
    ],
    models: ["UV-VMW 100", "UV-VMW 150", "UV-VMW 250", "UV-VMW 300"],
    specs: [
      {
        parameter: "Feed size (max recom.) as printed",
        unit: "mm",
        values: {
          "UV-VMW 100": "24",
          "UV-VMW 150": "32",
          "UV-VMW 250": "42",
          "UV-VMW 300": "42",
        },
      },
      {
        parameter: "Capacity",
        unit: "TPH",
        values: {
          "UV-VMW 100": "50 - 110",
          "UV-VMW 150": "75 - 100",
          "UV-VMW 250": "180 - 320",
          "UV-VMW 300": "350 - 550",
        },
      },
      {
        parameter: "Rotor diameter",
        unit: "mm (inch)",
        values: {
          "UV-VMW 100": "680 (26.7)",
          "UV-VMW 150": "760 (29.9)",
          "UV-VMW 250": "840 (33.0)",
          "UV-VMW 300": "1070 (42.0)",
        },
      },
      {
        parameter: "Rotor speed",
        unit: "m/second",
        values: {
          "UV-VMW 100": "45 - 80",
          "UV-VMW 150": "45 - 80",
          "UV-VMW 250": "45 - 80",
          "UV-VMW 300": "45 - 80",
        },
      },
      {
        parameter: "Motor power",
        unit: "kW (HP)",
        values: {
          "UV-VMW 100": "75 (100)",
          "UV-VMW 150": "100 (150)",
          "UV-VMW 250": "160 (215)",
          "UV-VMW 300": "220 (300)",
        },
      },
      {
        parameter: "Weight",
        unit: "kg (ton)",
        values: {
          "UV-VMW 100": "4600 (4.6)",
          "UV-VMW 150": "6600 (6.6)",
          "UV-VMW 250": "8700 (8.7)",
          "UV-VMW 300": "9250 (9.2)",
        },
      },
    ],
    commonFeatures: [
      { label: "Impact Cartridge Option", value: "Rock on Rock" },
      { label: "Port", value: "3" },
      { label: "Lubrication", value: "Grease" },
    ],
    applications: [
      "Manufactured sand (M-sand) production",
      "Super-pave asphalt aggregate shaping",
      "High-grade concrete aggregate finishing",
    ],
  },
  {
    slug: "sand-washer-bucket-classifier",
    name: "Sand Washer Bucket Classifier",
    series: "UVBC Series",
    tagline: "High-efficiency sand washing, dewatering, and classification",
    overview:
      "Sand Washer Bucket Classifier is a high-efficiency machine designed to clean and classify sand, removing impurities for superior quality.",
    description:
      "The UVBC Series Sand Washer Bucket Classifier removes silt, clay, and ultra-fine contaminants from manufactured or natural sand. Utilizing a slow-rotating bucket wheel paired with an integrated vibro-motor dewatering screen, it maximizes sand recovery while minimizing process water loss.",
    image: "/assets/products/bucket-classifier.webp",
    imageCaption: "Representative image: Sand Washer Bucket Classifier UVBC Series",
    salientFeatures: [
      "Rapid and thorough sand cleaning for optimal productivity.",
      "Built to withstand tough working conditions and ensure longevity.",
      "Low maintenance design reduces operational costs.",
      "Minimizes water waste, promoting sustainable practices.",
    ],
    models: ["UVBC 60", "UVBC 100", "UVBC 120", "UVBC 150"],
    specs: [
      {
        parameter: "Capacity",
        unit: "TPH",
        values: {
          "UVBC 60": "80",
          "UVBC 100": "100",
          "UVBC 120": "120",
          "UVBC 150": "160",
        },
      },
      {
        parameter: "Drive power",
        unit: "kW / HP",
        values: {
          "UVBC 60": "3.7 / 5",
          "UVBC 100": "5.5 / 7.5",
          "UVBC 120": "7.5 / 10",
          "UVBC 150": "11 / 15",
        },
      },
      {
        parameter: "Rotation speed",
        unit: "RPM",
        values: {
          "UVBC 60": "3.5",
          "UVBC 100": "3.5",
          "UVBC 120": "4",
          "UVBC 150": "4",
        },
      },
      {
        parameter: "No. of buckets",
        unit: "",
        values: {
          "UVBC 60": "8",
          "UVBC 100": "10",
          "UVBC 120": "12",
          "UVBC 150": "16",
        },
      },
      {
        parameter: "Vibro motor power",
        unit: "HP",
        values: {
          "UVBC 60": "2 x 1.5 = 3HP",
          "UVBC 100": "2 x 2 = 4HP",
          "UVBC 120": "2 x 2.5 = 5HP",
          "UVBC 150": "2 x 3 = 6HP",
        },
      },
      {
        parameter: "Dewatering area",
        unit: "mm",
        values: {
          "UVBC 60": "900 x 1800",
          "UVBC 100": "1200 x 2100",
          "UVBC 120": "1200 x 2400",
          "UVBC 150": "1200 x 2700",
        },
      },
      {
        parameter: "Total power",
        unit: "kW / HP",
        values: {
          "UVBC 60": "5 / 8",
          "UVBC 100": "8.5 / 11.5",
          "UVBC 120": "11 / 15",
          "UVBC 150": "15.6 / 21",
        },
      },
    ],
    commonFeatures: [
      {
        label: "Maintenance",
        value: "Low maintenance design with accessible grease points",
      },
      {
        label: "Water Conservation",
        value: "Promotes closed-circuit water recycling and low slimes loss",
      },
    ],
    applications: [
      "Manufactured sand (M-sand) washing and de-silting",
      "Plaster sand beneficiation",
      "Quarry washing and classification plants",
    ],
  },
];

export const COMPANY_CONTACT = {
  phones: ["+91 8296 13 8419", "+91 9488 87 7519"],
  phoneLinks: ["tel:+918296138419", "tel:+919488877519"],
  email: "info@uvequipments.com",
  emailLink: "mailto:info@uvequipments.com",
  website: "www.uvequipments.com",
  siteUrl: "https://www.uvequipments.com",
  address:
    "Plot No. 118, 3rd Phase, KIADB Industrial Area, Malur, Kolar District, Karnataka, India - 563130",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No+118+3rd+Phase+KIADB+Industrial+Area+Malur+Karnataka+563130",
};
