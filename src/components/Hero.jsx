import avatarImg from '../assets/avatar.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="badge">
            Disponível para novas oportunidades
          </div>

          <h1>
            Olá, eu sou <span className="grad">Iago Ferreira</span>
            <br />
            Desenvolvedor Front-End & IA
          </h1>

          <p className="lead">
            Construo interfaces intuitivas, responsivas e funcionais, unindo
            Frontend e Inteligência Artificial para criar soluções que fazem
            diferença.
          </p>

          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="#projetos"
            >
              Ver projetos
            </a>

            <a
              className="btn btn-outline"
              href="https://www.linkedin.com/in/iago-ferreira-silva-9278ab257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="btn btn-outline"
              href="https://github.com/Iago-Ferreira-Silva"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="avatar-wrap">
          <img
            className="avatar"
            src={avatarImg}
            alt="Foto de Iago Ferreira Silva"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;