
import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FooterWebSupport from './footerWebSupport.js'
import FooterInformation from './footerInformation.js'

const Footer = () => {
  
    return (
      <footer className="footer">
        <div className="grid footer-content">
            <FooterWebSupport />
            <FooterInformation />
        </div>
    </footer>
    );
  }

export default Footer;
