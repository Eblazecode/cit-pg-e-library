import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';

function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wm-main-wrapper">
      <Header />

      <div className="wm-main-banner">
        <div className="wm-banner-one">
          <div className="wm-banner-one-for">
            <div className="wm-banner-one-for-layer">
              <img src="robohand.jpeg" alt="Robot Hand" />
            </div>
            <div className="wm-banner-one-for-layer">
              <img src="images/graduates.jpg" alt="Graduates" />
            </div>
          </div>
          <div className="wm-banner-one-nav">
            <div className="wm-banner-one-nav-layer">
              <h1>Faculty of Natural and Applied Science</h1>
              <h3 style={{ color: 'white' }}>Department of Computer Science</h3>
              <h2 style={{ color: 'white' }}>School of Post-Graduate Studies</h2>
            </div>
            <div className="wm-banner-one-nav-layer">
              <h1>Join the community</h1>
              <p style={{ font: '1em sans-serif' }}>
                We offer individuals the opportunity to enroll for PG.D, M.Sc and PH.D. in computer science.
                These programmes aim to prepare the students for technical roles
                in the IT industry by introducing the key technologies and skills needed for employment.
              </p>
              <Link to="/about" className="wm-banner-btn">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wm-main-section wm-service-slider-full pt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h6 className="wm-service-heading">Our programmes</h6>
              <div className="wm-service-slider">
                <div className="wm-service-layer">
                  <ul className="row">
                    <li className="col-md-4" style={{ borderRadius: '10px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', height: '300px', padding: '20px' }}>
                      <span>PH.D (Computer science)</span>
                      <p>
                        Unleash Your Potential with PhD in Computer Science.
                        Submerge yourself in the vast ocean of algorithms, AI, and advanced computing.
                        From quantum computing to neural networks, pioneer revolutionary innovations in state-of-the-art labs and facilities.
                      </p>
                      <Link to="/phd" className="wm-classic-button wm-bgcolor-two">Learn More</Link>
                    </li>
                    <li className="col-md-4" style={{ borderRadius: '10px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', height: '300px', padding: '20px' }}>
                      <span>M.SC. (COMPUTER SCIENCE)</span>
                      <p>
                        Elevate your tech prowess with an advanced degree. Explore the frontier of
                        computer science and be a catalyst for innovation.
                        Engage in projects that bridge classroom theories with real-world solutions. Your laboratory
                        discoveries today could be tomorrow's technological norms.
                      </p>
                      <Link to="/msc" className="wm-classic-button wm-bgcolor-two">Learn More</Link>
                    </li>
                    <li className="col-md-4" style={{ borderRadius: '10px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', height: '300px', padding: '20px' }}>
                      <span>PG.D(COMPUTER SCIENCE)</span>
                      <p>
                        Embark on a Postgraduate Diploma journey, fine-tuning your expertise for the evolving digital era.
                        Equip yourself with the tools and knowledge sought after by leading tech companies.
                        Shorter than a master&apos;s, but equally impactful. Transform your tech aspirations into accomplishments with our PGD in Computer Science
                      </p>
                      <Link to="/pgd" className="wm-classic-button wm-bgcolor-two">Learn More</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wm-main-section wm-parallexthree-full">
        <span className="wm-light-transparent wm-more-darke-black"></span>
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <aside className="col-md-3">
                      <div className="widget widget_our-professors">
                        <figure>
                          <a href="#">
                            <img src="images/Osondu-Oguike.jpg" alt="Professor Osondu E. Oguike" />
                          </a>
                          <figcaption>
                            <a href="#" style={{ color: 'rgb(230, 230, 230)' }}>Professor Osondu E. Oguike</a>
                            <span style={{ color: 'gainsboro' }}>HOD CIT DEPARTMENT</span>
                          </figcaption>
                        </figure>
                      </div>
                    </aside>
                    <div className="col-md-9">
                      <div className="wm-professor-info">
                        <h4 style={{ color: 'aliceblue' }}>Welcome message</h4>
                      </div>
                      <div className="wm-rich-aditor">
                        <p style={{ color: 'aliceblue', font: '1.1em sans-serif' }}>
                          We offer individuals the opportunity to Enroll for PG.D, M.Sc and PH.D. in computer science.
                          These programmes aim to prepare the students for technical roles
                          in the IT industry by introducing the key technologies and skills needed for employment.
                          In line with the mission of the University which seeks to promote academic, physical and moral aptitudes, the programs give the student the unique opportunity to gain
                          an in-depth knowledge of topic of interest. They demonstrate dedication
                          to a particular field of study, developing expert knowledge in that area
                          As the digital frontier continues to expand, our e-library endeavors to keep pace, ensuring that you have access to the latest advancements, methodologies, and insights from the world of computer science. Whether you&apos;re exploring artificial intelligence,
                          delving into data science, or investigating information security, our e-library is here to support your journey. We encourage you to explore, download, and immerse yourself in the rich content available. Your pursuit of
                          knowledge drives us to continuously update and expand our offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="wm-parallex wm-parallex-three">
                <h2>Enroll for an enriched learning experience</h2>
                <span>PGD, MSC, PHD in computer science</span>
                <Link className="wm-transparent-button" to="/about">
                  <span>Enroll Today</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wm-main-section">
        <div className="container-fluid">
          <div className="row">
            <div className="wm-apply-info wm-apply-info-color">
              <ul>
                <li className="col-md-4">
                  <div className="wm-right-section">
                    <h2>Apply Today</h2>
                    <p>A simplified process. Get started</p>
                    <Link to="/about" className="applyinfo-btn">Learn more</Link>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="wm-right-section">
                    <h2>Info Admission Inquiries</h2>
                    <p>Weekday AM 10:00 ~ PM 05:00</p>
                    <h3>+234-8107396043</h3>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="wm-right-section">
                    <h2>Talk Open Chat</h2>
                    <p>We&apos;re here for you in anything you need</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
