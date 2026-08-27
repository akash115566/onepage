import React, { useState } from "react";
import "../Style/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <img src="/Home/logo3.jfif" alt="PMC Logo" />
            <img src="/Home/logo1.jfif" alt="PMC Logo"  style={{padding:"5px"}}/>
          </a>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;