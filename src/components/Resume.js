import "./Resume.css"

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-content">
          <h2>My Resume</h2>

          <p>
            Download my resume to learn more about my skills, experience, and qualifications. Feel free to reach out if
            you have any questions or would like to discuss potential opportunities.
          </p>

          <div className="resume-buttons">
            <button className="download-button">
              <i className="icon-download"></i>
              Download CV
            </button>

            <button className="preview-button">
              <i className="icon-eye"></i>
              Preview CV
            </button>
          </div>

          {/* Resume Preview (Optional) */}
          <div className="resume-preview">
            <h3>Resume Highlights</h3>

            <div className="resume-highlights">
              <div className="highlight-section">
                <h4>Key Skills</h4>
                <ul>
                  <li>Frontend Development (React, JavaScript)</li>
                  <li>Responsive Web Design</li>
                  <li>UI/UX Design Principles</li>
                  <li>Performance Optimization</li>
                  <li>Accessibility (WCAG)</li>
                </ul>
              </div>

              <div className="highlight-section">
                <h4>Achievements</h4>
                <ul>
                  <li>Reduced load time by 40% on main product</li>
                  <li>Led team of 5 developers on key project</li>
                  <li>Implemented CI/CD pipeline for faster deployments</li>
                  <li>Speaker at React Conference 2022</li>
                  <li>Open source contributor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
