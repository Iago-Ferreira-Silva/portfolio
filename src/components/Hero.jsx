import avatarImg from '../assets/avatar.jpg';
import { useReveal } from '../hooks/useReveal';
import './Hero.css';

const lines = [
  { cmd: 'whoami', out: 'iago_ferreira_silva' },
  { cmd: 'cat foco.txt', out: 'Front-End & Inteligência Artificial' },
  { cmd: 'cat localizacao.txt', out: 'Crato, CE — Brasil' },
];

function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section className="hero">
      <div className={`wrap hero-grid reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div className="hero-copy">
          <h1>Construo interfaces que funcionam e fazem sentido.</h1>
          <p className="lead">
            Desenvolvedor Front-End unindo código e inteligência artificial
            pra criar produtos intuitivos — do protótipo ao deploy.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#projetos">Ver projetos</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/iago-ferreira-silva-9278ab257" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-outline" href="https://github.com/Iago-Ferreira-Silva" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span className="tdot" /><span className="tdot" /><span className="tdot" />
            <span className="terminal-title mono">iago@portfolio: ~</span>
          </div>
          <div className="terminal-body mono">
            {lines.map((l) => (
              <div className="term-row" key={l.cmd}>
                <p><span className="prompt">$</span> {l.cmd}</p>
                <p className="out">{l.out}</p>
              </div>
            ))}
            <div className="term-row term-photo">
              <p><span className="prompt">$</span> open avatar.jpg</p>
              <img className="term-avatar" src={avatarImg} alt="Foto de Iago Ferreira Silva" />
            </div>
            <p className="term-cursor-line"><span className="prompt">$</span> <span className="cursor">_</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;