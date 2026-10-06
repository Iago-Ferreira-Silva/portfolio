import { useReveal } from '../hooks/useReveal';
import './Contact.css';

function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contato">
      <div className="wrap">
        <div className={`contact-box reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="contact-glow" />
          <h2>Vamos conversar?</h2>
          <p>
            Estou aberto a novas oportunidades na área de programação, com
            foco em desenvolvimento Front-End. Entre em contato!
          </p>

          <div className="btn-row contact-btn-row">
            <a className="btn btn-primary" href="mailto:iagoferreira008@gmail.com">
              📧 iagoferreira008@gmail.com
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
      </div>
    </section>
  );
}

export default Contact;