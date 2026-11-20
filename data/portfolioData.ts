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
  award?: string;
  abstracts: {
    zh: string;
    en: string;
    ja: string;
  };
  tags: string[];
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
}

export interface SelfProject {
  id: string;
  title: string;
  description: string;
  category: "ai" | "cv" | "bots" | "tools" | "cp";
  stars?: number;
  featured: boolean;
  badge: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface Contribution {
  id: string;
  title: string;
  org: string;
  repoUrl: string;
  projectDescription: string;
  myContribution: string;
  prNumber: string;
  prUrl: string;
  prStatus: "merged" | "in_review";
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
  chineseName: "許育祁",
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
    { label: "AI Agent 開源星數", value: "800+ Stars" },
    { label: "研討會第一作者論文", value: "2 篇（1 篇最佳論文）" },
    { label: "NPM 套件累計下載量", value: "20,000+ 次" },
    { label: "Discord Bot 服務伺服器", value: "200+ 個" },
    { label: "開源專案實質貢獻 PR", value: "多項已合併/審查" },
    { label: "ICPC & AI 競賽殊榮", value: "5+ 項榮譽" },
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
    authors: ["Yu-Chi Hsu (許育祁)", "Chun-Fang Pan", "Chun-Ting Wu", "Yi-Wen Lin", "Meng-Yen Hsieh"],
    firstAuthor: true,
    tags: ["Visual Recognition", "Tool-Augmented Generation (TAG)", "Computer Vision", "Dietary System", "Multimodal AI"],
    paperUrl: "https://tcse2026.seat.org.tw/%E8%AD%B0%E7%A8%8B/%E8%AB%96%E6%96%87%E8%AD%B0%E7%A8%8B",
    pdfUrl: "https://drive.google.com/file/d/18LsUlJ8XMgFLsip6dBTe1_AYWZG5pk76/view?usp=sharing",
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
    authors: ["Yu-Chi Hsu (許育祁)", "Meng-Yen Hsieh"],
    firstAuthor: true,
    award: "🏆 最佳論文獎 Best Paper Award",
    tags: ["RAG Retrieval Policy", "Version-Matching", "Evidence Selection", "Empirical Evaluation", "NLP"],
    paperUrl: "https://tanet2026.ntunhs.edu.tw/",
    pdfUrl: "https://drive.google.com/file/d/1o2k8XmToOIhGczNtFvBLSrEWdUUpyVkv/view?usp=sharing",
    codeUrl: "https://github.com/archie0732/healthy-diet-ai-agent",
    abstracts: {
      zh: "針對健康指引新舊版本並存的證據選取問題，提出依查詢意圖啟用版本配對的 RAG 檢索策略。在保留測試集的 20 題歷史比較查詢中，將必要證據 Recall@3 由 0.100 提升至 0.525，並以消融實驗驗證版本配對的貢獻。",
      en: "To address the evidence selection issue caused by the coexistence of old and new versions of health guidelines, we propose a query-intent-driven version-matching RAG retrieval strategy. Among 20 historical comparative queries in the reserved test set, this approach improves the Recall@3 of necessary evidence from 0.100 to 0.525, and validates the contribution of version matching through ablation experiments.",
      ja: "新旧バージョンの健康ガイドラインが混在する状況におけるエビデンス選択の課題に対し、クエリ意図に基づくバージョンマッチング型RAG検索戦略を提案する。テストセットに残された20件の過去の比較クエリにおいて、必要とされるエビデンスのRecall@3を0.100から0.525へと向上させ、さらにアブレーション実験を通じてバージョンマッチングの貢献度を検証した。",
    },
  },
  {
    id: "mtap-under-review",
    title: "VerHealth Agent: A Multimodal Framework for Personalized Dietary Management with Conditional Version-Aware Retrieval",
    conference: "Multimedia Tools and Applications（Springer 期刊）",
    conferenceBadge: "MTAP · 審查中 Under Review",
    role: "第二作者 (Second Author)",
    year: "2026",
    authors: ["Meng-Yen Hsieh", "Yu-Chi Hsu (許育祁)"],
    firstAuthor: false,
    tags: ["Multimodal AI", "Visual Recognition", "Version-Aware RAG", "Dietary Management", "Journal Submission"],
    abstracts: {
      zh: "本期刊稿件整合前兩篇研討會論文，將視覺辨識、工具增強生成與條件式版本感知檢索整合為完整的個人化飲食管理多模態框架。目前審查中。",
      en: "This journal submission integrates the two conference papers above into a unified multimodal framework for personalized dietary management, combining visual recognition, tool-augmented generation, and conditional version-aware retrieval. Currently under review.",
      ja: "本論文は上記2本の会議論文を統合し、画像認識・ツール拡張生成・条件付きバージョン認識検索を組み合わせた、個人向け食事管理のためのマルチモーダルフレームワークを提案する。現在査読中。",
    },
  },
];

