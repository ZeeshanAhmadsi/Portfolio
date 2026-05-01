export default function Hero({ handleScrollTo }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">
            <span className="animated-text">Zeeshan Ahmad Siddiqui</span>
          </h1>
          <p className="hero-description">
            I am a Full Stack Developer with hands-on experience in MERN stack development. I’ve built responsive and
            user-friendly web applications using MongoDB, Express, React, and Node.js. I have worked with databases
            like MongoDB and SQL. Currently, I’m learning DevOps tools like Docker, CI/CD, and cloud platforms to
            improve app deployment and performance.
          </p>
          <button type="button" className="cta-button" onClick={() => handleScrollTo('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
