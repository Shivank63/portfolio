import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About */}
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              A passionate web developer focused on creating beautiful, responsive, and user-friendly websites and
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="icon-mail"></i>
                <span>shivankverma9838@gmail.com</span>
              </li>
              <li>
                <i className="icon-phone"></i>
                <span>+91 6393224187</span>
              </li>
              <li>
                <i className="icon-map-pin"></i>
                <span>Munshipuliya, Lucknow</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="#" aria-label="GitHub">
                <i className="icon-github"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
    
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shivank Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
