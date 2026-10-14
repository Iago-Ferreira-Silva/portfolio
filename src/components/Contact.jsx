import useReveal from '../hooks/useReveal';

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="contato"
      aria-labelledby="contato-h2"
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}`}
    >
      <div className="wrap">
        <span className="tag-line">// contato</span>
        <h2 id="contato-h2">Vamos conversar?</h2>
        <p className="lead" style={{ marginBottom: 28, maxWidth: 560 }}>
          Estou aberto a novas oportunidades na área de programação, com foco em desenvolvimento
          Front-End. Entre em contato!
        </p>

        <div className="term contact-term">
          <div className="term-bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span className="term-title">iago@portfolio — zsh</span>
          </div>
          <div className="term-body">
            <p className="out"><span className="prompt">$</span> contato --list</p>
            <ul className="contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
                </svg>
                <a href="mailto:iagoferreira008@gmail.com">iagoferreira008@gmail.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 11v5M8 8v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16M12 12.5V16" />
                </svg>
                <a href="https://www.linkedin.com/in/iago-ferreira-silva-9278ab257" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/iago-ferreira
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.6.75.08-.58.32-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.93-2.41-.1-.23-.4-1.15.09-2.4 0 0 .76-.24 2.5.92a8.6 8.6 0 0 1 4.55 0c1.73-1.16 2.49-.92 2.49-.92.5 1.25.18 2.17.1 2.4.57.63.92 1.43.92 2.4 0 3.47-2.1 4.22-4.1 4.45.33.28.62.84.62 1.7v2.5c0 .24.14.52.61.43A9 9 0 0 0 12 3Z" />
                </svg>
                <a href="https://github.com/Iago-Ferreira-Silva" target="_blank" rel="noopener noreferrer">
                  github.com/Iago-Ferreira-Silva
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}