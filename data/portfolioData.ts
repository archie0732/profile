export interface Paper {
  id: string;
  title: string;
  conference: string;
  conferenceBadge: string;
  role: string;
  paperNumber?: string;
  year: string;
  authors: string[];
  firstAuthor: boolean;
  abstracts: {
    zh: string;
    en: string;
    ja: string;
  };
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export interface SelfProject {
  id: string;
  title: string;
  description: string;
  category: "ai" | "cv" | "bots" | "tools" | "cp";
  stars?: number;
  featured: boolean;
  badge?: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface Contribution {
  id: string;
  title: string;
  org: string;
  stars: string;
  description: string;
  role: string;
  repoUrl: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  award: string;
  category: "competition" | "academic";
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const personalInfo = {
  name: "Yu-Chi Hsu",
  chineseName: "許又騏",
  handle: "4rch1e",
  githubHandle: "archie0732",
  title: "Undergraduate Researcher & Software Developer",
  avatar: "https://avatars.githubusercontent.com/u/121162902?v=4",
  status: "🎓 準備升學研究所中 (Pursuing Graduate School in CS/AI)",
  bioShort: "專門研究／開發看似無用，但意外實用的程式。",
  bioEn: "Building delightfully unnecessary software.",
  bioJa: "無駄プログラム研究・開発の専門家。",
  bioFull:
    "靜宜大學資訊工程學系，專注於檢索增強生成 (RAG)、工具增強生成 (TAG)、多代理人架構 (AI Agents) 與電腦視覺 (CV)。以第一作者身份發表 2 篇研討會論文，熱愛開源生態並活躍於各項演算法與 AI 競賽。",
  contacts: {
    email: "yuchi.hsu0308@gmail.com",
    github: "https://github.com/archie0732",
    kofi: "https://ko-fi.com/arch1e0732",
    npm: "https://www.npmjs.com/~archie0732",
  },
  stats: [
    { label: "自研開源專案星數", value: "750+ Stars" },
    { label: "研討會第一作者論文", value: "2 篇發表" },
    { label: "NPM 套件累計下載量", value: "20,000+ 次" },
    { label: "Discord Bot 服務伺服器", value: "200+ 個" },
    { label: "知名開源專案貢獻", value: "5+ 個專案" },
    { label: "ICPC & AI 競賽佳績", value: "5+ 項獎項" },
  ],
  typingLines: [
    "Retrieval-Augmented Generation (RAG)",
    "AI Agents & Multi-Agent Systems",
    "Computer Vision & Multimodal AI",
    "Competitive Programming (ICPC/TOPC)",
    "Building delightfully unnecessary software",
  ],
};

export const papers: Paper[] = [
  {
    id: "tcse-2026",
    title: "Intelligent Healthy Diet Management System: Visual Recognition × Tool-Augmented Generation",
    conference: "TCSE 2026 (台灣軟體工程研討會)",
    conferenceBadge: "TCSE 2026",
    role: "第一作者 (First Author)",
    paperNumber: "Paper No. 50",
    year: "2026",
    authors: ["Yu-Chi Hsu (許又騏)", "Chun-Fang Pan", "Chun-Ting Wu", "Yi-Wen Lin", "Meng-Yen Hsieh"],
    firstAuthor: true,
    tags: ["Visual Recognition", "Tool-Augmented Generation (TAG)", "Computer Vision", "Dietary System", "Multimodal AI"],
    paperUrl: "https://tcse2026.seat.org.tw/%E8%AD%B0%E7%A8%8B/%E8%AB%96%E6%96%87%E8%AD%B0%E7%A8%8B",
    codeUrl: "https://github.com/archie0732/healthy-diet",
    abstracts: {
      zh: "本研究提出一套結合影像辨識與工具增強生成（Tool-Augmented Generation, TAG）的智慧飲食管理系統，使用者拍攝餐點照片後，系統可自動辨識食材並呼叫外部工具估算營養成分，再由生成模型給出個人化飲食建議。",
      en: "This research proposes an intelligent dietary management system combining computer vision and Tool-Augmented Generation (TAG). After a user takes a photo of their meal, the system automatically identifies the ingredients, invokes external tools to estimate nutritional values, and utilizes a generative model to provide personalized dietary recommendations.",
      ja: "本研究では、画像認識とツール拡張生成（Tool-Augmented Generation）を組み合わせた知的食事管理システムを提案する。ユーザーが食事の写真を撮影すると、システムが自動的に食材を識別し、外部ツールを呼び出して栄養成分を推計した上で、生成模型を通じてパーソナライズされた食事アドバイスを提供する。",
    },
  },
  {
    id: "tanet-2026",
    title: "Conditional Version-Aware Retrieval for Evolving Health Guidelines: Iterative Design and Empirical Evaluation of a RAG Retrieval Policy",
    conference: "TANET 2026 (台灣網際網路研討會)",
    conferenceBadge: "TANET 2026",
    role: "第一作者 (First Author)",
    year: "2026",
    authors: ["Yu-Chi Hsu (許又騏)", "Meng-Yen Hsieh"],
    firstAuthor: true,
    tags: ["RAG Retrieval Policy", "Version-Matching", "Evidence Selection", "Empirical Evaluation", "NLP"],
    paperUrl: "https://tanet2026.ntunhs.edu.tw/",
    codeUrl: "https://github.com/archie0732/healthy-diet-ai-agent",
    abstracts: {
      zh: "針對健康指引新舊版本並存的證據選取問題，提出依查詢意圖啟用版本配對的 RAG 檢索策略。在保留測試集的 20 題歷史比較查詢中，將必要證據 Recall@3 由 0.100 提升至 0.525，並以消融實驗驗證版本配對的貢獻。",
      en: "To address the evidence selection issue caused by the coexistence of old and new versions of health guidelines, we propose a query-intent-driven version-matching RAG retrieval strategy. Among 20 historical comparative queries in the reserved test set, this approach improves the Recall@3 of necessary evidence from 0.100 to 0.525, and validates the contribution of version matching through ablation experiments.",
      ja: "新旧バージョンの健康ガイドラインが混在する状況におけるエビデンス選択の課題に対し、クエリ意図に基づくバージョンマッチング型RAG検索戦略を提案する。テストセットに残された20件の過去の比較クエリにおいて、必要とされるエビデンスのRecall@3を0.100から0.525へと向上させ、さらにアブレーション実験を通じてバージョンマッチングの貢献度を検証した。",
    },
  },
];

export const selfProjects: SelfProject[] = [
  {
    id: "healthy-diet-ai-agent",
    title: "Healthy Diet AI Agent",
    description: "基於 Bun + TypeScript 的智慧營養問答與影像分析後端，整合 RAG 知識庫檢索與多模態食譜指引，獲得 750+ 顆 GitHub Stars。",
    category: "ai",
    stars: 751,
    featured: true,
    badge: "⭐ 750+ Stars",
    tech: ["TypeScript", "Bun", "RAG", "LLM", "Vector DB", "Food AI"],
    repoUrl: "https://github.com/archie0732/healthy-diet-ai-agent",
  },
  {
    id: "manga-discord-bot",
    title: "Manga Discord Bot",
    description: "服務超過 200+ Discord 伺服器的漫畫推播與查詢機器人，提供高效率爬取解析、即時追更廣播與使用者客製化訂閱。",
    category: "bots",
    featured: true,
    badge: "🤖 200+ 伺服器使用",
    tech: ["TypeScript", "Discord.js", "Node.js", "Web Crawler", "Automation"],
    repoUrl: "https://github.com/archie0732/manga-discord-bot",
  },
  {
    id: "pixiv-crawler",
    title: "@archie0732/pixivcrawler & APIs",
    description: "發布於 NPM 的多功能非同步圖片爬蟲庫與 API，具備自動重試、速率控制與類型支援，累計下載次數超過 20,000 次。",
    category: "tools",
    featured: true,
    badge: "📦 20k+ NPM 下載",
    tech: ["TypeScript", "NPM Package", "Async/Await", "RESTful API"],
    repoUrl: "https://github.com/archie0732/pixiv-crawler",
    demoUrl: "https://www.npmjs.com/~archie0732",
  },
  {
    id: "albion-auto-fishing",
    title: "Albion Auto Fishing",
    description: "基於電腦視覺圖像比對技術打造之 Albion Online 自動化釣魚輔助工具，能準確感測水中浮標微幅震動與收線最佳時機。",
    category: "cv",
    featured: true,
    badge: "🎣 電腦視覺應用",
    tech: ["Python", "OpenCV", "AutoHotkey", "Image Processing", "Automation"],
    repoUrl: "https://github.com/archie0732/albion-auto-fishing",
  },
  {
    id: "2025-icpc-practice",
    title: "2025 ICPC Practice (Rust & Web)",
    description: "演算法競賽練習題目庫與 Rust 實作解法，搭配網頁版視覺化互動練習介面，成功帶領隊伍闖入 ICPC 台灣決賽。",
    category: "cp",
    stars: 2,
    featured: false,
    badge: "🏆 晉級台灣決賽",
    tech: ["Rust", "Algorithms", "WebAssembly", "Data Structures"],
    repoUrl: "https://github.com/archie0732/2025-icpc-practice",
  },
  {
    id: "aicup-2025-aortic-valve",
    title: "AICUP 2025 - Aortic Valve Detection",
    description: "AI CUP 2025 秋季賽「電腦斷層心臟肌肉影像分割競賽 II — 主動脈瓣物件偵測」深度學習模型訓練與資料增強方案。",
    category: "cv",
    stars: 2,
    featured: false,
    tech: ["Python", "PyTorch", "Computer Vision", "Medical Imaging", "YOLO"],
    repoUrl: "https://github.com/archie0732/AICUP-2025-Aortic-Valve-Detection",
  },
  {
    id: "r7-favors",
    title: "R7 Favors",
    description: "免後端、免資料庫的極簡個人工具與書籤庫。部署於 GitHub Pages，透過 GitHub Personal Token 動態解鎖私人機密資料。",
    category: "tools",
    featured: false,
    tech: ["JavaScript", "GitHub Pages", "Serverless", "Client-side Encryption"],
    repoUrl: "https://github.com/archie0732/r7-favors",
  },
  {
    id: "dot-art-in-code",
    title: "Dot Art In Code",
    description: "為程式碼自動插入自訂 ASCII Art 或點陣圖註解的趣味開發者工具，支援自動多語言註解包裝。",
    category: "tools",
    stars: 1,
    featured: false,
    tech: ["TypeScript", "CLI", "ASCII Art", "Developer Tool"],
    repoUrl: "https://github.com/archie0732/dot-art-in-code",
  },
  {
    id: "c-solution",
    title: "Competitive Programming Solutions",
    description: "多年演算法解題（ZeroJudge、Codeforces、LeetCode）之高效 C++ 模板與精選題解整理庫。",
    category: "cp",
    stars: 3,
    featured: false,
    tech: ["C++", "Competitive Programming", "Graph Theory", "Dynamic Programming"],
    repoUrl: "https://github.com/archie0732/c-solution",
  },
  {
    id: "kunkun-discord-bot-v2",
    title: "KunKun Discord Bot v2",
    description: "使用 Bun + TypeScript 架構完全重構之社群娛樂 Bot，支援各項趣味互動指令與即時語音播報。",
    category: "bots",
    stars: 4,
    featured: false,
    tech: ["TypeScript", "Bun", "Discord API"],
    repoUrl: "https://github.com/archie0732/kunkun-discord-bot-v2",
  },
];

export const contributions: Contribution[] = [
  {
    id: "roboflow-supervision",
    title: "roboflow / supervision",
    org: "Roboflow",
    stars: "51.3k+ ⭐",
    description: "全球領先且最廣泛使用的開源電腦視覺工具庫之一，提供簡潔高雅的物體偵測、影像追蹤、區域計數與遮罩視覺化工具。",
    role: "Open-Source Contributor",
    repoUrl: "https://github.com/roboflow/supervision",
    tags: ["Computer Vision", "Python", "Roboflow", "Global Community"],
  },
  {
    id: "alexandrie",
    title: "Smaug6739 / Alexandrie",
    org: "Alexandrie",
    stars: "2.3k+ ⭐",
    description: "開源、離線優先 (Offline-First) 的 Notion / Obsidian / Confluence 替代方案，具備進階 Markdown、團隊租戶與 S3 備份機制。",
    role: "Open-Source Contributor",
    repoUrl: "https://github.com/Smaug6739/Alexandrie",
    tags: ["Vue.js", "Markdown", "Knowledge Base", "Offline-First"],
  },
  {
    id: "ytmdesktop2",
    title: "Venipa / ytmdesktop2",
    org: "YTMDesktop",
    stars: "1,000+ ⭐",
    description: "跨平台非官方 YouTube Music 桌面用戶端，支援 Discord Rich Presence 即時狀態同調以及 Last.fm 音樂紀錄回報。",
    role: "Open-Source Contributor",
    repoUrl: "https://github.com/Venipa/ytmdesktop2",
    tags: ["TypeScript", "Electron", "Discord RPC", "Desktop Client"],
  },
  {
    id: "dpip",
    title: "ExpTechTW / DPIP",
    org: "ExpTech 台灣防災",
    stars: "Taiwan Community",
    description: "台灣民間自主發起的災防資訊整合平台 (Disaster Prevention Information Platform)，提供地震速報、氣象告警與防災資訊彙整。",
    role: "Open-Source Contributor",
    repoUrl: "https://github.com/ExpTechTW/DPIP",
    tags: ["Taiwan Open Source", "Disaster Alert", "Public Good", "Open Data"],
  },
  {
    id: "fish-short-drama",
    title: "fish-es / fish-short-drama-platform",
    org: "fish-es",
    stars: "Open Source",
    description: "現代化短劇影音串流平台開源系統，具備高並發排隊串流與多端適應介面。",
    role: "Open-Source Contributor",
    repoUrl: "https://github.com/fish-es/fish-short-drama-platform",
    tags: ["TypeScript", "Streaming", "Video Platform"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "aicup",
    year: "2025 / 2026",
    title: "教育部人工智慧競賽 (AI CUP)",
    award: "Honorable Mention (優等 / 佳作)",
    category: "competition",
  },
  {
    id: "topc-2024",
    year: "2024",
    title: "Taiwan Online Programming Contest (TOPC)",
    award: "全國大賽 績優參賽",
    category: "competition",
  },
  {
    id: "icpc-regional",
    year: "2025 & 2026",
    title: "ICPC Regional Qualifier (台灣區預選賽)",
    award: "連年晉級台灣決賽",
    category: "competition",
  },
  {
    id: "pu-contest-2026",
    year: "2026",
    title: "靜宜大學校園程式設計競賽",
    award: "亞軍 (2nd Place Silver)",
    category: "competition",
  },
  {
    id: "pu-contest-2025",
    year: "2025",
    title: "靜宜大學校園程式設計競賽",
    award: "季軍 (3rd Place Bronze)",
    category: "competition",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "程式語言 (Languages)",
    skills: [
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Rust" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "Java" },
      { name: "Kotlin" },
      { name: "C#" },
      { name: "Dart" },
    ],
  },
  {
    category: "AI & 研究 (AI / RAG / Vision)",
    skills: [
      { name: "RAG 檢索增強生成" },
      { name: "Tool-Augmented Gen (TAG)" },
      { name: "Multi-Agent Systems" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "LangChain" },
      { name: "Vector Database" },
      { name: "LLM Fine-tuning" },
    ],
  },
  {
    category: "全端與後端 (Full-Stack / Backend)",
    skills: [
      { name: "Bun" },
      { name: "Next.js" },
      { name: "React" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
  },
  {
    category: "系統與開發工具 (DevOps & Tools)",
    skills: [
      { name: "Docker" },
      { name: "Linux / WSL2" },
      { name: "Git & GitHub Actions" },
      { name: "Discord API" },
      { name: "Web Scraping" },
      { name: "Cloudflare" },
    ],
  },
];

export const easterEgg = {
  title: "新宿對決（41 秒）",
  badge: "Jujutsu Kaisen Easter Egg",
  content: [
    "「茈」發動前的 41 秒內，新宿再次響起了五條悟的吟唱——",
    "「九綱、偏光、烏與聲明、表里之間……」",
    "宿儺明白，自己再也沒有任何機會阻止「茈」的誕生了。",
    "無限制的虛式如同核爆一般，在新宿亮起沖天的光芒。魔虛羅的輪盤，亦在「茈」的洪流中灰飛煙滅。",
    "日下部的聲音裡，帶著壓抑不住的狂喜。",
    "虎杖則呆呆地望著螢幕，滿臉不可置信。",
    "「也就是說……」",
    "「沒錯。」",
    "「是五條悟贏了。」",
    "最強的戰績，銘刻於新宿。",
  ],
};
