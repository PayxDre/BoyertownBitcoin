"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Construction,
  Zap,
  Shield,
  Droplets,
  Share2,
  Info,
  Ambulance,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import SectionHeader from "@/components/SectionHeader";
import { BOYERTOWN_FINANCES } from "@/lib/constants";

interface ProjectItem {
  name: string;
  cost: number;
  icon: React.ReactNode;
}

const PROJECTS: ProjectItem[] = [
  { name: "WWTP Generator", cost: 576000, icon: <Zap className="w-4 h-4" /> },
  { name: "Pump Station", cost: 500000, icon: <Droplets className="w-4 h-4" /> },
  { name: "Curb & Ramp", cost: 239000, icon: <Construction className="w-4 h-4" /> },
  { name: "Fire Apparatus", cost: 40000, icon: <Flame className="w-4 h-4" /> },
  { name: "Police Equipment", cost: 20000, icon: <Shield className="w-4 h-4" /> },
  { name: "Ambulance Service", cost: 20000, icon: <Ambulance className="w-4 h-4" /> },
];

const SCENARIOS = [
  { label: "Conservative", rate: 0.2, color: "#6B7280" },
  { label: "Moderate", rate: 0.35, color: "#F7931A" },
  { label: "Aggressive", rate: 0.5, color: "#10B981" },
];

