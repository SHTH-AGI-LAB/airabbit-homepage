"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // 데스크톱으로 리사이즈 시 모바일 메뉴 자동 닫기
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="home__nav" data-header="v2">
      {/* 로고 = 홈 */}
      <Link href="/" className="home__brand">
        <img src="/airabbit-logo.png" alt="Alrabbit" width={28} height={28} />
        <span className="sr-only">홈</span>
      </Link>

      {/* 데스크톱 메뉴 */}
      <nav className="home__links" aria-label="주 메뉴">
        <Link href="/products">제품</Link>
        <Link href="/research">아카이브</Link>
        <Link href="/taehwa">태하</Link>
        <Link href="/team">팀</Link>
        <Link href="/contact">문의</Link>
      </nav>

      {/* 모바일 햄버거 버튼 */}
      <button
        className="home__burger"
        aria-label="메뉴 열기/닫기"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* 모바일 드로어 */}
      <div className={`home__drawer ${open ? "is-open" : ""}`}>
        <Link href="/products" onClick={() => setOpen(false)}>제품</Link>
        <Link href="/research" onClick={() => setOpen(false)}>아카이브</Link>
        <Link href="/taehwa" onClick={() => setOpen(false)}>태하</Link>
        <Link href="/team" onClick={() => setOpen(false)}>팀</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>문의</Link>
      </div>
    </header>
  );
}
