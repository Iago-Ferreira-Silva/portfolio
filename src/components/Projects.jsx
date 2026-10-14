import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const projects = [
  { title: 'Stock Control API', file: 'StockControlAPI.js', description: 'API completa de controle de estoque com JWT, 2FA, Cloudinary, exportação CSV, relatórios em PDF, eventos em tempo real e backups automáticos.', tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'], code: 'https://github.com/Iago-Ferreira-Silva/Stock_Control_API' },
  { title: 'EstoqueIF', file: 'estoque_if.js', description: 'Sistema full-stack de gestão de estoque para o IFCE, com JWT e controle de acesso por perfil.', tags: ['Node.js', 'MySQL'], code: 'https://github.com/Iago-Ferreira-Silva/estoque_if' },
  { title: 'Film Frenzy', file: 'FilmFrenzy.jsx', description: 'App para descobrir e favoritar filmes com a API do TMDb.', tags: ['React', 'Vite'], code: 'https://github.com/Iago-Ferreira-Silva/filmfrenzy-react', demo: 'https://filmfrenzy-react-6yb3.vercel.app/' },
  { title: 'Job Finder', file: 'job_finder.js', description: 'Plataforma de divulgação e busca de vagas remotas de tecnologia.', tags: ['Node.js', 'Handlebars'], code: 'https://github.com/Iago-Ferreira-Silva/job_finder', demo: 'https://iago-ferreira-silva.github.io/job_finder/' },
  { title: 'Agente Virtual IA', file: 'agent_IA.py', description: 'Chatbot multimodelo conectando diferentes LLMs via LangChain.', tags: ['Python', 'Streamlit', 'LangChain'], code: 'https://github.com/Iago-Ferreira-Silva/agent_IA' },
  { title: 'Cenário 3D OpenGL', file: 'cenario.py', description: 'Simulação 3D de um estádio de futebol com controle de câmera.', tags: ['Python', 'PyOpenGL'], code: 'https://github.com/Iago-Ferreira-Silva/cenario_openGL' },
];

const moreProjects = [
  { label: 'FilmFrenzy (vanilla JS + proxy Node.js)', url: 'https://github.com/Iago-Ferreira-Silva/Project_FilmFrenzy' },
  { label: 'Cardápio Digital (React)', url: 'https://github.com/Iago-Ferreira-Silva/cardapio_digital' },
  { label: 'App Áudio Book', url: 'https://github.com/Iago-Ferreira-Silva/App_Audio_Book' },
  { label: 'Prompt Manager', url: 'https://github.com/Iago-Ferreira-Silva/Prompt_Manager' },
  { label: 'Sistema de Cadastro', url: 'https://github.com/Iago-Ferreira-Silva/sistema_cadastro' },
];

function Projects() {
  const [ref, visible] = useReveal();
  const [feature, ...rest] = projects;

  return (
    <section id="projetos">
      <div className={`wrap reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div className="eyebrow">projetos</div>
        <h2>O que eu construí</h2>

        <div className="feature-card">
          <div className="editor-bar">
            <span className="tdot" /><span className="tdot" /><span className="tdot" />
            <span className="editor-file mono">{feature.file}</span>
          </div>
          <div className="editor-body">
            <div className="line" /><div className="line short" /><div className="line" /><div className="line medium" />
          </div>
          <div className="feature-info">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="tag-row">
              {feature.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <a className="link-row" href={feature.code} target="_blank" rel="noopener noreferrer">
              <span className="prompt">$</span> abrir código
            </a>
          </div>
        </div>

        <div className="file-list">
          {rest.map((p) => (
            <div className="file-row" key={p.title}>
              <span className="file-name mono">{p.file}</span>
              <div className="file-main">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <div className="tag-row">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="file-links">
                <a href={p.code} target="_blank" rel="noopener noreferrer">código</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">demo</a>}
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <div className="eyebrow">mais arquivos</div>
          <div className="more-list">
            {moreProjects.map((p) => (
              <a href={p.url} target="_blank" rel="noopener noreferrer" key={p.label}>{p.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;