"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bitcoin,
  ArrowRight,
  Shield,
  TrendingUp,
  Landmark,
  ChevronRight,
  Zap,
  Users,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";
import NodeBackground from "@/components/NodeBackground";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeader from "@/components/SectionHeader";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      <NodeBackground />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-bitcoin/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bitcoin/10 border border-bitcoin/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Texas, the U.S. Government, and Roswell NM have all adopted Bitcoin reserves in 2025
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
          >
            Make Boyertown
            <br />
            <span className="gradient-text text-glow-strong">
              Pennsylvania&apos;s First
            </span>
            <br />
            Bitcoin Town
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A community-driven campaign to explore how a modest{" "}
            <span className="text-bitcoin font-semibold">1–5% strategic allocation</span>{" "}
            of Boyertown Borough&apos;s treasury reserves to Bitcoin could protect against
            inflation, fund infrastructure without new taxes, and position our town as a
            national leader in fiscal innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/simulator"
              className="group flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold text-lg rounded-xl transition-all animate-pulse-glow"
            >
              <Zap className="w-5 h-5" />
              Run the Impact Simulator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/today"
              className="group flex items-center gap-2 px-8 py-4 border border-navy-border hover:border-bitcoin/40 text-white font-semibold text-lg rounded-xl transition-all hover:bg-white/5"
            >
              See Boyertown&apos;s Finances
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS / QUICK STATS */}
      <section className="relative z-10 -mt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                label: "Borough Population",
                value: "~4,000",
                detail: "Small town, big potential",
              },
              {
                icon: <Landmark className="w-6 h-6" />,
                label: "General Fund",
                value: "$240K–$985K",
                detail: "Fluctuates annually",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                label: "Current Yield",
                value: "~4.5%",
                detail: "T-bills & CDs (before inflation)",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                label: "BTC 10yr CAGR",
                value: "~55%",
                detail: "Historical annualized return",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-navy-card/80 backdrop-blur-sm border border-navy-border rounded-xl p-6 hover:border-bitcoin/30 transition-all card-glow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-bitcoin/10 rounded-lg text-bitcoin">
                    {stat.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="relative z-10 py-20 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Opportunity"
            title="Why This Matters for Boyertown"
            subtitle="Our borough faces real financial pressures. Bitcoin offers a path that no T-bill or CD ever could."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Inflation Is Eating Our Savings",
                description:
                  "With T-bills yielding ~4.5% and inflation running ~3.5%, Boyertown's reserves earn barely 1% in real terms. Every year we sit still, our purchasing power shrinks.",
                link: "/today",
                linkText: "See the numbers",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Infrastructure Needs Are Growing",
                description:
                  "A $576K WWTP generator. A $500K pump station. $239K in curb replacement. The new road tax generates only $160,500/year. We need our money to work harder.",
                link: "/today",
                linkText: "View 2026 projects",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "The Moment Is Now",
                description:
                  "Texas passed SB 21. The U.S. created a Strategic Bitcoin Reserve. Roswell became the first municipal adopter. Boyertown can be Pennsylvania's pioneer — and the branding alone is priceless.",
                link: "/precedents",
                linkText: "See who's leading",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-navy-card border border-navy-border rounded-2xl p-8 hover:border-bitcoin/30 transition-all"
              >
                <div className="p-3 bg-bitcoin/10 rounded-xl text-bitcoin w-fit mb-5 group-hover:bg-bitcoin/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{card.description}</p>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1 text-sm text-bitcoin hover:text-bitcoin-light font-medium transition-colors"
                >
                  {card.linkText} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT-IF TEASER */}
      <section className="relative z-10 py-20">
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
              <h3 className="text-sm font-semibold text-bitcoin uppercase tracking-widest mb-4">
                Quick What-If
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                If Boyertown had allocated just 5% to Bitcoin in 2020...
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">5% of ~$612K General Fund</div>
                  <div className="text-3xl font-bold text-white">
                    $<AnimatedCounter end={30625} />
                  </div>
                  <div className="text-sm text-gray-500">invested in 2020</div>
                </div>
                <ArrowRight className="w-8 h-8 text-bitcoin hidden md:block" />
                <div>
                  <div className="text-sm text-gray-500 mb-1">Value in 2025</div>
                  <div className="text-4xl font-black gradient-text text-glow">
                    $<AnimatedCounter end={399987} />
                  </div>
                  <div className="text-sm text-green-400">
                    +<AnimatedCounter end={1206} />% return
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                That&apos;s enough to cover the entire curb &amp; ramp replacement project — from a
                tiny allocation that didn&apos;t affect daily operations at all.
              </p>
              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
              >
                <Bitcoin className="w-5 h-5" />
                Build Your Own Scenario
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOMENTUM SECTION */}
      <section className="relative z-10 py-20 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="2025: The Year of Bitcoin Reserves"
            title="The Movement Is Happening — With or Without Us"
            subtitle="From the White House to the smallest cities, institutional Bitcoin adoption is accelerating."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                flag: "Federal",
                title: "U.S. Strategic Bitcoin Reserve",
                detail: "Executive Order 14233, March 2025",
                color: "blue",
              },
              {
                flag: "State",
                title: "Texas SB 21 — Bitcoin Reserve Act",
                detail: "First state reserve, $5M initial buy",
                color: "bitcoin",
              },
              {
                flag: "Municipal",
                title: "Roswell, NM — First City Reserve",
                detail: "First municipality in the world",
                color: "green",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-navy-card border border-navy-border rounded-xl p-6 hover:border-bitcoin/30 transition-all"
              >
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded-full mb-4 ${
                    item.color === "blue"
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : item.color === "green"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-bitcoin/10 text-bitcoin border border-bitcoin/20"
                  }`}
                >
                  {item.flag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/precedents"
              className="inline-flex items-center gap-2 text-bitcoin hover:text-bitcoin-light font-medium transition-colors"
            >
              Explore all precedents <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-bitcoin mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Boyertown Can Lead.
              <br />
              <span className="gradient-text">Will You Help?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Sign the petition, email your council members, or share this site with a
              neighbor. Every voice matters in a town of 4,000.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/action"
                className="flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold text-lg rounded-xl transition-all"
              >
                Take Action Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/action#petition"
                className="flex items-center gap-2 px-8 py-4 border border-bitcoin/30 hover:border-bitcoin text-bitcoin font-semibold text-lg rounded-xl transition-all hover:bg-bitcoin/5"
              >
                Sign the Petition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
