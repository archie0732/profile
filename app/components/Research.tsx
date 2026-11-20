"use client";

import { useState } from "react";
import { papers, Paper } from "@/data/portfolioData";
import { FileText, ExternalLink, Award, BookOpen, Globe2, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Research() {
  // Store language tab state per paper id
  const [activeLang, setActiveLang] = useState<Record<string, "zh" | "en" | "ja">>({
    "tcse-2026": "zh",
    "tanet-2026": "zh",
  });

  const handleLangChange = (paperId: string, lang: "zh" | "en" | "ja") => {
    setActiveLang((prev) => ({ ...prev, [paperId]: lang }));
  };

  return (
    <section id="research" className="relative scroll-mt-20 py-16 border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-semibold text-cyan-400">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Academic Publications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>學術論文</span>
            <span className="text-base sm:text-lg font-mono text-zinc-500 font-normal">
              / Research Papers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            聚焦於檢索增強生成（RAG）、多模態視覺與工具調用（TAG）之學術研究。以第一作者發表 2 篇研討會論文（其中 TANET 2026 獲最佳論文獎），研究成果均附有實際落地之開源專案與實證評估。
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-8">
          {papers.map((paper: Paper) => {
            const currentLang = activeLang[paper.id] || "zh";
            const currentAbstract = paper.abstracts[currentLang];

            return (
              <div
                key={paper.id}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 transition-all hover:border-cyan-500/40 hover:bg-zinc-900/80 shadow-xl backdrop-blur-xs"
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 border border-blue-500/30 px-2.5 py-1 text-xs font-bold text-blue-400">
                    <Award className="h-3.5 w-3.5" />
                    {paper.conferenceBadge}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    <Sparkles className="h-3 w-3" />
                    {paper.role}
                  </span>

                  {paper.award && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 border border-amber-400/50 px-2.5 py-1 text-xs font-bold text-amber-300">
                      {paper.award}
                    </span>
                  )}

                  {paper.paperNumber && (
                    <span className="rounded-md bg-amber-500/10 border border-amber-500/30 px-2 py-1 text-xs font-mono text-amber-400">
                      {paper.paperNumber}
                    </span>
                  )}

                  <span className="text-xs text-zinc-500 font-mono ml-auto">
                    {paper.year}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                {/* Authors list with Yu-Chi Hsu highlighted */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-zinc-400">
                  <span className="font-semibold text-zinc-500">作者 Authors:</span>
                  {paper.authors.map((author, index) => {
                    const isSelf = author.includes("Yu-Chi Hsu") || author.includes("許育祁");
                    return (
                      <span
                        key={author}
                        className={
                          isSelf
                            ? "font-bold text-cyan-300 underline decoration-cyan-500/50 underline-offset-4"
                            : "text-zinc-300"
                        }
                      >
                        {author}
                        {index < paper.authors.length - 1 ? "、" : ""}
                      </span>
                    );
                  })}
                </div>

                {/* Conference Info */}
                <p className="mt-2 text-xs font-medium text-zinc-500">
                  發表於：{paper.conference}
                </p>

                {/* Abstract Section with Language Selector Tabs */}
                <div className="mt-5 rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
                      <Globe2 className="h-3.5 w-3.5 text-zinc-500" />
                      摘要 Abstract
                    </span>
                    <div className="flex items-center gap-1 bg-zinc-900 rounded-lg p-0.5 border border-zinc-800">
                      <button
                        onClick={() => handleLangChange(paper.id, "zh")}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded transition-all ${
                          currentLang === "zh"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        中文
                      </button>
                      <button
                        onClick={() => handleLangChange(paper.id, "en")}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded transition-all ${
                          currentLang === "en"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLangChange(paper.id, "ja")}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded transition-all ${
                          currentLang === "ja"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        日本語
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed min-h-[56px]">
                    {currentAbstract}
                  </p>
                </div>

                {/* Method / Topic Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/60">
                  {paper.paperUrl && (
                    <a
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>查看研討會議程 / 論文</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  {paper.codeUrl && (
                    <a
                      href={paper.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white transition-all"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>論文開源專案代碼</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
