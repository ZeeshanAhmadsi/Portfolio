import { navLinks } from '../constants';

export default function Navbar({ navOpen, setNavOpen, handleScrollTo }) {
  return (
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
            href="https://drive.google.com/file/d/1VYubvpWVA1wXohbTPTk7mij4ljpuIJot/view?usp=sharing"
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
  );
}
