import React from 'react';
import Connect from './Connect';
import './header.css';
// import PROFILE from '../../assets/profile2-bg-removed.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, this is</h5>
        <h1>Zi</h1>
        <h5 id='more' className='text-light'>(Scroll down for more)</h5>
        {/* <h5 className='text-light'>(Ziheng Huang)</h5> */}
        <Connect />
        <Socials />
        {/* <div className="profile">
          <img src={PROFILE} alt="" />
        </div> */}

      </div>
    </header>
  )
};

export default Header;