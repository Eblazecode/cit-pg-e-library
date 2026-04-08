import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Cybersecurity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wm-main-wrapper">
      <Header />

      <div className="wm-mini-header">
        <span className="wm-blue-transparent"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wm-mini-title">
                <h1>Cybersecurity</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
                  <li><Link to="/cybersecurity">Cybersecurity</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wm-main-content">
        <div className="wm-main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Cybersecurity Resources</h2>
                <p>Access our collection of books, journals, and publications on information security, network security, cryptography, and cyber threats.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cybersecurity;
