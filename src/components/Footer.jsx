import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <div className="footer-logo">
            <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', marginBottom: '10px' }}></div>
          </div>
          <p>Computer Science Department e-Library</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/categories">e-Library</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Programmes</h4>
          <ul>
            <li><a href="/pgd">PGD</a></li>
            <li><a href="/msc">MSC</a></li>
            <li><a href="/phd">PhD</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: +234-8107396043</p>
          <p>Hours: Weekday AM 10:00 ~ PM 05:00</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 VUNA e-Library | Computer Science Department, Veritas University Abuja</p>
      </div>
    </footer>
  )
}
