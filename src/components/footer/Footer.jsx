import "./Footer.css";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
   <footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2>The Makers</h2>
      <p>The Makers, Lagos, Nigeria</p>
      <p className="footer-copy">
        © 2026 The Makers. All rights reserved.
      </p>
    </div>

    <div className="footer-right">
      <div className="footer-contact">
        <FaEnvelope />
        <a href="mailto:info@themakers.com">
          info@themakers.com
        </a>
      </div>

      <h3>Keep tabs with us</h3>

      <div className="footer-socials">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </div>

  </div>
</footer>
  );
}