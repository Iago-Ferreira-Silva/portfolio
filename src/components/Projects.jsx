import './Projects.css';

const featuredProjects = [
  {
    icon: '📦',
    title: 'Stock Control API',
    description:
      'API completa de controle de estoque com autenticação JWT, 2FA por e-mail, upload de imagens via Cloudinary, exportação CSV, relatórios em PDF, eventos em tempo real e backups automáticos diários. Inclui testes com Jest/Supertest e integração com sensor ESP32.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    code: 'https://github.com/Iago-Ferreira-Silva/Stock_Control_API',
  },
  {
    icon: '🏬',
    title: 'EstoqueIF',
    description:
      'Sistema full-stack de gestão de estoque desenvolvido em equipe para o IFCE, com autenticação JWT, senhas criptografadas com bcrypt e controle de acesso por perfil de usuário.',
    tags: ['HTML/CSS/JS', 'Node.js', 'MySQL'],
    code: 'https://github.com/Iago-Ferreira-Silva/estoque_if',
  },
  {
    icon: '🎬',
    title: 'Film Frenzy',
    description:
      'Aplicação para descobrir e favoritar filmes usando a API do TMDb, com autenticação, rotas privadas e favoritos persistentes por usuário.',
    tags: ['React', 'Vite', 'Context API'],
    code: 'https://github.com/Iago-Ferreira-Silva/filmfrenzy-react',
    demo: 'https://filmfrenzy-react-6yb3.vercel.app/',
  },
  {
    icon: '💼',
    title: 'Job Finder',
    description:
      'Plataforma para divulgação e busca de vagas de tecnologia com foco em posições remotas, permitindo cadastro e visualização de vagas.',
    tags: ['Node.js', 'Sequelize', 'Handlebars', 'Bootstrap'],
    code: 'https://github.com/Iago-Ferreira-Silva/job_finder',
    demo: 'https://iago-ferreira-silva.github.io/job_finder/',
  },
  {
    icon: '🤖',
    title: 'Agente Virtual IA',
    description:
      'Chatbot multimodelo com interface de chat em tempo real, permitindo conversar com diferentes LLMs (OpenAI, HuggingFace e Ollama), com configuração de temperatura e streaming de respostas.',
    tags: ['Python', 'Streamlit', 'LangChain'],
    code: 'https://github.com/Iago-Ferreira-Silva/agent_IA',
  },
  {
    icon: '🏟️',
    title: 'Cenário 3D OpenGL',
    description:
      'Simulação 3D de um estádio de futebol, com controle de câmera, geometria e renderização, desenvolvida em projeto acadêmico em grupo.',
    tags: ['Python', 'PyOpenGL', 'Pygame'],
    code: 'https://github.com/Iago-Ferreira-Silva/cenario_openGL',
  },
];

const moreProjects = [
  {
    label: 'FilmFrenzy (vanilla JS + proxy Node.js)',
    url: 'https://github.com/Iago-Ferreira-Silva/Project_FilmFrenzy',
  },
  {
    label: 'Cardápio Digital (React)',
    url: 'https://github.com/Iago-Ferreira-Silva/cardapio_digital',
  },
  {
    label: 'App Áudio Book',
    url: 'https://github.com/Iago-Ferreira-Silva/App_Audio_Book',
  },
  {
    label: 'Prompt Manager',
    url: 'https://github.com/Iago-Ferreira-Silva/Prompt_Manager',
  },
  {
    label: 'Sistema de Cadastro',
    url: 'https://github.com/Iago-Ferreira-Silva/sistema_cadastro',
  },
];

function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <div className="section-tag">Portfólio</div>

        <h2>Projetos em destaque</h2>

        <div className="proj-grid">
          {featuredProjects.map((project) => (
            <div className="proj-card" key={project.title}>
              <h3>
                {project.icon} {project.title}
              </h3>

              <p>{project.description}</p>

              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="proj-links">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código-fonte →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <h3>Outros projetos</h3>

          <div className="more-list">
            {moreProjects.map((project) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.label}
              >
                {project.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;