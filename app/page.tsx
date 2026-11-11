import Image from "next/image";
import Link from "next/link";

const building = [
  {
    name: "Remi",
    blurb: "Tracking expenses should be as easy as speaking",
    href: "https://www.getremiapp.com/",
  },
  {
    name: "Relynt",
    blurb:
      "Write-action firewall that evaluates AI agent requests against declarative policies in under 40ms",
    href: "https://relynt.vercel.app/",
    logo: "/logos/relynt.svg",
  },
  {
    name: "Sendleaf",
    blurb: "An AI paralegal for immigration law firms",
    href: "https://www.sendleaf.co/",
    logo: "/logos/sendleaf.png",
  },
  {
    name: "Pilcrow",
    blurb:
      "A Mac menu-bar app that transcribes your calls on-device and writes the summary and action items when they end",
    href: "https://pilcrownotes.com/",
    logo: "/logos/pilcrow.svg",
  },
  {
    name: "Framer Export",
    blurb: "Exports published Framer sites to private GitHub repositories and self-hostable ZIP files",
    href: "https://www.framerextract.com/",
  },
  {
    name: "AutoFoundry",
    blurb:
      "An autonomous company factory run by agents that find demand, start companies, fund what works and kill what doesn't",
    href: "https://foundry-p2jr2103s9ve.vercel.app/",
  },
];

const work = [
  { company: "TopMarksPrep", role: "Founding Engineer", date: "2026-Present", logo: "/logos/topmarksprep.png" },
  { company: "Audrey", role: "Founder", date: "2025-Present" },
  { company: "Morgan Stanley", role: "Software Engineer Intern", date: "2025", logo: "/logos/morgan-stanley.png" },
  { company: "LunchBox", role: "Co-Founder", date: "2025" },
  { company: "Amazon", role: "Software Engineer Intern", date: "2024", logo: "/logos/amazon.png" },
  { company: "Sponsors For Educational Opportunities", role: "Tech Developer Intern", date: "2024", logo: "/logos/seo.png" },
];

const elsewhere = [
  { label: "GitHub", handle: "Felomondi", href: "https://github.com/Felomondi", logo: "/logos/github.svg" },
  { label: "LinkedIn", handle: "felomondi", href: "https://www.linkedin.com/in/felomondi/", logo: "/logos/linkedin.svg" },
  { label: "Email", handle: "felomondi2@gmail.com", href: "mailto:felomondi2@gmail.com", logo: "/logos/mail.svg" },
];

function Logo({ src, name, dark, bare }: { src?: string; name: string; dark?: boolean; bare?: boolean }) {
  if (!src) {
    return (
      <span className={dark ? "logo logo-dark" : "logo"} aria-hidden="true">
        {name[0]}
      </span>
    );
  }
  return (
    <span className={bare ? "logo logo-bare" : "logo logo-img"} aria-hidden="true">
      <Image src={src} alt="" width={16} height={16} unoptimized />
    </span>
  );
}

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;
const external = { target: "_blank", rel: "noopener noreferrer" };

export default function HomePage() {
  return (
    <div className="col">
      <section className="intro" data-enter style={delay(1)}>
        <h1 className="hero">
          Hi 👋🏾 My name is{" "}
          <a href="https://www.linkedin.com/in/felomondi/" {...external}>
            Felix Omondi
          </a>
          , and I&apos;m a software developer and recent graduate of{" "}
          <a href="https://www.vassar.edu/" {...external}>
            Vassar College
          </a>{" "}
          where I studied Computer Science and Mathematics
        </h1>
        <div className="bio">
          <p>
            I like building across the full stack, in the places where systems design, clean
            interfaces, and AI tooling all meet.
          </p>
          <p>
            Right now I&apos;m the founding engineer at TopMarksPrep, shipping production AI
            features end to end. I&apos;m also building Audrey, a stealth project on agent safety
            and control for voice agents. Lately I&apos;ve been building{" "}
            <a href="https://www.getremiapp.com/" {...external}>
              Remi
            </a>
            ,{" "}
            <a href="https://relynt.vercel.app/" {...external}>
              Relynt
            </a>
            ,{" "}
            <a href="https://pilcrownotes.com/" {...external}>
              Pilcrow
            </a>{" "}
            and{" "}
            <a href="https://www.sendleaf.co/" {...external}>
              Sendleaf
            </a>
            . Before that I was a software engineer intern at Morgan Stanley and Amazon.
          </p>
          <p>
            I&apos;m driven by building software that feels right and helps people get real things
            done.
          </p>
        </div>
      </section>

      <section className="section" data-enter style={delay(2)}>
        <h2 className="label">Building</h2>
        <div>
          <ul className="list">
            {building.map((p) => (
              <li key={p.name}>
                <a href={p.href} {...external} className="row">
                  <Logo src={p.logo} name={p.name} dark />
                  <span className="name">{p.name}</span>
                  <span className="role">{p.blurb}</span>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link href="/projects" className="more">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section" data-enter style={delay(3)}>
        <h2 className="label">Work</h2>
        <div>
          <ul className="list">
            {work.map((w) => (
              <li key={`${w.company}-${w.role}`}>
                <Link href="/experience" className="row">
                  <Logo src={w.logo} name={w.company} />
                  <span className="name">{w.company}</span>
                  <span className="role">{w.role}</span>
                  <span className="num">{w.date}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/experience" className="more">
            Full experience <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section" data-enter style={delay(4)}>
        <h2 className="label">Education</h2>
        <div>
          <ul className="list">
            <li>
              <a href="https://www.vassar.edu/" {...external} className="row">
                <Logo src="/logos/vassar.png" name="Vassar College" />
                <span className="name">Vassar College</span>
                <span className="role">B.A. Computer Science &amp; Mathematics</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" data-enter style={delay(5)}>
        <h2 className="label">Elsewhere</h2>
        <div>
          <ul className="list">
            {elsewhere.map((s) => (
              <li key={s.label}>
                <a href={s.href} {...external} className="row row-link" aria-label={`${s.label}: ${s.handle}`}>
                  <Logo src={s.logo} name={s.label} bare />
                  <span className="role handle">{s.handle}</span>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
