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
          <h1>e-Library</h1>
          <p>Explore our collection of computer science resources</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>e-Library</span>
          </div>
        </div>
      </section>

      <section className="books-content">
        <div className="container">
          <div className="search-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search books by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button">🔍</button>
            </div>
          </div>

          <div className="books-grid">
            {/* Sidebar */}
            <aside className="books-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
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

              <div className="sidebar-section">
                <h3>Results</h3>
                <p>{filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found</p>
              </div>
            </aside>

            {/* Books List */}
            <div className="books-list">
              {filteredBooks.length > 0 ? (
                <div className="books-table">
                  <div className="table-header">
                    <div className="col-title">Title</div>
                    <div className="col-author">Author</div>
                    <div className="col-category">Category</div>
                    <div className="col-year">Year</div>
                  </div>
                  {filteredBooks.map(book => (
                    <div key={book.id} className="table-row">
                      <div className="col-title">{book.title}</div>
                      <div className="col-author">{book.author}</div>
                      <div className="col-category">
                        <span className="category-badge">{book.category}</span>
                      </div>
                      <div className="col-year">{book.year}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <h3>No books found</h3>
                  <p>Try adjusting your search terms or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
