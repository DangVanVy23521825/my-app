import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterMedia = () => {
    return (
        
            <div className="footer__column">
                <h3 className="footer-heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://www.youtube.com/" className="footer-link">
                            <i className="footer-item-icon fa-brands fa-facebook"></i>
                            Facebook
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.youtube.com/" className="footer-link">
                            <i className="footer-item-icon fa-brands fa-instagram"></i>
                            Instagram
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.youtube.com/" className="footer-link">
                            <i className="footer-item-icon fa-brands fa-linkedin"></i>
                            Linkedin
                        </a>
                    </li> 
                </ul>
            </div>

    );
  }


export default FooterMedia;