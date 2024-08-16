import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FooterSupport from './footerSupport.js';
import FooterAbout from './footerAbout.js';
import FooterPayShip from './footerPay_Ship.js';
import FooterMedia from './footerMedia.js';
import FooterDownload from './footerDownload.js'

const FooterWebSupport = () => {
    return (
      <div className="grid__row">
        <FooterSupport />
        <FooterAbout />
        <FooterPayShip />
        <FooterMedia />
        <FooterDownload />
      </div>
    );
  }

export default FooterWebSupport;
