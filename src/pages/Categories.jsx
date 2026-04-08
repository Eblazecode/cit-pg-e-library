import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: 'Artificial Intelligence', path: '/ai' },
    { name: 'Data Science', path: '/data-science' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Journals', path: '/journal' },
  ];

  return (
    <div className="wm-main-wrapper">
      <Header />

      <div className="wm-mini-header">
        <span className="wm-blue-transparent"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wm-mini-title">
                <h1>E-Library Categories</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
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
                <h2>Browse by Category</h2>
                <p>Explore our collection of books, publications, and journals categorized by field of study.</p>
              </div>
            </div>
            <div className="row mt-5">
              {categories.map((category, index) => (
                <div className="col-md-6" key={index}>
                  <div style={{
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
                    padding: '20px',
                    marginBottom: '20px',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <h4>{category.name}</h4>
                    <p>Explore resources related to {category.name.toLowerCase()}</p>
                    <Link to={category.path} className="wm-banner-btn">View More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
