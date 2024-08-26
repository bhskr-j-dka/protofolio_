import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>BHASKAR</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/bhaskar-jyoti-deka-1036a0201/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
          <a href="https://github.com/bhskr-j-dka" target="_blank" rel='noreferrer'><BsGithub/></a>
          <a href="https://leetcode.com/u/bhaskar_j_dka/" target="_blank" rel='noreferrer'><SiLeetcode/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Bhaskar Jyoti Deka. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
