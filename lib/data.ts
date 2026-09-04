export type Project = {
  id: string;
  name: string;
  tagline?: string;
  dates: string;
  status: "PRODUCTION" | "ACTIVE" | "SHIPPED";
  stack: string[];
  bullets: { text: string; strong?: string[] }[];
  links: { label: string; href: string; primary?: boolean }[];
  featured?: boolean;
  loomEmbedId?: string;
};

export type Job = {
  ref: string;
  role: string;
  company: string;
  companyUrl: string;
  place: string;
  from: string;
  to: string;
  industry: string;
  bullets: { text: string; strong?: string[] }[];
};

export type Metric = { value: string; unit?: string; label: string; caption: string };

export const CONTACT = {
  email: "samuelfikadesilassie@gmail.com",
  phone: "+251941990247",
  phoneDisplay: "+251 941 990 247",
  location: "Addis Ababa, Ethiopia",
  coord: "9.03°N  38.74°E",
  timezone: "EAT · UTC+3",
  linkedin: "https://www.linkedin.com/in/samuel-fikadesilassie-444245254/",
  linkedinLabel: "samuel-fikadesilassie",
  github: "https://github.com/samObot19",
  githubLabel: "github.com/samObot19",
};

export const HEADER = {
  role: "Backend Engineer · Financial Infrastructure",
  ref: "SFL · 2026.09",
  status: "OPEN FOR NEW ENGAGEMENTS",
  updated: "2026.09.04",
};

export const HERO_TAGLINE =
  "I build the services that carry money, transactions and trust — Go banking backends at scale, and modern AI infrastructure layered on top.";

export const METRICS: Metric[] = [
  {
    value: "10,000",
    unit: "/day",
    label: "Banking users served",
    caption: "USSD banking backend at OneTap Technology",
  },
  {
    value: "80",
    unit: "+ endpoints",
    label: "Production REST API surface",
    caption: "FastAPI + async SQLAlchemy at VentureScope",
  },
  {
    value: "95",
    unit: "%",
    label: "Automated test coverage",
    caption: "Go REST APIs at Eskalate",
  },
  {
    value: "3",
    unit: "+ yrs",
    label: "Shipping production systems",
    caption: "Banking · AI · SaaS",
  },
];

export const STATUS_ITEMS: { k: string; v: string; signal?: boolean }[] = [
  { k: "Status", v: "AVAILABLE", signal: true },
  { k: "Ref", v: "SFL-2026" },
  { k: "Updated", v: "2026.09.04" },
  { k: "Timezone", v: "EAT · UTC+3" },
  { k: "Session", v: "OPEN" },
  { k: "Stack", v: "GO · PY · TS · AZURE" },
  { k: "Mode", v: "PRODUCTION" },
];

