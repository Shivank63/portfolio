import "./Experience.css"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Led the development of the company's flagship product using React and Next.js. Implemented responsive designs, improved performance, and mentored junior developers.",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client websites. Worked with React, Vue.js, and various CSS frameworks to create responsive and accessible web applications.",
    type: "work",
  },
  {
    title: "Web Development Intern",
    company: "StartUp Hub",
    period: "2017 - 2018",
    description:
      "Assisted in the development of web applications. Gained hands-on experience with HTML, CSS, JavaScript, and modern frontend frameworks.",
    type: "work",
  },
  {
    title: "Master's in Computer Science",
    company: "Tech University",
    period: "2015 - 2017",
    description:
      "Specialized in Web Technologies and Human-Computer Interaction. Thesis on optimizing user experience in progressive web applications.",
    type: "education",
  },
  {
    title: "Bachelor's in Computer Science",
    company: "State University",
    period: "2011 - 2015",
    description: "Foundations in programming, algorithms, and software development. Minor in Digital Design.",
    type: "education",
  },
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Education</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline dot */}
              <div className={`timeline-dot ${exp.type}`}>
                <i className={exp.type === "work" ? "icon-building" : "icon-education"}></i>
              </div>

              {/* Content */}
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="timeline-period">
                    <i className="icon-calendar"></i>
                    {exp.period}
                  </div>
                </div>

                <div className="timeline-company">{exp.company}</div>

                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
