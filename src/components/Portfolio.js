import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    'Programming Languages': ['Python', 'C', 'C++', 'JavaScript'],
    'Machine Learning & AI': ['OpenCV', 'OCR', 'Predictive Analytics', 'MCMC', 'RQA', 'FFT', 'Genetic Algorithms', 'RBF'],
    'IoT Technologies': ['Arduino', 'ESP32/ESP8266', 'Sensor Integration', 'Raspberry Pi'],
    'Developer Tools & Databases': ['Git', 'VS Code', 'Jupyter Notebook', 'SQL', 'MySQL', 'PostgreSQL'],
    'Web Technologies': ['React', 'Node.js', 'HTML/CSS', 'Bootstrap']
  };

  const projects = [
    {
      title: "Automated Vehicle Number Logging System",
      description: "Engineered a machine learning-powered vehicle identification system improving campus security through automated entry/exit logs. Achieved 95%+ recognition accuracy using OpenCV and OCR techniques.",
      tech: ["Python", "OpenCV", "OCR", "Machine Learning"],
      impact: "Improved campus security"
    },
    {
      title: "Face Tracking Camera for Live Meetings",
      description: "Developed an automated face tracking system with OpenCV to dynamically optimize camera framing, enhancing participant experience in online meetings.",
      tech: ["Python", "OpenCV", "Real-time Processing"],
      impact: "Enhanced meeting experience"
    },
    {
      title: "IoT-Based Home Automation System",
      description: "Designed a comprehensive smart home solution integrating multiple IoT devices with a centralized control interface for seamless user experience.",
      tech: ["Arduino", "ESP32", "IoT", "Mobile App"],
      impact: "Smart home automation"
    }
  ];

  // CSS content from portfolio.css
const cssContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    :root {
      --purple-light: #e879f9;
      --purple-medium: #a855f7;
      --purple-dark: #9333ea;
      --purple-darker: #7c3aed;
      --bg-color: #0a0a0a;
      --bg-secondary: rgba(20, 20, 20, 0.95);
      --glass-bg: rgba(255, 255, 255, 0.03);
      --glass-border: rgba(147, 51, 234, 0.2);
      --text-primary: #ffffff;
      --text-secondary: rgba(255, 255, 255, 0.85);
      --text-muted: rgba(255, 255, 255, 0.65);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: var(--bg-color);
      overflow-x: hidden;
    }

    /* Remove focus outlines */
    a:focus,
    button:focus,
    *:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    /* Enhanced Backgrounds */
    .bg-primary-dark {
      background-color: var(--bg-color);
      position: relative;
      overflow: hidden;
      min-height: 100vh;
    }

    .bg-secondary-dark {
      background: var(--bg-secondary);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      position: relative;
    }

    /* Enhanced Animated Background */
    .glass-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(192, 132, 252, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.1) 0%, transparent 40%);
      background-size: 300% 300%;
      animation: backgroundAnimate 25s ease infinite;
      pointer-events: none;
      z-index: 0;
    }

    .glass-bg > * {
      position: relative;
      z-index: 1;
    }

    @keyframes backgroundAnimate {
      0%, 100% {
        background-position: 0% 50%;
        opacity: 0.8;
      }
      25% {
        background-position: 100% 50%;
        opacity: 1;
      }
      50% {
        background-position: 100% 100%;
        opacity: 0.9;
      }
      75% {
        background-position: 0% 100%;
        opacity: 1;
      }
    }

    /* Enhanced Typography System */
    .typography-display {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: clamp(2.5rem, 6vw, 5rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg,
        var(--text-primary) 0%,
        #e5e7eb 30%,
        var(--purple-medium) 70%,
        var(--purple-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
      animation: textGlow 3s ease-in-out infinite alternate;
    }

    @keyframes textGlow {
      0% {
        filter: drop-shadow(0 0 10px rgba(147, 51, 234, 0.5));
      }
      100% {
        filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.8));
      }
    }

    .typography-heading {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    .typography-subheading {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      background: linear-gradient(135deg,
        var(--purple-dark) 0%,
        var(--purple-medium) 50%,
        var(--purple-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.01em;
    }

    .typography-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      color: var(--text-secondary);
      line-height: 1.8;
      letter-spacing: 0.01em;
    }

    .typography-body-light {
      color: var(--text-muted);
    }

    .typography-mono {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    /* Enhanced Cards with micro-interactions */
    .card-glass {
      background: var(--glass-bg);
      backdrop-filter: blur(25px);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      box-shadow:
        0 8px 32px rgba(147, 51, 234, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .card-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
        transparent,
        rgba(147, 51, 234, 0.1),
        transparent);
      transition: left 0.6s ease;
    }

    .card-glass:hover::before {
      left: 100%;
    }

    .card-glass:hover {
      transform: translateY(-6px) scale(1.02);
      background: rgba(255, 255, 255, 0.08);
      box-shadow:
        0 25px 80px rgba(147, 51, 234, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 0 60px rgba(147, 51, 234, 0.4);
      border-color: rgba(147, 51, 234, 0.5);
    }

    /* Enhanced Skill Badges */
    .skill-badge {
      background: rgba(147, 51, 234, 0.15);
      color: var(--purple-light);
      padding: 0.7rem 1.4rem;
      border-radius: 25px;
      margin: 0.4rem;
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid rgba(147, 51, 234, 0.3);
      backdrop-filter: blur(15px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      letter-spacing: 0.01em;
      position: relative;
      overflow: hidden;
    }

    .skill-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
        transparent,
        rgba(147, 51, 234, 0.3),
        transparent);
      transition: left 0.5s ease;
    }

    .skill-badge:hover::before {
      left: 100%;
    }

    .skill-badge:hover {
      background: rgba(147, 51, 234, 0.25);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 25px rgba(147, 51, 234, 0.4);
      color: #ffffff;
      border-color: rgba(147, 51, 234, 0.6);
    }

    /* Enhanced Section Titles */
    .section-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: clamp(2rem, 4vw, 3rem);
      background: linear-gradient(135deg,
        var(--text-primary) 0%,
        #e5e7eb 40%,
        var(--purple-dark) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 3.5rem;
      position: relative;
      letter-spacing: -0.03em;
      text-align: center;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg,
        transparent 0%,
        var(--purple-dark) 25%,
        var(--purple-medium) 75%,
        transparent 100%);
      border-radius: 2px;
      animation: underlineGlow 2s ease-in-out infinite alternate;
    }

    @keyframes underlineGlow {
      0% {
        box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
      }
      100% {
        box-shadow: 0 0 15px rgba(147, 51, 234, 0.8);
      }
    }

    /* Enhanced Timeline */
    .timeline-item {
      border-left: 2px solid rgba(147, 51, 234, 0.5);
      padding-left: 2rem;
      position: relative;
      margin-bottom: 2rem;
      transition: all 0.3s ease;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 0.5rem;
      width: 14px;
      height: 14px;
      background: linear-gradient(135deg, var(--purple-dark), var(--purple-medium));
      border-radius: 50%;
      box-shadow:
        0 0 0 4px rgba(147, 51, 234, 0.2),
        0 0 10px rgba(147, 51, 234, 0.5);
      transition: all 0.3s ease;
    }

    .timeline-item:hover {
      border-left-color: var(--purple-medium);
    }

    .timeline-item:hover::before {
      transform: scale(1.2);
      box-shadow:
        0 0 0 6px rgba(147, 51, 234, 0.3),
        0 0 20px rgba(147, 51, 234, 0.8);
    }

    /* Enhanced Buttons */
    .btn-primary-custom {
      background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple-medium) 100%);
      border: none;
      color: var(--text-primary);
      font-weight: 600;
      padding: 1rem 2rem;
      border-radius: 15px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
      position: relative;
      overflow: hidden;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .btn-primary-custom::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent);
      transition: left 0.6s ease;
    }

    .btn-primary-custom:hover::before {
      left: 100%;
    }

    .btn-primary-custom:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 35px rgba(147, 51, 234, 0.5);
      background: linear-gradient(135deg, var(--purple-darker) 0%, var(--purple-dark) 100%);
    }

    /* Enhanced Badges */
    .badge-custom {
      background: linear-gradient(135deg,
        rgba(147, 51, 234, 0.2),
        rgba(168, 85, 247, 0.3));
      color: var(--purple-light);
      border: 1px solid rgba(147, 51, 234, 0.4);
      font-weight: 500;
      padding: 0.6rem 1.2rem;
      border-radius: 12px;
      backdrop-filter: blur(15px);
      transition: all 0.3s ease;
      font-size: 0.875rem;
    }

    .badge-custom:hover {
      background: linear-gradient(135deg,
        rgba(147, 51, 234, 0.3),
        rgba(168, 85, 247, 0.4));
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
    }

    /* Enhanced About Section */
    .about-section {
      padding: 4rem;
      border-radius: 25px;
      position: relative;
      max-width: 1000px;
      margin: 5rem auto;
      background: var(--glass-bg);
      backdrop-filter: blur(25px);
      border: 1px solid var(--glass-border);
      box-shadow:
        0 20px 60px rgba(147, 51, 234, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .about-section .tagline {
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
      display: inline-block;
      background: linear-gradient(135deg,
        var(--purple-light),
        var(--purple-medium),
        var(--purple-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
      text-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
      line-height: 1.4;
    }

    .about-section p {
      margin-bottom: 2rem;
      z-index: 1;
      position: relative;
    }

    /* Enhanced Profile Image */
    .profile-image {
      width: 320px;
      height: 320px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow:
        0 15px 50px rgba(147, 51, 234, 0.4),
        0 0 0 8px rgba(147, 51, 234, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: 4px solid rgba(147, 51, 234, 0.3);
    }

    .profile-image:hover {
      transform: scale(1.08) rotate(2deg);
      box-shadow:
        0 25px 80px rgba(147, 51, 234, 0.6),
        0 0 0 12px rgba(147, 51, 234, 0.2);
      border-color: rgba(147, 51, 234, 0.6);
    }

    /* Custom Scrollbar Enhanced */
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, var(--purple-dark), var(--purple-medium));
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, var(--purple-darker), var(--purple-dark));
      box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
    }

    /* Contact Icons */
    .contact-icon {
      color: var(--purple-dark);
      margin-right: 0.75rem;
      font-size: 1.2em;
      opacity: 0.9;
      transition: all 0.3s ease;
    }

    .contact-icon:hover {
      color: var(--purple-medium);
      transform: scale(1.2);
      text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
    }

    /* Responsive Design Improvements */
    @media (max-width: 768px) {
      .about-section {
        padding: 2rem;
        margin: 2rem auto;
      }

      .profile-image {
        width: 250px;
        height: 250px;
      }

      .section-title {
        margin-bottom: 2rem;
      }

      .card-glass {
        margin-bottom: 1.5rem;
      }

      .skill-badge {
        margin: 0.2rem;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .about-section {
        padding: 1.5rem;
      }

      .profile-image {
        width: 200px;
        height: 200px;
      }

      .typography-display {
        font-size: 2rem;
      }

      .about-section .tagline {
        font-size: 1.1rem;
      }
    }

    /* Loading Animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-in {
      animation: fadeInUp 0.6s ease forwards;
    }

    /* Stagger animation delays */
    .fade-in:nth-child(1) { animation-delay: 0.1s; }
    .fade-in:nth-child(2) { animation-delay: 0.2s; }
    .fade-in:nth-child(3) { animation-delay: 0.3s; }
    .fade-in:nth-child(4) { animation-delay: 0.4s; }
    .fade-in:nth-child(5) { animation-delay: 0.5s; }
  `;

  return (
    <div className="bg-primary-dark text-light min-vh-100 glass-bg">
      {/* Embed CSS in style tag */}
      <style dangerouslySetInnerHTML={{ __html: cssContent }} />

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary-dark fixed-top" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="container">
          <a className="navbar-brand typography-subheading" href="#home">Gowtham M</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section} className="nav-item">
                  <button
                    className={`nav-link btn btn-link ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                    style={{
                      background: activeSection === section ? 'rgba(147, 51, 234, 0.2)' : 'transparent',
                      borderRadius: '8px',
                      margin: '0 0.25rem'
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-5 bg-secondary-dark" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className={`row align-items-center mb-5 ${isVisible ? 'fade-in' : ''}`}>
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img
                src="/image.JPG"
                alt="Gowtham M - Profile"
                className="img-fluid profile-image"
              />
            </div>
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="typography-display mb-4">Gowtham M</h1>
              <h3 className="typography-subheading fs-2 mb-4">Machine Learning & AI Professional</h3>
              <p className="typography-body fs-5 mb-4">
                Transforming ideas into intelligent solutions through code, circuits, and creativity.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                <button
                  className="btn btn-primary-custom"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">About Me</h2>
            <p className="typography-subheading mt-3 mb-5">
              Code, circuits, and curiosity — creating solutions that make an impact.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="typography-body mb-4">
                I’m Gowtham, a third-year IT student passionate about turning ideas into working solutions — 
                whether that means crafting efficient Python code, building hardware systems, or merging both worlds. 
                I thrive on the challenge of solving complex problems, from tracking down elusive bugs to 
                figuring out why a circuit refuses to cooperate.
              </p>
              <p className="typography-body mb-4">
                What fuels me is that <em>“aha”</em> moment when a tough problem finally clicks into place. 
                My interests span computer vision, IoT, and machine learning, and I’m fascinated by how 
                these technologies can intersect to create innovative and impactful solutions.
              </p>
              <p className="typography-body">
                I’m endlessly curious and driven — always exploring, always learning, and always ready 
                to tackle the next challenge. For me, building isn’t just a skill, it’s a mindset, and I’m 
                eager to connect with fellow innovators, problem-solvers, and mentors who share the same 
                passion for making things work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-5 bg-secondary-dark">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card card-glass fade-in">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h4 className="typography-subheading mb-3">Bachelor of Technology in Information Technology</h4>
                      <h5 className="typography-heading mb-3">Easwari Engineering College</h5>
                      <p className="typography-body-light mb-0">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                      <span className="badge-custom typography-mono">2023 – 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100 fade-in">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                    <h4 className="typography-subheading mb-2">Student Research Intern</h4>
                    <span className="badge-custom typography-mono">2024 – 2027</span>
                  </div>
                  <h5 className="typography-heading mb-4">Easwari Engineering College - R&D Department</h5>
                  <div className="timeline-item">
                    <p className="typography-body">Contributed to innovative research initiatives on emerging technologies, applying advanced methodologies to solve practical challenges</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Collaborated with faculty to develop cutting-edge technology projects in the R&D department</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100 fade-in">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
                    <h4 className="typography-subheading mb-2">Vice president</h4>
                    <span className="badge-custom typography-mono">2023 – Present</span>
                  </div>
                  <h5 className="typography-heading mb-4">TechSaavy Tech Club</h5>
                  <div className="timeline-item">
                    <p className="typography-body">Led organized hackathons, engaging 500+ participants and growing active student participation by 200%</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Mentored 150+ junior students in coding, project management, and technical best practices</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body mb-0">Organized 20+ technical workshops and training sessions for skill development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100 fade-in">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                    <h4 className="typography-subheading mb-2">Machine Learning & AI Intern</h4>
                    <span className="badge-custom typography-mono">Current</span>
                  </div>
                    <h5 className="typography-heading mb-4">TVS Next</h5>
                  <div className="timeline-item">
                    <p className="typography-body">Orchestrated paradigm-shifting predictive maintenance architectures through sophisticated statistical modeling and analysis methodologies, substantially mitigating equipment downtime</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Pioneered cutting-edge vibration analysis ecosystems for omnipresent asset health surveillance and preemptive anomaly detection</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Revolutionized manufacturing paradigms through ingenious optimization strategies, catalyzing unprecedented operational excellence and throughput amplification</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body mb-0">Metamorphosed supply chain dynamics via sophisticated neural network optimization, precipitating profound cost efficiencies and inventory rationalization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section id="projects" className="py-5 bg-secondary-dark">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card card-glass h-100 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-body p-4">
                    <h4 className="typography-subheading mb-3">{project.title}</h4>
                    <p className="typography-body mb-3">{project.description}</p>
                    <div className="mb-3">
                      <h6 className="typography-heading mb-2" style={{ fontSize: '0.9rem' }}>Technologies Used:</h6>
                      <div className="d-flex flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-badge me-2 mb-2" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge-custom typography-mono" style={{ fontSize: '0.75rem' }}>
                        Impact: {project.impact}
                      </span>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="fas fa-external-link-alt me-1"></i>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="col-lg-6 mb-4">
                <div className="card card-glass h-100 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-body p-4">
                    <h4 className="typography-subheading mb-4">{category}</h4>
                    <div className="d-flex flex-wrap">
                      {skillList.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge typography-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="card card-glass fade-in">
                <div className="card-body p-4 text-center">
                  <h4 className="typography-subheading mb-4">Core Competencies</h4>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="text-center">
                        <i className="fas fa-brain contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                        <h6 className="typography-heading">Machine Learning</h6>
                        <p className="typography-body-light small">Advanced algorithms & optimization</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-center">
                        <i className="fas fa-eye contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                        <h6 className="typography-heading">Computer Vision</h6>
                        <p className="typography-body-light small">Image processing & analysis</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-center">
                        <i className="fas fa-microchip contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                        <h6 className="typography-heading">IoT Development</h6>
                        <p className="typography-body-light small">Hardware & software integration</p>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-center">
                        <i className="fas fa-chart-line contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                        <h6 className="typography-heading">Data Analytics</h6>
                        <p className="typography-body-light small">Insights & predictive modeling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-secondary-dark">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card card-glass fade-in">
                <div className="card-body p-5 text-center">
                  <h4 className="typography-subheading mb-4">Let's Build Something Amazing Together</h4>
                  <p className="typography-body mb-4">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects,
                    or simply chat about technology and innovation.
                  </p>
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <i className="fas fa-envelope contact-icon" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}></i>
                        <h6 className="typography-heading mb-1">Email</h6>
                        <p className="typography-body-light small mb-0">stildusman@gmail.com</p>  
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <a 
                          href="https://www.linkedin.com/in/gowtham-off" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                        <i className="fab fa-linkedin contact-icon" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}></i>
                        <h6 className="typography-heading mb-1">LinkedIn</h6>
                        <p className="typography-body-light small mb-0">linkedin.com/in/gowtham-off</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <a 
                          href="https://github.com/Gowtham007-M" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                        <i className="fab fa-github contact-icon" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}></i>
                        <h6 className="typography-heading mb-1">GitHub</h6>
                        <p className="typography-body-light small mb-0">github.com/Gowtham007-M</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <a
                      href="mailto:stildusman@gmail.com"
                      className="btn btn-primary-custom"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <i className="fas fa-envelope me-2"></i>
                      Send Email
                    </a>
                    <button className="btn btn-outline-light">
                      <i className="fas fa-download me-2"></i>
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="typography-body mb-2">
                &copy; 2025 Gowtham M. All rights reserved.
              </p>
              <p className="typography-body-light small mb-0">
                Built with React & modern web technologies
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className="btn position-fixed"
        style={{
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          zIndex: 1050,
          display: activeSection === 'home' ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          border: 'none',
          boxShadow: '0 8px 32px rgba(147, 51, 234, 0.4)',
          transition: 'all 0.3s ease',
          color: 'white'
        }}
        onClick={() => scrollToSection('home')}
        title="Back to top"
      >
        <i className="fas fa-arrow-up" style={{ fontSize: '20px' }}></i>
      </button>
    </div>
  );
};

export default Portfolio;