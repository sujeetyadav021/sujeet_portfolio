import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
               © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yadav-sujeet/"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sujeetyadav021/"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Footer;