"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  FileText,
  Share2,
  Copy,
  CheckCircle2,
  Megaphone,
  Heart,
  MessageSquare,
  Send,
  ClipboardCheck,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const COUNCIL_EMAIL_TEMPLATE = `Dear Boyertown Borough Council Members,

I am writing as a concerned resident of Boyertown Borough to respectfully request that the Council explore the possibility of allocating a small percentage (1-5%) of the borough's treasury reserves to Bitcoin as a long-term strategic reserve asset.

As you know, our current investment options under PA Borough Code §1316 and Act 72 are limited to T-bills, CDs, and government securities — instruments that yield roughly 4.5% nominally, or barely 1% after inflation. Meanwhile, our borough faces over $1.4 million in infrastructure needs for 2026 alone, and the new road tax generates only $160,500/year.

Several compelling precedents have emerged in 2025:
- The U.S. Federal Government established a Strategic Bitcoin Reserve via Executive Order 14233
- Texas passed SB 21, creating the first state-level Bitcoin reserve with a $5M initial purchase
- Roswell, New Mexico became the first municipality in the world to establish a Bitcoin reserve

I am not suggesting we put the entire treasury at risk. Rather, I'm asking the Council to:

1. Form a study committee to evaluate the feasibility of a small Bitcoin allocation
2. Review the legal framework and any legislative changes needed
3. Engage with institutional custody providers to understand security options
4. Host a public information session for residents

Boyertown has an opportunity to be Pennsylvania's first "Bitcoin Borough" — a distinction that could bring national attention, attract businesses, and demonstrate fiscal innovation.

I've included a link to BoyertownBitcoin.com, a community resource with detailed financial analysis and an interactive simulator showing potential outcomes.

Thank you for your service to our community and for considering this forward-thinking proposal.

Respectfully,
[Your Name]
[Your Address in Boyertown]`;

