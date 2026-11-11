import Link from "next/link";

type Project = {
  title: string;
  slug: string | null;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  liveLabel?: string;
  hasDetailPage: boolean;
};

const projects: Project[] = [
  {
    title: "Remi",
    slug: null,
    category: "voice · fintech",
    description: "Tracking expenses should be as easy as speaking",
    tags: ["ios", "voice recognition", "ai"],
    githubUrl: null,
    liveUrl: "https://www.getremiapp.com/",
    liveLabel: "Website",
    hasDetailPage: false,
  },
  {
    title: "Relynt",
    slug: null,
    category: "ai infrastructure",
    description:
      "Write-action firewall that evaluates AI agent requests against declarative policies in under 40ms, returning allow, block, or escalate decisions before execution.",
    tags: ["typescript", "python", "fastapi", "tailwind css", "supabase", "openai"],
    githubUrl: null,
    liveUrl: "https://relynt.vercel.app/",
    hasDetailPage: false,
  },
  {
    title: "Sendleaf",
    slug: null,
    category: "legal · ai",
    description:
      "An AI paralegal for immigration law firms.",
    tags: ["ai", "legal tech"],
    githubUrl: null,
    liveUrl: "https://www.sendleaf.co/",
    liveLabel: "Website",
    hasDetailPage: false,
  },
  {
    title: "Pilcrow",
    slug: null,
    category: "macos · productivity",
    description:
      "A Mac menu-bar app that transcribes your calls on-device and writes the summary and action items when they end. Nothing leaves your computer.",
    tags: ["macos", "on-device ai", "apple intelligence"],
    githubUrl: null,
    liveUrl: "https://pilcrownotes.com/",
    liveLabel: "Website",
    hasDetailPage: false,
  },
  {
    title: "Framer Export",
    slug: null,
    category: "developer tool",
    description:
      "Exports published Framer sites to private GitHub repositories and self-hostable ZIP files.",
    tags: ["next.js", "typescript", "github oauth", "web extraction"],
    githubUrl: null,
    liveUrl: "https://www.framerextract.com/",
    hasDetailPage: false,
  },
  {
    title: "AutoFoundry",
    slug: null,
    category: "ai agents · hackathon",
    description:
      "An autonomous company factory run by agents. They find demand, start companies, fund what works and kill what doesn't. Built with Mateo Pedro at the Naïve hackathon.",
    tags: ["next.js", "typescript", "postgres", "naïve sdk"],
    githubUrl: "https://github.com/MateoPedro/autofoundry",
    liveUrl: "https://foundry-p2jr2103s9ve.vercel.app/",
    hasDetailPage: false,
  },
  {
    title: "CoTeacher AI",
    slug: "coteacher-ai",
    category: "ai · full-stack",
    description:
      "Full-stack RAG platform: instructors upload course materials, students chat with a course-specific AI. Multi-role auth, vector search, streaming responses.",
    tags: ["next.js", "typescript", "supabase", "openai"],
    githubUrl: null,
    liveUrl: null,
    hasDetailPage: true,
  },
  {
    title: "SlidesDesk",
    slug: "slidesdesk",
    category: "ai tooling",
    description:
      "Turns long briefs into structured presentation outlines using AI. FastAPI backend with Pydantic validation, React frontend with inline editing.",
    tags: ["python", "fastapi", "react", "openai"],
    githubUrl: "https://github.com/Felomondi/slidesdeck-frontend",
    liveUrl: "https://slidesdeck.vercel.app/",
    hasDetailPage: true,
  },
];

function ProjectLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] text-[var(--text-secondary)] hover:border-[var(--text)] hover:text-[var(--text)] transition-colors";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label} <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="col page" data-enter style={{ "--i": 1 } as React.CSSProperties}>
      <h1 className="page-title">Projects</h1>
      <p className="lede">Things I&apos;ve built: full-stack systems, AI tooling, and product interfaces.</p>

      <div className="mt-10 space-y-7">
        {projects.map((p) => (
          <article key={p.title}>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-medium text-[var(--text)]">{p.title}</h2>
              <span className="shrink-0 font-mono text-xs text-[var(--text-muted)]">
                {p.category}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-snug">
              {p.description}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="font-mono text-xs text-[var(--text-muted)]">
                {p.tags.join(" · ")}
              </p>

              {(p.liveUrl || p.githubUrl || (p.hasDetailPage && p.slug)) && (
                <div className="flex flex-wrap gap-1.5">
                  {p.liveUrl && (
                    <ProjectLink href={p.liveUrl} label={p.liveLabel ?? "Live demo"} external />
                  )}
                  {p.githubUrl && (
                    <ProjectLink href={p.githubUrl} label="Source" external />
                  )}
                  {p.hasDetailPage && p.slug && (
                    <ProjectLink href={`/projects/${p.slug}`} label="Case study" />
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
