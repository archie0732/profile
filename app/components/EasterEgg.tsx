"use client";

import { useState } from "react";
import { easterEgg } from "@/data/portfolioData";
import { ChevronDown, ChevronUp, Swords } from "lucide-react";

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 bg-zinc-950/90 border-t border-zinc-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-4 transition-all">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between text-left text-xs sm:text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Swords className="h-4 w-4 text-purple-400" />
              <span className="font-mono text-purple-300">👉 {easterEgg.title}</span>
              <span className="rounded bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 text-[10px] text-purple-300">
                {easterEgg.badge}
              </span>
            </span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isOpen && (
            <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/70 p-4 rounded-xl">
              {easterEgg.content.map((line, idx) => (
                <p
                  key={idx}
                  className={
                    line.includes("五條悟贏了")
                      ? "text-cyan-400 font-bold text-sm sm:text-base py-1"
                      : line.includes("茈")
                      ? "text-purple-300 font-semibold"
                      : "text-zinc-400"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
