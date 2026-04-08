import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
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
                <h1>Programmes</h1>
              </div>
              <div className="wm-breadcrumb">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
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
                <figcaption>
                  <h2>Computer science graduate programmes</h2>
                </figcaption>
              </div>
              <div className="col-md-9">
                <div className="wm-detail-editore wm-custom-space">
                  <h3>Our philosophy</h3>
                  <p>
                    The program is designed to develop skills and educate Computer Science students to be major contributors in the computing industry.
                    The graduate program in computer science provides state-of-the-art education through the use of didactic courses to those students
                    who wish to further their knowledge and careers within the computing industry. The program emphasizes continuing self-development and
                    broadening of the knowledge of individuals currently engaged in science, technology and engineering-related fields. It also prepares
                    persons who have completed undergraduate majors in these fields for entry into a career in the numerous areas that use computing
                    technology. Both the theoretical and applied aspects of computer science are emphasized in this program. The course is to promote lifelong self-learning by providing a curriculum that promotes a variety of approaches to study.
                    The curriculum is designed to develop not only the academic knowledge, but also the engineering ethos and practical skills required by the modern Computer Science professional.
                  </p>
                </div>
                <div className="wm-detail-editore wm-custom-space">
                  <h3>Aim / objectives</h3>
                  <p>
                    The course aims to prepare the students for technical roles in the
                    IT industry by introducing the key technologies and skills needed for employment.
                  </p>

                  <p><strong>Objectives</strong></p>
                  <ul className="wm-list-style-icon">
                    <li>
                      <i className="fa fa-circle"></i>
                      Advanced software design skills: To produce graduates who possess the necessary advanced
                      analytical and technical skills in computer science – responds directly to the higher goal of
                      fulfilling the needs of industry, academic and research laboratories for effective, productive engineers, professors and researchers
                    </li>
                    <li>
                      <i className="fa fa-circle"></i>
                      Advanced problem-solving skills: To produce graduates who demonstrate creativity and innovation in solving technological problems – stems from the realization that new
                      knowledge and new solutions to existing problems are necessary to meet the needs of our changing society and to advance the quality of human life.
                    </li>
                  </ul>
                </div>
              </div>
              <aside className="col-md-3">
                <div className="wm-event-options">
                  <ul>
                    <li>
                      <i className="wmicon-time2"></i>
                      <span>QUICK LINKS:</span>
                      <Link to="/phd" className="wm-banner-btn">PHD application</Link>
                    </li>
                    <li>
                      <Link to="/msc" className="wm-banner-btn">MSC application</Link>
                    </li>
                    <li>
                      <Link to="/pgd" className="wm-banner-btn">PGD application</Link>
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

export default About;
