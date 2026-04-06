import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '130px', height: '50px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 100%)', borderRadius: '8px' }}></div>
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <div className="nav-dropdown">
            <span className="nav-link">Programmes</span>
            <div className="dropdown-menu">
              <Link to="/pgd" className="dropdown-link">PGD</Link>
              <Link to="/msc" className="dropdown-link">MSC</Link>
              <Link to="/phd" className="dropdown-link">PhD</Link>
            </div>
          </div>
          <Link to="/books" className="nav-link btn-elibrary">
            e-LIBRARY
          </Link>
        </nav>
      </div>
    </header>
  )
}
