import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PGD() {
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
                <h1>Postgraduate Diploma (PGD)</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/pgd">PGD</Link></li>
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
                  <h2>Postgraduate Diploma in Computer Science</h2>
                  <p>
                    Embark on a Postgraduate Diploma journey, fine-tuning your expertise for the evolving digital era.
                    Equip yourself with the tools and knowledge sought after by leading tech companies.
                    Shorter than a master&apos;s, but equally impactful. Transform your tech aspirations into accomplishments with our PGD in Computer Science.
                  </p>

                  <h3>Programme Overview</h3>
                  <p>
                    The Postgraduate Diploma is a one-year intensive programme designed for professionals looking to gain advanced competencies
                    in specific areas of computer science without committing to a full master&apos;s degree.
                  </p>

                  <h3>Key Features</h3>
                  <ul className="wm-list-style-icon">
                    <li><i className="fa fa-circle"></i> Intensive one-year programme</li>
                    <li><i className="fa fa-circle"></i> Practical, industry-focused curriculum</li>
                    <li><i className="fa fa-circle"></i> Flexible study options</li>
                    <li><i className="fa fa-circle"></i> Expert faculty guidance</li>
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

export default PGD;
