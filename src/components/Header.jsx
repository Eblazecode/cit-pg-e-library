import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProgrammes = () => {
    setIsProgrammesOpen(!isProgrammesOpen);
  };

  return (
    <header id="wm-header" className="wm-header-one">
      <div className="wm-topstrip"></div>
      
      <div className="wm-main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="wm-logo">
                <img src="images/logo.jpg" width="130px" alt="CIT Logo" />
              </Link>
            </div>
            <div className="col-md-9">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button 
                    type="button" 
                    className="navbar-toggle collapsed" 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`} id="navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to="/books" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </li>
                    <li className="dropdown">
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleProgrammes();
                        }}
                      >
                        PROGRAMMES
                      </a>
                      {isProgrammesOpen && (
                        <ul className="wm-dropdown-menu">
                          <li><Link to="/pgd" onClick={() => { setIsMenuOpen(false); setIsProgrammesOpen(false); }}>PGD</Link></li>
                          <li><Link to="/msc" onClick={() => { setIsMenuOpen(false); setIsProgrammesOpen(false); }}>MSC</Link></li>
                          <li><Link to="/phd" onClick={() => { setIsMenuOpen(false); setIsProgrammesOpen(false); }}>PHD</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <a href="#">Student Life</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <Link to="/categories" className="wm-header-btn">e-LIBRARY</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
