// Boyertown Borough verified financial data (from official borough records and 2026 Tax & Expenses Statement)
export const BOYERTOWN_FINANCES = {
  generalFund: {
    label: "General Fund",
    range: "$240K–$985K",
    description: "Historically fluctuates in the low-to-mid hundreds of thousands",
    low: 240000,
    high: 985000,
    midpoint: 612500,
  },
  utilityFunds: {
    label: "Utility & Capital Funds",
    total: 1500000,
    description: "Water, sewer, tank, and capital improvement funds add ~$1.3–1.5M+",
    breakdown: [
      { name: "Water Fund", amount: 450000 },
      { name: "Sewer Fund", amount: 400000 },
      { name: "Tank Fund", amount: 250000 },
      { name: "Capital Improvement", amount: 400000 },
    ],
  },
  roadTax2026: {
    label: "New 1-Mill Road Tax (2026)",
    annual: 160500,
    description: "Generates only ~$160,500/year due to 'current budget constraints'",
  },
  majorProjects2026: [
    { name: "WWTP Generator", cost: 576000, icon: "Zap" },
    { name: "Pump Station", cost: 500000, icon: "Droplets" },
    { name: "Curb & Ramp Replacement", cost: 239000, note: "Requires extra $90K from capital fund", icon: "Construction" },
    { name: "Police Equipment", cost: 20000, icon: "Shield" },
    { name: "Ambulance Service", cost: 20000, icon: "Ambulance" },
    { name: "Fire Apparatus Fund", cost: 40000, icon: "Flame" },
    { name: "Personnel Costs", cost: 17000, icon: "Users" },
  ],
  totalMajorProjects: 1412000,
  legalConstraints: {
    code: "PA Borough Code §1316 and Act 72",
    description: "Investments legally restricted to ultra-conservative low-yield options: T-bills, CDs, government securities",
    typicalYield: 0.045, // ~4.5% on T-bills (current)
    inflationRate: 0.035, // ~3.5% average recent inflation
    realReturn: 0.01, // ~1% real return after inflation
  },
};

// Bitcoin historical performance data points
export const BITCOIN_PERFORMANCE = {
  inception: { year: 2009, price: 0.001 },
  annualizedReturn10yr: 0.55, // ~55% CAGR over last 10 years
  annualizedReturn5yr: 0.45, // ~45% CAGR over last 5 years
  annualizedReturn4yr: 0.30, // ~30% CAGR (more conservative cycle-adjusted)
  conservativeProjection: 0.20, // 20% for conservative modeling
  moderateProjection: 0.35, // 35% moderate
  aggressiveProjection: 0.50, // 50% aggressive
  historicalPrices: [
    { year: 2015, price: 315 },
    { year: 2016, price: 434 },
    { year: 2017, price: 998 },
    { year: 2018, price: 3843 },
    { year: 2019, price: 7200 },
    { year: 2020, price: 7195 },
    { year: 2021, price: 29374 },
    { year: 2022, price: 16548 },
    { year: 2023, price: 16625 },
    { year: 2024, price: 42258 },
    { year: 2025, price: 94000 },
  ],
};

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/today", label: "Today" },
  { href: "/benefits", label: "Why Bitcoin" },
  { href: "/precedents", label: "Precedents" },
  { href: "/simulator", label: "Simulator" },
  { href: "/action", label: "Take Action" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

// Precedent data
export const PRECEDENTS = [
  {
    id: "texas",
    title: "Texas",
    subtitle: "First State Bitcoin Reserve",
    year: 2025,
    type: "State",
    icon: "star",
    color: "#F7931A",
    summary: "Passed SB 21 (Texas Strategic Bitcoin Reserve and Investment Act) — the first state to establish a dedicated Bitcoin reserve managed by the Comptroller.",
    details: "Texas followed up with an initial $5 million Bitcoin purchase, signaling to the nation that state-level Bitcoin adoption is viable, legal, and forward-thinking.",
    amount: "$5M initial purchase",
    status: "Active",
  },
  {
    id: "usa",
    title: "U.S. Federal Government",
    subtitle: "Strategic Bitcoin Reserve",
    year: 2025,
    type: "Federal",
    icon: "landmark",
    color: "#3B82F6",
    summary: "Established the Strategic Bitcoin Reserve via Executive Order 14233 on March 6, 2025.",
    details: "The reserve is capitalized with forfeited/seized Bitcoin held as a permanent national reserve asset (not to be sold), alongside a separate U.S. Digital Asset Stockpile. This is a watershed moment for Bitcoin legitimacy.",
    amount: "Seized BTC holdings",
    status: "Active",
  },
  {
    id: "roswell",
    title: "Roswell, New Mexico",
    subtitle: "First Municipal Bitcoin Reserve",
    year: 2025,
    type: "Municipal",
    icon: "building",
    color: "#10B981",
    summary: "Became the first U.S. city (and first municipality in the world) to establish its own Strategic Bitcoin Reserve.",
    details: "Roswell accepted an anonymous donation of approximately $3,000 in BTC, formally documenting and holding it long-term. While small in dollar terms, this is a historic first — proving that even tiny municipalities can take this step.",
    amount: "~$3,000 in BTC",
    status: "Active — Holding long-term",
  },
];
