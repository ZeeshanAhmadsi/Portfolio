import { skills } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="section glass-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
        </div>
        <div className="skills-container">
          <div className="skills-marquee">
            <div className="skills-row">
              {skills.map((skill) => (
                <div className="skill-item-horizontal" key={skill.name}>
                  <img src={skill.icon} alt={skill.name} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="skills-row" aria-hidden="true">
              {skills.map((skill) => (
                <div className="skill-item-horizontal" key={`${skill.name}-duplicate`}>
                  <img src={skill.icon} alt={skill.name} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
