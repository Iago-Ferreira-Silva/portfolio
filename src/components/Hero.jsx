import avatar from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Desenvolvedor <span className="mono-bit">Front-End</span><br />unindo código & IA</h1>
          <p className="lead">
            Construo interfaces intuitivas, responsivas e funcionais, unindo Frontend e
            Inteligência Artificial para criar soluções que fazem diferença.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#projetos">ver projetos</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/iago-ferreira-silva-9278ab257" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a className="btn btn-outline" href="https://github.com/Iago-Ferreira-Silva" target="_blank" rel="noopener noreferrer">github</a>
          </div>
        </div>

        <div className="term" aria-hidden="true">
          <div className="term-bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span className="term-title">iago@portfolio — zsh</span>
          </div>
          <div className="term-body">
            <p className="out"><span className="prompt">$</span> whoami</p>
            <p className="out" style={{ marginBottom: 18 }}>
              Iago Ferreira Silva — Dev Front-End &amp; IA<br />
              <span className="comment"># disponível para novas oportunidades</span>
            </p>
            <p className="out"><span className="prompt">$</span> open avatar.jpg</p>
            <div className="avatar-out">
              <img className="avatar" src={avatar} alt="" />
            </div>
            <span className="cursor" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </section>
  );
}