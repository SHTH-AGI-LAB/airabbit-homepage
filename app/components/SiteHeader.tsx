import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="home__nav">
      <Link href="/" className="home__brand" aria-label="홈으로 이동">
        <img src="/airabbit-logo.png" alt="AIrabbit" width={40} height={40} />
        <span>AIrabbit</span>
      </Link>

        <nav className="home__links">
        <Link href="/products">제품</Link>
        <Link href="/research">아카이브</Link>
        <Link href="/taehwa">태하</Link>
        <Link href="/team">팀</Link>
        <Link href="/contact">문의</Link>
      </nav>
    </header>
  );
}