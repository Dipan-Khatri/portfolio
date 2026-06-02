 import "./index.css";

import socDashboard from "./assets/soc-dashboard.png";
import splunkAlerts from "./assets/splunk-alerts.png";
import splunkSearch from "./assets/splunk-search.png";
import splunkInvestigation from "./assets/splunk-investigation.png";
import aiLogAnalyzer from "./assets/ai-log-analyzer.png";

function App() {
  return (
    <main>

      {/* LEFT SOCIAL */}
      <div className="left-social">
        <a
          href="https://github.com/Dipan-Khatri"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dipan-khatri-thapa/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

      {/* RIGHT EMAIL */}
      <div className="right-email">
        <a href="mailto:kcdipan13@gmail.com">
          kcdipan13@gmail.com
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">dipan.sec</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-left">

          <p className="tag">
            // cybersecurity · soc analyst candidate
          </p>

          <h1>
            Dipan
            <br />
            Khatri
            <br />
            Thapa.
          </h1>

          <h2>
            Building Security Labs
            <br />
            & Detection Workflows.
          </h2>

          <p className="hero-text">
            Aspiring SOC Analyst focused on
            AI-assisted threat detection,
            SIEM monitoring, and modern
            security operations. I build
            hands-on cybersecurity labs that
            simulate real-world incident
            investigation workflows.
          </p>

          <div className="buttons">

            <a
              className="btn primary"
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="btn secondary"
              href="mailto:kcdipan13@gmail.com"
            >
              Contact Me
            </a>

            <a
              className="btn secondary"
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </a>

          </div>
        </div>

        {/* HERO CARD */}

        <div className="hero-card">

          <p className="card-label">
            SYSTEM STATUS
          </p>

          <h3>ONLINE</h3>

          <p>
            SOC Level 1 · Splunk · Python · Linux
          </p>

          <div className="status-box">
            <span></span>
            Open to Summer 2026 Internships
          </div>

          <div className="card-line"></div>

          <div className="mini-stats">

            <div className="mini-box">
              <h4>5+</h4>
              <p>Projects</p>
            </div>

            <div className="mini-box">
              <h4>3+</h4>
              <p>SOC Labs</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="section two-column"
      >

        <div>
          <p className="section-number">
            01 / ABOUT
          </p>

          <h2>About Me</h2>
        </div>

        <div>
          <p>
            I am a cybersecurity student focused
            on SOC operations, SIEM monitoring,
            alert triage, phishing analysis,
            and incident response workflows.
            I enjoy building hands-on labs
            that simulate real-world threat
            detection and investigation workflows.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section"
      >

        <p className="section-number">
          02 / EXPERIENCE
        </p>

        <h2>Experience</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="year">
              2025 — Present
            </div>

            <div>
              <h3>
                Cybersecurity Projects & SOC Labs
              </h3>

              <p>
                Built hands-on labs using Splunk
                and Python to practice log
                monitoring, brute-force detection,
                alert triage, and incident
                documentation.
              </p>
            </div>
          </div>

          <div className="timeline-item">

            <div className="year">
              2024 — 2025
            </div>

            <div>
              <h3>
                IT Help Desk Assistant
              </h3>

              <p>
                Supported students and staff with
                troubleshooting, account access,
                software issues, and technical
                problem-solving.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section"
      >

        <p className="section-number">
          03 / PROJECTS
        </p>

        <h2>Featured Projects</h2>

        <div className="project-grid">

          {/* PROJECT 1 */}

          <div className="project-card">

            <img
              src={socDashboard}
              alt="SOC Dashboard"
              className="project-image"
            />

            <p className="project-number">
              01 / SPLUNK
            </p>

            <h3>
              SOC Log Monitoring Dashboard
            </h3>

            <p>
              Built Splunk dashboards to monitor
              failed logins, suspicious IPs,
              targeted users, and login activity
              trends.
            </p>

            <span>
              Splunk · SIEM · Log Analysis
            </span>

            <div className="project-links">
              <a
                href="https://github.com/Dipan-Khatri/SOC-Log-Monitoring-Dashboard"
                target="_blank"
              >
                View GitHub →
              </a>
            </div>

          </div>

          {/* PROJECT 2 */}

          <div className="project-card">

            <img
              src={splunkAlerts}
              alt="Splunk Alerts"
              className="project-image"
            />

            <p className="project-number">
              02 / ALERTING
            </p>

            <h3>
              Brute Force Detection Alert
            </h3>

            <p>
              Created SPL detection logic and
              configured Splunk alerts to detect
              repeated failed login attempts.
            </p>

            <span>
              Splunk · Detection Engineering
            </span>

            <div className="project-links">
              <a
                href="https://github.com/Dipan-Khatri/Brute-Force-Detection-Splunk"
                target="_blank"
              >
                View GitHub →
              </a>
            </div>

          </div>

          {/* PROJECT 3 */}

          <div className="project-card">

            <img
              src={splunkSearch}
              alt="Splunk Search"
              className="project-image"
            />

            <p className="project-number">
              03 / INVESTIGATION
            </p>

            <h3>
              Login Event Investigation
            </h3>

            <p>
              Investigated login events in Splunk
              using search queries to review users,
              IP addresses, locations, and suspicious
              authentication patterns.
            </p>

            <span>
              Splunk · Threat Investigation
            </span>

            <div className="project-links">
              <a
                href="https://github.com/Dipan-Khatri/Phishing-Detection-Simulation"
                target="_blank"
              >
                View GitHub →
              </a>
            </div>

          </div>

          {/* PROJECT 4 */}

          <div className="project-card">

            <img
              src={splunkInvestigation}
              alt="Phishing Investigation"
              className="project-image"
            />

            <p className="project-number">
              04 / PHISHING
            </p>

            <h3>
              Phishing Activity Analysis
            </h3>

            <p>
              Analyzed suspicious login behavior,
              mailbox forwarding activity,
              user activity, and source IPs
              using Splunk statistics.
            </p>

            <span>
              Splunk · Phishing Analysis
            </span>

            <div className="project-links">
              <a
                href="https://github.com/Dipan-Khatri/Phishing-Detection-Simulation"
                target="_blank"
              >
                View GitHub →
              </a>
            </div>

          </div>

          {/* PROJECT 5 */}

          <div className="project-card">

            <img
              src={aiLogAnalyzer}
              alt="AI Log Analyzer"
              className="project-image"
            />

            <p className="project-number">
              05 / PYTHON
            </p>

            <h3>
              AI-Assisted Log Analyzer
            </h3>

            <p>
              Built a Python tool that parses SSH logs,
              identifies suspicious IP addresses,
              counts failed logins, and generates
              a security analysis report.
            </p>

            <span>
              Python · Regex · Automation
            </span>

            <div className="project-links">
              <a
                href="https://github.com/Dipan-Khatri/AI-Assisted-Log-Analyzer"
                target="_blank"
              >
                View GitHub →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section"
      >

        <p className="section-number">
          04 / SKILLS
        </p>

        <h2>Technical Skills</h2>

        <div className="skills">

          <span>Splunk</span>
          <span>Python</span>
          <span>Linux</span>
          <span>SIEM</span>
          <span>Threat Detection</span>
          <span>Log Analysis</span>
          <span>Incident Response</span>
          <span>Regex</span>
          <span>Cybersecurity</span>
          <span>React</span>
          <span>GitHub</span>

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section contact"
      >

        <p className="section-number">
          05 / CONTACT
        </p>

        <h2>Let's Connect</h2>

        <p>
          I am open to cybersecurity internships,
          SOC analyst opportunities, and
          security-related projects.
        </p>

        <div className="buttons">

          <a
            className="btn primary"
            href="mailto:kcdipan13@gmail.com"
          >
            Email Me
          </a>

          <a
            className="btn secondary"
            href="https://github.com/Dipan-Khatri"
            target="_blank"
          >
            GitHub
          </a>

          <a
            className="btn secondary"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </a>

        </div>
      </section>

      {/* FOOTER */}

      <footer>
        Designed & Built by Dipan Khatri Thapa
      </footer>

    </main>
  );
}

export default App;