import './Contact.css';

function Contact() {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="contact-box">
          <h2>Vamos conversar?</h2>

          <p>
            Estou aberto a novas oportunidades na área de programação, com
            foco em desenvolvimento Front-End. Entre em contato!
          </p>

          <div className="btn-row contact-btn-row">
            <a
              className="btn btn-primary"
              href="mailto:iagof@aluno.ifce.edu.br"
            >
              📧 iagof@aluno.ifce.edu.br
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
      </div>
    </section>
  );
}

export default Contact;