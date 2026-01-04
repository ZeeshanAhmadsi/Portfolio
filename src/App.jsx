import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];

const experiences = [
  {
    date: 'June,2025 - September,2025',
    title: 'Frontend Developer',
    company: 'PitchMatter US',
    bullets: [
      'Engineered responsive, high-fidelity UIs from Figma designs using React, TypeScript, Tailwind CSS, and Material UI.',
      'Integrated RESTful APIs to build stateful, dynamic components and optimized performance through refactoring.',
      'Collaborated in an Agile environment using Git for version control, improving team workflows and delivery.',
      'Contributed to scalable frontend architecture through reusable components and modular design patterns.',
    ],
  },
  {
    date: 'April,2025 - May,2025',
    title: 'Freelance Web Developer',
    company: 'Forex Core 360',
    bullets: [
      'Delivered fully responsive, cross-device compatible pages tailored to the forex domain.',
      'Implemented interactive animations and engaging UI components to elevate visual appeal.',
      'Optimized performance, accessibility, and loading speed with modern frontend best practices.',
      'Collaborated with the client to gather requirements and deliver production-ready outcomes.',
    ],
  },
  {
    date: 'January,2025 - February, 2025',
    title: 'Web Development Intern',
    company: 'Prodigy Infotech',
    bullets: [
      'Assisted in developing and maintaining company websites.',
      'Built responsive layouts with HTML, CSS, and JavaScript.',
      'Debugged and optimized front-end code for performance and compatibility.',
      'Used Git for collaborative code management.',
    ],
  },
];

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
];

