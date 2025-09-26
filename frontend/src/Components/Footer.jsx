import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Phone Numbers */}
        <div className="footer-contacts">
          <p>
            <FaPhoneAlt /> <a href="tel:+2547 1444 4937">+2547 1444 4937</a>
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+2547 6228 8553">+2547 6228 8553</a>
          </p>
        </div>

        {/* Email */}
        <div className="footer-email">
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:bmdr2025@gmail.com">bmdr2025@gmail.com</a>
          </p>
        </div>

        {/* Location */}
        <div className="footer-location">
          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps/place/Mombasa"
              target="_blank"
              rel="noreferrer"
            >
              Mombasa, Kenya
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <a href="https://facebook.com/Dantech cyber and computing training" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://tiktok.com/dantechcyber" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
          <a href="https://instagram.com/YourProfile" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Bruce CarHire . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;