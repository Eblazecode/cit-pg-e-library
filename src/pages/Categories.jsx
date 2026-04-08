import { Link } from 'react-router-dom'
import './Categories.css'

const CATEGORIES = [
  {
    name: 'Algorithms & Data Structures',
    description: 'Fundamental algorithms, data structures, and computational complexity',
    icon: '🔧',
    books: 8
  },
  {
    name: 'Software Engineering',
    description: 'Design patterns, architecture, best practices, and methodologies',
    icon: '🏗️',
    books: 12
  },
  {
    name: 'Machine Learning & AI',
    description: 'Deep learning, neural networks, and artificial intelligence',
    icon: '🤖',
    books: 15
  },
  {
    name: 'Databases',
    description: 'Database design, SQL, NoSQL, and data management',
    icon: '💾',
    books: 7
  },
  {
    name: 'Cybersecurity',
    description: 'Network security, cryptography, and information security',
    icon: '🔒',
    books: 10
  },
  {
    name: 'Web Development',
    description: 'Frontend, backend, and full-stack web development technologies',
    icon: '🌐',
    books: 14
  },
  {
    name: 'Cloud Computing',
    description: 'AWS, Azure, Google Cloud, and cloud architecture',
    icon: '☁️',
    books: 9
  },
  {
    name: 'Programming Languages',
    description: 'Python, Java, C++, JavaScript, and other languages',
    icon: '💻',
    books: 20
  },
  {
    name: 'Computer Networks',
    description: 'Networking fundamentals, protocols, and communications',
    icon: '🌍',
    books: 6
  },
  {
    name: 'Operating Systems',
    description: 'System design, kernel concepts, and OS internals',
    icon: '⚙️',
    books: 8
  },
  {
    name: 'Mobile Development',
    description: 'iOS, Android, and cross-platform mobile development',
    icon: '📱',
    books: 11
  },
  {
    name: 'Journals & Publications',
    description: 'Academic journals and research papers in computer science',
    icon: '📰',
    books: 25
  }
]

export default function Categories() {
  return (
    <div className="categories-wrapper">
      <section className="categories-header">
        <div className="container">
          <h1>Browse by Category</h1>
          <p>Explore our e-library organized by subject matter</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Categories</span>
          </div>
        </div>
      </section>

      <section className="categories-content">
        <div className="container">
          <div className="content-header">
            <h2>Explore by Subject</h2>
            <p>Find the exact resources you need by browsing our categories</p>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="category-card">
                <div className="card-header">
                  <span className="category-icon">{category.icon}</span>
                  <span className="resource-badge">{category.books}</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to="/books" className="explore-link">
                  <span>Explore Resources</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Explore Our Complete Collection</h2>
            <p>Access thousands of resources curated for your learning journey</p>
            <Link to="/books" className="btn btn-primary">
              Browse All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
