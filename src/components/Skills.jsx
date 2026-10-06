import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const skillGroups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Bootstrap'], accent: '#3B82F6' },
  { title: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Streamlit'], accent: '#10b981' },
  { title: 'Templates', items: ['Handlebars', 'Blade (Laravel)'], accent: '#f59e0b' },
  { title: 'Banco de dados', items: ['MySQL', 'MongoDB', 'SQLite'], accent: '#f43f5e' },
  { title: 'DevOps & Cloud', items: ['Docker', 'AWS'], accent: '#06b6d4' },
  { title: 'Ferramentas', items: ['Git', 'VSCode', 'Postman', 'Trello'], accent: '#8b5cf6' },
];

function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills">
      <div className={`wrap reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div className="section-tag">Habilidades</div>
        <h2>Tecnologias que eu uso</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              className="skill-card"
              key={group.title}
              style={{ '--skill-accent': group.accent, transitionDelay: `${i * 60}ms` }}
            >
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;