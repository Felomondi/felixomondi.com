import Link from "next/link";

const projectDetails: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    githubUrl: string | null;
    liveUrl: string | null;
    features: string[];
    challenges: string[];
    techStack: {
      frontend?: string[];
      backend?: string[];
      database?: string[];
      infrastructure?: string[];
    };
  }
> = {
  "coteacher-ai": {
    title: "CoTeacher AI",
    description: "A full-stack platform where instructors upload course materials and students chat with a course-specific AI.",
    longDescription: "CoTeacher AI is an intelligent course assistant platform that leverages Retrieval-Augmented Generation (RAG) to provide students with personalized, course-specific AI tutoring. The platform enables instructors to upload various course materials (PDFs, DOCX, PPTX) which are then processed, chunked, and embedded using OpenAI's API. Students can interact with a ChatGPT-style interface that answers questions based on the uploaded course content, ensuring accurate and contextually relevant responses.",
    tags: ["next.js", "typescript", "tailwind css", "supabase", "postgres", "rag", "openai api", "vercel", "node.js"],
    githubUrl: null,
    liveUrl: null,
    features: [
      "Multi-role authentication system (owner/TA/student) with role-based access control",
      "Document upload and processing pipeline supporting PDF, DOCX, and PPTX formats",
      "Server-side RAG implementation with vector embeddings and semantic search",
      "Per-course vector database isolation for accurate, course-specific responses",
      "ChatGPT-style UI with conversation history and integrity guardrails",
      "Real-time chat interface with streaming responses",
      "File management system with Supabase storage integration",
    ],
    challenges: [
      "Implementing efficient chunking strategies for different document types while preserving context",
      "Designing a scalable vector search system that maintains per-course data isolation",
      "Balancing response accuracy with response time in the RAG pipeline",
      "Creating an intuitive UI that handles complex document structures and long conversations",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      backend: ["Node.js", "Next.js API Routes", "OpenAI API"],
      database: ["PostgreSQL", "Supabase", "Vector Embeddings"],
      infrastructure: ["Vercel", "Supabase Storage"],
    },
  },
  slidesdesk: {
    title: "SlidesDesk",
    description: "A web app that turns long, free-form briefs into structured presentation outlines using AI.",
    longDescription: "SlidesDesk is an AI-powered presentation generator that transforms unstructured text briefs into well-organized presentation outlines. The application uses OpenAI's API to analyze input text and generate structured slides with titles, talking points, visual suggestions, and speaker notes. Users can interactively edit, refine, and generate variations of their presentations.",
    tags: ["python", "tailwind css", "typescript", "fastapi", "javascript", "openai api"],
    githubUrl: "https://github.com/Felomondi/slidesdeck-frontend",
    liveUrl: "https://slidesdeck.vercel.app/",
    features: [
      "AI-powered brief-to-outline conversion using OpenAI GPT models",
      "FastAPI backend with Pydantic-validated JSON outputs and error handling",
      "Interactive slide editor with inline editing capabilities",
      "Generate variations feature to compare 2-3 alternative outline approaches",
      "Progress indicator showing presentation completion status",
      "Docker containerization for easy deployment",
    ],
    challenges: [
      "Ensuring consistent JSON structure from OpenAI API responses using Pydantic validation",
      "Implementing graceful fallbacks when API responses don't match expected format",
      "Creating an intuitive editing experience that maintains presentation structure",
      "Optimizing API calls to reduce costs while maintaining response quality",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Python", "FastAPI", "Pydantic", "OpenAI API"],
      infrastructure: ["Docker", "Railway", "Vercel"],
    },
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="col page">
        <h1 className="page-title">Project not found</h1>
        <Link href="/projects" className="mt-4 inline-block text-[var(--text-secondary)] inline-link">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="col page" data-enter style={{ "--i": 1 } as React.CSSProperties}>
      <h1 className="page-title">
        <Link href="/projects" className="crumb">Projects</Link>
        <span className="crumb">/</span>
        {project.title}
      </h1>
      <p className="lede">{project.description}</p>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
              Source code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
              Live demo
            </a>
          )}
        </div>
      )}

      <hr className="my-12 border-[var(--border)]" />

      <div className="space-y-10 text-sm">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-4">overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">{project.longDescription}</p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-4">tech stack</h2>
          <div className="space-y-2 text-[var(--text-secondary)]">
            {Object.entries(project.techStack).map(([category, items]) =>
              items ? (
                <p key={category}>
                  <span className="capitalize text-[var(--text)]">{category}</span>: {items.join(", ")}
                </p>
              ) : null
            )}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-4">features</h2>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-4">challenges</h2>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-xs text-[var(--text-muted)]">
          {project.tags.join(" · ")}
        </p>
      </div>
    </div>
  );
}
