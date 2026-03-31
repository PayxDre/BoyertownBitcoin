"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Banknote,
  Globe,
  Clock,
  Lock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function BenefitsPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Asymmetric Upside",
      subtitle: "Small risk, massive potential reward",
      description:
        "A 1–5% allocation is a rounding error in the budget. But Bitcoin's historical CAGR of ~55% over 10 years means even a small position can generate outsized returns. If it drops 50%, the borough loses 2.5% of reserves. If it 10x's, that 5% becomes the largest contributor to the treasury.",
      stat: "55%",
      statLabel: "10yr CAGR",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Inflation Protection",
      subtitle: "The hardest money ever created",
      description:
        "Bitcoin has a fixed supply of 21 million — no government, no central bank, no borough council can print more. While the dollar loses ~3.5% per year to inflation, Bitcoin's scarcity makes it a natural hedge. T-bills yield ~4.5% nominal but only ~1% after inflation. Bitcoin aims to outpace inflation by orders of magnitude.",
      stat: "21M",
      statLabel: "Fixed supply forever",
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Fund Infrastructure Without New Taxes",
      subtitle: "Let the treasury work for residents",
      description:
        "The new 1-mill road tax raises only $160,500/year. A successful Bitcoin allocation could fund entire projects — a $576K WWTP generator, a $500K pump station — without asking residents for another cent. Growth from investments rather than growth from taxation.",
      stat: "$1.4M",
      statLabel: "2026 project needs",
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Fiscal Sovereignty",
      subtitle: "Control your own financial destiny",
      description:
        "Currently, Boyertown's returns depend entirely on Federal Reserve interest rate decisions and inflation trends — forces completely outside our control. Bitcoin gives the borough a non-correlated asset that operates on its own monetary policy: predictable issuance, no bailouts, no manipulation.",
      stat: "0",
      statLabel: "Counterparty risk",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "National Branding & Attention",
      subtitle: "The \"Bitcoin Town\" effect",
      description:
        "No small Pennsylvania borough has adopted a Bitcoin reserve yet. Being first means media coverage, tech-curious tourists, new businesses, and a reputation as a forward-thinking community. Roswell, NM got worldwide press for a $3,000 BTC donation. Imagine the attention for a deliberate borough-level strategy.",
      stat: "#1",
      statLabel: "First in PA",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Time Is the Asset",
      subtitle: "The earlier you start, the more you benefit",
      description:
        "Bitcoin rewards patience. Every 4-year cycle has delivered higher highs and higher lows. A town that starts accumulating now — even modestly — positions itself to benefit from years of compounding growth. Waiting costs more than starting small.",
      stat: "4yr",
      statLabel: "Halving cycles",
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Case for Bitcoin"
            title="Why Bitcoin for Boyertown?"
            subtitle="Not speculation. Not hype. A rational, data-driven argument for why the world's first decentralized, scarce digital asset belongs in a small-town treasury."
          />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-card border border-navy-border rounded-2xl p-8 hover:border-bitcoin/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 bg-bitcoin/10 rounded-xl text-bitcoin group-hover:bg-bitcoin/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-bitcoin">{benefit.stat}</div>
                    <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-bitcoin/80 mb-3">{benefit.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 mesh-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Head to Head"
            title="T-Bills vs. Bitcoin"
            subtitle="What happens to $30,000 (5% of ~$612K General Fund) over different time horizons?"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-navy-border">
                    <th className="text-left px-6 py-4 text-sm text-gray-500 font-medium">
                      Time Horizon
                    </th>
                    <th className="text-center px-6 py-4 text-sm text-gray-500 font-medium">
                      T-Bills (~4.5%)
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-medium text-bitcoin">
                      Bitcoin (Conservative 20%)
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-medium text-bitcoin-light">
                      Bitcoin (Moderate 35%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { years: 1, tbill: 31350, btcCon: 36000, btcMod: 40500 },
                    { years: 3, tbill: 34215, btcCon: 51840, btcMod: 73653 },
                    { years: 5, tbill: 37379, btcCon: 74650, btcMod: 133908 },
                    { years: 10, tbill: 46569, btcCon: 185614, btcMod: 597948 },
                  ].map((row) => (
                    <tr key={row.years} className="border-b border-navy-border/50">
                      <td className="px-6 py-4 text-white font-medium">{row.years} year{row.years > 1 ? "s" : ""}</td>
                      <td className="px-6 py-4 text-center text-gray-400">
                        ${row.tbill.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center text-bitcoin font-semibold">
                        ${row.btcCon.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center text-bitcoin-light font-bold">
                        ${row.btcMod.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-navy/40 text-xs text-gray-500">
              Projections are illustrative only. Bitcoin is volatile and past performance does not
              guarantee future results. Conservative assumes 20% CAGR; moderate assumes 35%.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Acknowledgment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-bitcoin" />
              We&apos;re Not Ignoring the Risks
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Volatility is real",
                  text: "Bitcoin can drop 50-80% in bear markets. That's why we advocate for a tiny 1-5% allocation — small enough that even a worst-case scenario doesn't impact operations.",
                },
                {
                  title: "Legal framework needed",
                  text: "PA Borough Code §1316 currently restricts investments. A state-level legislative change or municipal ordinance would be needed. Texas and other states show this is achievable.",
                },
                {
                  title: "Custody and security",
                  text: "Institutional-grade custody solutions (multi-sig, regulated custodians) exist today and are used by state governments and Fortune 500 companies.",
                },
                {
                  title: "This is not financial advice",
                  text: "This site advocates for exploration and discussion, not immediate action. Any decision would require council votes, legal review, and community input.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">{item.title}:</span>{" "}
                    <span className="text-gray-400">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Convinced? See It in Action.
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Run the numbers yourself with our interactive Impact Simulator. Choose your
              allocation, time horizon, and see what Boyertown&apos;s treasury could look like.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
              >
                Launch Simulator <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/precedents"
                className="inline-flex items-center gap-2 px-8 py-4 border border-navy-border hover:border-bitcoin/30 text-white font-medium rounded-xl transition-all"
              >
                See Who&apos;s Already Doing This <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
