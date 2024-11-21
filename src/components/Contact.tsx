"use client";

import React from "react";
import "../styles/contact.css"; // Custom CSS for Contact Page
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="form-section">
          <h2>Contact Me</h2>
          <p>I&apos;d love to hear from you! Fill out the form below or reach me through my socials.</p>

          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-section">
          <h2>Connect with Me</h2>
          <div className="social-links">
            <Link href="https://www.facebook.com/profile.php?id=100005773187338" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/dayswith_mi/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/maheen-imtiaz-635a792b5/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/Maheen53" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
            <Link href="https://discord.com/channels/790484092772548613/1210170964550352956" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </Link>
          </div>
          <div className="contact-info">
            <p>Phone: +123 456 7890</p>
            <p>Email: maheenuzair@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
