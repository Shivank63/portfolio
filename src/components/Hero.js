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

            <h2>MERN Stack Developer | React & JavaScript Enthusiast</h2>

            <ul className="hero-points">
              <li>✅ Strong in <strong>MERN Stack</strong> – MongoDB, Express.js, React.js, Node.js</li>
              <li>🚀 Built multiple <strong>full-stack projects</strong> with real-world use cases</li>
              <li>🔁 <strong>API Integration expert</strong> – using Axios & React Query</li>
              <li>🎨 Designed <strong>eye-catching UI/UX</strong> with Tailwind CSS, Bootstrap & custom CSS</li>
              <li>⚛️ React proficiency – reusable components, state management with useContext & React Query</li>
              <li>🔒 Implemented <strong>JWT-based authentication & authorization</strong></li>
              <li>📦 Developed REST APIs, CRUD operations, and MongoDB schemas</li>
              <li>📈 <strong>Performance optimized</strong> and mobile-first design approach</li>
              <li>🧩 Clean, modular & maintainable codebase</li>
              <li>🛠️ Version control with <strong>Git & GitHub</strong></li>
              <li>🌱 Passionate about <strong>continuous learning</strong> & scalable design</li>
            </ul>
           
            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Shivank63" aria-label="GitHub">
                <i className="icon-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sv517/" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
            </div>
            <p class="contact-text">
  Contact No.: <span class="highlighted-number">6393224187</span>
</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
