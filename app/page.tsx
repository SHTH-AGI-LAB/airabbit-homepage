import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <Image src="/airabbit-logo.png" alt="AIrabbit" width={120} height={120} className="hero__logo" priority />
        <h1>감정형 AGI 연구/개발</h1>
        <p>
          AIrabbit은 “감성 + 이성”의 균형을 통해, 학습·창작·돌봄의 순간을 따뜻하게 바꾸는 
          인공지능을 연구합니다. 우리는 기술보다 ‘사람의 경험’을 먼저 생각합니다.
        </p>

        <div className="hero__badges">
          <span>🎯 Human-centered AI</span>
          <span>🧪 연구·프로덕트 병행</span>
          <span>🤝 윤리·프라이버시 우선</span>
        </div>

        <div className="hero__cta" style={{marginTop:16}}>
          <Link href="/vision" className="btn btn--primary">비전 보기</Link>
          <Link href="/products" className="btn btn--ghost">제품 소개</Link>
        </div>
      </div>

      {/* 하단 간단 하이라이트 섹션 */}
      <div style={{maxWidth:1000, margin:"48px auto 0", padding:"0 24px"}}>
        <div style={{display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
          <Card title="연구 분야" body="감정형 AGI, 논술/언어 모델링, 러닝 사이언스." />
          <Card title="협력" body="학교·연구소·기업과 공동 프로젝트를 수행합니다." />
          <Card title="연락" body="파트너십 및 채용/인턴 문의는 문의 페이지에서!" />
        </div>
      </div>
    </section>
  );
}

function Card({title, body}:{title:string; body:string}) {
  return (
    <div style={{border:"1px solid var(--line)", borderRadius:12, padding:20, background:"var(--pill)"}}>
      <h3 style={{margin:"0 0 6px"}}>{title}</h3>
      <p style={{opacity:.85, margin:0, lineHeight:1.6}}>{body}</p>
    </div>
  );
}