"use client";

import { achievements, Achievement } from "@/data/portfolioData";
import { Trophy, Medal } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="relative scroll-mt-20 py-16 border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1 text-xs font-semibold text-amber-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>競賽戰績與榮譽</span>
            <span className="text-base sm:text-lg font-mono text-zinc-500 font-normal">
              / Achievements
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            長年投入國際大學生程式設計競賽（ICPC）、教育部人工智慧競賽（AI CUP）與各項全國演算法大賽，在團隊合作與實戰抗壓中持續磨練問題解決能力。
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-4">
          {achievements.map((item: Achievement) => (
            <div
              key={item.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:border-amber-500/40 hover:bg-zinc-900/70"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-105 transition-transform">
                  <Medal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
                    <span className="font-mono text-amber-400 font-semibold">{item.award}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-2 sm:text-right">
                <span className="rounded-full bg-zinc-800/80 px-3 py-1 font-mono text-xs text-zinc-300 border border-zinc-700/50">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
