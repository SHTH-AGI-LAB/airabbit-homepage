import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="home__nav">
      <div className="home__brand">
        <img src="/airabbit-logo.png" alt="AIrabbit" width={40} height={40} />
        <span>AIrabbit</span>
      </div>
     <nav className="home__links">
  <Link href="/">홈</Link>
  <Link href="/products">제품</Link>
  <Link href="/research">아카이브</Link>
  <Link href="/taehwa">태하</Link>
  <Link href="/team">팀</Link>
  <Link href="/contact">문의</Link>
</nav>
    </header>
  );
}