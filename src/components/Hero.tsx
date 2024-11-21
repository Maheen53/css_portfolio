"use client"

import React from 'react';
import Image from 'next/image';
import '../styles/hero.css'; // Import the custom CSS for the Hero Section

const Hero: React.FC = () => {
  return (
    <section className="hero ">
      <div className="hero-container ">

        {/* Left Side: Image */}
        <div className="hero-image">
          <Image src="/mum.jpg" alt="Maheen Imtiaz" width={400} height={400} className="rounded-full" />
        </div>

        {/* Right Side: Text with Animation */}
        <div className="hero-text">
          <h1 className="animate-text">Hi, I&apos;m Maheen Imtiaz</h1>
          <h2 className="subtitle animate-text">UI/UX Designer & Web Developer</h2>
          <p className="animate-text">Crafting beautiful, functional websites and applications that provide great user experiences.</p>
          <div className="buttons">
            <a href="#projects" className="cta-button animate-text">View Projects</a>
            <a href="#contact" className="cta-button hire-me animate-text">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
