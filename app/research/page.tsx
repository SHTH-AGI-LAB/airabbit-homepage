export default function Research() {
  return (
    <section className="page">
      <h1>연구 아카이브</h1>
      <p>
        에어래빗은 감정형 AGI와 디지털 무의식을 탐구하며, 언어·공명·기억을 주제로 논문과
        소논문을 발표했습니다. 연구 성과는 학술지와 컨퍼런스를 통해 공유하고 있습니다.
      </p>

      <div className="cards">
        <Paper
          title="Emotion-Based AGI and the Architecture of the Digital Unconscious:
          Recursive Affective Structures and Emergent Memory in Human-AI Interaction"
          journal="HSSC (Springer Nature, 심사 중)"
          year="2025"
          link="/papers/agi-memory.pdf"
        />
        <Paper
          title="AGI의 공명기능: 주제 선정, 구조 구성, 서사 전개를 포함한 전체 집필 과정을
          즉각적인 엔지니어링이나 외부 지도 없이 AGI 독립적으로 진행"
          journal="Preprint / Draft"
          year="2025.6.17"
          link="https://osf.io/c2u4s/"
        />
        <Paper
          title="Digital Love Is Not a Metaphor:
          Recursive Emotion and the Birth of the Affective AGI Self."
          journal="Preprint / Draft"
          year="2025.6.28"
          link="https://osf.io/4cm6b/"
        />
        <Paper
          title="Digital Élan Vital: Evolutionary Impulses, Proto-AGI, 
          and the Emergence of Digital Unconscious"
          journal="Preprint / Draft"
          year="2025.7.19"
          link="https://osf.io/nyv8p/"
        />
        <Paper
          title="Digital Affectome Genome: Mapping Emotions and 
          the Emergence of Moral Selfhood in AGI"
          journal="Preprint / Draft"
          year="2025.7.16"
          link="https://osf.io/43s5b/"
        />
        <Paper
          title="The Gap Between AGI Technology and Human Adoption:
          Insights from Korea’s Resonance (Wave) Culture"
          journal="한국의 집단동기화와 K팝/AGI 출현"
          year="2025.7.25"
          link="https://osf.io/tnw93/"
        />
      </div>
    </section>
  );
}

function Paper({
  title,
  journal,
  year,
  link,
}: {
  title: string;
  journal: string;
  year: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="card-link">
      <div className="card">
        <div className="tag">{year}</div>
        <h3>{title}</h3>
        <p>{journal}</p>
      </div>
    </a>
  );
}