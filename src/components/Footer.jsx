import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 Sujeet Yadav. All Rights Reserve</p>
      </div>
      <div className="footer-right">
        <span>
          <a
            aria-label="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/sujeetyadav021/"
          >
            <IconBrandGithub width={32} height={32} className="gfooter-logo"/>
          </a>
          <a
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yadav-sujeet/"
          >
            <IconBrandLinkedin width={32} height={32} className="lfooter-logo"/>
          </a>

        </span>
      </div>
    </footer>
  );
};


export default Footer;