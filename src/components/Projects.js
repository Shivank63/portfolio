import "./Projects.css"

const projects = [
  {
    title: "Blog-Swipe Web",
    description: "Blog Swipe is a feature-rich, responsive blogging platform designed for seamless user interaction and content management. Developed using the MERN stack ",
    image: "/blogswipe.png",
    technologies: ["React JS", "JavaScript", "Node JS", "MongoDB"],
    githubUrl: "https://github.com/Shivank63/blog-swipe",
    liveUrl: "https://blogswipe-shivank63s-projects.vercel.app/",
  },
  {
    title: "Meta Marketing Web",
    description: "A modern, fully animated portfolio website built using React.js, Framer Motion, and Tailwind CSS, designed to showcase PS Meta Works' creative branding services",
    image: "/meta works.png",
    technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Shivank63/ps-meta-works",
    liveUrl: "https://ps-meta-works.vercel.app/",
  },
  // {
  //   title: "Portfolio Website",
  //   description: "A responsive portfolio website showcasing projects and skills with a modern design.",
  //   image: "/placeholder.jpg",
  //   technologies: ["React", "CSS", "Framer Motion"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "A weather application that displays current conditions and forecasts for any location.",
  //   image: "/placeholder.jpg",
  //   technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.jpg"} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                    <i className="icon-github"></i>
                    Code
                  </a>

                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                    <i className="icon-external-link"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
