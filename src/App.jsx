import { useState } from 'react'
import '../style.css'
import '../css/color.css'
import '../css/responsive.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const books = [
    { id: 1, title: 'Data Structures', author: 'Mark Allen Weiss', category: 'Programming', year: 2020 },
    { id: 2, title: 'Algorithms Unlocked', author: 'Thomas Cormen', category: 'Programming', year: 2019 },
    { id: 3, title: 'Database Design', author: 'C.J. Date', category: 'Database', year: 2021 },
    { id: 4, title: 'Web Development Basics', author: 'Jon Duckett', category: 'Web', year: 2020 },
    { id: 5, title: 'Machine Learning Fundamentals', author: 'Andrew Ng', category: 'AI/ML', year: 2022 },
  ]

  const categories = ['All', 'Programming', 'Database', 'Web', 'AI/ML', 'Cybersecurity']

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderPage = () => {
    switch (currentPage) {
      case 'books':
        return <BooksPage books={filteredBooks} categories={categories} searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      case 'about':
        return <AboutPage />
      case 'programs':
        return <ProgramsPage />
      case 'pgd':
        return <PGDPage />
      case 'msc':
        return <MSCPage />
      case 'phd':
        return <PhDPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="wm-main-wrapper">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="wm-main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

function Header({ currentPage, setCurrentPage }) {
  return (
    <header id="wm-header" className="wm-header-one">
      <div className="wm-main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="wm-logo">
                <img src="/images/logo.jpg" width="130px" alt="Logo" />
              </button>
            </div>
            <div className="col-md-9">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li className={currentPage === 'home' ? 'active' : ''}>
                      <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Home</button>
                    </li>
                    <li className={currentPage === 'about' ? 'active' : ''}>
                      <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                    </li>
                    <li>
                      <a href="#">PROGRAMMES</a>
                      <ul className="wm-dropdown-menu">
                        <li><button onClick={() => setCurrentPage('pgd')} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>PGD</button></li>
                        <li><button onClick={() => setCurrentPage('msc')} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>MSC</button></li>
                        <li><button onClick={() => setCurrentPage('phd')} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>PhD</button></li>
                      </ul>
                    </li>
                    <li className={currentPage === 'books' ? 'active' : ''}>
                      <button onClick={() => setCurrentPage('books')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>e-LIBRARY</button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="wm-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="wm-footer-item">
              <h3>QUICK LINKS</h3>
              <ul>
                <li><button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>About</button></li>
                <li><button onClick={() => setCurrentPage('books')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>e-Library</button></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wm-footer-item">
              <h3>PROGRAMMES</h3>
              <ul>
                <li><button onClick={() => setCurrentPage('pgd')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>PGD</button></li>
                <li><button onClick={() => setCurrentPage('msc')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>MSC</button></li>
                <li><button onClick={() => setCurrentPage('phd')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>PhD</button></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wm-footer-item">
              <h3>CONTACT</h3>
              <p>Email: cit@university.edu</p>
              <p>Phone: +234 123 456 7890</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wm-footer-item">
              <h3>LOCATION</h3>
              <p>Faculty of Natural and Applied Science</p>
              <p>Department of Computer Science</p>
            </div>
          </div>
        </div>
        <div className="wm-footer-bottom">
          <p>&copy; 2024 VUNA e-Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage({ setCurrentPage }) {
  return (
    <div className="wm-homepage">
      <section className="wm-hero-banner">
        <div className="container">
          <h1>Faculty of Natural and Applied Science</h1>
          <h2>Department of Computer Science</h2>
          <h3>School of Post-Graduate Studies</h3>
          <button onClick={() => setCurrentPage('books')} className="btn btn-primary" style={{ marginTop: '20px' }}>Explore e-Library</button>
        </div>
      </section>
      <section className="wm-welcome-section">
        <div className="container">
          <h2>Welcome to VUNA e-Library</h2>
          <p>Explore our comprehensive collection of computer science resources and educational materials for all our post-graduate programmes.</p>
        </div>
      </section>
    </div>
  )
}

function BooksPage({ books, categories, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
  return (
    <div className="wm-books-page">
      <section className="wm-page-header">
        <div className="container">
          <h1>e-Library</h1>
          <p>Explore our collection of computer science resources</p>
        </div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <div className="wm-search-section">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="wm-search-input"
            />
          </div>
          <div className="wm-books-container">
            <div className="wm-sidebar">
              <h3>Filter by Category</h3>
              <div className="wm-category-list">
                {categories.map((cat) => (
                  <label key={cat} style={{ display: 'block', marginBottom: '10px' }}>
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    {' '}{cat}
                  </label>
                ))}
              </div>
              <p style={{ marginTop: '20px' }}>Results: {books.length}</p>
            </div>
            <div className="wm-books-list">
              <table className="wm-books-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map(book => (
                    <tr key={book.id}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.category}</td>
                      <td>{book.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {books.length === 0 && <p style={{ textAlign: 'center', padding: '20px' }}>No books found</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="wm-about-page">
      <section className="wm-page-header">
        <div className="container"><h1>About Us</h1></div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <h2>Department of Computer Science</h2>
          <p>The Department of Computer Science is committed to excellence in education and research. We offer world-class programmes in computer science and information technology.</p>
        </div>
      </section>
    </div>
  )
}

function ProgramsPage() {
  return (
    <div className="wm-programs-page">
      <section className="wm-page-header">
        <div className="container"><h1>Programmes</h1></div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <p>We offer three main post-graduate programmes: PGD, MSC, and PhD</p>
        </div>
      </section>
    </div>
  )
}

function PGDPage() {
  return (
    <div className="wm-pgd-page">
      <section className="wm-page-header">
        <div className="container"><h1>Post Graduate Diploma (PGD)</h1></div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <p>Our PGD programme is designed for professionals seeking advanced knowledge in computer science.</p>
        </div>
      </section>
    </div>
  )
}

function MSCPage() {
  return (
    <div className="wm-msc-page">
      <section className="wm-page-header">
        <div className="container"><h1>Master of Science (MSC)</h1></div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <p>Our MSC programme offers intensive study in computer science with specialization options.</p>
        </div>
      </section>
    </div>
  )
}

function PhDPage() {
  return (
    <div className="wm-phd-page">
      <section className="wm-page-header">
        <div className="container"><h1>Doctor of Philosophy (PhD)</h1></div>
      </section>
      <section className="wm-page-content">
        <div className="container">
          <p>Our PhD programme is for researchers committed to advancing the field of computer science.</p>
        </div>
      </section>
    </div>
  )
}

export default App
