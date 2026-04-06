import { Link } from 'react-router-dom'
import './Programs.css'

const PROGRAMMES = [
  {
    name: 'Postgraduate Diploma (PGD)',
    duration: '1 Year',
    level: 'Diploma',
    description: 'A specialized programme for professionals seeking advanced technical skills without committing to a full master\'s degree.',
    highlights: [
      'Applied coursework',
      'Practical projects',
      'Industry-focused curriculum',
      'Flexible study options'
    ],
    link: '/pgd'
  },
  {
    name: 'Master of Science (MSC)',
    duration: '2 Years',
    level: 'Master\'s Degree',
    description: 'An advanced degree program combining rigorous coursework with practical research experience for leadership roles.',
    highlights: [
      'Research-based thesis',
      'Advanced coursework',
      'Specialization options',
      'Publication opportunities'
    ],
    link: '/msc'
  },
  {
    name: 'Doctor of Philosophy (PhD)',
    duration: '3-4 Years',
    level: 'Doctoral Degree',
    description: 'A research-intensive programme for exceptional individuals aiming to make significant contributions to computer science.',
    highlights: [
      'Original research',
      'Doctoral dissertation',
      'Lab facilities access',
      'International collaboration'
    ],
    link: '/phd'
  }
]

export default function Programs() {
  return (
    <div className="programs-wrapper">
      <section className="programs-header">
        <div className="container">
          <h1>Our Programmes</h1>
          <p>Choose the program that fits your academic and career goals</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Programmes</span>
          </div>
        </div>
      </section>

      <section className="programs-content">
        <div className="container">
          <div className="programs-grid">
            {PROGRAMMES.map((programme, index) => (
              <div key={index} className="programme-card">
                <div className="card-header">
                  <h3>{programme.name}</h3>
                  <div className="card-meta">
                    <span className="duration">⏱️ {programme.duration}</span>
                    <span className="level">📚 {programme.level}</span>
                  </div>
                </div>

                <p className="description">{programme.description}</p>

                <div className="highlights">
                  <h4>Key Features:</h4>
                  <ul>
                    {programme.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="checkmark">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <Link to={programme.link} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programs-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Who can apply?</h4>
              <p>
                All programmes require a bachelor's degree. PhD programme requires a master's degree.
                Check specific entry requirements for each programme.
              </p>
            </div>

            <div className="faq-item">
              <h4>What is the application process?</h4>
              <p>
                Applications are submitted online with academic transcripts, recommendation letters, and a statement of purpose.
                Review deadlines and requirements on each programme page.
              </p>
            </div>

            <div className="faq-item">
              <h4>Are there scholarships available?</h4>
              <p>
                Yes, we offer various scholarships based on academic merit and financial need.
                Contact our admissions office for scholarship opportunities.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I study part-time?</h4>
              <p>
                MSC and PhD programmes can be pursued on a part-time basis with extended duration.
                Discuss options with the department during the application process.
              </p>
            </div>

            <div className="faq-item">
              <h4>What are the career prospects?</h4>
              <p>
                Graduates work as Software Engineers, Researchers, IT Architects, and Technical Leaders in leading organizations.
              </p>
            </div>

            <div className="faq-item">
              <h4>How do I apply?</h4>
              <p>
                Start your application through our online portal or contact admissions at +234-8107396043
                for guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Apply today and advance your career in computer science</p>
          <button className="btn btn-large">
            Begin Your Application
          </button>
        </div>
      </section>
    </div>
  )
}
