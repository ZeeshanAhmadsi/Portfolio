
const terminal = document.querySelector('.terminal');
const terminalToggle = document.querySelector('.terminal-toggle');
const terminalClose = document.querySelector('.terminal-close');
const terminalMinimize = document.querySelector('.terminal-minimize');
const terminalMaximize = document.querySelector('.terminal-maximize');
const terminalInput = document.querySelector('.terminal-input');
const terminalContent = document.querySelector('.terminal-content');

let isMinimized = false;
let isMaximized = false;
let originalStyles = {};


const commands = {
    help: () => `Available commands:
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
    
    about: () => `I'm Zeeshan Ahmad Siddiqui, a Full Stack Developer based in India.
I specialize in creating exceptional digital experiences with a focus on
performance, scalability, and user-centric design.`,
    
    skills: () => `Frontend:
- HTML5, CSS3, JavaScript
- React, Bootstrap, Tailwind CSS

Backend:
- Node.js, Express
- Python, MongoDB, MySQL

Programming:
- C, C++`,
    
    projects: () => `Projects:
1. Skynest
   - A peaceful retreat website
   - Technologies: HTML, CSS, JavaScript
   - GitHub: github.com/ZeeshanAhmadsi/Skynest`,
    
    contact: () => `Contact Information:
- GitHub: github.com/ZeeshanAhmadsi
- LinkedIn: linkedin.com/in/zeeshan-ahmad-siddiqui
- Email: [Your Email]`,

    certificates: () => `Certificates:
1. Full Stack Development
   - Comprehensive web development training
   - Modern technologies and best practices`,
    
    clear: () => {
        terminalContent.innerHTML = '';
        return '';
    },
    
    minimize: () => {
        toggleMinimize();
        return 'Terminal minimized';
    },
    
    maximize: () => {
        toggleMaximize();
        return isMaximized ? 'Terminal maximized' : 'Terminal restored';
    },
    
    exit: () => {
        terminal.classList.remove('active');
        return '';
    }
};


terminalToggle.addEventListener('click', () => {
    terminal.classList.toggle('active');
    if (terminal.classList.contains('active')) {
        terminalInput.focus();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    if (!mobileBtn || !navContainer) return;

    
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navContainer.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    
    navContainer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navContainer.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && !mobileBtn.contains(e.target)) {
            if (navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const isSmall = window.innerWidth <= 1024;

    
    try {
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        });
    } catch (e) {  }

    
    if (isSmall) {
        
        window.__isSmall = true;
        window.__disableTyping = true;

        
        try {
            document.querySelectorAll('.video-background video').forEach(v => {
                try { v.pause(); } catch(e){}
                v.removeAttribute && v.removeAttribute('autoplay');
                v.style.display = 'none';
            });
        } catch (e) {}

        
        // Keep skill icons loaded on small screens to avoid missing content/lag
        // (previously deferred loading by removing src).
    }

    
});


terminalClose.addEventListener('click', () => {
    terminal.classList.remove('active');
});


function toggleMinimize() {
    if (!isMinimized) {
        originalStyles.height = terminal.style.height;
        terminal.style.height = '40px';
        terminal.querySelector('.terminal-body').style.display = 'none';
        isMinimized = true;
        if (isMaximized) toggleMaximize();
    } else {
        terminal.style.height = originalStyles.height || '400px';
        terminal.querySelector('.terminal-body').style.display = 'block';
        isMinimized = false;
    }
}


function toggleMaximize() {
    if (!isMaximized) {
        originalStyles = {
            width: terminal.style.width,
            height: terminal.style.height,
            top: terminal.style.top,
            left: terminal.style.left,
            right: terminal.style.right,
            bottom: terminal.style.bottom
        };
        
        terminal.style.width = '90vw';
        terminal.style.height = '90vh';
        terminal.style.top = '5vh';
        terminal.style.left = '5vw';
        isMaximized = true;
        if (isMinimized) toggleMinimize();
    } else {
        Object.assign(terminal.style, originalStyles);
        isMaximized = false;
    }
}

terminalMinimize.addEventListener('click', toggleMinimize);
terminalMaximize.addEventListener('click', toggleMaximize);


const terminalHeader = document.querySelector('.terminal-header');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

terminalHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    if (e.target.closest('.terminal-controls')) return;
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === terminalHeader) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, terminal);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}


terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';

        
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `
            <span class="terminal-prompt">visitor@portfolio:~$</span>
            <span class="terminal-command">${command}</span>
        `;
        terminalContent.appendChild(commandLine);

        
        let response = '';
        if (commands[command]) {
            response = commands[command]();
        } else {
            response = `Command not found: ${command}\nType 'help' to see available commands`;
        }

        
        if (response) {
            const responseLine = document.createElement('div');
            responseLine.className = 'terminal-line';
            responseLine.innerHTML = `<span class="terminal-response">${response}</span>`;
            terminalContent.appendChild(responseLine);
        }

        
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
});


terminal.addEventListener('click', (e) => {
    if (!e.target.closest('.terminal-controls') && !isMinimized) {
        terminalInput.focus();
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const terminalToggle = document.querySelector('.terminal-toggle');
  const terminalContainer = document.querySelector('.terminal-container');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const closeBtn = document.querySelector('.terminal-btn.close');
  const minimizeBtn = document.querySelector('.terminal-btn.minimize');
  const maximizeBtn = document.querySelector('.terminal-btn.maximize');
  
  let isDragging = false;
  let offsetX, offsetY;
  let isMinimized = false;
  let isMaximized = false;
  let originalDimensions = {
      width: terminalContainer.style.width,
      height: terminalContainer.style.height,
      top: terminalContainer.style.top,
      left: terminalContainer.style.left
  };

  
  terminalToggle.addEventListener('click', () => {
      if (terminalContainer.style.display === 'block') {
          terminalContainer.style.display = 'none';
      } else {
          terminalContainer.style.display = 'block';
          terminalInput.focus();
          
          if (isMinimized) toggleMinimize();
          if (isMaximized) toggleMaximize();
      }
  });

  
  const terminalHeader = document.querySelector('.terminal-header');
  terminalHeader.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('terminal-btn')) return;
      
      isDragging = true;
      offsetX = e.clientX - terminalContainer.getBoundingClientRect().left;
      offsetY = e.clientY - terminalContainer.getBoundingClientRect().top;
      terminalContainer.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      terminalContainer.style.left = (e.clientX - offsetX) + 'px';
      terminalContainer.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
      terminalContainer.style.cursor = 'default';
  });

  
  function toggleMinimize() {
      if (isMinimized) {
          terminalContainer.classList.remove('minimized');
          isMinimized = false;
      } else {
          terminalContainer.classList.add('minimized');
          isMinimized = true;
          
          if (isMaximized) toggleMaximize();
      }
  }

  
  function toggleMaximize() {
      if (isMaximized) {
          terminalContainer.classList.remove('maximized');
          
          Object.keys(originalDimensions).forEach(dim => {
              terminalContainer.style[dim] = originalDimensions[dim];
          });
          isMaximized = false;
      } else {
          
          originalDimensions = {
              width: terminalContainer.style.width,
              height: terminalContainer.style.height,
              top: terminalContainer.style.top,
              left: terminalContainer.style.left
          };
          
          terminalContainer.classList.add('maximized');
          terminalContainer.style.width = '90%';
          terminalContainer.style.height = '90vh';
          terminalContainer.style.top = '5vh';
          terminalContainer.style.left = '5%';
          isMaximized = true;
          
          if (isMinimized) toggleMinimize();
      }
  }

  
  closeBtn.addEventListener('click', () => {
      terminalContainer.style.display = 'none';
  });

  minimizeBtn.addEventListener('click', toggleMinimize);

  maximizeBtn.addEventListener('click', toggleMaximize);

  
  const commands = {
      help: {
          description: 'Show available commands',
          execute: () => {
              let helpText = '<span class="terminal-response">Available commands:</span>\n\n';
              Object.keys(commands).forEach(cmd => {
                  helpText += `<span class="terminal-command">${cmd}</span> - ${commands[cmd].description}\n`;
              });
              return helpText;
          }
      },
      about: {
          description: 'Show about information',
          execute: () => {
              return 'I am a Full Stack Developer with expertise in JavaScript, React, Node.js, and more.';
          }
      },
      projects: {
          description: 'List my projects',
          execute: () => {
              return 'My projects:\n\n- <span class="terminal-command">Skynest</span>: A peaceful retreat website\n- <span class="terminal-command">NeuroShell</span>: AI-powered shell\n- <span class="terminal-command">SignifyText</span>: Text analysis tool\n\nType <span class="terminal-command">view project [name]</span> for details.';
          }
      },
      contact: {
          description: 'Show contact information',
          execute: () => {
              return 'You can reach me at:\n\nEmail: <span class="terminal-command">zeeshan@example.com</span>\nLinkedIn: <span class="terminal-command">linkedin.com/in/zeeshan-ahmad-siddiqui</span>\nGitHub: <span class="terminal-command">github.com/ZeeshanAhmadsi</span>';
          }
      },
      clear: {
          description: 'Clear the terminal',
          execute: () => {
              terminalOutput.innerHTML = '<p class="terminal-response">Terminal cleared. Type \'help\' to see available commands.</p>';
              return '';
          }
      },
      exit: {
          description: 'Close the terminal',
          execute: () => {
              terminalContainer.style.display = 'none';
              return '';
          }
      },
      minimize: {
          description: 'Minimize the terminal',
          execute: () => {
              toggleMinimize();
              return 'Terminal minimized.';
          }
      },
      maximize: {
          description: 'Maximize the terminal',
          execute: () => {
              toggleMaximize();
              return isMaximized ? 'Terminal maximized.' : 'Terminal restored to normal size.';
          }
      }
  };

  
  terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          const command = terminalInput.value.trim();
          terminalInput.value = '';
          
          
          const commandLine = document.createElement('div');
          commandLine.className = 'terminal-line';
          commandLine.innerHTML = `
              <span class="terminal-prompt">visitor@portfolio:~$</span>
              <span class="terminal-command">${command}</span>
          `;
          terminalOutput.appendChild(commandLine);
          
          
          let response = '<span class="terminal-response">Command not found. Type <span class="terminal-command">help</span> for available commands.</span>';
          const cmd = command.split(' ')[0].toLowerCase();
          
          if (commands[cmd]) {
              const result = commands[cmd].execute();
              if (result) response = `<span class="terminal-response">${result}</span>`;
              else return; 
          }
          
          
          if (response) {
              const responseLine = document.createElement('div');
              responseLine.innerHTML = response;
              terminalOutput.appendChild(responseLine);
          }
          
          
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
  });

  
  terminalContainer.addEventListener('click', () => {
      terminalInput.focus();
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progress = skillItem.dataset.progress;
                const progressBar = skillItem.querySelector('.skill-progress');
                
                skillItem.classList.add('in-view');
                progressBar.style.setProperty('--progress', progress + '%');
                
                
                observer.unobserve(skillItem);
            }
        });
    }, observerOptions);
    
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
});


const typingAnimation = () => {
    if (window.__disableTyping) return;
    const isSmall = window.innerWidth <= 1024;
    const animatedText = document.querySelector('.animated-text');
    if (!animatedText) return;

    
    if (isSmall) {
        animatedText.textContent = 'Zeeshan Ahmad Siddiqui';
        return;
    }

    const texts = [
        'Zeeshan Ahmad Siddiqui',
        'Full Stack Developer'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1000;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            animatedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            animatedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? erasingDelay : typingDelay;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = newTextDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
};


const skillsAnimation = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progress = skillItem.dataset.progress;
                const progressBar = skillItem.querySelector('.skill-progress');
                
                
                skillItem.classList.add('animate-in');
                
                
                setTimeout(() => {
                    progressBar.style.width = `${progress}%`;
                    progressBar.style.opacity = '1';
                }, 200);
                
                
                observer.unobserve(skillItem);
            }
        });
    }, observerOptions);
    
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
};


document.addEventListener('DOMContentLoaded', () => {
    typingAnimation();
    skillsAnimation();
});


const createObserver = (elements, className, threshold = 0.2) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
};


const smoothScroll = (target) => {
    const element = document.querySelector(target);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};


const parallax = () => {
    const hero = document.querySelector('.hero-section');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled * 0.003);
    });
};


const navbarEffect = () => {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
};


const mouseMoveEffect = () => {
    const hero = document.querySelector('.hero-section');
    hero.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;

        const xPos = (offsetX / clientWidth) - 0.5;
        const yPos = (offsetY / clientHeight) - 0.5;

        const title = hero.querySelector('.hero-title');
        const subtitle = hero.querySelector('.hero-subtitle');
        const description = hero.querySelector('.hero-description');

        title.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
        subtitle.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
        description.style.transform = `translate(${xPos * 5}px, ${yPos * 5}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        const elements = hero.querySelectorAll('.hero-title, .hero-subtitle, .hero-description');
        elements.forEach(el => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'all 0.5s ease-out';
        });
    });
};


