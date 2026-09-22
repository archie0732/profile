"use client";

import { useState } from "react";
import { selfProjects, SelfProject } from "@/data/portfolioData";
import {
  Code2,
  ExternalLink,
  Star,
  Sparkles,
  Bot,
  Eye,
  Wrench,
  Trophy,
  Filter,
} from "lucide-react";
import { GithubIcon } from "./Icons";

type CategoryFilter = "all" | "ai" | "cv" | "bots" | "tools" | "cp";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const categories: { id: CategoryFilter; label: string; icon: typeof Code2 }[] = [
    { id: "all", label: "全部專案 (All)", icon: Filter },
    { id: "ai", label: "AI & RAG 智能體", icon: Sparkles },
    { id: "cv", label: "電腦視覺 (CV)", icon: Eye },
    { id: "bots", label: "Discord 機器人", icon: Bot },
    { id: "tools", label: "工具與爬蟲套件", icon: Wrench },
    { id: "cp", label: "演算法與競賽", icon: Trophy },
  ];

  const filteredProjects = selfProjects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative scroll-mt-20 py-16 border-t border-zinc-800/80 bg-zinc-950/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Code2 className="h-3.5 w-3.5" />
            <span>Independent Development</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>我自己開發的專案</span>
            <span className="text-base sm:text-lg font-mono text-zinc-500 font-normal">
              / Self-Developed Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            獨立架構與實作之開源專案，涵蓋全端 AI Agent 智能體、超過 200+ 伺服器活躍之社群 Bot、累計 20,000+ 下載的 NPM 工具包，以及兼具實用與趣味的電腦視覺應用。
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-emerald-500/15 border border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-950"
                    : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: SelfProject) => (
            <div
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl border bg-zinc-900/50 p-6 transition-all hover:bg-zinc-900/80 hover:shadow-xl backdrop-blur-xs ${
                project.featured
                  ? "border-zinc-700/80 hover:border-emerald-500/50 shadow-md shadow-zinc-950"
                  : "border-zinc-800/80 hover:border-zinc-600"
              }`}
            >
              <div>
                {/* Header: Badge & Stars */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {project.badge ? (
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                      {project.badge}
                    </span>
                  ) : (
                    <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-400 uppercase">
                      {project.category}
                    </span>
                  )}

                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                      <Star className="h-3 w-3 fill-amber-400" />
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-zinc-800/70 px-2 py-0.5 text-[11px] font-mono text-zinc-300 border border-zinc-700/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Links */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-800/70">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>專案原始碼</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
                  >
                    <span>線上套件 / 演示</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
