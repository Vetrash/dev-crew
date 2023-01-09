import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer--border">
    <div className="
    conteiner__flex-row
    conteiner--x-center
    conteiner--work-width-page
    conteiner-footer--offset"
    >
      <div className="infoCompany__footer--offsset">
        <div className="logo--norm-size">
          <img src="./img/Logo.svg" alt="logo" />
        </div>
        <p className="infoCompany__copyright--footer-fontstyle">Copyright 2021. Antools</p>
        <p className="infoCompany__info--footer-fontstyle">
          Antool is a web collection of information on paid or free Design and Development tools
        </p>
      </div>
      <div className="conteiner__flex-row conteiner__flex-row--foote-gap">
        <div className="footerBlock">
          <p className="text__title--footer-style">Contact Us</p>
          <a className="text__subTitle--footer-style" href="tel: +621987463">
            +621987463
          </a>
          <p className="text__subTitle--footer-style">M Building, No.10 A</p>
          <a className="text__subTitle--footer-style" href="mailto: antools@awesome.com">
            antools@awesome.com
          </a>
        </div>
        <div className="footerBlock">
          <p className="text__title--footer-style">Categories</p>
          <a href="#" className="text__subTitle--footer-style">
            Design
          </a>
          <a href="#" className="text__subTitle--footer-style">
            Development
          </a>
        </div>
        <div className="footerBlock">
          <p className="text__title--footer-style">Company Info</p>
          <a href="#" className="text__subTitle--footer-style">
            About Us
          </a>
          <a href="#" className="text__subTitle--footer-style">
            Our Partners
          </a>
          <a href="#" className="text__subTitle--footer-style">
            Blog
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
