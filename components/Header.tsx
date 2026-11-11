import Link from "next/link";
import Clock from "@/components/Clock";

export default function Header() {
  return (
    <header className="col site-header" data-enter>
      <div className="header-row">
        <div>
          <p className="title">
            <Link href="/">Felix Omondi</Link>
          </p>
          <p className="subtitle">Founding Engineer, TopMarksPrep · CS + Math @ Vassar</p>
        </div>
        <p className="clock">
          <span>San Francisco</span>
          <Clock />
        </p>
      </div>
    </header>
  );
}
