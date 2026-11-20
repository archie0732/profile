"use client";

import { personalInfo } from "@/data/portfolioData";
import { Mail, Coffee, Package, ArrowUp, Heart } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-950 py-16 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between pb-12 border-b border-zinc-800/80">
          {/* Left Column: Contact & Call to Action */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Let&apos;s build something together
            </h3>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              歡迎研究交流或開源專案討論，可以透過 Email 或 GitHub 與我聯繫。
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>{personalInfo.contacts.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col sm:items-end space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Social Links & Platforms
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-200 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.contacts.kofi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-pink-900/40 bg-pink-950/20 px-3.5 py-2 text-xs font-medium text-pink-300 hover:bg-pink-950/40 hover:border-pink-700 transition-colors"
              >
                <Coffee className="h-4 w-4" />
                <span>Ko-fi</span>
              </a>

              <a
                href={personalInfo.contacts.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-red-900/40 bg-red-950/20 px-3.5 py-2 text-xs font-medium text-red-300 hover:bg-red-950/40 hover:border-red-700 transition-colors"
              >
                <Package className="h-4 w-4" />
                <span>NPM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name} ({personalInfo.handle}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 inline fill-red-500" /> using Next.js & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
