import { Link } from 'react-router-dom'
import './Pages.css'

export default function PhD() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>Doctor of Philosophy (PhD)</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>PhD Programme</span>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-section">
                <h2>PhD in Computer Science</h2>
                <p>
                  Unleash Your Potential with PhD in Computer Science. Submerge yourself in the vast ocean of algorithms,
                  AI, and advanced computing. From quantum computing to neural networks, pioneer revolutionary innovations
                  in state-of-the-art labs and facilities.
                </p>

                <h3>Programme Overview</h3>
                <p>
                  The PhD in Computer Science is a research-intensive programme designed for exceptional individuals who wish
                  to make significant contributions to the field of computer science. The programme emphasizes original research,
                  advanced coursework, and academic excellence.
                </p>

                <h3>Programme Structure</h3>
                <p>
                  The PhD programme typically spans 3-4 years and includes:
                </p>
                <ul className="objectives-list">
                  <li><strong>Year 1:</strong> Advanced coursework, research methodology, and specialization selection</li>
                  <li><strong>Year 2:</strong> Comprehensive exams, research proposal development, and dissertation initiation</li>
                  <li><strong>Years 3-4:</strong> Doctoral research, dissertation writing, and academic contributions</li>
                </ul>

                <h3>Research Areas</h3>
                <p>
                  <strong>Primary Research Specializations:</strong>
                </p>
                <ul className="objectives-list">
                  <li>Artificial Intelligence & Machine Learning</li>
                  <li>Quantum Computing & Cryptography</li>
                  <li>Distributed Systems & Cloud Architecture</li>
                  <li>Cybersecurity & Privacy</li>
                  <li>Computer Vision & Pattern Recognition</li>
                  <li>High-Performance Computing</li>
                  <li>Software Engineering & Program Analysis</li>
                </ul>

                <h3>Entry Requirements</h3>
                <p>
                  <strong>Duration:</strong> 3-4 Years of full-time research<br />
                  <strong>Entry Requirement:</strong> MSC Degree in Computer Science or related field<br />
                  <strong>Research Focus:</strong> Original doctoral dissertation required
                </p>

                <h3>Research Support</h3>
                <p>
                  PhD students have access to:
                </p>
                <ul className="objectives-list">
                  <li>State-of-the-art computing laboratories and equipment</li>
                  <li>Mentorship from leading researchers and faculty members</li>
                  <li>Funding opportunities for research and conference attendance</li>
                  <li>Collaboration with international research institutions</li>
                  <li>Publication support in top-tier venues</li>
                </ul>

                <h3>Career Outcomes</h3>
                <p>
                  PhD graduates pursue careers as Researchers, University Professors, Research Scientists, Technology Leaders,
                  and Innovators in leading institutions and organizations worldwide.
                </p>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h4>Programme Details</h4>
                <p>
                  <strong>Duration:</strong><br />
                  3-4 Years
                </p>
                <p>
                  <strong>Entry Level:</strong><br />
                  Master's Degree
                </p>
                <p>
                  <strong>Dissertation:</strong><br />
                  Required
                </p>
              </div>

              <div className="sidebar-card">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/pgd">PGD Programme</Link></li>
                  <li><Link to="/msc">MSC Programme</Link></li>
                  <li><Link to="/about">Programme Information</Link></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Apply Now</h4>
                <p>Begin your doctoral research journey with us.</p>
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
