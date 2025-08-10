const Portfolio = () => {
  return (
    <div className="bg-primary-dark text-light min-vh-100 glass-bg" style={{position: 'relative'}}>
      {/* Enhanced Typography & Purple Theme CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        :root {
          --purple-light: #e879f9;
          --purple-medium: #a855f7;
          --purple-dark: #9333ea;
          --bg-color: #0a0a0a;
          --bg-secondary: rgba(20, 20, 20, 0.95);
        }

        .bg-primary-dark { 
          background-color: var(--bg-color);
          position: relative;
          overflow: hidden;
        }

        .bg-secondary-dark { 
          background: var(--bg-secondary);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.1);
        }

        /* Futuristic Animated Background */
        .glass-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(192, 132, 252, 0.1) 0%, transparent 40%);
          background-size: 200% 200%;
          animation: backgroundAnimate 20s ease infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes backgroundAnimate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Typography System */
        .typography-display {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, var(--purple-medium) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 10px rgba(147, 51, 234, 0.5), 0 0 20px rgba(147, 51, 234, 0.3);
        }
        
        .typography-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .typography-subheading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple-medium) 50%, var(--purple-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.005em;
        }
        
        .typography-body {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          letter-spacing: 0.01em;
        }
        
        .typography-body-light {
          color: rgba(255, 255, 255, 0.65);
        }
        
        .typography-mono {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        
        /* Enhanced Cards */
        .card-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-glass:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 20px 60px rgba(147, 51, 234, 0.2), 
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 40px rgba(147, 51, 234, 0.5); /* This is the new glow */
          border-color: rgba(147, 51, 234, 0.4);
        }
        
        /* Skill Badges */
        .skill-badge {
          background: rgba(147, 51, 234, 0.1);
          color: #e879f9;
          padding: 0.6rem 1.2rem;
          border-radius: 24px;
          margin: 0.3rem;
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(147, 51, 234, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.01em;
        }
        
        .skill-badge:hover {
          background: rgba(147, 51, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(147, 51, 234, 0.3);
        }
        
        /* Section Titles */
        .section-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 30%, var(--purple-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3rem;
          position: relative;
          letter-spacing: -0.02em;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--purple-dark) 0%, var(--purple-medium) 50%, transparent 100%);
          border-radius: 2px;
        }
        
        /* Profile Image */
        /* Remove this block completely */
        .profile-image-container {
        width: 280px;
        height: 280px;
        background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%);
        border: 3px solid;
        border-image: linear-gradient(135deg, var(--purple-dark), var(--purple-medium), var(--purple-light)) 1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(147, 51, 234, 0.8);
        font-size: 1.1rem;
        text-align: center;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 60px rgba(147, 51, 234, 0.2);
        }

        .profile-image-container::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(135deg, var(--purple-dark), var(--purple-medium), var(--purple-light));
        border-radius: 50%;
        z-index: -1;
        animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
        
        /* Contact Icons */
        .contact-icon {
          color: var(--purple-dark);
          margin-right: 0.75rem;
          font-size: 1.1em;
          opacity: 0.9;
        }
        
        /* Timeline */
        .timeline-item {
          border-left: 2px solid rgba(147, 51, 234, 0.4);
          padding-left: 1.75rem;
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, var(--purple-dark), var(--purple-medium));
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.2);
        }
        
        /* Buttons */
        .btn-primary-custom {
          background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple-medium) 100%);
          border: none;
          color: #ffffff;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(147, 51, 234, 0.3);
        }
        
        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(147, 51, 234, 0.4);
          background: linear-gradient(135deg, #7c3aed 0%, var(--purple-dark) 100%);
        }
        
        /* Badges */
        .badge-custom {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.3));
          color: var(--purple-light);
          border: 1px solid rgba(147, 51, 234, 0.4);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--purple-dark), var(--purple-medium));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed, var(--purple-dark));
        }
      `}</style>

      {/* Header Section */}
      <section className="py-5 bg-secondary-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img 
                src="/image.png" 
                alt="Profile" 
                className="img-fluid"
                style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)", /* Purple glow */
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    objectFit: "cover"
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(147, 51, 234, 0.6)'; /* More intense purple glow on hover */
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
                }}
              />
            </div>
            <div className="col-lg-8">
              <h1 className="typography-display mb-4">Gowtham M</h1>
              <h3 className="typography-subheading mb-4 fs-2">Machine Learning & AI Professional</h3>
              <p className="typography-body lead mb-4">
                Results-driven Machine Learning and AI professional with hands-on experience in computer vision and predictive analytics. Successfully developed predictive maintenance solutions that reduced equipment downtime significantly through advanced forecasting models.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <p className="typography-body mb-3">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    Chennai, Tamil Nadu
                  </p>
                  <p className="typography-body mb-3">
                    <i className="fas fa-phone contact-icon"></i>
                    +91 9003780307
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="typography-body mb-3">
                    <i className="fas fa-envelope contact-icon"></i>
                    40eecgowtham@gmail.com
                  </p>
                  <p className="typography-body mb-3">
                    <i className="fab fa-linkedin contact-icon"></i>
                    gowtham-off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="card card-glass">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h4 className="typography-subheading mb-3">Bachelor of Technology in Information Technology</h4>
                  <h5 className="typography-heading mb-2">Easwari Engineering College</h5>
                  <p className="typography-body-light mb-0">Chennai, Tamil Nadu</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="badge-custom typography-mono">2023 – 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-5 bg-secondary-dark">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <h4 className="typography-subheading">Machine Learning & AI Intern</h4>
                    <span className="badge-custom typography-mono">Apr 2025 – Sep 2025</span>
                  </div>
                  <h5 className="typography-heading mb-4">TVS Next</h5>
                  <div className="timeline-item">
                    <p className="typography-body">Achieved significant reduction in equipment downtime by developing predictive maintenance solutions using MCMC and RQA techniques</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Implemented vibration analysis system with Fast Fourier Transform (FFT)</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body">Optimized production processes using Genetic Algorithms (GA), leading to measurable increase in operational efficiency</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body mb-0">Enhanced inventory management via Radial Basis Function (RBF) optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <h4 className="typography-subheading">Student Research Intern</h4>
                    <span className="badge-custom typography-mono">2024 – 2027</span>
                  </div>
                  <h5 className="typography-heading mb-4">Easwari Engineering College - R&D Department</h5>
                  <div className="timeline-item">
                    <p className="typography-body">Contributed to innovative research initiatives on emerging technologies, applying advanced methodologies to solve practical challenges</p>
                  </div>
                  <div className="timeline-item">
                    <p className="typography-body mb-0">Collaborated with faculty to develop cutting-edge technology projects in the R&D department</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">Automated Vehicle Number Logging System</h4>
                  <p className="typography-body">Engineered a machine learning-powered vehicle identification system improving campus security through automated entry/exit logs. Achieved high recognition accuracy using OpenCV and OCR techniques.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">Face Tracking Camera for Live Meetings</h4>
                  <p className="typography-body">Developed an automated face tracking system with OpenCV to dynamically optimize camera framing, enhancing participant experience in online meetings.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">IoT-Based Home Automation System</h4>
                  <p className="typography-body">Designed a smart home solution integrating multiple IoT devices for centralized and user-friendly control interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Experience Section */}
      <section className="py-5 bg-secondary-dark">
        <div className="container">
          <h2 className="section-title">Leadership Experience</h2>
          <div className="card card-glass">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <h4 className="typography-subheading">Joint Associate Head</h4>
                <span className="badge-custom typography-mono">2023 – Present</span>
              </div>
              <h5 className="typography-heading mb-4">TechSaavy Tech Club</h5>
              <div className="row">
                <div className="col-md-4">
                  <div className="timeline-item">
                    <p className="typography-body">Led organization of multiple hackathons, engaging and growing active student participation</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="timeline-item">
                    <p className="typography-body">Mentored 150+ junior students in coding, project management, and technical best practices</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="timeline-item">
                    <p className="typography-body mb-0">Organized technical workshops and training sessions for junior students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">Programming Languages</h4>
                  <div>
                    <span className="skill-badge typography-mono">Python</span>
                    <span className="skill-badge typography-mono">C</span>
                    <span className="skill-badge typography-mono">C++</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">Machine Learning & Vision</h4>
                  <div>
                    <span className="skill-badge typography-mono">OpenCV</span>
                    <span className="skill-badge typography-mono">OCR</span>
                    <span className="skill-badge typography-mono">Predictive Analytics</span>
                    <span className="skill-badge typography-mono">MCMC</span>
                    <span className="skill-badge typography-mono">RQA</span>
                    <span className="skill-badge typography-mono">FFT</span>
                    <span className="skill-badge typography-mono">Genetic Algorithms</span>
                    <span className="skill-badge typography-mono">RBF</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">IoT Technologies</h4>
                  <div>
                    <span className="skill-badge typography-mono">Arduino</span>
                    <span className="skill-badge typography-mono">ESP32/ESP8266</span>
                    <span className="skill-badge typography-mono">Sensor Integration</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card card-glass h-100">
                <div className="card-body">
                  <h4 className="typography-subheading mb-3">Developer Tools & Databases</h4>
                  <div>
                    <span className="skill-badge typography-mono">Git</span>
                    <span className="skill-badge typography-mono">Visual Studio Code</span>
                    <span className="skill-badge typography-mono">Jupyter Notebook</span>
                    <span className="skill-badge typography-mono">SQL</span>
                    <span className="skill-badge typography-mono">MySQL</span>
                    <span className="skill-badge typography-mono">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-secondary-dark text-center">
        <div className="container">
          <p className="typography-body mb-0">&copy; 2025 Gowtham M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;   