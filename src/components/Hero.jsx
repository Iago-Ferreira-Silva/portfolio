import { useRef } from 'react';
import avatarImg from '../assets/avatar.jpg';
import { useReveal } from '../hooks/useReveal';
import './Hero.css';

function Hero() {
  const sectionRef = useRef(null);
  const [revealRef, visible] = useReveal();

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current.style.setProperty('--x', `${x}%`);
    sectionRef.current.style.setProperty('--y', `${y}%`);
  }

  return (
    <section
      className="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-spotlight" />
      <span className="hero-ghost" aria-hidden="true">IF</span>

      <div className={`wrap hero-grid reveal ${visible ? 'visible' : ''}`} ref={revealRef}>
        <div className="hero-copy">
          <div className="kicker">Front-End Developer · IA</div>

          <h1>
            Iago Ferreira
            <br />
            <span className="grad">construção de interfaces</span>
            <br />
            que fazem sentido.
          </h1>

          <p className="lead">
            Junto design, código e inteligência artificial pra criar produtos
            intuitivos — do protótipo ao deploy.
          </p>

          <div className="btn-row">
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
            </a>
            <a
              className="btn btn-outline"
              href="https://www.linkedin.com/in/iago-ferreira-9278ab257/"
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
          <div className="avatar-frame">
            <img className="avatar" src={avatarImg} alt="Foto de Iago Ferreira Silva" />
          </div>
          <div className="avatar-tag">Disponível para novas oportunidades</div>
        </div>
      </div>

      <div className="scroll-hint">
        <span />
      </div>
    </section>
  );
}

export default Hero;