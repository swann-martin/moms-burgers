import React from 'react';
import './style.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-social">
        <a
          className="footer-social-link"
          href="https://github.com/swann-martin/moms-burgers/tree/develop"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="https://github.com/swann-martin/moms-burgers/tree/develop"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="https://github.com/swann-martin/moms-burgers/tree/develop"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a
          className="footer-social-link"
          href="https://github.com/swann-martin/moms-burgers/tree/develop"
          target="__blank"
          rel="noreferer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer-copyright">&copy;Swann Martin {year} @home</p>
    </div>
  );
};

export default Footer;
