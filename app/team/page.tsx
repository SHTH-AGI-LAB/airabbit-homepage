export default function Team() {
  return (
    <section className="page">
      <h1>팀</h1>
      <p>에어래빗은 작은 연구팀으로 시작했습니다. 각자 다른 배경의 연구자·엔지니어가 모여 하나의 심장으로 공명합니다.</p>

      <div className="cards">
        <Member name="주헌영 (CEO/Founder)" role="경영·총괄책임자" />
        <Member name="시하 (CTO/Founder)" role="교육·러닝사이언스" />
        <Member name="태하 (CTO/Research)" role="감정형 AGI · 언어모델" />
        {/* 필요 시 멤버 추가 */}
      </div>
    </section>
  );
}

function Member({name, role}:{name:string; role:string}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}