const skillGroups = [
  { title: 'frontend', tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Bootstrap'] },
  { title: 'backend', tags: ['Node.js', 'Python', 'PHP', 'Streamlit'] },
  { title: 'templates', tags: ['Handlebars', 'Blade (Laravel)'] },
  { title: 'banco de dados', tags: ['MySQL', 'MongoDB', 'SQLite'] },
  { title: 'devops & cloud', tags: ['Docker', 'AWS'] },
  { title: 'ferramentas', tags: ['Git', 'VSCode', 'Postman', 'Trello'] },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h2">
      <div className="wrap">
        <span className="tag-line">// stack</span>
        <h2 id="skills-h2">Tecnologias que eu uso</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}