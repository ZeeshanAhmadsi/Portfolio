import { useEffect, useState } from 'react';
import { hobbies, socials } from './constants';
import Terminal from './components/Terminal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState('');

  const handleScrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Lazy load all images
    document.querySelectorAll('img').forEach((img) => {
      if (!img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      access_key: 'a91d0550-14a9-45f2-9e9f-6c3bdefa8816',
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    setContactStatus('Sending...');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setContactStatus('Message sent successfully! I will get back to you soon.');
      form.reset();
    } catch (err) {
      setContactStatus('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} handleScrollTo={handleScrollTo} />

      <main>
        <Hero handleScrollTo={handleScrollTo} />

        <section id="about" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I completed my secondary education in 2019 from{' '}
                  <b>St. Joseph Senior Secondary School, Narsinghgarh</b>.
                </p>
                <p>
                  I completed my higher secondary education in 2021 from <b>St. Joseph Senior Secondary School</b> with a
                  focus on science and mathematics.
                </p>
                <p>
                  Currently, I’m pursuing <b>B.Tech in Computer Science and Engineering at Jaypee University of
                  Engineering and Technology, Guna (2022–2026)</b>.
                </p>
              </div>
              <div className="profile-image card-hover glass">
                <img src="/assets/zeeshanA.jpg" alt="Zeeshan Ahmad Siddiqui" width="300" height="400" />
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Projects />
        <Certificates />

        <section id="hobbies" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>Hobbies</h2>
            </div>
            <div className="hobbies-grid">
              {hobbies.map((hobby) => (
                <div className="hobby-card" key={hobby.title}>
                  <div className="hobby-icon">
                    <i className={hobby.icon} />
                  </div>
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch</h2>
            </div>
            <div className="contact-content">
              <p className="contact-description">
                I'm currently looking for new opportunities and would love to hear from you. Whether you have a question
                or just want to say hi, I'll try my best to get back to you!
              </p>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="cta-button">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane" />
                </button>
                {contactStatus && <p className="form-status">{contactStatus}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <i className="fas fa-envelope" />
                <a href="mailto:khanzeeshan84854@gmail.com">khanzeeshan84854@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone" />
                <a href="tel:+919302357085">+91 9302357085</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" />
                <span>Narsinghgarh, Madhya Pradesh</span>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-grid">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Zeeshan Ahmad. All rights reserved.</p>
        </div>
      </footer>

      <Terminal open={terminalOpen} onOpen={() => setTerminalOpen(true)} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

