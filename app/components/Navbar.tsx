"use client";

import { useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Menu, X, FileText, Code2, GitFork, Trophy, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "關於 About", href: "#about", icon: Layers },
    { name: "學術論文 Research", href: "#research", icon: FileText },
    { name: "自研專案 Projects", href: "#projects", icon: Code2 },
    { name: "開源貢獻 Contributions", href: "#contributions", icon: GitFork },
    { name: "競賽榮譽 Awards", href: "#awards", icon: Trophy },
    { name: "技術能力 Skills", href: "#skills", icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="#about"
          className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-tight text-zinc-100 hover:text-cyan-400 transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all font-bold">
            4r
          </span>
          <div className="flex flex-col">
            <span className="text-zinc-100 group-hover:text-cyan-400 transition-colors">
              {personalInfo.handle}
            </span>
            <span className="text-[10px] text-zinc-500 tracking-wider">
              {personalInfo.name}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-xs lg:text-sm text-zinc-300 hover:bg-zinc-900 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Quick Social Action Icons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={personalInfo.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-700 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.contacts.email}`}
            aria-label="Email Yu-Chi Hsu"
            className="flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-950"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>聯絡我</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={personalInfo.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800/80 bg-zinc-950/95 px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="h-4 w-4 text-zinc-500" />
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">{personalInfo.contacts.email}</span>
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-800 px-3 py-1 rounded"
              >
                <Mail className="h-3 w-3" />
                寄信聯絡
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
