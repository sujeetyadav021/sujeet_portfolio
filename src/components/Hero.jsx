import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to M Website</h1>
        <h2>Hi, I'm Sujeet Yadav</h2>
        <p> Driven by curiosity and a passion for technology, I'm a budding software engineer excited to learn, grow, and make a meaningful
        impact.</p>
        {/* <a href="./about" className="btn">Learn More</a> */}
        <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/yadav-sujeet/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/sujeetyadav021/"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
      </div>
    </section>
  );
};

export default Hero;