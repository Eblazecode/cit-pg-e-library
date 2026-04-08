import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Journal() {
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
                <h1>Journals & Publications</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
                  <li><Link to="/journal">Journals</Link></li>
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
                <h2>Journal Articles & Publications</h2>
                <p>Browse our collection of peer-reviewed journal articles, conference papers, and academic publications in computer science.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Journal;
