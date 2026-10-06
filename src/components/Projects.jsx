import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const featuredProjects = [
  {
    title: 'Stock Control API',
    repo: 'Stock_Control_API',
    description:
      'API completa de controle de estoque com autenticação JWT, 2FA por e-mail, upload via Cloudinary, exportação CSV, relatórios em PDF, eventos em tempo real e backups automáticos. Testes com Jest/Supertest e integração com sensor ESP32.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    code: 'https://github.com/Iago-Ferreira-Silva/Stock_Control_API',
    accent: '#3B82F6',
    featured: true,
  },
  {
    title: 'EstoqueIF',
    repo: 'estoque_if',
    description:
      'Sistema full-stack de gestão de estoque desenvolvido em equipe para o IFCE, com autenticação JWT, bcrypt e controle de acesso por perfil.',
    tags: ['HTML/CSS/JS', 'Node.js', 'MySQL'],
    code: 'https://github.com/Iago-Ferreira-Silva/estoque_if',
    accent: '#10b981',
  },
  {
    title: 'Film Frenzy',
    repo: 'filmfrenzy-react',
    description:
      'Aplicação para descobrir e favoritar filmes com a API do TMDb, autenticação e favoritos persistentes por usuário.',
    tags: ['React', 'Vite', 'Context API'],
    code: 'https://github.com/Iago-Ferreira-Silva/filmfrenzy-react',
    demo: 'https://filmfrenzy-react-6yb3.vercel.app/',
    accent: '#f43f5e',
  },
  {
    title: 'Job Finder',
    repo: 'job_finder',
    description:
      'Plataforma para divulgação e busca de vagas remotas de tecnologia.',
    tags: ['Node.js', 'Sequelize', 'Handlebars'],
    code: 'https://github.com/Iago-Ferreira-Silva/job_finder',
    demo: 'https://iago-ferreira-silva.github.io/job_finder/',
    accent: '#f59e0b',
  },
  {
    title: 'Agente Virtual IA',
    repo: 'agent_IA',
    description:
      'Chatbot multimodelo com interface em tempo real, conectando a diferentes LLMs (OpenAI, HuggingFace, Ollama).',
    tags: ['Python', 'Streamlit', 'LangChain'],
    code: 'https://github.com/Iago-Ferreira-Silva/agent_IA',
    accent: '#8b5cf6',
  },
  {
    title: 'Cenário 3D OpenGL',
    repo: 'cenario_openGL',
    description:
      'Simulação 3D de um estádio de futebol, com controle de câmera e renderização em projeto acadêmico em grupo.',
    tags: ['Python', 'PyOpenGL', 'Pygame'],
    code: 'https://github.com/Iago-Ferreira-Silva/cenario_openGL',
    accent: '#06b6d4',
  },
];

const moreProjects = [
  { label: 'FilmFrenzy (vanilla JS + proxy Node.js)', url: 'https://github.com/Iago-Ferreira-Silva/Project_FilmFrenzy' },
  { label: 'Cardápio Digital (React)', url: 'https://github.com/Iago-Ferreira-Silva/cardapio_digital' },
  { label: 'App Áudio Book', url: 'https://github.com/Iago-Ferreira-Silva/App_Audio_Book' },
  { label: 'Prompt Manager', url: 'https://github.com/Iago-Ferreira-Silva/Prompt_Manager' },
  { label: 'Sistema de Cadastro', url: 'https://github.com/Iago-Ferreira-Silva/sistema_cadastro' },
];

function Mockup({ accent, repo }) {
  return (
    <div className="mockup" style={{ '--proj-accent': accent }}>
      <div className="mockup-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <div className="mockup-url">{repo}</div>
      </div>
      <div className="mockup-body">
        <div className="mockup-shape shape-1" />
        <div className="mockup-shape shape-2" />
        <div className="mockup-shape shape-3" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`proj-card reveal ${visible ? 'visible' : ''} ${project.featured ? 'proj-featured' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
    >
      <Mockup accent={project.accent} repo={project.repo} />

      <div className="proj-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="proj-links">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Código-fonte →
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [moreRef, moreVisible] = useReveal();

  return (
    <section id="projetos">
      <div className="wrap">
        <div className="section-tag">Portfólio</div>
        <h2>Projetos em destaque</h2>

        <div className="proj-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>

        <div
          ref={moreRef}
          className={`more-projects reveal ${moreVisible ? 'visible' : ''}`}
        >
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