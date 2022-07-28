import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#skills"><GiSkills /></a>
      <a href="#portfolio"><GoProject /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
};

export default Nav;