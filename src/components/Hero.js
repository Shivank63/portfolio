import "./Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-image-container">
            <div className="profile-image">
              <img src="/shivank image.jpeg" alt="Profile" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <h1>
              Hi, I'm <span className="highlight">Shivank Verma</span>
            </h1>

            <h2>MERN Developer | React & JavaScript Enthusiast</h2>

            <p>
              I'm a passionate web developer with 6 months Internship experience creating beautiful, responsive, and
              user-friendly websites. I specialize in modern JavaScript frameworks and have a keen eye for design and
              user experience.
            </p>

            {/* Social Links */}
            <div className="social-links">
              <a href="#" aria-label="GitHub">
                <i className="icon-github"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="icon-twitter"></i>
              </a>
            </div>

            {/* CTA Button */}
            <button className="cta-button">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
