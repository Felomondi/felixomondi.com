const experiences = [
  {
    role: "Founding Engineer",
    company: "TopMarksPrep",
    date: "Apr 2026 - Present",
    location: "Remote",
    description: {
      points: [
        "Building production AI features end-to-end on a Next.js and Node/Python stack with Anthropic Claude integration, including AI grading and practice problem generation for test prep students.",
        "Designed structured prompting and output validation pipelines that catch malformed model outputs before they reach students, including rubric-based grading calibrated against reference student responses.",
        "Own full-stack feature delivery from database schema and API design through React UI, shipping features that students rely on for high-stakes exam preparation.",
      ],
    },
    skills: ["next.js", "node", "python", "claude", "react"],
  },
  {
    role: "Founder",
    company: "Audrey",
    date: "Nov 2025 - Present",
    location: "Stealth",
    description: "Building tools around agent safety and control in production systems, starting with voice agents.",
    skills: ["agent safety", "voice agents"],
  },
  {
    role: "Software Engineer Intern",
    company: "Morgan Stanley",
    date: "Jun - Aug 2025",
    location: "New York, NY",
    description: {
      points: [
        "Built a Python lineage/telemetry tool that traced records end-to-end through the ETL data-quality pipeline, pinpointing failures to the exact stage and rule.",
        "Developed a rule-analytics service that surfaced pass/fail rates, trend deltas, and a standardized failure taxonomy, with stakeholder-ready dashboards/exports.",
        "Designed dashboards with Prometheus and Grafana to visualize process flows and rule performance, streamlining debugging.",
      ],
    },
    skills: ["python", "sql", "prometheus", "grafana", "opentelemetry"],
  },
  {
    role: "Co-Founder",
    company: "LunchBox",
    date: "Jan - Aug 2025",
    location: "",
    description: {
      points: [
        "Co-founded LunchBox, a restaurant reviewing app for recording, rating, and sharing dining experiences.",
        "Developed and implemented 7+ core features, including search, view profiles, post reviews, add restaurants, and user authentication.",
        "Utilized Firebase for data persistence and account authentication, managing 100+ user accounts securely.",
      ],
    },
    skills: ["firebase", "react", "javascript"],
  },
  {
    role: "Software Engineer Intern",
    company: "Amazon",
    date: "May - Aug 2024",
    location: "Seattle, WA",
    description: {
      points: [
        "Shipped new Android Alexa features in Java and iterated via A/B tests and performance tuning, increasing engagement with core flows by 15%.",
        "Translated Figma specs into accessible, production-quality UI; partnered with PM/design to refine interactions, ensure localization, and instrument analytics.",
        "Built reusable UI components and patterns, reducing follow-on implementation time by ~20% and improving reliability with unit/UI tests and CI checks.",
      ],
    },
    skills: ["java", "android"],
  },
  {
    role: "Tech Developer Intern",
    company: "Sponsors For Educational Opportunities",
    date: "Jun - Aug 2024",
    location: "Remote",
    description: {
      points: [
        "Built a full-stack book reviewing and rating app using SQL, Python (Flask), and React.",
        "Performed API development, integration, and systems testing.",
      ],
    },
    skills: ["python", "mysql", "react", "flask"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="col page" data-enter style={{ "--i": 1 } as React.CSSProperties}>
      <h1 className="page-title">Experience</h1>
      <p className="lede">Where I&apos;ve worked and what I&apos;ve done.</p>

      <div className="mt-14 space-y-10">
        {experiences.map((exp) => {
          const desc = exp.description;
          const isStructured = typeof desc === "object" && "points" in desc;
          const points = isStructured ? (desc as { points: string[] }).points : [];
          const intro = isStructured && "intro" in desc ? (desc as { intro?: string }).intro : undefined;

          return (
            <article key={`${exp.company}-${exp.role}`}>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h2 className="text-sm font-medium text-[var(--text)]">
                  {exp.role} <span className="font-normal text-[var(--text-secondary)]">@ {exp.company}</span>
                </h2>
                <span className="text-xs text-[var(--text-muted)] shrink-0">{exp.date}</span>
              </div>
              {exp.location && <p className="text-xs text-[var(--text-muted)] mt-0.5">{exp.location}</p>}

              <div className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                {typeof desc === "string" ? (
                  <p>{desc}</p>
                ) : (
                  <div className="space-y-1.5">
                    {intro && <p>{intro}</p>}
                    <ul className="space-y-1.5">
                      {points.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="mt-2 text-xs text-[var(--text-muted)]">
                {exp.skills.join(" · ")}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
