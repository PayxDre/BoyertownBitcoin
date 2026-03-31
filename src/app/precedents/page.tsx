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
                  <div className="flex items-start gap-5">
                    <div
                      className="p-4 rounded-2xl flex-shrink-0"
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
