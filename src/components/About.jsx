export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-h2">
      <div className="wrap about-grid">
        <div>
          <span className="tag-line">// sobre</span>
          <h2 id="sobre-h2">Quem eu sou</h2>
          <p>
            Sou desenvolvedor apaixonado por criar interfaces que unem design, tecnologia e
            inteligência artificial. Atualmente curso Sistemas da Informação no IFCE e Análise e
            Desenvolvimento de Sistemas na Estácio.
          </p>
          <p>
            Fui estagiário AI Developer na Compass UOL por 6 meses, onde aprofundei minha
            experiência prática com desenvolvimento e IA aplicada. Meu objetivo é unir Frontend +
            IA para construir soluções que realmente façam diferença.
          </p>
        </div>
        <div className="stats">
          <div className="stat"><b>11+</b><span>projetos no github</span></div>
          <div className="stat"><b>6 meses</b><span>estágio ai developer</span></div>
          <div className="stat"><b>2</b><span>cursos superiores</span></div>
          <div className="stat"><b>10+</b><span>tecnologias no dia a dia</span></div>
        </div>
      </div>
    </section>
  );
}