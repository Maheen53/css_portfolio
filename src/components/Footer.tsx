"use client";

import React from "react";
import "../styles/footer.css"; // Custom CSS for Footer
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            <li><Link href="#services">Services</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>Email: maheenuzair@gmai.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Karachi, Pakistan</p>
        </div>

        {/* FAQs Section */}
        <div className="footer-section faqs">
          <h3>FAQs</h3>
          <ul>
            <li><Link href="#faq1">What services do you offer?</Link></li>
            <li><Link href="#faq2">How can I hire you?</Link></li>
            <li><Link href="#faq3">What is your design process?</Link></li>
            <li><Link href="#faq4">Can you work remotely?</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Maheen Imtiaz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
