import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://github.com/kevinhuang4"><FiGithub /></a>
        <a href="https://linkedin.com/in/ziheng-huang-57771521b"><FiLinkedin /></a>
        <a href="https://instagram.com/ziheng.huang4/"><FiInstagram /></a>
    </div>
  )
}

export default Socials