"use client";

import { skillCategories, SkillCategory } from "@/data/portfolioData";
import { Layers, Terminal, Cpu, Server, Wrench } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("語言")) return Terminal;
    if (category.includes("AI")) return Cpu;
    if (category.includes("後端") || category.includes("全端")) return Server;
    return Wrench;
  };

  return (
    <section id="skills" className="relative scroll-mt-20 py-16 border-t border-zinc-800/80 bg-zinc-950/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/30 px-3 py-1 text-xs font-semibold text-blue-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>技術能力與工具</span>
            <span className="text-base sm:text-lg font-mono text-zinc-500 font-normal">
              / Tech Stack
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            以系統底層、高效能後端與現代機器學習為核心，掌握從底層 C++/Rust 到高層 TypeScript/Bun 與 PyTorch/OpenCV 之完整技術棧。
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group: SkillCategory) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg bg-zinc-800/70 border border-zinc-700/60 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-zinc-800 transition-all font-mono"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
