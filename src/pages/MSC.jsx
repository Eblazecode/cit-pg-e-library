import { Link } from 'react-router-dom'
import './Pages.css'

export default function MSC() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>Master of Science (MSC)</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>MSC Programme</span>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-section">
                <h2>Master of Science in Computer Science</h2>
                <p>
                  Elevate your tech prowess with an advanced degree. Explore the frontier of computer science and be a
                  catalyst for innovation. Engage in projects that bridge classroom theories with real-world solutions.
                </p>

                <h3>Programme Overview</h3>
                <p>
                  The Master of Science (MSC) in Computer Science is designed for graduates who aspire to develop advanced
                  technical and research skills in computer science. The programme combines rigorous coursework with practical
                  research experience, preparing students for leadership roles in both academia and industry.
                </p>

                <h3>Programme Structure</h3>
                <p>
                  The MSC programme spans two academic years, consisting of taught courses in the first year and a research-based
                  thesis project in the second year. This structure balances comprehensive knowledge acquisition with independent
                  research and innovation.
                </p>

                <h4>Core Specializations:</h4>
                <ul className="objectives-list">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Cybersecurity and Network Protection</li>
                  <li>Software Engineering & DevOps</li>
                  <li>Data Science and Big Data Analytics</li>
                  <li>Cloud Computing and Distributed Systems</li>
                  <li>Computer Vision and Image Processing</li>
                </ul>

                <h3>Duration & Requirements</h3>
                <p>
                  <strong>Duration:</strong> 2 Years of full-time study<br />
                  <strong>Entry Requirement:</strong> Bachelor's Degree in Computer Science or related field<br />
                  <strong>Thesis Required:</strong> Yes (substantial research contribution)
                </p>

                <h3>Research Opportunities</h3>
                <p>
                  Students have access to state-of-the-art research facilities and can collaborate with faculty members on
                  cutting-edge projects. Opportunities include publications in peer-reviewed journals and conferences.
                </p>

                <h3>Career Prospects</h3>
                <p>
                  MSC graduates are well-positioned for roles such as Research Scientists, Senior Software Engineers, IT Architects,
                  Academic Researchers, and Technical Leaders in multinational technology companies and research institutions.
                </p>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h4>Programme Details</h4>
                <p>
                  <strong>Duration:</strong><br />
                  2 Years
                </p>
                <p>
                  <strong>Entry Level:</strong><br />
                  Bachelor's Degree
                </p>
                <p>
                  <strong>Thesis:</strong><br />
                  Required
                </p>
              </div>

              <div className="sidebar-card">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/pgd">PGD Programme</Link></li>
                  <li><Link to="/phd">PhD Programme</Link></li>
                  <li><Link to="/about">Programme Information</Link></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Apply Now</h4>
                <p>Start your MSC journey and advance your career.</p>
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
