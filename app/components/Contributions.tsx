"use client";

import { contributions, Contribution } from "@/data/portfolioData";
import { GitFork, ExternalLink, Star, HeartHandshake, Globe, ShieldCheck } from "lucide-react";

export default function Contributions() {
  return (
    <section id="contributions" className="relative scroll-mt-20 py-16 border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 px-3 py-1 text-xs font-semibold text-purple-400">
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Open Source Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>開源生態貢獻</span>
            <span className="text-base sm:text-lg font-mono text-zinc-500 font-normal">
              / Open-Source Contributions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            積極參與海內外知名開源專案與社群工具開發，從擁有 50,000+ Stars 的國際頂級電腦視覺庫到台灣在地防災公共資料平台，提供修復、功能增強與維護。
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item: Contribution) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-purple-500/40 hover:bg-zinc-900/70 hover:shadow-xl backdrop-blur-xs"
            >
              <div>
                {/* Header: Org & Stars Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    <Globe className="h-3 w-3 text-purple-400" />
                    {item.org}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    <Star className="h-3 w-3 fill-amber-400" />
                    {item.stars}
                  </span>
                </div>

                {/* Repo Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Role indicator */}
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-purple-400 bg-purple-950/40 border border-purple-800/40 px-2 py-0.5 rounded">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{item.role}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-800/60 px-2 py-0.5 text-[11px] font-mono text-zinc-400 border border-zinc-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">Upstream Repo</span>
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <GitFork className="h-3.5 w-3.5" />
                  <span>檢視倉庫</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
