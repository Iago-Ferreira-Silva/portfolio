import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'Streamlit'],
  },
  {
    title: 'Templates',
    items: ['Handlebars', 'Blade (Laravel)'],
  },
  {
    title: 'Banco de dados',
    items: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'AWS'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'VSCode', 'Postman', 'Trello'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-tag">Habilidades</div>
        <h2>Tecnologias que eu uso</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
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