import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Abhishek_Pandey
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/abhishek_000005/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/abhishek-pandey-094758220/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhishek Pandey. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer
