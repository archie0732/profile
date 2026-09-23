"use client";

import { contributions, Contribution } from "@/data/portfolioData";
import {
  ExternalLink,
  HeartHandshake,
  Globe,
  GitPullRequest,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { GithubIcon } from "./Icons";

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
            拒絕表面形式的無效提及，只列出具體、已獲上游審核或合併的實質技術貢獻。包含國際主流電腦視覺庫、離線知識庫、台灣災防預警平台與多端系統之缺陷修復與功能實作。
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((item: Contribution) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-purple-500/50 hover:bg-zinc-900/70 hover:shadow-xl backdrop-blur-xs"
            >
              <div>
                {/* Header: Org & PR Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    <Globe className="h-3 w-3 text-purple-400" />
                    {item.org}
                  </span>

                  {item.prStatus === "merged" ? (
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{item.prNumber} · 已合併 (Merged)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 border border-amber-500/40 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                      <Clock className="h-3 w-3" />
                      <span>{item.prNumber} · 審查中 (Under Review)</span>
                    </span>
                  )}
                </div>

                {/* Repo Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Project Overview */}
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {item.projectDescription}
                </p>

                {/* Specific Technical Contribution Box */}
                <div className="mt-4 rounded-xl border border-purple-500/25 bg-purple-950/20 p-3.5 text-xs text-purple-200">
                  <div className="flex items-center gap-1.5 font-semibold text-purple-300 mb-1">
                    <GitPullRequest className="h-3.5 w-3.5 text-purple-400" />
                    <span>實質貢獻內容 (My Contribution)</span>
                  </div>
                  <p className="leading-relaxed text-zinc-300">
                    {item.myContribution}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-800/60 px-2 py-0.5 text-[11px] font-mono text-zinc-400 border border-zinc-700/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Links */}
              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={item.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-purple-500/15 border border-purple-500/40 px-3 py-1.5 text-xs font-semibold text-purple-300 hover:bg-purple-500/25 hover:border-purple-400 transition-all"
                >
                  <GitPullRequest className="h-3.5 w-3.5" />
                  <span>檢視 Pull Request 紀錄</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>上游倉庫</span>
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
