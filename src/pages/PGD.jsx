import { Link } from 'react-router-dom'
import './Pages.css'

export default function PGD() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>Postgraduate Diploma (PGD)</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>PGD Programme</span>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-section">
                <h2>Postgraduate Diploma in Computer Science</h2>
                <p>
                  Embark on a Postgraduate Diploma journey, fine-tuning your expertise for the evolving digital era.
                  Equip yourself with the tools and knowledge sought after by leading tech companies.
                </p>

                <h3>Programme Overview</h3>
                <p>
                  The Postgraduate Diploma (PGD) in Computer Science is a specialized programme designed for professionals
                  who want to acquire advanced technical skills and knowledge in computer science without committing to a
                  full master's degree. Shorter than a master's program, but equally impactful, the PGD provides students
                  with opportunities to transform their tech aspirations into accomplishments.
                </p>

                <h3>Programme Structure</h3>
                <p>
                  The programme is structured into distinct semesters with a mix of core courses, electives, and practical
                  projects. Students engage in hands-on learning with real-world applications and industry-standard tools.
                </p>

                <h4>Key Areas of Study:</h4>
                <ul className="objectives-list">
                  <li>Advanced Software Engineering Practices</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Web Development & Cloud Technologies</li>
                  <li>Database Design and Management</li>
                  <li>Network Security Fundamentals</li>
                  <li>Mobile Application Development</li>
                </ul>

                <h3>Duration & Requirements</h3>
                <p>
                  <strong>Duration:</strong> 2 Semesters (1 Year) of full-time study<br />
                  <strong>Entry Requirement:</strong> Bachelor's Degree in Computer Science or related field
                </p>

                <h3>Career Prospects</h3>
                <p>
                  Graduates of the PGD programme are equipped to pursue careers as Software Developers, System Administrators,
                  Database Managers, Web Developers, and Technical Consultants in various organizations across the technology sector.
                </p>

                <h3>Apply for PGD</h3>
                <p>
                  Ready to advance your career in computer science? Apply today through our simplified online application process.
                </p>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h4>Programme Details</h4>
                <p>
                  <strong>Duration:</strong><br />
                  1 Year (2 Semesters)
                </p>
                <p>
                  <strong>Entry Level:</strong><br />
                  Bachelor's Degree
                </p>
                <p>
                  <strong>Class Size:</strong><br />
                  30-40 students
                </p>
              </div>

              <div className="sidebar-card">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/msc">MSC Programme</Link></li>
                  <li><Link to="/phd">PhD Programme</Link></li>
                  <li><Link to="/about">Programme Information</Link></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Apply Now</h4>
                <p>Begin your PGD journey with us today.</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Application
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
