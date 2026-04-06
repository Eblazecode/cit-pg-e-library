import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <div className="logo-section">
              <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', margin: '0 auto' }}></div>
            </div>
            <h1>Faculty of Natural and Applied Science</h1>
            <h2>Department of Computer Science</h2>
            <h3>School of Post-Graduate Studies</h3>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)', borderRadius: '12px', marginBottom: '30px' }}></div>
              <div className="image-caption">
                <h4>Professor Osondu E. Oguike</h4>
                <p>HOD CIT DEPARTMENT</p>
              </div>
            </div>
            <div className="welcome-content">
              <h2>Welcome</h2>
              <p>
                We offer individuals the opportunity to enroll for PG.D, M.Sc and PH.D. in computer science.
                These programmes aim to prepare the students for technical roles in the IT industry by introducing
                the key technologies and skills needed for employment.
              </p>
              <p>
                In line with the mission of the University which seeks to promote academic, physical and moral aptitudes,
                the programs give the student the unique opportunity to gain an in-depth knowledge of topic of interest.
              </p>
              <p>
                As the digital frontier continues to expand, our e-library endeavors to keep pace, ensuring that you have
                access to the latest advancements, methodologies, and insights from the world of computer science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="programmes-section">
        <div className="container">
          <h2 className="section-title">Our Programmes</h2>
          <div className="programmes-grid">
            <div className="programme-card">
              <h3>PH.D (Computer Science)</h3>
              <p>
                Unleash Your Potential with PhD in Computer Science. Submerge yourself in the vast ocean of algorithms,
                AI, and advanced computing. From quantum computing to neural networks, pioneer revolutionary innovations.
              </p>
              <Link to="/phd" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="programme-card">
              <h3>M.SC. (COMPUTER SCIENCE)</h3>
              <p>
                Elevate your tech prowess with an advanced degree. Explore the frontier of computer science and be a
                catalyst for innovation. Engage in projects that bridge classroom theories with real-world solutions.
              </p>
              <Link to="/msc" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="programme-card">
              <h3>PG.D (COMPUTER SCIENCE)</h3>
              <p>
                Embark on a Postgraduate Diploma journey, fine-tuning your expertise for the evolving digital era.
                Equip yourself with the tools and knowledge sought after by leading tech companies.
              </p>
              <Link to="/pgd" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="apply-section">
        <div className="container">
          <div className="apply-grid">
            <div className="apply-card">
              <h3>Apply Today</h3>
              <p>A simplified process. Get started</p>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>

            <div className="apply-card">
              <h3>Admission Inquiries</h3>
              <p>Weekday AM 10:00 ~ PM 05:00</p>
              <h4>+234-8107396043</h4>
            </div>

            <div className="apply-card">
              <h3>Talk to Us</h3>
              <p>We're here for you in anything you need</p>
              <a href="#" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)', borderRadius: '12px' }}></div>
              <h3>Senate</h3>
            </div>
            <div className="gallery-item">
              <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)', borderRadius: '12px' }}></div>
              <h3>Academics</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