const videoManager = {
    init() {
        this.videos = {
            main: document.querySelector('.main-video'),
            about: document.querySelector('.about-video'),
            skills: document.querySelector('.skills-video'),
            projects: document.querySelector('.projects-video')
        };
        
        this.currentVideo = 'main';
        this.setupIntersectionObserver();
        this.setupVideoOptimization();
    },

    setupIntersectionObserver() {
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) {
                    this.transitionToVideo(sectionId);
                }
            });
        }, options);

        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    },

    setupVideoOptimization() {
        
        if (navigator.connection) {
            const connection = navigator.connection;
            if (connection.effectiveType === '4g') {
                this.enableHighQuality();
            } else {
                this.enableLowQuality();
            }
            
            connection.addEventListener('change', () => {
                if (connection.effectiveType === '4g') {
                    this.enableHighQuality();
                } else {
                    this.enableLowQuality();
                }
            });
        }

        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseInactiveVideos();
            } else {
                this.resumeActiveVideo();
            }
        });

        
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    },

    transitionToVideo(sectionId) {
        const previousVideo = this.videos[this.currentVideo];
        let nextVideo;

        switch(sectionId) {
            case 'about':
                nextVideo = this.videos.about;
                break;
            case 'skills':
                nextVideo = this.videos.skills;
                break;
            case 'projects':
                nextVideo = this.videos.projects;
                break;
            default:
                nextVideo = this.videos.main;
        }

        if (previousVideo !== nextVideo) {
            
            previousVideo.style.opacity = '0';
            previousVideo.setAttribute('aria-hidden', 'true');

            
            nextVideo.style.opacity = '1';
            nextVideo.setAttribute('aria-hidden', 'false');
            
            
            this.currentVideo = sectionId === 'home' ? 'main' : sectionId;

            
            const video = nextVideo.querySelector('video');
            if (video.paused) {
                video.play().catch(() => {});
            }
        }
    },

    enableHighQuality() {
        document.querySelectorAll('video').forEach(video => {
            video.style.filter = 'none';
        });
    },

    enableLowQuality() {
        document.querySelectorAll('video').forEach(video => {
            video.style.filter = 'blur(1px)';
        });
    },

    pauseInactiveVideos() {
        Object.values(this.videos).forEach(videoContainer => {
            if (videoContainer !== this.videos[this.currentVideo]) {
                const video = videoContainer.querySelector('video');
                video.pause();
            }
        });
    },

    resumeActiveVideo() {
        const activeVideo = this.videos[this.currentVideo].querySelector('video');
        activeVideo.play().catch(() => {});
    },

    handleResize() {
        const isMobile = window.innerWidth < 1024;
        document.querySelectorAll('video').forEach(video => {
            if (isMobile) {
                video.style.width = 'auto';
                video.style.height = '100vh';
            } else {
                video.style.width = '100vw';
                video.style.height = 'auto';
            }
        });
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const terminalContainer = document.querySelector('.terminal-container');
    if (terminalContainer) {
        terminalContainer.style.position = 'fixed';
        terminalContainer.style.bottom = '20px';
        terminalContainer.style.right = '20px';
        terminalContainer.style.zIndex = '1000';
    }
    
    
    const __isSmall = window.__isSmall || window.innerWidth <= 1024;
    if (!__isSmall) {
        try { videoManager.init(); } catch(e) {}
    }

    if (!window.__disableTyping) {
        try { typingAnimation(); } catch(e) {}
    }

    createObserver(document.querySelectorAll('.section'), 'visible');
    createObserver(document.querySelectorAll('.skill-item'), 'fade-in');
    createObserver(document.querySelectorAll('.project-card'), 'scale-in');

    if (!__isSmall) {
        try { parallax(); } catch(e) {}
        try { navbarEffect(); } catch(e) {}
        try { mouseMoveEffect(); } catch(e) {}
    }
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(anchor.getAttribute('href'));
        });
    });
});


document.querySelectorAll('.social-link').forEach(link => {
    
    const clone = link.cloneNode(true);
    link.parentNode.replaceChild(clone, link);
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.social-link').forEach(link => {
        link.style.cursor = 'pointer';
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('https://formspree.io/f/zeeshanahmad786', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                    formStatus.style.color = '#4CAF50';
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                formStatus.textContent = 'Sorry, there was an error sending your message. Please try again later.';
                formStatus.style.color = '#f44336';
            } finally {
                
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
});