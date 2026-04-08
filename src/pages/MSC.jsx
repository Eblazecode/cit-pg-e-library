import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MSC() {
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
                <h1>Master of Science (MSC)</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/msc">MSC</Link></li>
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
              <div className="col-md-9">
                <div className="wm-detail-editore wm-custom-space">
                  <h2>Master of Science in Computer Science</h2>
                  <p>
                    Elevate your tech prowess with an advanced degree. Explore the frontier of
                    computer science and be a catalyst for innovation.
                    Engage in projects that bridge classroom theories with real-world solutions. Your laboratory
                    discoveries today could be tomorrow&apos;s technological norms.
                  </p>

                  <h3>Programme Overview</h3>
                  <p>
                    The Master of Science degree is a two-year comprehensive programme that prepares graduates for leadership roles
                    in the IT industry and advanced research positions in computer science.
                  </p>

                  <h3>Key Features</h3>
                  <ul className="wm-list-style-icon">
                    <li><i className="fa fa-circle"></i> Two-year advanced programme</li>
                    <li><i className="fa fa-circle"></i> Research-oriented curriculum</li>
                    <li><i className="fa fa-circle"></i> Thesis/Project component</li>
                    <li><i className="fa fa-circle"></i> Internship opportunities</li>
                  </ul>
                </div>
              </div>
              <aside className="col-md-3">
                <div className="wm-event-options">
                  <ul>
                    <li>
                      <i className="wmicon-time2"></i>
                      <span>QUICK LINKS:</span>
                      <a href="#" className="wm-banner-btn">Apply Now</a>
                    </li>
                    <li>
                      <a href="#" className="wm-banner-btn">Download Brochure</a>
                    </li>
                    <li>
                      <a href="#" className="wm-banner-btn">Contact Admissions</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MSC;
