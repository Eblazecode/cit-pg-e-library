import { Link } from 'react-router-dom'
import './Pages.css'

export default function About() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>Programmes</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-section">
                <h2>Computer Science Graduate Programmes</h2>
                <h3>Our Philosophy</h3>
                <p>
                  The program is designed to develop skills and educate Computer Science students to be major contributors
                  in the computing industry. The graduate program in computer science provides state-of-the-art education
                  through the use of didactic courses to those students who wish to further their knowledge and careers
                  within the computing industry.
                </p>
                <p>
                  The program emphasizes continuing self-development and broadening of the knowledge of individuals currently
                  engaged in science, technology and engineering-related fields. It also prepares persons who have completed
                  undergraduate majors in these fields for entry into a career in the numerous areas that use computing technology.
                </p>
                <p>
                  Both the theoretical and applied aspects of computer science are emphasized in this program. The course is to
                  promote lifelong self-learning by providing a curriculum that promotes a variety of approaches to study.
                </p>
              </div>

              <div className="content-section">
                <h3>Aims & Objectives</h3>
                <p>
                  The course aims to prepare the students for technical roles in the IT industry by introducing the key
                  technologies and skills needed for employment.
                </p>

                <h4>Key Objectives</h4>
                <ul className="objectives-list">
                  <li>
                    <strong>Advanced Software Design Skills:</strong> To produce graduates who possess the necessary advanced
                    analytical and technical skills in computer science – responds directly to the higher goal of fulfilling
                    the needs of industry, academic and research laboratories.
                  </li>
                  <li>
                    <strong>Advanced Problem-Solving Skills:</strong> To produce graduates who demonstrate creativity and innovation
                    in solving technological problems – stems from the realization that new knowledge and new solutions to existing
                    problems are necessary to meet the needs of our changing society.
                  </li>
                  <li>
                    <strong>Industry-Ready Competence:</strong> Equip students with practical skills and theoretical knowledge
                    demanded by the IT industry and emerging technologies.
                  </li>
                  <li>
                    <strong>Research Excellence:</strong> Foster a culture of research and innovation in areas such as AI,
                    cybersecurity, data science, and software engineering.
                  </li>
                </ul>
              </div>

              <div className="content-section">
                <h3>Why Choose Our Programme?</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <h5>Expert Faculty</h5>
                    <p>Learn from experienced professors with industry expertise and research credentials</p>
                  </div>
                  <div className="feature-card">
                    <h5>Modern Curriculum</h5>
                    <p>Up-to-date coursework covering latest technologies and methodologies</p>
                  </div>
                  <div className="feature-card">
                    <h5>Research Opportunities</h5>
                    <p>Access to cutting-edge research labs and projects</p>
                  </div>
                  <div className="feature-card">
                    <h5>Industry Connections</h5>
                    <p>Strong partnerships with leading tech companies and organizations</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/phd">PhD Application</Link></li>
                  <li><Link to="/msc">MSC Application</Link></li>
                  <li><Link to="/pgd">PGD Application</Link></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Contact Info</h4>
                <p>
                  <strong>Phone:</strong><br />
                  +234-8107396043
                </p>
                <p>
                  <strong>Hours:</strong><br />
                  Weekday AM 10:00 ~ PM 05:00
                </p>
              </div>

              <div className="sidebar-card">
                <h4>Ready to Apply?</h4>
                <p>Start your journey in advanced computer science studies today.</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Begin Application
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
