import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/bhaskar-jyoti-deka-1036a0201/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/bhskr-j-dka" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://leetcode.com/u/bhaskar_j_dka/" target="_blank" rel='noreferrer'><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials
