import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.jpg" alt="VUNA e-Library Logo" width="130" />
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
          <Link to="/categories" className="nav-link btn-elibrary">
            e-LIBRARY
          </Link>
        </nav>
      </div>
    </header>
  )
}
