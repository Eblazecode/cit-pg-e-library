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
          <div className="categories-grid">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="category-footer">
                  <span className="book-count">{category.books} resources</span>
                  <Link to="/books" className="explore-btn">
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-cta">
        <div className="container">
          <h2>Start Exploring</h2>
          <p>Browse our comprehensive collection of computer science resources</p>
          <Link to="/books" className="btn btn-primary">
            View All Resources
          </Link>
        </div>
      </section>
    </div>
  )
}