export const selfProjects: SelfProject[] = [
  {
    id: "healthy-diet-ai-agent",
    title: "Healthy Diet AI Agent",
    description: "基於 Bun + TypeScript 的智慧營養問答與影像分析後端，整合本地 LLM (gemma4-e4b) 與 Google API，具備 Version-Aware RAG 知識庫更新檢索、MCP 聯網與對話壓縮功能，GitHub 累計突破 800 Stars。",
    category: "ai",
    stars: 800,
    featured: true,
    badge: "⭐ 800+ GitHub Stars",
    tech: ["TypeScript", "Bun", "RAG", "LangChain", "Vector DB", "Llama.cpp", "MCP"],
    repoUrl: "https://github.com/archie0732/healthy-diet-ai-agent",
  },
  {
    id: "manga-discord-bot",
    title: "Manga Discord Bot",
    description: "服務超過 200+ Discord 伺服器之漫畫更新推播與查詢機器人，支援多源管道即時爬蟲解析、自動排程推播與 Docker 自動化更新部屬。",
    category: "bots",
    featured: true,
    badge: "🤖 200+ 伺服器活躍使用",
    tech: ["TypeScript", "Discord.js", "Bun.ts", "Web Crawler", "Docker", "Automation"],
    repoUrl: "https://github.com/archie0732/manga-discord-bot",
  },
  {
    id: "pixiv-crawler",
    title: "@archie0732/pixivcrawler & NPM Tools",
    description: "為解決社群對 API 串接重複開發問題所發布之 NPM 插件與非同步爬蟲庫，包含多圖下載與完整型別定義，累計下載次數超過 20,000 次。",
    category: "tools",
    featured: true,
    badge: "📦 NPM 20,000+ 下載",
    tech: ["TypeScript", "NPM Package", "Async/Await", "RESTful API"],
    repoUrl: "https://github.com/archie0732/pixiv-crawler",
    demoUrl: "https://www.npmjs.com/~archie0732",
  },
  {
    id: "coding-bot-v2",
    title: "Coding Bot — 程式競技訓練機器人",
    description: "專為程式競技社團設計之訓練助手，支援 LeetCode / Codeforces 出題、模擬競賽計時、榜單系統與自動批改評測 (Code Judge)，使用者上傳 Google Drive 即可自動化批測。",
    category: "cp",
    featured: true,
    badge: "💻 社團競技訓練與評測機器人",
    tech: ["TypeScript", "Discord API", "Crawler", "Code Judge", "Reverse Proxy"],
    repoUrl: "https://github.com/archie0732/coding-bot-v2",
  },
  {
    id: "ta-auto-script",
    title: "TA Auto Script — 助教登記自動化系統",
    description: "解決學校諮詢手動登記效率低下問題，先以 OCR 辨識學生簽名學號與班級（失敗則由 Gemini 視覺輔助），經校方同意後批量自動化填入學校系統，現已提供校內多位助教使用。",
    category: "tools",
    featured: true,
    badge: "📝 靜宜校內多位 TA 實際使用",
    tech: ["JavaScript", "OCR", "Gemini API", "Automation", "Workflow"],
    repoUrl: "https://github.com/archie0732/TA-auto-script",
  },
  {
    id: "albion-auto-fishing",
    title: "Albion Auto Fishing",
    description: "基於電腦視覺圖像比對技術打造之 Albion Online 自動化釣魚輔助工具，能準確感測水中浮標微幅震動波形與收線拉竿時機。",
    category: "cv",
    featured: true,
    badge: "🎣 電腦視覺即時辨識",
    tech: ["Python", "OpenCV", "AutoHotkey", "Image Processing", "Automation"],
    repoUrl: "https://github.com/archie0732/albion-auto-fishing",
  },
  {
    id: "aicup-2025-aortic-valve",
    title: "AICUP 2025 - Aortic Valve Detection",
    description: "AI CUP 2025 電腦斷層心臟肌肉影像分割競賽「主動脈瓣物件偵測」獲教育部佳作（前 3.7%），負責 YOLOv8 到 YOLO11 的對比實驗、資料前處理增強與模型訓練管道。",
    category: "cv",
    featured: false,
    badge: "🏅 AI CUP 教育部佳作（前 3.7%）",
    tech: ["Python", "PyTorch", "Computer Vision", "Medical Imaging", "YOLOv8/YOLO11"],
    repoUrl: "https://github.com/archie0732/AICUP-2025-Aortic-Valve-Detection",
  },
  {
    id: "2025-icpc-practice",
    title: "2025 ICPC Practice (Rust & Web)",
    description: "演算法競賽練習題目庫與 Rust 實作解法，搭配網頁版視覺化互動練習介面，成功帶領隊伍連續晉級 ICPC 台灣決賽。",
    category: "cp",
    featured: false,
    badge: "🏆 晉級 ICPC 台灣決賽",
    tech: ["Rust", "Algorithms", "WebAssembly", "Data Structures"],
    repoUrl: "https://github.com/archie0732/2025-icpc-practice",
  },
  {
    id: "r7-favors",
    title: "R7 Favors",
    description: "免後端、免資料庫的極簡個人工具與書籤庫。部署於 GitHub Pages，透過 GitHub Personal Token 動態解鎖私人機密資料。",
    category: "tools",
    featured: false,
    badge: "⚡ 極簡無後端個人工具庫",
    tech: ["JavaScript", "GitHub Pages", "Serverless", "Client-side Encryption"],
    repoUrl: "https://github.com/archie0732/r7-favors",
  },
  {
    id: "c-solution",
    title: "Competitive Programming Solutions",
    description: "多年演算法解題（ZeroJudge、Codeforces、LeetCode、CPE）之高效 C++ 模板與精選題解整理庫，提供學弟妹競賽與畢業檢定練習。",
    category: "cp",
    featured: false,
    badge: "📚 演算法與 CPE 解題庫",
    tech: ["C++", "Algorithms", "Graph Theory", "Dynamic Programming"],
    repoUrl: "https://github.com/archie0732/c-solution",
  },
  {
    id: "dot-art-in-code",
    title: "Dot Art In Code",
    description: "為程式碼自動插入自訂 ASCII Art 或點陣圖註解的趣味開發者工具，支援自動多語言註解包裝。",
    category: "tools",
    featured: false,
    badge: "🎨 ASCII 藝術代碼註解器",
    tech: ["TypeScript", "CLI", "ASCII Art", "Developer Tool"],
    repoUrl: "https://github.com/archie0732/dot-art-in-code",
  },
  {
    id: "kunkun-discord-bot-v2",
    title: "KunKun Discord Bot v2",
    description: "使用 Bun + TypeScript 架構完全重構之社群娛樂 Bot，支援各項趣味互動指令與即時語音播報。",
    category: "bots",
    featured: false,
    badge: "⚡ Bun + TS 高性能 Bot",
    tech: ["TypeScript", "Bun", "Discord API"],
    repoUrl: "https://github.com/archie0732/kunkun-discord-bot-v2",
  },
];

