"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Heart,
  Shield,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About This Project"
            title="About BoyertownBitcoin"
            subtitle="Who we are, what we believe, and what this site is — and isn't."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* What We Are */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-bitcoin" />
                <h2 className="text-xl font-bold text-white">What This Is</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                BoyertownBitcoin.com is a <span className="text-white font-medium">grassroots community advocacy project</span> created
                by residents who love Boyertown and believe our borough deserves to explore
                every option for fiscal strength and innovation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This site presents publicly available financial data, real-world precedents,
                and educational tools to spark an informed conversation about whether a small,
                responsible Bitcoin allocation could benefit our community.
              </p>
            </div>

            {/* What We Believe */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-bitcoin" />
                <h2 className="text-xl font-bold text-white">What We Believe</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Small towns deserve the same financial innovation as large cities and states.",
                  "Transparency and data should drive every fiscal decision.",
                  "A 1-5% allocation is responsible, measured, and low-risk to operations.",
                  "Being first in Pennsylvania would bring outsized branding and attention.",
                  "Every resident's voice matters in a community of 4,000.",
                  "This decision belongs to the community, not to any special interest.",
                ].map((belief, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-bitcoin flex-shrink-0 mt-0.5" />
                    {belief}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Are */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-bitcoin" />
                <h2 className="text-xl font-bold text-white">Who We Are</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We are Boyertown residents, taxpayers, and community members. We are not
                financial professionals, investment advisors, or affiliated with any
                cryptocurrency company. We are simply citizens who have done the research
                and believe this conversation is worth having.
              </p>
            </div>

            {/* Data Sources */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-bitcoin" />
                <h2 className="text-xl font-bold text-white">Data Sources</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                All financial data cited on this site comes from:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin">-</span>
                  Official Boyertown Borough budget documents and records
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin">-</span>
                  The 2026 Tax &amp; Expenses Statement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin">-</span>
                  PA Borough Code (Title 8, Chapter 13)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin">-</span>
                  Public records of government Bitcoin adoption (federal executive orders, state legislation)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bitcoin">-</span>
                  Historical Bitcoin price data from public sources
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 mesh-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border-2 border-yellow-500/30 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Important Disclaimer</h2>
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-yellow-400">This website is not financial advice.</strong>{" "}
                Nothing on BoyertownBitcoin.com should be construed as a recommendation to buy,
                sell, or hold Bitcoin or any other asset. All content is for educational and
                informational purposes only.
              </p>

              <p>
                <strong className="text-white">Bitcoin is a volatile asset.</strong> Its price can
                fluctuate dramatically — including losing significant value in short time periods.
                Past performance does not guarantee future results. The projections in our
                simulator are illustrative scenarios, not predictions.
              </p>

              <p>
                <strong className="text-white">Legal considerations.</strong> Any allocation of
                borough funds to Bitcoin would require changes to the current legal framework under
                PA Borough Code §1316 and Act 72, council approval via formal resolution or
                ordinance, legal counsel review, and community input through proper public
                processes.
              </p>

              <p>
                <strong className="text-white">Independent advocacy.</strong> This site is an
                independent community project. It is not affiliated with, endorsed by, or funded
                by Boyertown Borough, any borough council member, any cryptocurrency company, or
                any political party.
              </p>

              <p>
                <strong className="text-white">Do your own research.</strong> We encourage every
                resident, council member, and stakeholder to independently verify all data
                presented, consult with qualified financial and legal professionals, and form
                their own informed opinions.
              </p>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions? Ideas? Want to Help?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              This is a community effort and we welcome all perspectives. Whether you&apos;re a
              supporter, a skeptic, or just curious — your voice matters.
            </p>
            <Link
              href="/action"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