export const PROJECTS: Project[] = [
  {
    id: "venturescope",
    name: "VentureScope",
    tagline:
      "Multi-tenant SaaS platform — RAG-powered career advisor with role-based access, per-member progress tracking, and async workload isolation.",
    dates: "01 / 2026 — Present",
    status: "ACTIVE",
    stack: [
      "FastAPI",
      "async SQLAlchemy",
      "LangChain / LangGraph",
      "pgvector",
      "Celery · Redis",
      "Docker",
      "Microsoft Azure",
    ],
    bullets: [
      {
        text: "Shipped a production REST API of 80+ endpoints on FastAPI + async SQLAlchemy — patterns that translate directly to financial platforms: transactional guarantees, async I/O under load, structured error surfaces.",
        strong: ["80+ endpoints"],
      },
      {
        text: "Designed multi-tenant organization architecture with role-based access, email invitations, team-level state, and cross-member knowledge search — the same primitives fintech B2B platforms need for team accounts and permissions.",
        strong: ["Multi-tenant", "role-based access"],
      },
      {
        text: "Isolated heavy compute (embedding generation, LLM calls) behind a Celery + Redis queue, keeping the request cycle deterministic — a pattern that maps 1:1 to keeping payment paths free of long-running work.",
        strong: ["Celery + Redis queue"],
      },
      {
        text: "Built a RAG advisor on LangGraph ReAct agents and pgvector semantic search — production-grade AI infrastructure with proper retrieval, tool use, and observability.",
      },
    ],
    links: [
      { label: "WATCH DEMO", href: "https://www.loom.com/share/f83c5c06f3294dbeb7327acc5a02ac6b", primary: true },
      { label: "LIVE", href: "https://venturescope.tech/" },
    ],
    featured: true,
    loomEmbedId: "f83c5c06f3294dbeb7327acc5a02ac6b",
  },
  {
    id: "receipt-ocr",
    name: "Receipt OCR & Data Extraction API",
    dates: "06 / 2025",
    status: "SHIPPED",
    stack: ["TypeScript", "Node.js", "Apollo GraphQL", "Prisma", "PostgreSQL", "Tesseract.js", "Next.js"],
    bullets: [
      {
        text: "Structured extraction service — GraphQL API on top of Tesseract and Google Vision, with a BullMQ worker running OCR off the request path. The core pattern behind receipt-processing, invoice ingestion, and KYC document workflows.",
        strong: ["structured extraction", "off the request path"],
      },
    ],
    links: [{ label: "SOURCE", href: "https://github.com/samObot19/receipt-ocr-api" }],
  },
  {
    id: "sentiment",
    name: "Twitter Sentiment Analysis — Multi-class NLP",
    dates: "04 / 2025",
    status: "SHIPPED",
    stack: ["Python", "TensorFlow / Keras", "Scikit-learn", "NLTK", "TF-IDF", "LSTM"],
    bullets: [
      {
        text: "End-to-end classification pipeline across four labels. Compared TF-IDF Logistic Regression against an LSTM, moving accuracy from 69% to 78% — the kind of iterative modeling work that shows up in fraud scoring, transaction categorization, and risk classification.",
        strong: ["69% to 78%"],
      },
    ],
    links: [{ label: "SOURCE", href: "https://github.com/samObot19/sentiment-analysis" }],
  },
];

/* Reordered — banking role first for fintech relevance, then chronological. */
export const JOBS: Job[] = [
  {
    ref: "01",
    role: "Backend Developer",
    company: "OneTap Technology",
    companyUrl: "https://onetap.et/",
    place: "Addis Ababa",
    from: "09 / 2025",
    to: "11 / 2025",
    industry: "Digital Banking · USSD · KYC",
    bullets: [
      {
        text: "Built and ran the backend serving 10,000+ daily USSD banking users — the reliability and consistency targets that come with money moving through a system.",
        strong: ["10,000+ daily USSD banking users"],
      },
      {
        text: "Developed Go services, REST APIs and React admin dashboards for customer onboarding, KYC verification and transaction monitoring across the banking product.",
        strong: ["KYC verification", "transaction monitoring"],
      },
      {
        text: "Applied Hexagonal Architecture and clean-architecture principles across services — keeping payment-adjacent code testable and change-safe as the surface grew.",
        strong: ["Hexagonal Architecture"],
      },
      {
        text: "Collaborated across the full lifecycle — feature development, code review, debugging, testing, deployment.",
      },
    ],
  },
  {
    ref: "02",
    role: "AI / Backend Developer, Intern",
    company: "iCog Labs",
    companyUrl: "https://icog-labs.com/",
    place: "Addis Ababa",
    from: "07 / 2025",
    to: "12 / 2025",
    industry: "AI Research · Knowledge Systems",
    bullets: [
      {
        text: "Built FastAPI backend services powering AI applications managing over 1,000 knowledge graphs — concurrent, multi-tenant workflows for scalable AI processing.",
        strong: ["over 1,000 knowledge graphs"],
      },
      {
        text: "Optimized asynchronous request handling across REST APIs supporting AI-powered applications.",
      },
      {
        text: "Contributed to production AI systems with an emphasis on scalability, correctness and maintainability.",
      },
    ],
  },
  {
    ref: "03",
    role: "Backend Developer, Intern",
    company: "Eskalate",
    companyUrl: "https://www.eskalate.io/",
    place: "Addis Ababa",
    from: "09 / 2024",
    to: "10 / 2024",
    industry: "SaaS Engineering",
    bullets: [
      {
        text: "Built high-performance REST APIs in Go with JWT-based authentication.",
        strong: ["JWT-based authentication"],
      },
      {
        text: "Reached 95% automated test coverage, meaningfully increasing reliability of the service surface.",
        strong: ["95% automated test coverage"],
      },
      {
        text: "Reduced code complexity by 35% through Clean Architecture principles.",
        strong: ["35%"],
      },
    ],
  },
];

