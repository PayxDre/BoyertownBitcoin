"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function BitcoinTicker() {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
          { next: { revalidate: 60 } } as RequestInit
        );
        const data = await res.json();
        setPrice(data.bitcoin.usd);
        setChange24h(data.bitcoin.usd_24h_change || 0);
      } catch {
        // Fallback price for demo
        setPrice(94250);
        setChange24h(1.2);
      } finally {
        setLoading(false);
      }
    }
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const isPositive = change24h >= 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-t border-navy-border">
      <div className="overflow-hidden">
        <div className="flex items-center gap-8 animate-ticker whitespace-nowrap py-2 px-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-bitcoin">BTC</span>
                {loading ? (
                  <span className="text-xs text-gray-400">Loading...</span>
                ) : (
                  <>
                    <span className="text-xs font-mono text-white">
                      ${price?.toLocaleString()}
                    </span>
                    <span
                      className={`text-xs font-mono flex items-center gap-0.5 ${
                        isPositive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {Math.abs(change24h).toFixed(2)}%
                    </span>
                  </>
                )}
              </div>
              <span className="text-[10px] text-gray-600">|</span>
              <span className="text-[10px] text-gray-500">
                Boyertown 1% allocation at current price ={" "}
                <span className="text-bitcoin font-medium">
                  {price ? `~${((612500 * 0.01) / price).toFixed(4)} BTC` : "..."}
                </span>
              </span>
              <span className="text-[10px] text-gray-600">|</span>
              <span className="text-[10px] text-gray-500">
                5% allocation ={" "}
                <span className="text-bitcoin font-medium">
                  {price ? `~${((612500 * 0.05) / price).toFixed(4)} BTC` : "..."}
                </span>
              </span>
              <span className="text-[10px] text-gray-600">|</span>
              <span className="text-[10px] text-gray-500">
                PA Borough Code §1316 currently restricts investments to T-bills &amp; CDs
              </span>
              <span className="text-[10px] text-gray-600">|</span>
              <span className="text-[10px] text-green-400/80">
                Texas, U.S. Government, &amp; Roswell NM have all established Bitcoin reserves in 2025
              </span>
              <span className="text-[10px] text-gray-600 ml-8">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
