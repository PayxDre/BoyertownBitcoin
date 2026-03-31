"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Landmark,
  Building,
  Calendar,
  ChevronRight,
  Rocket,
  Trophy,
  DollarSign,
  Shield,
  CheckCircle2,
  FileText,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PRECEDENTS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  star: <Star className="w-8 h-8" />,
  landmark: <Landmark className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
};

export default function PrecedentsPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Real-World Precedents"
            title="They're Already Doing It"
            subtitle="From the White House to a small New Mexico city, Bitcoin reserves are no longer theoretical. Here's proof that this works — at every level of government."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year badge */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-bitcoin/10 border border-bitcoin/20 rounded-full">
              <Calendar className="w-4 h-4 text-bitcoin" />
              <span className="text-bitcoin font-bold">2025: The Breakthrough Year</span>
            </div>
          </div>

          <div className="space-y-8">
            {PRECEDENTS.map((precedent, i) => (
              <motion.div
                key={precedent.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-navy-card border border-navy-border rounded-2xl overflow-hidden hover:border-bitcoin/30 transition-all"
              >
                {/* Header */}
                <div
                  className="px-8 py-4 border-b border-navy-border flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${precedent.color}08, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block px-3 py-1 text-xs font-bold uppercase rounded-full border"
                      style={{
                        color: precedent.color,
                        borderColor: `${precedent.color}30`,
                        backgroundColor: `${precedent.color}10`,
                      }}
                    >
                      {precedent.type}
                    </span>
                    <span className="text-sm text-gray-500">{precedent.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">
                      {precedent.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="p-4 rounded-2xl flex-shrink-0 hidden sm:block"
                      style={{
                        backgroundColor: `${precedent.color}10`,
                        color: precedent.color,
                      }}
                    >
                      {iconMap[precedent.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {precedent.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: precedent.color }}>
                        {precedent.subtitle}
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {precedent.summary}
                      </p>
                      <p className="text-gray-500 leading-relaxed mb-4">
                        {precedent.details}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/60 rounded-lg">
                        <span className="text-xs text-gray-500">Allocation:</span>
                        <span className="text-sm font-bold text-white">
                          {precedent.amount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* How gains are used */}
                  {precedent.howGainsAreUsed && (
                    <div className="bg-navy/60 rounded-xl p-5 mb-4 border border-navy-border">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-bitcoin" />
                        <span className="text-xs font-bold text-bitcoin uppercase tracking-wider">
                          How Gains Are Realized
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {precedent.howGainsAreUsed}
                      </p>
                    </div>
                  )}

                  {/* Key rules */}
                  {precedent.keyRules && (
                    <div className="bg-navy/60 rounded-xl p-5 border border-navy-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-4 h-4" style={{ color: precedent.color }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: precedent.color }}>
                          Key Rules &amp; Guardrails
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {precedent.keyRules.map((rule: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: precedent.color }} />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Roswell legal mechanism (special section) */}
                  {precedent.legalMechanism && (
                    <div className="mt-4 bg-green-500/5 rounded-xl p-5 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                          Step-by-Step: How Roswell Did It
                        </span>
                      </div>
                      <ol className="space-y-2">
                        {precedent.legalMechanism.steps.map((step: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs font-bold flex items-center justify-center mt-0.5">
                              {j + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      <div className="mt-4 bg-navy/60 rounded-lg p-4 border border-green-500/10">
                        <p className="text-sm text-green-400/90 font-medium leading-relaxed">
                          {precedent.legalMechanism.keyInsight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-16 mesh-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy-card to-navy-card/50 border border-bitcoin/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-bitcoin/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Trophy className="w-12 h-12 text-bitcoin mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Gap Boyertown Can Fill
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                The federal government has done it. Texas has done it. Even tiny Roswell, NM
                has done it. But{" "}
                <span className="text-bitcoin font-bold">
                  no small Pennsylvania borough has taken the leap yet
                </span>
                . Boyertown can be the pioneer — and gain massive branding upside as{" "}
                <span className="text-white font-bold italic">
                  &quot;The Bitcoin Town of Pennsylvania.&quot;
                </span>
              </p>

              {/* Visual hierarchy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
                <div className="bg-navy/60 rounded-xl p-5 border border-blue-500/20">
                  <div className="text-3xl mb-2">🇺🇸</div>
                  <div className="text-sm font-bold text-blue-400">Federal</div>
                  <div className="text-xs text-gray-500">Done</div>
                </div>
                <div className="bg-navy/60 rounded-xl p-5 border border-bitcoin/20">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-sm font-bold text-bitcoin">State (Texas)</div>
                  <div className="text-xs text-gray-500">Done</div>
                </div>
                <div className="bg-navy/60 rounded-xl p-5 border border-green-500/20">
                  <div className="text-3xl mb-2">🏘️</div>
                  <div className="text-sm font-bold text-green-400">Municipal (Roswell)</div>
                  <div className="text-xs text-gray-500">Done</div>
                </div>
              </div>

              <div className="bg-bitcoin/10 border-2 border-bitcoin/40 border-dashed rounded-xl p-6 max-w-md mx-auto mb-8">
                <div className="text-lg font-bold text-bitcoin mb-1">
                  PA Borough Level
                </div>
                <div className="text-2xl font-black text-white">
                  Boyertown = First?
                </div>
                <div className="text-sm text-gray-400 mt-1">The seat is empty. Will we take it?</div>
              </div>

              <Link
                href="/action"
                className="inline-flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
              >
                <Rocket className="w-5 h-5" />
                Help Make It Happen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boyertown's Roswell-Inspired Pathway */}
      <section className="py-16 mesh-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Roswell Model for Boyertown"
            title="How Boyertown Could Do Exactly What Roswell Did"
            subtitle="Roswell proved that a small city can establish a Bitcoin reserve without new legislation, without taxpayer risk, and without controversy. Here's how Boyertown could follow the same playbook."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-bitcoin/20 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-bitcoin" />
              <h3 className="text-xl font-bold text-white">
                The Boyertown Bitcoin Reserve — A Practical Path
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "1",
                  title: "Seed the Reserve Through Donation",
                  description: "Like Roswell, the simplest way to start is through a private Bitcoin donation — zero taxpayer funds at risk. A community member or supporter donates BTC to the borough. Under Pennsylvania law, boroughs have the power to receive gifts and donations of property (PA Borough Code §1502).",
                },
                {
                  step: "2",
                  title: "Borough Solicitor Confirms Legal Authority",
                  description: "Roswell's City Attorney confirmed that existing municipal property law allowed the city to accept Bitcoin — no special legislation needed. Boyertown's solicitor would similarly review PA Borough Code to confirm the borough's authority to accept and hold digital property.",
                },
                {
                  step: "3",
                  title: "Council Formally Accepts the Gift",
                  description: "Borough Council passes a resolution recognizing the Bitcoin donation and establishing a Strategic Bitcoin Reserve Fund — a designated account on the borough's books. This is a public, transparent vote at a regular council meeting.",
                },
                {
                  step: "4",
                  title: "Adopt Protective Guardrails",
                  description: "Following Roswell's model, Council adopts an ordinance with clear rules: a defined lockup period (e.g., 5–10 years), a market value threshold before any spending (e.g., $100K+), a maximum drawdown percentage (e.g., 20% every 5 years), and required unanimous or supermajority Council approval for any sale.",
                },
                {
                  step: "5",
                  title: "Secure Institutional Custody",
                  description: "Bitcoin is held in institutional-grade custody (regulated custodians with multi-signature security, insurance, and audit trails). The borough never directly handles private keys — just as Texas uses third-party custodians.",
                },
                {
                  step: "6",
                  title: "Transparent Reporting & Growth",
                  description: "Publish quarterly reports on the reserve's value. Accept additional donations and sponsorships over time. If the reserve appreciates past the threshold, Council can vote to sell a controlled portion to fund specific community needs — roads, infrastructure, emergency services.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-bitcoin/20 text-bitcoin text-sm font-bold flex items-center justify-center mt-1">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-bitcoin font-bold">The key insight from Roswell:</span>{" "}
                You don&apos;t need state legislation. You don&apos;t need taxpayer money. You don&apos;t need
                to take a big risk. A single donated Bitcoin, a solicitor&apos;s opinion, a council
                vote, and sensible guardrails — that&apos;s all it took to make history. Boyertown
                could do the same and become Pennsylvania&apos;s first.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Bitcoin Town Vision"
            title="The Boyertown Bitcoin Roadmap"
            subtitle="How this could unfold — responsibly, transparently, and with full community buy-in."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bitcoin/50 via-bitcoin/20 to-transparent" />

            {[
              {
                phase: "Phase 1",
                title: "Education & Awareness",
                items: [
                  "Launch BoyertownBitcoin.com",
                  "Community town halls and Q&A sessions",
                  "Share data and simulator with council members",
                  "Build coalition of supportive residents",
                ],
              },
              {
                phase: "Phase 2",
                title: "Formal Proposal",
                items: [
                  "Draft resolution for 1% pilot allocation",
                  "Legal review of PA Borough Code options",
                  "Identify institutional custody partners",
                  "Present cost-benefit analysis to council",
                ],
              },
              {
                phase: "Phase 3",
                title: "Pilot Program",
                items: [
                  "Council votes on 1% pilot (e.g., ~$6K–$10K)",
                  "Establish custody and reporting framework",
                  "Quarterly transparent reporting to residents",
                  "12-month evaluation period",
                ],
              },
              {
                phase: "Phase 4",
                title: "Scale & Lead",
                items: [
                  "Based on results, consider expanding to 3–5%",
                  "Boyertown becomes PA's Bitcoin Town",
                  "Media coverage and economic development",
                  "Model for other boroughs statewide",
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-bitcoin rounded-full -translate-x-1.5 mt-6 z-10 ring-4 ring-navy" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-navy-card border border-navy-border rounded-xl p-6 hover:border-bitcoin/30 transition-all">
                    <span className="text-xs font-bold text-bitcoin uppercase tracking-widest">
                      {phase.phase}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <ChevronRight className="w-4 h-4 text-bitcoin flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
