import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abhishek-pandey-094758220/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/abhishek_000005/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://github.com/Abhishek542003" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials
