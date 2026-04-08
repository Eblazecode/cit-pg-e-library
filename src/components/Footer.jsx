import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer id="wm-footer" className="wm-footer-one">
      <div className="wm-footer-newslatter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <i className="wmicon-interface2"></i>
                <p style={{ color: 'aliceblue' }}>CIT PG e-library</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wm-footer-copyright pt-10 pb-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="copyright text-md-left text-center pt-15">
                <p><a href="#">VUNA e-library</a></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copyright text-md-right text-center pt-15">
                <p><a href="#">Computer Sci Dept. Veritas University Abuja. &copy;2024</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
