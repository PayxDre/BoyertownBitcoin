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
  Landmark,
  Star,
  Building,
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

      {/* How Bitcoin Reserves Actually Work */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Important Context"
            title={`"But Bitcoin Doesn't Pay Interest..."`}
            subtitle="You're right — and that's one of the first questions people ask. Here's how Bitcoin reserves actually generate value for governments."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-bitcoin/20 rounded-2xl p-8 md:p-10 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Bitcoin Is a Store of Value — Like Gold, Not Like a Bond
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              T-bills and CDs generate <span className="text-white font-medium">yield</span> — small,
              steady interest payments. Bitcoin does not. It pays no dividends, no interest, no coupons.
              So why would a government hold it?
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              For the same reason governments hold <span className="text-bitcoin font-medium">gold</span>:
              not for yield, but for <span className="text-white font-medium">appreciation</span>. Bitcoin&apos;s
              fixed supply of 21 million coins makes it inherently scarce. As demand grows and supply stays
              fixed, the value rises over time — often dramatically. The U.S. government itself has acknowledged
              losing over <span className="text-bitcoin font-medium">$17 billion</span> by selling seized Bitcoin
              too early rather than holding it.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A Bitcoin reserve doesn&apos;t generate cash flow while you hold it.
              It generates value when the asset <span className="text-white font-medium">appreciates
              and you sell a portion</span> — or when its presence on the balance sheet strengthens your
              overall financial position.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              How Governments Plan to Use Their Bitcoin Reserves
            </h3>

            <div className="space-y-6">
              <div className="bg-navy/60 rounded-xl p-5 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">U.S. Federal Government</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The Strategic Bitcoin Reserve (Executive Order 14233) holds seized Bitcoin as a{" "}
                  <span className="text-white font-medium">permanent reserve asset — &quot;not to be sold.&quot;</span>{" "}
                  The rationale: Bitcoin strengthens the national balance sheet as it appreciates, similar
                  to gold reserves. The BITCOIN Act of 2025 envisions a 20-year minimum holding period,
                  after which holdings may be sold <span className="text-white font-medium">only to retire federal debt</span>.
                  Think of it as a long-term savings account for the nation.
                </p>
              </div>

              <div className="bg-navy/60 rounded-xl p-5 border border-bitcoin/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-bitcoin" />
                  <span className="text-sm font-bold text-bitcoin uppercase tracking-wider">Texas (SB 21)</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Texas takes a more active approach. The Comptroller is authorized to{" "}
                  <span className="text-white font-medium">buy, hold, sell, stake, and manage</span>{" "}
                  Bitcoin using the prudent investor standard. The law explicitly allows temporary
                  liquidation for cash management, with proceeds returned to the reserve. An advisory
                  committee of crypto investment experts guides strategy. Texas can realize gains by{" "}
                  <span className="text-white font-medium">selling portions when the price appreciates</span>{" "}
                  to fund state priorities.
                </p>
              </div>

              <div className="bg-navy/60 rounded-xl p-5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-bold text-green-400 uppercase tracking-wider">Roswell, NM (Municipal)</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Roswell&apos;s ordinance includes the most relevant model for Boyertown. Their reserve has a{" "}
                  <span className="text-white font-medium">10-year lockup period</span>. Once the fund
                  exceeds <span className="text-white font-medium">$1 million in market value</span>,
                  the city can access up to <span className="text-white font-medium">21% every five years</span>{" "}
                  — but only with unanimous Council approval. The intended uses: subsidizing water bills
                  for elderly residents and funding emergency disaster response. In other words, they hold,
                  let it appreciate, and then <span className="text-white font-medium">sell a controlled
                  portion to fund specific community needs</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              What This Means for Boyertown
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              A Boyertown Bitcoin reserve would work the same way: the borough would allocate a small
              amount (1–5% of reserves), hold it as a long-term strategic asset, and — if and when
              the value appreciates significantly — <span className="text-white font-medium">sell a portion
              through a controlled process approved by Council</span> to fund infrastructure projects,
              reduce tax burdens, or build an emergency fund.
            </p>
            <div className="bg-navy/60 rounded-xl p-5">
              <h4 className="text-sm font-bold text-bitcoin uppercase tracking-wider mb-3">
                Example: The Roswell Model Applied to Boyertown
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin font-bold mt-0.5">1.</span>
                  Borough allocates $30,000 (5% of General Fund midpoint) to Bitcoin
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin font-bold mt-0.5">2.</span>
                  Bitcoin is held in institutional custody with a defined lockup period (e.g., 5–10 years)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin font-bold mt-0.5">3.</span>
                  If Bitcoin appreciates (as it has historically), the reserve&apos;s value grows on the borough&apos;s balance sheet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin font-bold mt-0.5">4.</span>
                  After the lockup, Council can vote to sell a defined portion (e.g., up to 20%) to fund a specific project
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin font-bold mt-0.5">5.</span>
                  The remaining reserve continues appreciating — a perpetual strategic asset for the borough
                </li>
              </ul>
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
