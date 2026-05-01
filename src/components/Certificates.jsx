import { certificates } from '../constants';

export default function Certificates() {
  return (
    <section id="certificates" className="section glass-section">
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.title}>
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay" />
              </div>
              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <div className="certificate-details">
                  <div className="certificate-issuer">
                    <i className="fas fa-certificate" />
                    <span>{certificate.issuer}</span>
                  </div>
                </div>
                <div className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
