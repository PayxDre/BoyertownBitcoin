"use client";

import Link from "next/link";
import { Bitcoin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-navy-border">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bitcoin/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Bitcoin className="w-7 h-7 text-bitcoin" />
              <span className="text-lg font-bold text-white">BoyertownBitcoin</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A grassroots advocacy initiative to make Boyertown Borough, PA a pioneer in
              municipal Bitcoin adoption.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/today", label: "Financial Reality" },
                { href: "/benefits", label: "Why Bitcoin" },
                { href: "/precedents", label: "Precedents" },
                { href: "/simulator", label: "Impact Simulator" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-bitcoin transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Take Action */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Take Action
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/action", label: "Get Involved" },
                { href: "/action#petition", label: "Sign the Petition" },
                { href: "/action#email", label: "Email Council" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-bitcoin transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-bitcoin transition-colors"
                >
                  About & Disclaimer
                </Link>
              </li>
              <li>
                <a
                  href="https://www.boyertownboro.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-bitcoin transition-colors inline-flex items-center gap-1"
                >
                  Boyertown Borough <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BoyertownBitcoin.com. This is a community advocacy project, not financial advice.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> for Boyertown, PA
          </p>
        </div>
      </div>
    </footer>
  );
}
