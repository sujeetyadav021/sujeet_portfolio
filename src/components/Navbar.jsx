import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IconMenu2, IconX } from '@tabler/icons-react';
import '../styles/Navbar.scss';

const pageUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const handleLinkClick = () => {
    setHamburger(false); // Close the hamburger menu
  };

  const navlinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h3 onClick={pageUp}>Sujeet Yadav</h3>
        </div>
        <ul className="nav-links">
          {navlinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hamburger-icon" onClick={hamburgerMenu}>
          {hamburger ? <IconX width={30} height={30} /> : <IconMenu2 width={30} height={30} />}
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                onClick={handleLinkClick} // Close the menu and navigate
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;