const projects = [
  {
    title: 'Zerodha hub',
    description:
      "A full-stack clone of Zerodha's trading platform with real-time market data, portfolio management, and order execution.",
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: '/assets/Screenshot 2025-10-30 021324.png',
    code: 'https://github.com/ZeeshanAhmadsi/Tradenest',
    demo: '',
  },
  {
    title: 'Sign Language to Text Converter',
    description:
      'Real-time sign language translation using computer vision and deep learning. Converts hand gestures to text with high accuracy.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
    image: '/assets/Screenshot 2025-10-30 014841.png',
    code: 'https://github.com/ZeeshanAhmadsi/Sign-Language-to-Text-using-CNN',
    demo: 'https://sign-language-demo.herokuapp.com',
  },
  {
    title: 'NeuroShell AI Platform',
    description:
      'An AI-powered development platform for building and deploying neural networks with intuitive UI and automated model optimization.',
    tech: ['Open AI', 'Numpy', 'Python'],
    image: '/assets/Screenshot 2025-10-30 024735.png',
    code: 'https://github.com/ZeeshanAhmadsi/NeuroShell',
    demo: 'https://neuroshell-ai.com',
  },
  {
    title: 'Wanderlust',
    description:
      'Platform for drone enthusiasts and professionals. Features include drone marketplace, flight planning, and community engagement.',
    tech: ['Ejs', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/assets/Screenshot 2025-07-29 012604.png',
    code: 'https://github.com/ZeeshanAhmadsi/WanderLust',
    demo: 'https://wanderlust-5lfj.onrender.com',
  },
];

const certificates = [
  {
    title: 'Full Stack Development',
    issuer: 'Apna College',
    skills: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    image: '/assets/Screenshot 2025-10-30 030808.png',
  },
  {
    title: 'DevOps',
    issuer: 'Oracle',
    skills: ['Docker', 'CI-CD', 'Kubernetes'],
    image: '/assets/Screenshot 2025-10-30 030715.png',
  },
];

const hobbies = [
  { title: 'Coding', icon: 'fas fa-code', description: 'Passionate about creating innovative solutions and exploring new technologies.' },
  { title: 'Reading', icon: 'fas fa-book', description: 'Avid reader of tech articles, novels, and self-improvement books.' },
  { title: 'Music', icon: 'fas fa-music', description: 'Music enthusiast who finds inspiration across genres.' },
  {
    title: 'Badminton',
    icon: 'fas fa-table-tennis-paddle-ball',
    description: 'Enjoy the thrill of the game; it keeps me active and sharp.',
  },
  { title: 'Dancing', icon: 'fa-solid fa-person-dancing', description: 'Express creativity through movement and rhythm.' },
];

const socials = [
  { icon: 'fab fa-github', href: 'https://github.com/ZeeshanAhmadsi', label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/zeeshan-ahmad-siddiqui', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/zeeshanahmad.si', label: 'Instagram' },
  { icon: 'fas fa-code', href: 'https://leetcode.com/u/khanzeeshan84854/', label: 'LeetCode' },
];

const terminalCommands = {
  help: () =>
    `Available commands:
- help: Show this help message
- about: Show about information
- skills: List my skills
- projects: Show my projects
- contact: Get contact information
- certificates: View my certificates
- clear: Clear the terminal
- minimize: Minimize terminal
- maximize: Maximize/restore terminal
- exit: Close the terminal`,
  about: () =>
    "I'm Zeeshan Ahmad Siddiqui, a Full Stack Developer based in India.\nI specialize in creating exceptional digital experiences with a focus on performance, scalability, and user-centric design.",
  skills: () =>
    `Frontend:
- HTML5, CSS3, JavaScript
- React, Bootstrap, Tailwind CSS

Backend:
- Node.js, Express
- Python, MongoDB, MySQL

Programming:
- C, C++`,
  projects: () =>
    `Projects:
1. Skynest
   - A peaceful retreat website
   - Technologies: HTML, CSS, JavaScript
   - GitHub: github.com/ZeeshanAhmadsi/Skynest`,
  contact: () =>
    `Contact Information:
- GitHub: github.com/ZeeshanAhmadsi
- LinkedIn: linkedin.com/in/zeeshan-ahmad-siddiqui
- Email: khanzeeshan84854@gmail.com`,
  certificates: () =>
    `Certificates:
1. Full Stack Development
   - Comprehensive web development training
   - Modern technologies and best practices`,
};

function Terminal({ open, onOpen, onClose }) {
  const [lines, setLines] = useState([
    {
      type: 'response',
      text: "Welcome to my portfolio terminal! Type 'help' for available commands.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [open, isMinimized]);

  const handleCommand = (command) => {
    if (command === 'clear') {
      setLines([]);
      return '';
    }
    if (command === 'minimize') {
      setIsMinimized((prev) => !prev);
      return 'Toggled minimize';
    }
    if (command === 'maximize') {
      setIsMaximized((prev) => !prev);
      return isMaximized ? 'Terminal restored' : 'Terminal maximized';
    }
    if (command === 'exit') {
      onClose();
      return '';
    }
    if (terminalCommands[command]) {
      return terminalCommands[command]();
    }
    return `Command not found: ${command}\nType 'help' to see available commands`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setLines((prev) => [
      ...prev,
      { type: 'input', text: trimmed, prompt: 'visitor@portfolio:~$' },
    ]);

    const response = handleCommand(trimmed.toLowerCase());
    if (response) {
      setLines((prev) => [...prev, { type: 'response', text: response }]);
    }

    setInput('');
  };

  const containerClass = `terminal${open ? ' active' : ''}`;
  const style = isMinimized
    ? { height: '40px' }
    : isMaximized
      ? { width: '90vw', height: '90vh', top: '5vh', left: '5vw' }
      : {};

  return (
    <>
      <div className={containerClass} style={style} aria-label="Interactive Terminal">
        <div className="terminal-header" role="toolbar">
          <div className="terminal-title">Portfolio Terminal</div>
          <div className="terminal-controls">
            <button
              type="button"
              className="terminal-minimize"
              aria-label="Minimize terminal"
              onClick={() => setIsMinimized((prev) => !prev)}
            >
              <i className="fas fa-minus" />
            </button>
            <button
              type="button"
              className="terminal-maximize"
              aria-label="Maximize terminal"
              onClick={() => setIsMaximized((prev) => !prev)}
            >
              <i className="fas fa-expand" />
            </button>
            <button
              type="button"
              className="terminal-close"
              aria-label="Close terminal"
              onClick={onClose}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {!isMinimized && (
          <div className="terminal-body">
            <div className="terminal-content">
              {lines.map((line, idx) => (
                <div className="terminal-line" key={`${line.text}-${idx}`}>
                  {line.prompt && <span className="terminal-prompt">{line.prompt}</span>}
                  <span
                    className={line.type === 'response' ? 'terminal-response' : 'terminal-command'}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
            <form className="terminal-input-line" onSubmit={handleSubmit}>
              <label htmlFor="terminal-input" className="terminal-prompt">
                $
              </label>
              <input
                id="terminal-input"
                ref={inputRef}
                type="text"
                className="terminal-input"
                aria-label="Terminal input"
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck="false"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      <button
        type="button"
        className="terminal-toggle"
        aria-label={open ? 'Close terminal' : 'Open terminal'}
        onClick={() => {
          if (open) {
            onClose();
          } else {
            setIsMinimized(false);
            setIsMaximized(false);
            onOpen();
            inputRef.current?.focus();
          }
        }}
      >
        <i className="fas fa-terminal" />
      </button>
    </>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [typedText, setTypedText] = useState('Zeeshan Ahmad Siddiqui');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState('');
  const typingRef = useRef({ index: 0, char: 0, deleting: false });

  const handleScrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Lazy load images but prioritize skill icons for immediate visual stability
    document.querySelectorAll('img').forEach((img) => {
      if (img.closest('.skill-item-horizontal')) {
        img.setAttribute('decoding', 'async');
        img.setAttribute('loading', 'eager');
        if (!img.getAttribute('width')) img.setAttribute('width', '48');
        if (!img.getAttribute('height')) img.setAttribute('height', '48');
      } else {
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      }
    });

    // Intersection observers for reveals
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    // On very small phones, disable intersection observer to avoid jank and reveal all sections immediately
    if (typeof window !== 'undefined' && window.innerWidth <= 480) {
      document.querySelectorAll('.section, .project-card').forEach((el) => {
        el.classList.add('visible');
      });
    } else {
      // Observe larger elements only to reduce cost on mobile devices (skills are static)
      document.querySelectorAll('.section, .project-card').forEach((el) => {
        sectionObserver.observe(el);
      });
    }

    return () => sectionObserver.disconnect();
  }, []);

  // Simple mode for very small screens: add a body class and update on resize
  useEffect(() => {
    const setSimpleMode = () => {
      if (typeof window === 'undefined') return;
      const isSimple = window.innerWidth <= 480 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.body.classList.toggle('simple-mode', isSimple);
    };
    setSimpleMode();
    window.addEventListener('resize', setSimpleMode);
    return () => window.removeEventListener('resize', setSimpleMode);
  }, []);

  useEffect(() => {
    // Typing animation
    const texts = ['Zeeshan Ahmad Siddiqui', 'Full Stack Developer'];
    // Disable typing animation on simple phones or when the user prefers reduced motion
    if (typeof window !== 'undefined' && (window.innerWidth <= 480 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      setTypedText(texts[0]);
      return;
    }
    const tick = () => {
      const state = typingRef.current;
      const currentText = texts[state.index];
      if (state.deleting) {
        state.char -= 1;
      } else {
        state.char += 1;
      }

      setTypedText(currentText.substring(0, state.char));

      if (!state.deleting && state.char === currentText.length) {
        state.deleting = true;
        setTimeout(tick, 1000);
        return;
      }
      if (state.deleting && state.char === 0) {
        state.deleting = false;
        state.index = (state.index + 1) % texts.length;
      }
      setTimeout(tick, state.deleting ? 60 : 110);
    };

    const timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
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
      <header className="glass">
        <nav className="container">
          <div className="logo-section">
            <a
              href="#home"
              className="logo text-gradient"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('home');
              }}
              aria-label="Go to top"
            >
              Zeeshan Ahmad
            </a>
          </div>
          <div className={`nav-container${navOpen ? ' active' : ''}`}>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  href={`#${link.id}`}
                  key={link.id}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.id);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/18ixl6O-XSw2FY-6oMQxOZd8Sfg0Ynl2W/view?usp=drive_link"
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resume-text">
                <span>Resume</span>
              </div>
              <i className="fas fa-download" />
            </a>
          </div>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <i className={`fas ${navOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle fade-in">Hi, my name is</p>
              <h1 className="hero-title">
                <span className="animated-text">{typedText}</span>
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

        <section id="about" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p className="fade-in">
                  I completed my secondary education in 2019 from{' '}
                  <b>St. Joseph Senior Secondary School, Narsinghgarh</b>.
                </p>
                <p className="fade-in">
                  I completed my higher secondary education in 2021 from <b>St. Joseph Senior Secondary School</b> with a
                  focus on science and mathematics.
                </p>
                <p className="fade-in">
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

        <section id="skills" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>Skills & Technologies</h2>
            </div>
            <div className="skills-container">
              <div className="skills-row">
                {skills.map((skill) => (
                  <div className="skill-item-horizontal" key={skill.name}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width="48"
                      height="48"
                      loading="eager"
                      decoding="async"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" /> View Code
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section glass-section">
          <div className="container">
            <div className="section-title">
              <h2>Certificates</h2>
            </div>
            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <div className="certificate-card" key={certificate.title}>
                  <div className="certificate-image">
                    <img
                      className="certificate-img"
                      src={encodeURI(certificate.image)}
                      alt={certificate.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
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
              <p className="contact-description fade-in">
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