export const contributions: Contribution[] = [
  {
    id: "roboflow-supervision",
    title: "roboflow / supervision",
    org: "Roboflow",
    repoUrl: "https://github.com/roboflow/supervision",
    projectDescription: "全球最廣泛使用的開源電腦視覺工具庫之一（51k+ Stars），提供物件偵測、影像追蹤與標註評估工具。",
    myContribution: "修復資料集切分未驗證比例的缺陷並補上單元測試，確保資料集分割邏輯的嚴謹性與邊界條件處理。",
    prNumber: "PR #2611",
    prUrl: "https://github.com/roboflow/supervision/pull/2611",
    prStatus: "merged",
    tags: ["Computer Vision", "Python", "Roboflow", "Unit Tests", "Dataset Split"],
  },
  {
    id: "dpip",
    title: "ExpTechTW / DPIP",
    org: "ExpTech 探索科技",
    repoUrl: "https://github.com/ExpTechTW/DPIP",
    projectDescription: "台灣民間自主發起的災防資訊整合平台 (Disaster Prevention Information Platform)，提供地震即時速報與國家告警彙整。",
    myContribution: "實作地震預警震度語音播報的無障礙功能，讓視障與特定使用情境下的使用者能在地震來臨時第一時間聽取震度通知。",
    prNumber: "PR #546, #568",
    prUrl: "https://github.com/ExpTechTW/DPIP/pull/546",
    prStatus: "merged",
    tags: ["Taiwan Open Source", "Disaster Alert", "Accessibility", "TTS Voice Alert"],
  },
  {
    id: "alexandrie",
    title: "Smaug6739 / Alexandrie",
    org: "Alexandrie",
    repoUrl: "https://github.com/Smaug6739/Alexandrie",
    projectDescription: "開源、離線優先 (Offline-First) 的 Notion / Obsidian / Confluence 替代方案，具備進階 Markdown 與團隊多租戶支援。",
    myContribution: "完整負責繁體中文與簡體中文在地化（Localization），翻譯並校對多達 32 個國際化語言檔案，大幅改善中文使用者的介面體驗。",
    prNumber: "PR #694",
    prUrl: "https://github.com/Smaug6739/Alexandrie/pull/694",
    prStatus: "merged",
    tags: ["Vue.js", "i18n Localization", "Markdown", "Knowledge Base"],
  },
  {
    id: "ytmdesktop2",
    title: "Venipa / ytmdesktop2",
    org: "YTMDesktop",
    repoUrl: "https://github.com/Venipa/ytmdesktop2",
    projectDescription: "跨平台非官方 YouTube Music 桌面用戶端，支援 Discord Rich Presence 與 Last.fm 音樂同調。",
    myContribution: "實作桌面浮窗歌詞功能（Floating Desktop Lyrics），提供可置頂穿透的歌詞懸浮視窗與流暢的時間軸滾動。",
    prNumber: "PR #255",
    prUrl: "https://github.com/Venipa/ytmdesktop2/pull/255",
    prStatus: "in_review",
    tags: ["TypeScript", "Electron", "Desktop UI", "Floating Window", "Lyrics"],
  },
  {
    id: "fish-short-drama",
    title: "fish-es / fish-short-drama-platform",
    org: "fish-es",
    repoUrl: "https://github.com/fish-es/fish-short-drama-platform",
    projectDescription: "現代化短劇影音串流平台開源系統，具備高並發排隊串流與多角色後台管理。",
    myContribution: "負責修復多位管理員情境下金鑰生成與保護機制之安全性缺陷，強化金鑰隔離保護與權限檢驗。",
    prNumber: "PR #75",
    prUrl: "https://github.com/fish-es/fish-short-drama-platform/pull/75",
    prStatus: "merged",
    tags: ["TypeScript", "Security", "Key Protection", "Backend API"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "tanet-2026-best-paper",
    year: "2026",
    title: "TANET 2026 台灣網際網路研討會",
    award: "最佳論文獎 (Best Paper Award) · 第一作者",
    category: "academic",
  },
  {
    id: "aicup",
    year: "2025",
    title: "教育部人工智慧競賽 (AI CUP 2025)",
    award: "教育部佳作 · 前 3.7%",
    category: "competition",
  },
  {
    id: "topc-2024",
    year: "2024",
    title: "Taiwan Online Programming Contest (TOPC 2024)",
    award: "銅牌 (Bronze)",
    category: "competition",
  },
  {
    id: "icpc-regional",
    year: "2025 & 2026",
    title: "ICPC Regional Qualifier (台灣區預選賽)",
    award: "連續兩屆晉級台灣決賽",
    category: "competition",
  },
  {
    id: "pu-contest-2026",
    year: "2026",
    title: "靜宜大學校園程式設計競賽 (PUPC 2026)",
    award: "銀牌 (Silver)",
    category: "competition",
  },
  {
    id: "pu-contest-2025",
    year: "2025",
    title: "靜宜大學校園程式設計競賽 (PUPC 2025)",
    award: "Honorable Mention",
    category: "competition",
  },
  {
    id: "pu-contest-2024",
    year: "2024",
    title: "靜宜大學校園程式設計競賽 (PUPC 2024)",
    award: "銅牌 (Bronze)",
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
