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
    details: "Texas followed up with an initial $5 million Bitcoin purchase via BlackRock's IBIT Bitcoin ETF in November 2025, becoming the first U.S. state to directly purchase Bitcoin exposure with public funds.",
    amount: "$5M initial purchase",
    status: "Active",
    howItWorks: "The Comptroller can buy, hold, sell, stake, and manage Bitcoin using a prudent investor standard. An advisory committee of 5 crypto experts guides strategy. The law allows temporary liquidation for cash management and controlled selling when prices appreciate — meaning Texas can actively realize gains to fund state priorities.",
    howGainsAreUsed: "Through controlled sales of appreciated holdings. The Comptroller is authorized to sell portions of the reserve and transfer proceeds to the state treasury, with funds to be returned along with any interest earned. This allows Texas to convert Bitcoin appreciation into real dollars for state programs.",
    keyRules: [
      "Only cryptocurrencies with $500B+ market cap (currently only Bitcoin)",
      "Managed by Comptroller with 5-member advisory committee",
      "Can buy, sell, stake, and use derivatives",
      "Third-party custodians must be Texas-based with audited records",
      "Biennial reporting on holdings, value, and actions taken",
    ],
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
    details: "The reserve is capitalized with ~200,000 BTC from criminal and civil forfeitures, held as a permanent national reserve asset. The government previously lost over $17 billion by selling seized Bitcoin too early.",
    amount: "~200,000 BTC (seized assets)",
    status: "Active — Permanent hold",
    howItWorks: "Bitcoin is treated as a store of value analogous to gold — held on the national balance sheet to strengthen it over time. The executive order states Bitcoin 'shall not be sold.' The BITCOIN Act of 2025 envisions a 20-year minimum holding period.",
    howGainsAreUsed: "The primary benefit is balance sheet strengthening as Bitcoin appreciates. The BITCOIN Act proposes that after 20 years, holdings may be sold only to retire federal debt. The government also benefits from avoiding further losses — they previously sold BTC at $216M that would be worth $864M+ today.",
    keyRules: [
      "Bitcoin shall not be sold (permanent reserve asset)",
      "Funded by seized/forfeited Bitcoin — no taxpayer cost",
      "Treasury and Commerce can develop budget-neutral acquisition strategies",
      "BITCOIN Act proposes 20-year minimum hold, sales only to retire debt",
      "Separate Digital Asset Stockpile for other cryptocurrencies",
    ],
  },
  {
    id: "roswell",
    title: "Roswell, New Mexico",
    subtitle: "First Municipal Bitcoin Reserve",
    year: 2025,
    type: "Municipal",
    icon: "building",
    color: "#10B981",
    summary: "Became the first U.S. city — and first municipality in the world — to establish a Strategic Bitcoin Reserve Fund via council action in April 2025.",
    details: "A local reader donated ~$3,000 in BTC after reading a newspaper column about the idea. City Councilor Cristina Arnold investigated acceptance processes, City Attorney Hess Yntema confirmed municipalities can accept Bitcoin as personal property under NM law, and the Council formally recognized the gift as the seed for a Strategic Bitcoin Reserve Fund.",
    amount: "~$3,000 in BTC (3,050,323 sats)",
    status: "Active — 10-year lockup",
    howItWorks: "Roswell's approach was uniquely accessible: no taxpayer funds were used. The reserve is funded entirely by private donations and sponsorships. The City Attorney confirmed that under New Mexico law, municipalities can acquire personal property — including Bitcoin — without special legislation.",
    howGainsAreUsed: "The ordinance defines exactly when and how gains can be accessed: after a 10-year lockup and once the fund exceeds $1 million in market value, the city can access up to 21% every five years with unanimous Council approval. Intended uses include subsidizing water bills for elderly residents and funding emergency disaster response.",
    keyRules: [
      "10-year lockup — no access to funds for a decade",
      "$1 million threshold — spending only after fund exceeds $1M market value",
      "21% maximum drawdown every 5 years with unanimous Council approval",
      "Funded by donations only — zero taxpayer money at risk",
      "Intended for elderly water bill relief and emergency disaster response",
    ],
    legalMechanism: {
      steps: [
        "A community member donated ~$3,000 in BTC to the city",
        "City Councilor Cristina Arnold investigated acceptance procedures",
        "City Attorney Hess Yntema confirmed: under NM law, municipalities can acquire personal property (including Bitcoin) — no special legislation needed",
        "The City Council formally recognized the Bitcoin gift at a public meeting",
        "Mayor Pro Tem Juliana Halvorson signed the receipt establishing the Strategic Bitcoin Reserve Fund",
        "Council adopted an ordinance with lockup periods, thresholds, and drawdown rules",
      ],
      keyInsight: "No state law change was needed. The City Attorney found existing municipal property law was sufficient. The entire process was transparent, publicly documented, and required no taxpayer funding.",
    },
  },
];
