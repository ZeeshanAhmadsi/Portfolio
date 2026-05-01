export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
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

export const skills = [
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

export const projects = [
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

export const certificates = [
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

export const hobbies = [
  { title: 'Coding', icon: 'fas fa-code', description: 'Passionate about creating innovative solutions and exploring new technologies.' },
  { title: 'Reading', icon: 'fas fa-book', description: 'Avid reader of tech articles, novels, and self-improvement books.' },
  { title: 'Music', icon: 'fas fa-music', description: 'Music enthusiast who finds inspiration across genres.' },
  {
    title: 'Badminton',
    icon: 'fas fa-table-tennis-paddle-ball',
    description: 'Enjoy the thrill of the game; it keeps me active and sharp.',
  },
];

export const socials = [
  { icon: 'fab fa-github', href: 'https://github.com/ZeeshanAhmadsi', label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/zeeshan-ahmad-siddiqui', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/zeeshanahmad.si', label: 'Instagram' },
  { icon: 'fas fa-code', href: 'https://leetcode.com/u/khanzeeshan84854/', label: 'LeetCode' },
];

export const terminalCommands = {
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
