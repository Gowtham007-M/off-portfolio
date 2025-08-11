import './portfolio.css' ;


const Portfolio = () => {
  return (
    <div className="bg-primary-dark text-light min-vh-100 glass-bg" style={{position: 'relative'}}>

      {/* Header Section */}
      <section className="py-5 bg-secondary-dark">
        <div className="container">
          
          {/* Top Row: Image + Name */}
          <div className="row align-items-center mb-5">
            
            {/* Image */}
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img 
                src="/image.png" 
                alt="Profile" 
                className="img-fluid"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(147, 51, 234, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
                }}
              />
            </div>

            {/* Name + Title */}
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="typography-display mb-3">Gowtham M</h1>
              <h3 className="typography-subheading fs-2">Machine Learning & AI Professional</h3>
            </div>
          </div>

          {/* About Me Full Width */}
          <section className="about-section bg-secondary-dark glass-bg card-glass">
            <h2 className="section-title">About Me</h2>
            <p className="tagline typography-subheading">Code, circuits, and curiosity — building things that actually work.</p>
            
            <p className="typography-body">
              I’m a third-year IT student passionate about turning ideas into working solutions — whether that means writing efficient code or bringing hardware projects to life.
              I love the challenge of making things work, from debugging tricky Python scripts to diagnosing stubborn circuit issues.
            </p>

            <p className="typography-body">
              What fuels me is that “aha” moment when a tough problem finally comes together. My interests span computer vision, IoT, and machine learning —
              and I enjoy exploring how these technologies can blend to create something new and impactful.
            </p>

            <p className="typography-body">
              Currently, I’m expanding my skills in data science and ML while working on practical, hands-on projects.
              I’m endlessly curious, always learning, and eager to collaborate with people who share the same drive for building and problem-solving.
            </p>
          </section>

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
                <h4 className="typography-subheading">Associate Head</h4>
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