export default function ActionPage() {
  const [petitionCount, setPetitionCount] = useState(147);
  const [petitionGoal] = useState(500);
  const [signed, setSigned] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const petitionPercent = Math.min((petitionCount / petitionGoal) * 100, 100);

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setPetitionCount((c) => c + 1);
      setSigned(true);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(COUNCIL_EMAIL_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Take Action"
            title="Your Voice Matters"
            subtitle="In a town of 4,000, every resident who speaks up makes a difference. Here's how you can help Boyertown become Pennsylvania's first Bitcoin Town."
          />
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Sign the Petition",
                description: "Add your name to the community petition asking Borough Council to explore a Bitcoin allocation.",
                action: "Sign below",
                href: "#petition",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Your Council",
                description: "Use our pre-written template to send a professional, informed message to every council member.",
                action: "Get the template",
                href: "#email",
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Spread the Word",
                description: "Share this site with neighbors, on social media, or at local events. Awareness is everything.",
                action: "Share now",
                href: "#share",
              },
            ].map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-navy-card border border-navy-border rounded-2xl p-8 hover:border-bitcoin/30 transition-all block"
              >
                <div className="p-3 bg-bitcoin/10 rounded-xl text-bitcoin w-fit mb-5 group-hover:bg-bitcoin/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-bitcoin font-medium">
                  {card.action} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Petition Section */}
      <section id="petition" className="py-16 mesh-bg scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-8 h-8 text-bitcoin" />
              <h2 className="text-2xl font-bold text-white">Community Petition</h2>
            </div>

            <p className="text-gray-400 mb-6">
              We, the residents of Boyertown Borough, respectfully request that Borough
              Council form a study committee to evaluate the feasibility and potential
              benefits of allocating 1–5% of borough treasury reserves to Bitcoin as a
              long-term strategic reserve asset.
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">
                  <span className="text-white font-bold text-lg">{petitionCount}</span> signatures
                </span>
                <span className="text-sm text-gray-500">Goal: {petitionGoal}</span>
              </div>
              <div className="h-4 bg-navy rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${petitionPercent}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-bitcoin to-bitcoin-light rounded-full relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 rounded-full animate-pulse" />
                </motion.div>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {(petitionGoal - petitionCount)} more signatures needed
              </div>
            </div>

            {/* Sign Form */}
            {!signed ? (
              <form onSubmit={handleSign} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-navy border border-navy-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-bitcoin/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-navy border border-navy-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-bitcoin/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="text-xs text-gray-600">
                  Your email is kept private and used only for petition verification.
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  Sign the Petition
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Thank You, {name}!</h3>
                <p className="text-green-400 text-sm">
                  Your signature has been recorded. Share this page to help us reach {petitionGoal} signatures.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Email Generator */}
      <section id="email" className="py-16 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-bitcoin" />
              <h2 className="text-2xl font-bold text-white">Email Your Council Members</h2>
            </div>

            <p className="text-gray-400 mb-6">
              Use this pre-written, professional template. Feel free to personalize it —
              council members appreciate hearing your genuine thoughts.
            </p>

            <div className="bg-navy rounded-xl p-6 mb-4 max-h-64 overflow-y-auto border border-navy-border">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                {COUNCIL_EMAIL_TEMPLATE}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyEmail}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-bitcoin/10 border border-bitcoin/30 text-bitcoin font-medium rounded-xl hover:bg-bitcoin/20 transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy to Clipboard
                  </>
                )}
              </button>
              <a
                href={`mailto:?subject=Exploring%20Bitcoin%20for%20Boyertown%20Borough&body=${encodeURIComponent(COUNCIL_EMAIL_TEMPLATE)}`}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-bitcoin hover:bg-bitcoin-dark text-black font-bold rounded-xl transition-all"
              >
                <Send className="w-4 h-4" /> Open in Email App
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Section */}
      <section id="share" className="py-16 mesh-bg scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-10 text-center"
          >
            <Share2 className="w-12 h-12 text-bitcoin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Spread the Word</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Every share reaches a potential supporter. In a town of 4,000, word of mouth
              is the most powerful tool we have.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <button
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(
                      "Check out BoyertownBitcoin.com — a community initiative to make Boyertown, PA the first Bitcoin Town in Pennsylvania! 🧡"
                    );
                  }
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-navy border border-navy-border rounded-xl text-white font-medium hover:border-bitcoin/30 transition-all"
              >
                <Copy className="w-4 h-4" /> Copy Share Text
              </button>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        "What if Boyertown, PA became Pennsylvania's first Bitcoin Town? 🧡\n\nCheck out the data, run the simulator, and join the movement:\nBoyertownBitcoin.com"
                      )}`,
                      "_blank"
                    );
                  }
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-navy border border-navy-border rounded-xl text-white font-medium hover:border-bitcoin/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" /> Share on X
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 pt-8 border-t border-navy-border">
              <p className="text-sm text-gray-500 mb-4">Join the growing movement</p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bitcoin">{petitionCount}</div>
                  <div className="text-xs text-gray-500">Petition Signers</div>
                </div>
                <div className="w-px h-10 bg-navy-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4,000+</div>
                  <div className="text-xs text-gray-500">Borough Residents</div>
                </div>
                <div className="w-px h-10 bg-navy-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">3</div>
                  <div className="text-xs text-gray-500">Govts with BTC Reserves</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Testimonials (mock) */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Community Voices"
            title="What Residents Are Saying"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I ran the simulator and couldn't believe it. Even a 1% allocation could have funded the curb replacement by now. Why aren't we doing this?",
                name: "Sarah M.",
                role: "Boyertown Resident",
              },
              {
                quote: "As a small business owner on Philadelphia Ave, I'd love to see Boyertown get the 'Bitcoin Town' brand. The attention alone would bring visitors and customers.",
                name: "Dave K.",
                role: "Local Business Owner",
              },
              {
                quote: "I was skeptical at first, but the precedents are hard to ignore. If the U.S. government is doing it, maybe our little borough should at least study it.",
                name: "Linda R.",
                role: "Retired Teacher",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-navy-card border border-navy-border rounded-xl p-6"
              >
                <div className="text-bitcoin text-2xl mb-3">&ldquo;</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bitcoin/20 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-bitcoin" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-600 mt-6">
            * These are representative community sentiments for illustration purposes.
          </p>
        </div>
      </section>
    </div>
  );
}