export default function SimulatorPage() {
  const [allocation, setAllocation] = useState(5);
  const [years, setYears] = useState(5);
  const [fundSize, setFundSize] = useState(612500);
  const [scenarioIndex, setScenarioIndex] = useState(1);
  const [showShareCard, setShowShareCard] = useState(false);

  const scenario = SCENARIOS[scenarioIndex];
  const initialInvestment = fundSize * (allocation / 100);
  const tbillRate = BOYERTOWN_FINANCES.legalConstraints.typicalYield;

  const projectionData = useMemo(() => {
    const data = [];
    for (let y = 0; y <= years; y++) {
      data.push({
        year: y,
        label: `Year ${y}`,
        bitcoin: Math.round(initialInvestment * Math.pow(1 + scenario.rate, y)),
        tbills: Math.round(initialInvestment * Math.pow(1 + tbillRate, y)),
        conservative: Math.round(initialInvestment * Math.pow(1.2, y)),
        moderate: Math.round(initialInvestment * Math.pow(1.35, y)),
        aggressive: Math.round(initialInvestment * Math.pow(1.5, y)),
      });
    }
    return data;
  }, [initialInvestment, years, scenario.rate, tbillRate]);

  const finalBtc = projectionData[projectionData.length - 1]?.bitcoin || 0;
  const finalTbill = projectionData[projectionData.length - 1]?.tbills || 0;
  const gain = finalBtc - initialInvestment;
  const returnPct = ((finalBtc / initialInvestment - 1) * 100).toFixed(0);
  const advantage = finalBtc - finalTbill;

  // What projects can be funded
  const fundableProjects = PROJECTS.filter((p) => p.cost <= gain).sort(
    (a, b) => b.cost - a.cost
  );
  const totalFundable = fundableProjects.reduce((sum, p) => sum + p.cost, 0);

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-8 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Interactive Simulator"
            title="The Boyertown Bitcoin Impact Simulator"
            subtitle="Play with the numbers. See what even a tiny allocation could mean for our town's infrastructure, taxes, and future."
          />
        </div>
      </section>

      {/* Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Allocation Slider */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Allocation Percentage
              </label>
              <div className="text-3xl font-black text-bitcoin mb-3">{allocation}%</div>
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={allocation}
                onChange={(e) => setAllocation(parseFloat(e.target.value))}
                className="w-full h-2 bg-navy rounded-full appearance-none cursor-pointer accent-bitcoin"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1%</span>
                <span>5%</span>
                <span>10%</span>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                = <span className="text-white font-bold">${initialInvestment.toLocaleString()}</span> invested
              </div>
            </div>

            {/* Time Horizon */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Time Horizon
              </label>
              <div className="text-3xl font-black text-bitcoin mb-3">{years} Years</div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full h-2 bg-navy rounded-full appearance-none cursor-pointer accent-bitcoin"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1yr</span>
                <span>8yr</span>
                <span>15yr</span>
              </div>
            </div>

            {/* Scenario */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Growth Scenario
              </label>
              <div className="text-3xl font-black mb-3" style={{ color: scenario.color }}>
                {scenario.label}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SCENARIOS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setScenarioIndex(i)}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                      scenarioIndex === i
                        ? "border-bitcoin bg-bitcoin/10 text-bitcoin"
                        : "border-navy-border text-gray-500 hover:border-gray-600"
                    }`}
                  >
                    {s.label}
                    <div className="text-[10px] font-normal mt-0.5">{(s.rate * 100).toFixed(0)}% CAGR</div>
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                <Info className="w-3 h-3" />
                Fund size: ${fundSize.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Fund Size Control */}
          <div className="bg-navy-card border border-navy-border rounded-xl p-4 mb-10 flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-400">Treasury Base:</span>
            {[
              { label: "Low ($240K)", value: 240000 },
              { label: "Mid ($612K)", value: 612500 },
              { label: "High ($985K)", value: 985000 },
              { label: "All Funds ($2.1M)", value: 2100000 },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFundSize(opt.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  fundSize === opt.value
                    ? "border-bitcoin bg-bitcoin/10 text-bitcoin"
                    : "border-navy-border text-gray-500 hover:border-gray-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                label: "Initial Investment",
                value: `$${initialInvestment.toLocaleString()}`,
                sub: `${allocation}% of $${fundSize.toLocaleString()}`,
                color: "text-white",
              },
              {
                label: `Value After ${years} Years (BTC)`,
                value: `$${finalBtc.toLocaleString()}`,
                sub: `+${returnPct}% total return`,
                color: "text-bitcoin",
              },
              {
                label: `Value After ${years} Years (T-Bills)`,
                value: `$${finalTbill.toLocaleString()}`,
                sub: `+${((finalTbill / initialInvestment - 1) * 100).toFixed(0)}% total return`,
                color: "text-gray-400",
              },
              {
                label: "Bitcoin Advantage",
                value: `+$${advantage.toLocaleString()}`,
                sub: "More than T-bills",
                color: "text-green-400",
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-card border border-navy-border rounded-xl p-5"
              >
                <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className="text-xs text-gray-600 mt-1">{metric.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-navy-card border border-navy-border rounded-2xl p-6 mb-10">
            <h3 className="text-lg font-bold text-white mb-6">Growth Projection</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectionData}>
                  <defs>
                    <linearGradient id="bitcoinGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F7931A" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#F7931A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="tbillGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6B7280" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#6B7280" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E2A42" />
                  <XAxis
                    dataKey="label"
                    stroke="#4B5563"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="#4B5563"
                    fontSize={12}
                    tickFormatter={(v: number) =>
                      v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${(v / 1000).toFixed(0)}K`
                    }
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#131A2B",
                      border: "1px solid #1E2A42",
                      borderRadius: "12px",
                      color: "#E5E7EB",
                    }}
                    formatter={(value: unknown) => [`$${Number(value).toLocaleString()}`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="tbills"
                    name="T-Bills (4.5%)"
                    stroke="#6B7280"
                    fill="url(#tbillGrad)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="bitcoin"
                    name={`Bitcoin (${scenario.label})`}
                    stroke="#F7931A"
                    fill="url(#bitcoinGrad)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* What This Could Fund */}
          <div className="bg-navy-card border border-bitcoin/20 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-bold text-white mb-2">
              What Could ${gain.toLocaleString()} in Gains Fund?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Based on your simulation, the Bitcoin gains alone could cover these real 2026 Boyertown projects:
            </p>

            {fundableProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {fundableProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-navy/60 border border-green-500/20 rounded-xl p-4"
                  >
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                      {project.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{project.name}</div>
                      <div className="text-xs text-green-400">
                        ${project.cost.toLocaleString()}
                      </div>
                    </div>
                    <div className="ml-auto text-green-400">✓</div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Try increasing the allocation or time horizon to see fundable projects.</p>
              </div>
            )}

            {fundableProjects.length > 0 && (
              <div className="mt-6 pt-4 border-t border-navy-border flex items-center justify-between">
                <span className="text-sm text-gray-400">Total projects fundable from gains alone</span>
                <span className="text-lg font-bold text-green-400">
                  ${totalFundable.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          {/* All Scenarios Comparison */}
          <div className="bg-navy-card border border-navy-border rounded-2xl p-6 mb-10">
            <h3 className="text-lg font-bold text-white mb-6">
              All Scenarios at {years} Years (${initialInvestment.toLocaleString()} initial)
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      name: "T-Bills (4.5%)",
                      value: finalTbill,
                      color: "#4B5563",
                    },
                    {
                      name: "Conservative (20%)",
                      value: Math.round(initialInvestment * Math.pow(1.2, years)),
                      color: "#6B7280",
                    },
                    {
                      name: "Moderate (35%)",
                      value: Math.round(initialInvestment * Math.pow(1.35, years)),
                      color: "#F7931A",
                    },
                    {
                      name: "Aggressive (50%)",
                      value: Math.round(initialInvestment * Math.pow(1.5, years)),
                      color: "#10B981",
                    },
                  ]}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E2A42" />
                  <XAxis
                    type="number"
                    stroke="#4B5563"
                    fontSize={12}
                    tickFormatter={(v: number) =>
                      v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${(v / 1000).toFixed(0)}K`
                    }
                  />
                  <YAxis type="category" dataKey="name" stroke="#4B5563" fontSize={11} width={130} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#131A2B",
                      border: "1px solid #1E2A42",
                      borderRadius: "12px",
                      color: "#E5E7EB",
                    }}
                    formatter={(value: unknown) => [`$${Number(value).toLocaleString()}`, "Value"]}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {[
                      { color: "#4B5563" },
                      { color: "#6B7280" },
                      { color: "#F7931A" },
                      { color: "#10B981" },
                    ].map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Share Card / CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Share Card */}
            <div className="bg-gradient-to-br from-navy-card to-navy border-2 border-bitcoin/30 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Share This Result</h3>
              <p className="text-sm text-gray-400 mb-6">
                Copy the link or take a screenshot to share with neighbors and council members.
              </p>
              <div className="bg-navy/80 rounded-xl p-4 mb-4 text-left">
                <div className="text-xs text-gray-500 mb-1">Your scenario:</div>
                <div className="text-sm text-white">
                  {allocation}% allocation × {years} years × {scenario.label} growth
                </div>
                <div className="text-lg font-bold text-bitcoin mt-1">
                  ${initialInvestment.toLocaleString()} → ${finalBtc.toLocaleString()}
                </div>
                <div className="text-xs text-green-400">
                  +{returnPct}% | +${gain.toLocaleString()} in gains
                </div>
              </div>
              <button
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(
                      `What if Boyertown allocated just ${allocation}% to Bitcoin? After ${years} years: $${initialInvestment.toLocaleString()} → $${finalBtc.toLocaleString()} (+${returnPct}%). Learn more at BoyertownBitcoin.com/simulator`
                    );
                    setShowShareCard(true);
                    setTimeout(() => setShowShareCard(false), 2000);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-bitcoin/10 border border-bitcoin/30 text-bitcoin font-medium rounded-xl hover:bg-bitcoin/20 transition-all"
              >
                <Share2 className="w-4 h-4" />
                {showShareCard ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>

            {/* CTA */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8 flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Like What You See?
              </h3>
              <p className="text-gray-400 mb-6">
                Help make this a reality. Sign the petition, email council, or share with a neighbor.
              </p>
              <div className="space-y-3">
                <Link
                  href="/action"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
                >
                  Take Action Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/benefits"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-navy-border hover:border-bitcoin/30 text-white font-medium rounded-xl transition-all"
                >
                  Read the Full Case <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center text-xs text-gray-600 max-w-2xl mx-auto">
            <p>
              <strong>Disclaimer:</strong> This simulator is for educational and illustrative
              purposes only. It is not financial advice. Bitcoin is highly volatile and past
              performance does not guarantee future results. Growth rate assumptions are
              illustrative projections, not predictions. Any actual investment decision by
              Boyertown Borough would require council approval, legal review, and compliance
              with PA Borough Code.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
