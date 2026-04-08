import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Books.css'

// Sample books data
const BOOKS_DATA = [
  { id: 1, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson', category: 'Algorithms', year: 2009 },
  { id: 2, title: 'Design Patterns', author: 'Gang of Four', category: 'Software Design', year: 1994 },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', category: 'Software Engineering', year: 2008 },
  { id: 4, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', category: 'Software Engineering', year: 2019 },
  { id: 5, title: 'Database Design Manual', author: 'Matthew Norman', category: 'Databases', year: 2012 },
  { id: 6, title: 'Web Security Testing Cookbook', author: 'Stuttard & Pinto', category: 'Security', year: 2012 },
  { id: 7, title: 'Machine Learning in Action', author: 'Peter Harrington', category: 'Machine Learning', year: 2012 },
  { id: 8, title: 'Deep Learning', author: 'Goodfellow, Bengio, Courville', category: 'Machine Learning', year: 2016 },
  { id: 9, title: 'Artificial Intelligence: A Modern Approach', author: 'Russell & Norvig', category: 'AI', year: 2020 },
  { id: 10, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', category: 'Networking', year: 2010 },
  { id: 11, title: 'Operating System Concepts', author: 'Silberschatz, Galvin', category: 'Operating Systems', year: 2018 },
  { id: 12, title: 'The C Programming Language', author: 'Kernighan & Ritchie', category: 'Programming', year: 1988 },
]

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(BOOKS_DATA.map(book => book.category))]

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="books-wrapper">
      <section className="books-header">
        <div className="container">
          <div className="header-content">
            <h1>📚 e-Library</h1>
            <p>Discover our comprehensive collection of computer science resources</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>e-Library</span>
            </div>
          </div>
        </div>
      </section>

      <section className="books-content">
        <div className="container">
          <div className="search-section">
            <div className="search-header">
              <h2>Search Resources</h2>
              <p>Find exactly what you&apos;re looking for</p>
            </div>
            <div className="search-box">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="books-main">
            {/* Sidebar */}
            <aside className="books-sidebar">
              <div className="sidebar-section">
                <h3>Filter by Category</h3>
                <div className="category-filter">
                  {categories.map(category => (
                    <label key={category} className="category-item">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sidebar-section stats">
                <div className="stat-item">
                  <span className="stat-label">Results</span>
                  <span className="stat-value">{filteredBooks.length}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Total</span>
                  <span className="stat-value">{BOOKS_DATA.length}</span>
                </div>
              </div>
            </aside>

            {/* Books List */}
            <div className="books-list">
              {filteredBooks.length > 0 ? (
                <div className="books-cards">
                  {filteredBooks.map(book => (
                    <div key={book.id} className="book-card">
                      <div className="book-icon">📖</div>
                      <div className="book-content">
                        <h4 className="book-title">{book.title}</h4>
                        <p className="book-author">by {book.author}</p>
                        <div className="book-meta">
                          <span className="book-category">{book.category}</span>
                          <span className="book-year">{book.year}</span>
                        </div>
                      </div>
                      <div className="book-action">
                        <button className="btn-access">Access →</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No resources found</h3>
                  <p>Try adjusting your search or filters to find what you&apos;re looking for</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
