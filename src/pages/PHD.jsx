import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PHD() {
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
                <h1>Doctor of Philosophy (PHD)</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/phd">PHD</Link></li>
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
                  <h2>Doctor of Philosophy in Computer Science</h2>
                  <p>
                    Unleash Your Potential with PhD in Computer Science.
                    Submerge yourself in the vast ocean of algorithms, AI, and advanced computing.
                    From quantum computing to neural networks, pioneer revolutionary innovations in state-of-the-art labs and facilities.
                  </p>

                  <h3>Programme Overview</h3>
                  <p>
                    The Doctor of Philosophy is a research-intensive programme designed for scholars committed to advancing the field of computer science
                    through original research contributions. Typically spanning three to four years, the PhD programme culminates in a doctoral dissertation.
                  </p>

                  <h3>Key Features</h3>
                  <ul className="wm-list-style-icon">
                    <li><i className="fa fa-circle"></i> Advanced research-focused curriculum</li>
                    <li><i className="fa fa-circle"></i> Original scholarly contributions required</li>
                    <li><i className="fa fa-circle"></i> Mentorship from leading researchers</li>
                    <li><i className="fa fa-circle"></i> Access to cutting-edge laboratories</li>
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

export default PHD;
