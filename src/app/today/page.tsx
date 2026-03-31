"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  DollarSign,
  TrendingDown,
  Landmark,
  Droplets,
  Zap,
  Construction,
  Shield,
  Flame,
  Users,
  Ambulance,
  Lock,
  PieChart,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { BOYERTOWN_FINANCES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Construction: <Construction className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Ambulance: <Ambulance className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

export default function TodayPage() {
  const { generalFund, utilityFunds, majorProjects2026 } =
    BOYERTOWN_FINANCES;

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Financial Reality"
            title="Boyertown's Finances Today"
            subtitle="An honest look at where our borough stands — the reserves we hold, the constraints we face, and the infrastructure demands that aren't going away."
          />
        </div>
      </section>

      {/* Fund Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* General Fund */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-card border border-navy-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-bitcoin/10 rounded-xl">
                  <Landmark className="w-6 h-6 text-bitcoin" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{generalFund.label}</h3>
                  <p className="text-sm text-gray-500">{generalFund.description}</p>
                </div>
              </div>

              <div className="text-4xl font-black text-white mb-2">{generalFund.range}</div>
              <p className="text-gray-400 mb-6">Recent snapshots: ~$240K to ~$985K</p>

              {/* Visual bar */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Low (~$240K)</span>
                    <span>High (~$985K)</span>
                  </div>
                  <div className="h-3 bg-navy rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "62%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-bitcoin/60 to-bitcoin rounded-full"
                    />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Midpoint estimate: ~$612,500
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Utility & Capital Funds */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-card border border-navy-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <PieChart className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{utilityFunds.label}</h3>
                  <p className="text-sm text-gray-500">{utilityFunds.description}</p>
                </div>
              </div>

              <div className="text-4xl font-black text-white mb-6">
                ~$<AnimatedCounter end={1.5} decimals={1} suffix="M+" />
              </div>

              <div className="space-y-3">
                {utilityFunds.breakdown.map((fund, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{fund.name}</span>
                      <span className="text-white font-medium">
                        ${(fund.amount / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="h-2 bg-navy rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(fund.amount / 500000) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15 }}
                        className="h-full bg-gradient-to-r from-blue-500/60 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Road Tax Reality */}
      <section className="py-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-yellow-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-yellow-500/10 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  The New Road Tax: A Case Study in Budget Strain
                </h3>
                <p className="text-gray-400">
                  In 2026, Boyertown introduced a new 1-mill road tax. It generates only{" "}
                  <span className="text-yellow-400 font-bold">~$160,500 per year</span> due to
                  &quot;current budget constraints.&quot; Meanwhile, the curb &amp; ramp replacement
                  alone costs $239,000 — requiring an additional $90,000 pulled from the
                  capital fund.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy/60 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Road Tax Revenue</div>
                <div className="text-3xl font-bold text-yellow-400">
                  $<AnimatedCounter end={160500} />
                </div>
                <div className="text-xs text-gray-600 mt-1">per year</div>
              </div>
              <div className="bg-navy/60 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Curb & Ramp Cost</div>
                <div className="text-3xl font-bold text-red-400">
                  $<AnimatedCounter end={239000} />
                </div>
                <div className="text-xs text-gray-600 mt-1">+ $90K from capital fund</div>
              </div>
              <div className="bg-navy/60 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Gap</div>
                <div className="text-3xl font-bold text-red-400">
                  -$<AnimatedCounter end={78500} />
                </div>
                <div className="text-xs text-gray-600 mt-1">shortfall from tax alone</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2026 Major Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="2026 Budget"
            title="Major Projects & Expenditures"
            subtitle="These are real, urgent infrastructure needs — not wish-list items. And they all compete for the same limited pool of money."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorProjects2026.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-navy-card border border-navy-border rounded-xl p-5 hover:border-bitcoin/30 transition-all group"
              >
                <div className="p-2 bg-bitcoin/10 rounded-lg text-bitcoin w-fit mb-3 group-hover:bg-bitcoin/20 transition-colors">
                  {iconMap[project.icon] || <DollarSign className="w-5 h-5" />}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{project.name}</h4>
                <div className="text-2xl font-bold text-bitcoin mb-1">
                  ${(project.cost / 1000).toFixed(0)}K
                </div>
                {project.note && (
                  <p className="text-xs text-gray-500">{project.note}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-navy-card border border-navy-border rounded-xl p-6 text-center"
          >
            <div className="text-sm text-gray-500 mb-1">Total 2026 Major Project Costs</div>
            <div className="text-4xl font-black text-white">
              $<AnimatedCounter end={1412000} />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              vs. a General Fund that has historically ranged $240K–$985K
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Constraints */}
      <section className="py-16 mesh-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-red-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">
                The Legal Straitjacket
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Under <span className="text-white font-semibold">PA Borough Code §1316</span> and{" "}
              <span className="text-white font-semibold">Act 72</span>, Boyertown&apos;s investment
              options are legally restricted to ultra-conservative instruments:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {["U.S. Treasury Bills", "Certificates of Deposit", "Government Securities"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-navy/60 border border-navy-border rounded-lg p-4 text-center"
                  >
                    <div className="text-sm text-gray-300 font-medium">{item}</div>
                  </div>
                )
              )}
            </div>

            <div className="bg-navy/60 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Typical Yield</div>
                  <div className="text-2xl font-bold text-yellow-400">~4.5%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Recent Inflation</div>
                  <div className="text-2xl font-bold text-red-400">~3.5%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Real Return</div>
                  <div className="text-2xl font-bold text-gray-400">~1%</div>
                  <div className="text-xs text-gray-600">barely treading water</div>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              These instruments preserve capital but cannot grow it meaningfully. For a borough
              with $1.4M+ in infrastructure needs and a sub-million-dollar General Fund, &quot;safe&quot;
              is slowly becoming &quot;insufficient.&quot;
            </p>
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
            <TrendingDown className="w-12 h-12 text-bitcoin mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Status Quo Isn&apos;t Working.
              <br />
              <span className="gradient-text">There&apos;s a Better Way.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              What if even a small portion of these reserves could grow at 20–50% annually
              instead of 1%? Explore the case for Bitcoin.
            </p>
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
            >
              Why Bitcoin? <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
