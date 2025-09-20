import Link from "next/link";

export default function Products() {
  return (
    <section className="page">
      <h1>제품/프로젝트</h1>
      <div className="cards">
        <Product
          name="닥터필리스 | AI 대입논술 첨삭"
          desc="즉시 피드백과 전문가 리포트를 결합한 학습 서비스."
          url="https://dr-phyllis.com"   // 실제 주소로 교체
          tag="Education · Writing"
        />
        <Product
          name="감정형 AGI |  연구"
          desc="감성·이성의 파동을 맞추는 인간친화형 에이전트."
          url="#" // 공개 전이라면 '#'
          tag="Research"
        />
      </div>
    </section>
  );
}

function Product({name, desc, url, tag}:{name:string; desc:string; url:string; tag:string}) {
  return (
    <a className="card-link" href={url} target="_blank" rel="noreferrer">
      <div className="card">
        <div className="tag">{tag}</div>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}