import { useReveal } from '../hooks/useReveal';
import './About.css';

function About() {
  const [ref, visible] = useReveal();

  const stats = [
    { value: '11+', label: 'Projetos no GitHub' },
    { value: '6 meses', label: 'Estágio AI Developer' },
    { value: '2', label: 'Cursos superiores em andamento' },
    { value: '10+', label: 'Tecnologias no dia a dia' },
  ];

  return (
    <section id="sobre">
      <div className={`wrap about-grid reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div>
          <div className="section-tag">Sobre mim</div>
          <h2>Quem eu sou</h2>

          <p>
            Sou desenvolvedor apaixonado por criar interfaces que unem
            design, tecnologia e inteligência artificial. Atualmente curso
            Sistemas da Informação no IFCE e Análise e Desenvolvimento de
            Sistemas na Estácio.
          </p>

          <p>
            Fui estagiário AI Developer na Compass UOL por 6 meses, onde
            aprofundei minha experiência prática com desenvolvimento e IA
            aplicada. Meu objetivo é unir Frontend + IA para construir
            soluções que realmente façam diferença.
          </p>
        </div>

        <div className="stats">
          {stats.map((stat, i) => (
            <div
              className="stat"
              key={stat.label}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;