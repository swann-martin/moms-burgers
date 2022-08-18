import React from 'react';
import './style.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a
          className="footer-social-link"
          href="google.com"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="google.com"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="google.com"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="google.com"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer-copyright">&copy;Swann Martin 2021 @home</p>
    </div>
  );
};

export default Footer;
