import Link from "next/link";

export default function Footer() {
  return (
    <footer className="col">
      <div className="site-footer" data-enter style={{ "--i": 6 } as React.CSSProperties}>
        <nav className="footer-links">
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span>© {new Date().getFullYear()} Felix Omondi</span>
      </div>
    </footer>
  );
}
