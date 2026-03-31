"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  ExternalLink,
  Landmark,
  Scale,
  Bitcoin,
  Globe,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const resources = [
  {
    category: "Official Borough Records",
    icon: <Landmark className="w-5 h-5" />,
    items: [
      {
        title: "Boyertown Borough Official Website",
        description: "Access meeting minutes, budgets, and official documents.",
        url: "https://www.boyertownboro.org",
        type: "Website",
      },
      {
        title: "2026 Tax & Expenses Statement",
        description: "Official borough budget document detailing the 1-mill road tax, project costs, and fund balances.",
        url: "#",
        type: "Document",
      },
    ],
  },
  {
    category: "PA Legal Framework",
    icon: <Scale className="w-5 h-5" />,
    items: [
      {
        title: "PA Borough Code §1316 — Investment of Funds",
        description: "The statute governing how Pennsylvania boroughs may invest treasury funds. Currently restricts to conservative instruments.",
        url: "#",
        type: "Legal",
      },
      {
        title: "Act 72 — Authorized Investment Instruments",
        description: "Pennsylvania's broader framework for municipal investment authority.",
        url: "#",
        type: "Legal",
      },
    ],
  },
  {
    category: "Bitcoin Reserve Precedents",
    icon: <Globe className="w-5 h-5" />,
    items: [
      {
        title: "Executive Order 14233 — U.S. Strategic Bitcoin Reserve",
        description: "The March 6, 2025 executive order establishing the federal Bitcoin reserve from seized assets.",
        url: "#",
        type: "Government",
      },
      {
        title: "Texas SB 21 — Strategic Bitcoin Reserve Act",
        description: "Full text of the 2025 Texas legislation creating the first state-level Bitcoin reserve.",
        url: "#",
        type: "Legislation",
      },
      {
        title: "Roswell, NM Municipal Bitcoin Reserve",
        description: "Coverage of the first U.S. city to establish a municipal Bitcoin reserve via a donated BTC gift.",
        url: "#",
        type: "News",
      },
    ],
  },
  {
    category: "Bitcoin Education",
    icon: <GraduationCap className="w-5 h-5" />,
    items: [
      {
        title: "Bitcoin Whitepaper by Satoshi Nakamoto",
        description: "The original 2008 paper describing Bitcoin's peer-to-peer electronic cash system. Only 9 pages.",
        url: "#",
        type: "Whitepaper",
      },
      {
        title: "The Bitcoin Standard by Saifedean Ammous",
        description: "The seminal book on Bitcoin's monetary economics and why it serves as sound money.",
        url: "#",
        type: "Book",
      },
      {
        title: "Bitcoin for Corporations (MicroStrategy Playbook)",
        description: "How MicroStrategy's treasury strategy works and why institutions are adopting Bitcoin.",
        url: "#",
        type: "Guide",
      },
    ],
  },
  {
    category: "Custody & Security",
    icon: <Bitcoin className="w-5 h-5" />,
    items: [
      {
        title: "Institutional Bitcoin Custody Solutions",
        description: "Overview of regulated custodians (Coinbase Custody, Fidelity Digital, etc.) used by governments and corporations.",
        url: "#",
        type: "Guide",
      },
      {
        title: "Multi-Signature Security for Municipal Holdings",
        description: "How multi-sig wallets provide transparent, hack-resistant custody for public funds.",
        url: "#",
        type: "Technical",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Resources"
            title="Learn More, Dig Deeper"
            subtitle="Everything you need to understand the legal, financial, and technical landscape of municipal Bitcoin adoption."
          />
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {resources.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-bitcoin/10 rounded-lg text-bitcoin">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{section.category}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="bg-navy-card border border-navy-border rounded-xl p-5 hover:border-bitcoin/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-semibold text-white group-hover:text-bitcoin transition-colors">
                            {item.title}
                          </h3>
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-navy rounded-full text-gray-500 border border-navy-border">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-bitcoin flex-shrink-0 ml-4 mt-1 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Downloadable Fact Sheet */}
      <section className="py-16 mesh-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-bitcoin/20 rounded-2xl p-10"
          >
            <FileText className="w-12 h-12 text-bitcoin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Boyertown Bitcoin Fact Sheet
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              A printable one-page summary of the key facts, financials, and precedents.
              Perfect for sharing at council meetings or with neighbors.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-bitcoin/10 border border-bitcoin/30 text-bitcoin font-medium rounded-xl">
              <BookOpen className="w-4 h-4" />
              Coming Soon — Fact Sheet PDF
            </div>
            <p className="text-xs text-gray-600 mt-4">
              We&apos;re preparing a downloadable PDF fact sheet. Check back soon.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
