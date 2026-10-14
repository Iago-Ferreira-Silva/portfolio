import useReveal from '../hooks/useReveal';

const projects = [
  {
    file: 'estoque_if', ext: '.js',
    desc: 'Sistema full-stack de gestão de estoque, em equipe, no IFCE. JWT + bcrypt + controle de acesso por perfil.',
    code: 'https://github.com/Iago-Ferreira-Silva/estoque_if',
  },
  {
    file: 'film_frenzy', ext: '.jsx',
    desc: 'Descubra e favorite filmes com a API do TMDb. Rotas privadas e favoritos persistentes por usuário.',
    code: 'https://github.com/Iago-Ferreira-Silva/filmfrenzy-react',
    demo: 'https://filmfrenzy-react-6yb3.vercel.app/',
  },
  {
    file: 'job_finder', ext: '.hbs',
    desc: 'Plataforma de vagas remotas em tecnologia, com cadastro e visualização de vagas.',
    code: 'https://github.com/Iago-Ferreira-Silva/job_finder',
    demo: 'https://iago-ferreira-silva.github.io/job_finder/',
  },
  {
    file: 'agente_ia', ext: '.py',
    desc: 'Chatbot multimodelo (OpenAI, HuggingFace, Ollama) com streaming de respostas e controle de temperatura.',
    code: 'https://github.com/Iago-Ferreira-Silva/agent_IA',
  },
  {
    file: 'cenario_3d', ext: '.py',
    desc: 'Simulação 3D de um estádio de futebol com controle de câmera, projeto acadêmico em grupo.',
    code: 'https://github.com/Iago-Ferreira-Silva/cenario_openGL',
  },
];

const moreFiles = [
  { label: 'filmfrenzy.old.js', href: 'https://github.com/Iago-Ferreira-Silva/Project_FilmFrenzy' },
  { label: 'cardapio_digital.jsx', href: 'https://github.com/Iago-Ferreira-Silva/cardapio_digital' },
  { label: 'audio_book.app', href: 'https://github.com/Iago-Ferreira-Silva/App_Audio_Book' },
  { label: 'prompt_manager.py', href: 'https://github.com/Iago-Ferreira-Silva/Prompt_Manager' },
  { label: 'sistema_cadastro.php', href: 'https://github.com/Iago-Ferreira-Silva/sistema_cadastro' },
];

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-h2"
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}`}
    >
      <div className="wrap">
        <span className="tag-line">// projetos</span>
        <h2 id="projetos-h2">Projetos em destaque</h2>

        <article className="featured">
          <div className="term-bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span className="term-title">stock-control-api/README.md</span>
          </div>
          <div className="featured-body">
            <div className="gutter" aria-hidden="true">1<br />2<br />3</div>
            <div className="code">
              <span className="kw"># </span>Stock Control API<br />
              <span className="com">// controle de estoque com JWT, 2FA e automações</span><br />
              &nbsp;
            </div>
            <p className="featured-desc">
              API completa de controle de estoque com autenticação JWT, 2FA por e-mail, upload de
              imagens via Cloudinary, exportação CSV, relatórios em PDF, eventos em tempo real e
              backups automáticos diários. Inclui testes com Jest/Supertest e integração com
              sensor ESP32.
            </p>
            <div className="featured-tags">
              <span>Node.js</span><span>Express</span><span>MongoDB</span><span>Socket.io</span>
            </div>
            <a
              className="featured-link"
              href="https://github.com/Iago-Ferreira-Silva/Stock_Control_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              abrir código-fonte
            </a>
          </div>
        </article>

        <div className="file-list">
          {projects.map((p) => (
            <div className="file-row" key={p.file}>
              <span className="fname">{p.file}<span className="ext">{p.ext}</span></span>
              <span className="fdesc">{p.desc}</span>
              <span className="flinks">
                <a href={p.code} target="_blank" rel="noopener noreferrer">código</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">demo</a>}
              </span>
            </div>
          ))}
        </div>

        <div className="more-files">
          <span className="tag-line">// mais projetos</span>
          <div className="more-list">
            {moreFiles.map((f) => (
              <a href={f.href} target="_blank" rel="noopener noreferrer" key={f.label}>{f.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}