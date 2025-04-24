import "./Experience.css"

const experiences = [
  {
    title: "Web Development Intern",
    company: "Soltioneers Infotech PVT LTD, Lucknow",
    period: "Oct 2024 - March 2025",
    description: `
    Gained hands-on experience as a Web Development Intern at Soltioneers Infotech PVT LTD, working on real-world projects with the MERN stack.
    Contributed to a MERN stack project, developing both frontend and backend features.
    Built user-friendly interfaces using React.js, HTML, CSS, and Tailwind CSS.
    Developed backend APIs and database schemas using Node.js, Express.js, and MongoDB.
    Integrated third-party RESTful APIs using Axios and React Query for efficient data management.
    Collaborated with the development team using Git and participated in daily stand-ups.
    `,
    type: "work",
  },
  {
    title: "B.Tech in Computer Science",
    company: "S.V.N. Institute of Engineering and Technology, Lucknow",
    period: "June 2020 - July 2024",
    description: `
    Completed Bachelor of Technology in Computer Science.
    Gained fundamental and advanced knowledge in software development, data structures, algorithms, and web technologies.
    Participated in coding competitions and tech events.
    `,
    type: "education",
  },
  {
    title: "Intermediate (Class 12)",
    company: "Ram Pal Singh RKD Inter College, Sitapur",
    period: "Mar 2018 - Apr 2019",
    description: `
    Studied Physics, Chemistry, and Mathematics.
    Focused on science fundamentals and logical reasoning.
    `,
    type: "education",
  },
  {
    title: "High School (Class 10)",
    company: "Babu Bishun Kumar GHS School, Sitapur",
    period: "Mar 2016 - Apr 2017",
    description: `
    Completed foundational education with emphasis on Mathematics, Science, and English.
    `,
    type: "education",
  }
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

                <ul>
                  {exp.description
                    .trim()
                    .split("\n")
                    .map((point, idx) => (
                      <li key={idx}>{point.replace(/^[-•]\s*/, "")}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
