"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import {
  FileText,
  Code2,
  GitFork,
  ExternalLink,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Terminal,
} from "lucide-react";

export default function Hero() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personalInfo.typingLines[typedIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTypedIndex((prev) => (prev + 1) % personalInfo.typingLines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typedIndex]);

  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Background ambient decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm shadow-inner">
              <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
              <span>{personalInfo.status}</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Name and Titles */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.chineseName}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                  {personalInfo.handle}
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-400">
                {personalInfo.name} · {personalInfo.title}
              </p>
            </div>

            {/* Interactive Terminal-like Typing Line */}
            <div className="flex w-full max-w-2xl items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-3 font-mono text-xs sm:text-sm text-zinc-300 shadow-xl">
              <Terminal className="h-4 w-4 shrink-0 text-cyan-400" />
              <span className="text-zinc-500 select-none">$ focus:</span>
              <span className="text-cyan-300 font-semibold">{displayText}</span>
              <span className="inline-block h-4 w-1.5 bg-cyan-400 animate-pulse" />
            </div>

            {/* Core Bio Philosophy */}
            <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              <blockquote className="border-l-2 border-cyan-500/70 pl-4 py-1 italic text-zinc-300 bg-cyan-950/10 rounded-r-md">
                「{personalInfo.bioShort}」
                <span className="block text-xs text-zinc-400 font-mono not-italic mt-1">
                  — {personalInfo.bioEn}
                </span>
              </blockquote>
              <p className="text-zinc-400">
                {personalInfo.bioFull}
              </p>
            </div>

            {/* Quick Action Navigation CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-900/50 transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>學術論文 (Research)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all"
              >
                <Code2 className="h-4 w-4 text-emerald-400" />
                <span>自研專案 (Projects)</span>
              </a>

              <a
                href="#contributions"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all"
              >
                <GitFork className="h-4 w-4 text-purple-400" />
                <span>開源貢獻 (Contributions)</span>
              </a>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Avatar Card & Highlights */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-end">
            <div className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-2xl backdrop-blur-sm">
              {/* Outer decorative avatar ring */}
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border-2 border-cyan-500/40 p-1 shadow-lg shadow-cyan-950/60">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={160}
                  height={160}
                  className="h-full w-full rounded-xl object-cover"
                  priority
                />
              </div>

              {/* Identity Header */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-1.5 font-bold text-lg text-white">
                  <span>{personalInfo.handle}</span>
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>
                <p className="text-xs text-zinc-400 font-mono">@{personalInfo.githubHandle}</p>
                <div className="mt-2 inline-flex items-center rounded-full bg-zinc-800/80 px-2.5 py-0.5 text-[11px] text-zinc-300">
                  靜宜大學資工系 · Providence CS
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-zinc-800/90 pt-4 text-center">
                <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800/50">
                  <div className="text-base font-bold text-cyan-400">800+ ⭐</div>
                  <div className="text-[10px] text-zinc-400">自研 Agent 星數</div>
                </div>
                <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800/50">
                  <div className="text-base font-bold text-emerald-400">2 篇</div>
                  <div className="text-[10px] text-zinc-400">第一作者研討會</div>
                </div>
                <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800/50">
                  <div className="text-base font-bold text-purple-400">5+ 項 🚀</div>
                  <div className="text-[10px] text-zinc-400">開源實質 PR 貢獻</div>
                </div>
                <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800/50">
                  <div className="text-base font-bold text-amber-400">20k+ 📦</div>
                  <div className="text-[10px] text-zinc-400">NPM 下載總數</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Summary Stats Row */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-3.5 text-center backdrop-blur-xs hover:border-zinc-700 transition-colors"
            >
              <div className="text-sm sm:text-base font-bold text-zinc-100 font-mono">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