/* Reordered for fintech emphasis: Backend + Systems first, ML lower. */
export const INSTRUMENTS = [
  {
    title: "Backend",
    items: [
      "Go",
      "Nest.js / TypeScript",
      "FastAPI (Python)",
      "GraphQL",
      "REST APIs",
      "JWT / Auth",
    ],
  },
  {
    title: "Systems & Reliability",
    items: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "Hexagonal / Clean Architecture",
      "Low-Latency Systems",
      "High-Performance Computing",
    ],
  },
  {
    title: "Data & Storage",
    items: [
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "CI/CD",
      "Container orchestration",
    ],
  },
  {
    title: "AI Infrastructure",
    items: [
      "LangChain",
      "LangGraph",
      "RAG pipelines",
      "Vector embeddings",
      "Celery async workers",
      "HuggingFace",
    ],
  },
  {
    title: "Modeling",
    items: [
      "Python",
      "TensorFlow · Keras",
      "Scikit-learn",
      "NumPy · Pandas",
      "NLP",
      "Deep Learning",
    ],
  },
];

export const TRACK_RECORD = [
  {
    ref: "01",
    date: "04·2022 — 06·2026",
    title: "B.S. Computer Science and Engineering",
    body: "Adama Science and Technology University · CGPA 3.7 / 4.00. Data Structures & Algorithms, Machine Learning, Distributed Systems, Databases, Operating Systems, Software Requirements Engineering.",
    aside: "Adama, Ethiopia",
    href: undefined as string | undefined,
  },
  {
    ref: "02",
    date: "29·09·2024",
    title: "ICPC — International Collegiate Programming Contest",
    body: "Regional participant · 8 complex algorithmic problems solved under collaborative, time-pressured conditions.",
    aside: "Competitive Programming",
    href: undefined as string | undefined,
  },
  {
    ref: "03",
    date: "12·2023 — 10·2024",
    title: "Africa to Silicon Valley — Fellowship",
    body: "Rigorous training in Data Structures & Algorithms. 600+ problems solved on LeetCode and Codeforces over the fellowship year.",
    aside: "Fellowship",
    href: undefined as string | undefined,
  },
  {
    ref: "04",
    date: "Certificate",
    title: "Intro to TensorFlow for AI, ML & Deep Learning",
    body: "Coursera — foundations of TensorFlow and Keras for building, training and evaluating deep learning models.",
    aside: "Verify",
    href: "https://coursera.org/share/f60d30278531af260e901d57f69eafcd",
  },
];

/* Career trajectory sparkline data */
export const TRAJECTORY: { year: string; label: string; role: string; y: number }[] = [
  { year: "2025", label: "OneTap · Backend", role: "Go banking systems, USSD, KYC", y: 1 },
  { year: "2024", label: "Eskalate", role: "Go REST + Clean Architecture", y: 2 },
  { year: "2025", label: "Twitter Sentiment · Receipt OCR", role: "ML + full-stack services", y: 3 },
  { year: "2025", label: "iCog Labs", role: "FastAPI, 1,000+ knowledge graphs", y: 4 },
  { year: "2026", label: "VentureScope", role: "80+ endpoints, RAG, multi-tenant", y: 5 },
];
