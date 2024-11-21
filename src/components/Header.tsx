"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>

      {/* Navigation for Desktop */}
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="/Aboutme">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <ul className="sidebar-list">
          <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/Aboutme" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
