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
          officialthemakersent@gmail.com
        </a>
      </div>

      <h3>Keep tabs with us</h3>

      <div className="footer-socials">
        <a href="https://www.instagram.com/the.makers_entertainment?igsh=ZmhqbTFoaG5kZGt3"><FaInstagram /></a>
        <a href="https://x.com/themakers_ent?s=21"><FaXTwitter /></a>
        {/* <a href="#"><FaYoutube /></a> */}
       <a href="https://wa.me/2347041182791"><FaWhatsapp /></a> 
        <a href="https://www.tiktok.com/@themakers_entertainment?_r=1&_t=ZS-978PdvdCFZh"><FaTiktok /></a>
        {/* <a href="#"><FaLinkedin /></a> */}
      </div>
    </div>

  </div>
</footer>
  );
}