import { experiences } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section glass-section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-timeline">
          {experiences.map((item) => (
            <div className="experience-item" key={item.title}>
              <div className="experience-date">{item.date}</div>
              <div className="experience-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
